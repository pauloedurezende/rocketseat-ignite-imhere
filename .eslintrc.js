module.exports = {
  root: true,
  plugins: [],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb', 'airbnb-typescript', 'plugin:prettier/recommended'],
      rules: {
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/return-await': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-no-bind': 'off',
        'react/no-unstable-nested-components': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/style-prop-object': 'off',
      },
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['airbnb', 'plugin:prettier/recommended'],
      rules: {},
    },
  ],
};
