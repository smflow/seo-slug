# Generate SEO friendly slug with @smflow/seo-slug

seo-slug is a utility package to generate human readable and SEO friendly slug for blog post, eCommerce site and more.

`This is a blog title -> this-is-a-blog-title12345`

## Installation
To use is you need to install it, run this command in your terminal to install it:

```bash
npm install @smflow/seo-slug
```

## Using

This is a simple package which exports a function called `genSlug` to generate the slug. So import the function

```js
import { genSlug } from "@smflow/seo-slug"
```

generate the slug by calling `genSlug` function

```js
const slug = genSlug("This is a blog title to generate slug");
console.log(slug); // this-is-a-blog-title-to-generate-slug1234
```

## Options
- `text` The text for converting slug. Ex `genSlug("Text to convert");`
- `len` This len for generated slug length. Ex `genSlug("Text to convert", 7); -> text-to`
