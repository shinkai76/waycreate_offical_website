const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = {
    productionSourceMap: false,
    chainWebpack: config => {
        config.module.rules.delete("svg"); //重点:删除默认配置中处理svg
        config.module
          .rule('svg-sprite-loader')
          .test(/\.svg$/)
          .include
          .add(resolve('src/icons')) //处理svg目录
          .end()
          .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
              symbolId: 'icon-[name]'
          })
    },
    configureWebpack: config => {
        if ( process.env.NODE_ENV === 'production' ) {
            const plugins = []
            plugins.push(
              new PrerenderSPAPlugin({
                  staticDir: path.join(__dirname, 'dist'),
                  routes: ['/', '/home', '/solution', '/about', '/introduction/erp'],
                  renderer: new Renderer({
                      headless: true,
                      renderAfterDocumentEvent: 'render-event'
                  })
              })
            )
            config.plugins = [...config.plugins, ...plugins]
        }
    }
}
