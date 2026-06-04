declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    CLIENT_ID: string;
    TENANT_ID: string;
    CLIENT_SECRET: string;
    AZURE_CLIENT_SCOPE: string;
    AZURE_CLIENT_SECRET: string;
    FRONTEND_URL: string;
    SERVER_URL: string;
    SECRET: string;
  }
}
