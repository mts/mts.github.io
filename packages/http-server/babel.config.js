module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-catch-binding',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-classes',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-spread',
    'import-graphql',
    'syntax-async-functions',
    [
      'css-modules-transform',
      {
        generateScopedName: '[name]_[local]',
        preprocessCss: '../library/src/server/processSass.js',
        extensions: ['.css', '.scss'],
      },
    ],
    [
      'transform-assets',
      {
        extensions: ['jpg'],
        name: '[name].[ext]',
      },
    ],
  ],
}
