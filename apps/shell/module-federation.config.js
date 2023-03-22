// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 * */
const moduleFederationConfig = {
  name: 'shell',
  remotes: [
    'cart-app'
  ],
};

module.exports = moduleFederationConfig;
