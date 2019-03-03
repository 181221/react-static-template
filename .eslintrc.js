module.exports = {
  extends: [
    "airbnb",
    "react-app",
    "react-tools",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: ["react", "prettier"],
  rules: {
    "linebreak-style": 0,
    "react/prefer-stateless-function": [0],
    "eslint linebreak-style": [0, "error", "windows"],
    semi: ["error", "always"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    quotes: [0, "single"],
    "import/no-unresolved": "warn",
    "react/display-name": [0],
    "react/jsx-one-expression-per-line": [0],
    "react/forbid-prop-types": 0,
    "react/prop-types": [0],
    "no-console": "warn",
    "react/destructuring-assignment": [0],
    "import/prefer-default-export": "off",
    "linebreak-style": 0,
    "jsx-a11y/anchor-is-valid": 0
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parser: "babel-eslint"
};
