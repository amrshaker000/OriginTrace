/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_ICP_HOST: string
  readonly VITE_CANISTER_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
