type GenSlug = (text: string, len?: number, rand?: boolean) => string;
declare const genSlug: GenSlug;

export { type GenSlug, genSlug as default, genSlug };
