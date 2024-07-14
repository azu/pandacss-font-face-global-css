/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/panda-css-nextjs-example",
    reactStrictMode: true,
    experimental: {
        typedRoutes: true
    }
};

export default nextConfig;
