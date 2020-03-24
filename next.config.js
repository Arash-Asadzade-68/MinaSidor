const withSass = require("@zeit/next-sass");
const path = require("path");
const withImages = require("next-images");
module.exports = withSass(
  withImages({
    cssModules: true, 
    compress: false,
    env:{
      DEV_MODE:"my_var"
    },
    serverRuntimeConfig: {
      PORT: 3000,
      COOKIE_SECRET: "secret",
      API_GATEWAY_URL: "https://app-gpanel2.herokuapp.com",
      APP_GATEWAY_URL: "http://localhost:3000"
    },
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]"
    },
    webpack(config, options) {
 
      config.resolve.alias["components"] = path.join(__dirname, "components");
      config.resolve.alias["public"] = path.join(__dirname, "public");
      config.resolve.alias["utils"] = path.join(__dirname, "utils");
      config.resolve.alias["store"] = path.join(__dirname, "store");
        return config;
    },
    
      
    }
));