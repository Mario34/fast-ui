module.exports = {
  "presets": [
    "@babel/preset-typescript",
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  "plugins": [
    "@ant-design-vue/babel-plugin-jsx"
  ]
}