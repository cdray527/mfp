const { merge } = require('webpack-merge');
const ModuleFederationPlugin  = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        historyApiFallback: true,
        watchOptions: {
            poll: 1000,
        }
    },
    output: {
        publicPath: 'http://localhost:8080/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
                auth: 'auth@http://localhost:8082/remoteEntry.js',
            },
            shared: packageJson.dependencies,
        }),
    ]
};

module.exports = merge(commonConfig, devConfig);
