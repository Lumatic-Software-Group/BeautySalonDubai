/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'],
        formats: ['image/webp', 'image/avif'],
    },
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,

    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/media/[name].[hash][ext]',
            },
        })

        return config
    },

    experimental: {
        optimizePackageImports: ['lucide-react'],
    },

    // Optimize fonts and reduce FOUC
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
}

module.exports = nextConfig