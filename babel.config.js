module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: '>0.2%, not dead, not op_mini all',
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ];
  const plugins = ['@babel/plugin-transform-runtime'];

  return {
    presets,
    plugins,
  };
};
