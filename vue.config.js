module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
            @import "@/styles/global.scss";
          `
            }
        }
    },
    devServer: {
        watchOptions: {
            poll: true
        }
    },
}