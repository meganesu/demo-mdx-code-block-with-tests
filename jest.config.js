module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)`],
  // transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-script|gatsby-link|@mdx-js/mdx|unified|bail|is-plain-obj|trough|vfile|vfile-message|unist-util-stringify-position|remark-mdx|micromark-extension-mdxjs|micromark-util-combine-extensions|micromark-util-chunked|micromark-extension-mdx-expression|micromark-factory-mdx-expression|micromark-util-character|micromark-factory-space|unist-util-position-from-estree|micromark-util-events-to-acorn|estree.+|vfile-location|micromark-extension-mdx-jsx|estree-util-is-identifier-name|micromark-extension-mdx-md|micromark-extension-mdxjs-esm|micromark-core-commonmark|micromark-util-classify-character|micromark-util-resolve-all|decode-named-character-reference|micromark-util-subtokenize|micromark-factory-destination|micromark-factory-label|micromark-factory-title|micromark-factory-whitespace|micromark-util-normalize-identifier|micromark-util-html-tag-name|mdast-util-mdx|mdast-util-mdx-expression|mdast-util-mdx-jsx|ccount|parse-entities|character-entities-legacy|character-reference-invalid|is-decimal|is-hexadecimal|is-alphanumerical|is-alphabetical|stringify-entities|character-entities-html4|mdast-util-to-markdown|mdast-util-mdxjs-esm|remark-parse|mdast-util-from-markdown|mdast-util-to-string|micromark|micromark-util-decode-numeric-character-reference|micromark.+|remark-rehype|mdast.+|unist.+|trim-lines|estree-util-build-jsx)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testEnvironment: `jsdom`,
  testEnvironmentOptions: {
    url: `http://localhost`,
  },
  setupFiles: [`<rootDir>/loadershim.js`],
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
}
