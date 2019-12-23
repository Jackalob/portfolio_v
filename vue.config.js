// const webpack = require('webpack');

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/scss/_main.scss";'
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/v-portfolio/" : "/",
  //關閉eslint
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  // configureWebpack: {    
  //   plugins: [      
  //       new webpack.ProvidePlugin({        
  //           $: 'jquery',        
  //           jQuery: 'jquery',        
  //           'windows.jQuery': 'jquery'      
  //       })    
  //   ]  
  // }
};
