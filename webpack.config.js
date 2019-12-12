module.exports = {
  module : {
    rules: [
      {
        test: /\.css$/,
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            syntax: 'postcss-scss',
            plugins: () => [
              require('postcss-import'),
              require('tailwindcss')('./tailwind.config.js'),
              require('autoprefixer'),
            ]
        }
      }
    ]
  }
};