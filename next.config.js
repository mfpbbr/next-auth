require('dotenv').config();
const nextEnv = require('next-env');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const mongoose = require('mongoose');

/* ============ */
/* === NEXT === */
/* ============ */
const nextConfig = {
      webpack: (config) => {
                config.module.rules.push({
                  test: /\.svg$/,
                  issuer: { test: /\.(js|ts)x?$/,},
                  use: ['@svgr/webpack', {loader: 'url-loader', options:{limit: 8192}} ],
                });
                return config
            },
};

module.exports = withPlugins(
  [
    nextEnv,
    {
      staticPrefix: 'CUSTOM_STATIC_',
      publicPrefix: 'CUSTOM_PUBLIC_',
    },
  ],
  nextConfig
);

module.exports = withImages({
  webpack(config, options) {
    return config
  }
})

/* ============ */
/* ==== DB ==== */
/* ============ */
mongoose.connect('mongodb://localhost:27017/polis-view',
                   {
                     useNewUrlParser:true,
                     useUnifiedTopology: true,
                     useFindAndModify: false
                   }
                 );
mongoose.Promise = global.Promise;
module.exports = mongoose;

/* ============ */
/* ===  ENV === */
/* ============ */
module.exports = {
  env: {
    HOST: 'http://localhost:3000',
    API_HOST: 'http://localhost:3000/api/',
    API_CAMARA: 'https://dadosabertos.camara.leg.br/api',
    API_SENADO: 'https://legis.senado.leg.br/dadosabertos',
    MONGODB_URI: 'mongodb://localhost:27017/polis-view',
    JWT_SECRET:  'i&00231am$super*secretjwt',
  }
}
/* ============ */
/* ============ */
