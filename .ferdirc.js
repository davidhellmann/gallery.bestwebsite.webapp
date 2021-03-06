module.exports = {
  defaults: {
    vue: true,
    store: false,
  },
  files: {
    vue: {
      name: '',
      postfix: '',
      extension: 'vue',
      // path: 'templates/_components/',
    },
    store: {
      name: '',
      postfix: '',
      extension: 'js',
      // path: 'templates/_components/',
    },
  },
  paths: {
    templateBase: 'ferdi/',
    modulePath: './',
    pathOptions: {
      // the first character of each key works as an alias for the path so you could use `-a` as an alias for atomic
      components: 'components/',
      pages: 'pages/',
      store: 'store/',
    },
  },
};
