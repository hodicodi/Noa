import express, {
  type Express,
  type Request,
  type Response,
  type NextFunction,
  Router,
} from "express";
import dotenv from "dotenv";
import cors from "cors";
import {
  authConfig,
  handleAuthentication,
  handleCallback,
  handleLogout,
  protectRoute,
} from "oauth-entra-id/express";
import { OAuthError } from "oauth-entra-id";

dotenv.config();

const {
  PORT,
  AZURE_CLIENT_ID = "",
  AZURE_TENANT_ID = "",
  AZURE_CLIENT_SCOPE = "",
  AZURE_CLIENT_SECRET = "",
  ENCRYPTION_KEY = "",
  FRONTEND_URL = "",
  SERVER_URL = "",
} = process.env;

const app: Express = express();
const port = Number(PORT) || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ⚠️ origin must be exact, and credentials MUST be true.
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);
console.log("fronted url "+ FRONTEND_URL);

// Microsoft Entra ID configuration (singleton OAuthProvider attached to req)
app.use(
  authConfig({
    azure: {
      clientId: AZURE_CLIENT_ID,
      tenantId: AZURE_TENANT_ID,
      scopes: [AZURE_CLIENT_SCOPE],
      clientSecret: AZURE_CLIENT_SECRET,
    },
    frontendUrl:  "http://localhost:5173",
    serverCallbackUrl: `${"http://localhost:3000"}/auth/callback`,
    encryptionKey: ENCRYPTION_KEY,
  }),
);

// ----- Auth routes (public) -----
const authRouter: Router = express.Router();

authRouter.post("/authenticate", handleAuthentication()); // → { url }
authRouter.post("/callback", handleCallback()); // sets cookies + 302
authRouter.post("/logout", handleLogout()); // → { url } + clears cookies
app.use("/auth", authRouter);

// ----- Protected routes -----
const protectedRouter: Router = express.Router();
protectedRouter.use(protectRoute());

protectedRouter.get("/user-info", (req, res) => {
  res.json({ user: req.userInfo });
});

protectedRouter.get("/secure-data", (req, res) => {
  res.json([
    {
      id: "1",
      name: `Hello ${req.userInfo?.name}`,
      updatedAt: new Date().toISOString(),
    },
  ]);
});
app.use("/protected", protectedRouter);

// ----- Error handler (must be LAST) -----
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof OAuthError) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  console.error("[server] unhandled:", err);
  return res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => console.log(`server: http://localhost:${port}`));


