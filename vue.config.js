module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/scss/_main.scss";'
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/v-portfolio/" : "/"
};
