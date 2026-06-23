import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { useAuth } from "./AuthContext.tsx";

export function LoginPage() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
      }}
    >
      <Card sx={{ maxWidth: 420, width: "100%", boxShadow: 3 }}>
        <CardContent sx={{ textAlign: "center", p: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
            Welcome
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 3 }}>
            Sign in with your Microsoft Entra ID account.
          </Typography>
          <Button
            variant="contained"
            size="large"
            fullWidth
            disabled={loading}
            onClick={async () => {
              setLoading(true);
              await login();
            }}
          >
            {loading ? "Redirecting..." : "Sign in with Microsoft"}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}