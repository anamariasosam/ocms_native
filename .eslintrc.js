module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "import"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "import/no-unresolved": 0,
    "import/extensions": ["error", "never", { "packages": "always" }]
  },

};
