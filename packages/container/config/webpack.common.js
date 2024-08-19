module.exports = {
    module: {
        rules: [
           // loader is to tell Webpack process some different files as we start to import them into our project 
           {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            '@babel/preset-env'
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime' 
                        ],
                    }
                }
           }
        ]
    }
};