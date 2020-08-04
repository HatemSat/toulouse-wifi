module.exports = {
    productionSourceMap: false,
    pwa: {
        favicon32: "img/icons/favicon-32x32.png",
        favicon16: "img/icons/favicon-16x16.png",
        appleTouchIcon: "img/icons/apple-touch-icon.png",
        maskIcon: "img/icons/safari-pinned-tab.svg",
        msTileImage: "img/icons/msapplication-icon-144x144.png",
        msTileImage: "img/icons/mstile-144x144.png",

        manifestOptions: {
            name: "Wifi Toulouse",
            short_name: "Wifi Toul",
        },
        assetsVersion: '0.1.1'
    },
    devServer: {
        disableHostCheck: true,   // That solved it
    
     }  
    // devServer: {
    // host: "0.0.0.0",
    // https: true,

    // hot: false,
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    //     'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    //   },
    // }
};
