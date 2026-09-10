/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SLACK_INVITE_LINK: string
  readonly VITE_POSTHOG_KEY?: string
  readonly VITE_POSTHOG_HOST?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
