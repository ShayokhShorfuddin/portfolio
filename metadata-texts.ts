interface PageMetadata {
  title: string;
  description: string;
}

export const pagesMetadata = {
  "/": {
    title: "Journey to QEC",
    description:
      "A frontend developer's ongoing journey to become a quantum error correction (QEC) engineer.",
  },
} as const satisfies Record<string, PageMetadata>;

export type PageMetadataKey = keyof typeof pagesMetadata;

export function getPageMetadata<K extends PageMetadataKey>(key: K) {
  return pagesMetadata[key];
}
