// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Modify the config
    config.module.rules.push({
      test: /\.mp4$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash].[ext]',
          publicPath: '_next/static/media/',
          outputPath: 'static/media/',
          context: '',
        },
      },
    });

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
