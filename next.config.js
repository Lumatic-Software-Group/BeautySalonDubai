/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'],
        formats: ['image/webp', 'image/avif'],
    },
    compress: true,
    poweredByHeader: false,

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
}

module.exports = nextConfig