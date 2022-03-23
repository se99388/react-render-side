module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/, //which selected file should pick and handle
        loader: 'babel-loader', //use babel during the bundling
        exclude: /node_modules/, //ignore this folder
        options: {
          presets: [
            'react', //conver jsx to js code
            'stage-0', // handle async code
            ['env', { targets: { browsers: ['last 2 versions'] } }] //support 2 last versions of all browsers
          ]
        }
      }
    ]
  }
};
