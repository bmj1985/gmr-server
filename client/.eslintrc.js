module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "prettier",
    "plugin:prettier/recommended",
    "@vue/standard"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": "error",
    semi: "error",
    quotes: "error"
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  plugins: ["prettier"]
}
