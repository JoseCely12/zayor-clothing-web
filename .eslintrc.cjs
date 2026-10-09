module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': { node: { extensions: ['.js', '.jsx'] } },
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/require-default-props': 'off',
  },
  ignorePatterns: ['dist', 'node_modules'],
};
