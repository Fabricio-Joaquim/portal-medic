module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { esmodules: true } }],
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript',
    ],
    plugins: [
      [
        "module-resolver",
        {
          "root": ["./src"],
          "alias": {
            "@components": "./src/components",
            "@pages": "./pages",
            "@constant": "./constant",
            "@store": "./src/store",
            "@services": "./src/service",
            "@helpers": "./src/helpers",
            "@hooks": "./src/hooks",
          }
        }
      ]
    ]
  };
