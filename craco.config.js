//const {} = require('craco');

const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;


const deps = require("./package.json").dependencies;

const isPorduction = process.env.NODE_ENV === 'production';


module.exports = {
    webpack: {
        plugins: [
            // For AMAT
            new webpack.DefinePlugin({
                'process': {}

            // Module Fed plugin
            }), new ModuleFederationPlugin({
                name: "mof_cra5_template",
                filename: "remoteEntry.js",
                exposes: {},
                remotes: {},
                shared: {
                    ...deps,
                    react: {
                        singleton: true,
                        requiredVersion: deps.react
                    },
                    'react-dom': {
                        singleton: true,
                        requiredVersion: deps['react-dom']
                    },
                    'react-redux': {
                        singleton: true,
                        requiredVersion: deps['react-redux'],
                    }
                }
            })
        ],
    }, configure: {
        //resolve: {},
        output: {
            publicPath: 'auto',
        }
    }
};

