const developmentEnvironments = ['development', 'test'];

const developmentPlugins = [];

const productionPlugins = [
  require('babel-plugin-dev-expression'),
  require('@babel/plugin-transform-react-constant-elements'),
  require('@babel/plugin-transform-react-inline-elements'),
  require('babel-plugin-transform-react-remove-prop-types'),
];

module.exports = (api) => {
  const development = api.env(developmentEnvironments);

  return {
    presets: [
      require('@babel/preset-env'),
      require('@babel/preset-typescript'),
      [require('@babel/preset-react'), { development }],
    ],
    plugins: [
      // Stage 2
      [require('@babel/plugin-proposal-decorators'), { legacy: true }],

      ...(development ? developmentPlugins : productionPlugins),
    ],
  };
};
