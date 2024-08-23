const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        host: "0.0.0.0",
        port: 8082,
        historyApiFallback: true,
        watchOptions: {
            poll: 1000,
        }
    },
    output: {
        publicPath: 'http://localhost:8082/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthPage': './src/bootstrap'
            },
            shared: packageJson.dependencies,
        }),
    ]
};

module.exports = merge(commonConfig, devConfig);
