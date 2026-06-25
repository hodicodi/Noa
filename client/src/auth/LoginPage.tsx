import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { useAuth } from "./AuthContext.tsx";
import Styles from "./loginPage.style.ts"

export function LoginPage() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  return (
    <Box
      sx={Styles.loginPage}
    >
      <Card sx={Styles.card}>
        <CardContent sx={Styles.cardContent}>
          <Typography variant="h4" sx={Styles.welcome}>
            Welcome
          </Typography>
          <Typography sx={Styles.sign}>
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