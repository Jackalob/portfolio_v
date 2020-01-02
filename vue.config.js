// const webpack = require('webpack');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/config.scss";`
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
