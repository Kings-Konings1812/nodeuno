const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './public/js/app.js',
    output : {
        filename : 'bundle.js',
        path: path.join(__dirname, './public/dist')
    }, 
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use : {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
//modules exportamos los modulos en forma de objetos porque podemos tener diferentes lenguajes,
// test es palabra reservada --checar la pag de babel