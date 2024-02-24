/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly FONTAWESOME_KIT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
