module.exports = {
  trailingComma: "none",
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
  semi: false,
  singleQuote: false,
  quoteProps: "as-needed",
  bracketSpacing: true,
  arrowParens: "always",
  jsxBracketSameLine: false,
  endOfLine: "auto",
  tailwindConfig: "./tailwind.config.js",
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json"
      }
    }
  ],
  plugins: ["prettier-plugin-tailwindcss"]
};
