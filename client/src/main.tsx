import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./auth/AuthContext.tsx";
import Shell from "./shell.tsx";
import { DialogProvider } from "./components/custom-dialog/CustomDialogContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <DialogProvider>
        <QueryClientProvider client={queryClient}>
          <Shell />
        </QueryClientProvider>
      </DialogProvider>
    </AuthProvider>
  </StrictMode>,
);
