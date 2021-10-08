module.exports = {
  apps: [
    {
      name: 'server',
      script: 'dist/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      time: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
