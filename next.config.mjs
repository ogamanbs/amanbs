/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add any other Next.js configuration here if needed
    webpack(config) {
    // Ensure that `.mjs` files are resolved properly
    config.resolve.extensions.push('.mjs');
    // Return the modified config
    return config;
    },images: {
        domains: ['encrypted-tbn0.gstatic.com', 'another-domain.com', 'plus.unsplash.com', 'images.unsplash.com', 'pointgorsel.com', 'www.ibm.com', 'lh3.googleusercontent.com'],
    },
};

export default nextConfig;
