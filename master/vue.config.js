const path = require('path')
const { name, port } = require('./package')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const dev = process.env.NODE_ENV === 'development'
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  // publicPath: dev ? `//localhost:${port}` : "//localhost:5012/home",
  // outputDir: "dist",
  // assetsDir: "static", 
  // filenameHashing: true,
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  devServer: {
    // host: '0.0.0.0',
    // hot: true,
    // disableHostCheck: true,
    // port,
    // overlay: {
    //   warnings: false,
    //   errors: true
    // },
    proxy: {
      '/github': {
        target: 'https://github.com',
        changeOrigin: true,
        pathRewrite: {
          '^/github': '/'
        }
      }
    }
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        apiDomain: resolve('/src/common/common.js')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        apiDomain: 'apiDomain'
      })
    ]
  }
}
