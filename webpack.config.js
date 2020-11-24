var Encore = require('@symfony/webpack-encore');

Encore

  .addEntry('app', './assets/app/app.ts')

  .addEntry('index', './assets/app/index/index.ts')

  // Admin

  .addEntry('admin', './assets/admin/admin.ts')

  .addEntry('login', './assets/admin/login/login.ts')

  .addEntry('dashboard', './assets/admin/dashboard/dashboard.ts')

  // Admin components

  .addEntry('header_admin', './assets/admin/components/header.ts')

  .splitEntryChunks()

  .enableSingleRuntimeChunk()

  .enableTypeScriptLoader(function (typeScriptConfigOptions) {
    typeScriptConfigOptions.transpileOnly = true;
    typeScriptConfigOptions.configFile = 'tsconfig.json';
  })

  .enableForkedTypeScriptTypesChecking(function (forkedTypeScriptConfigOptions) {
    forkedTypeScriptConfigOptions.tslint = true;
  })

  .setOutputPath('public/assets/')

  .setPublicPath('/assets')

  .enableSassLoader()

  .cleanupOutputBeforeBuild()

  .autoProvidejQuery()

  .enableSourceMaps(!Encore.isProduction())

  .enableBuildNotifications()

  .enableVersioning(Encore.isProduction())

  .copyFiles({
    from: './assets/shared/img',
    to: 'images/[path][name].' + (Encore.isProduction() ? '[hash:8].' : '') + '[ext]'
  })
;

if (Encore.isProduction()) {

  Encore.configureTerserPlugin(function (options) {
    options.cache = true;
    options.parallel = true;
    options.terserOptions = {
      compress: {
        drop_console: true,
      },
      output: {
        comments: false
      }
    }
  });
}

const webpackConfig = Encore.getWebpackConfig();

webpackConfig.watchOptions = {ignored: [/assets\/libs/, /node_modules/, /src/, /vendor/, /public/]};

global.$ = global.jQuery = require('jquery');

module.exports = webpackConfig;