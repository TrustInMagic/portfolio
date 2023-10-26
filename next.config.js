// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
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

    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'static/pdfs/[name].[hash].[ext]',
          publicPath: '_next/static/pdfs/',
          outputPath: 'static/pdfs/',
          context: '',
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
