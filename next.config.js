/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

// Use top-level await with dynamic import
module.exports = async () => {
  const { default: nextra } = await import('nextra');
  
  const withNextra = nextra({
    // These are the required properties for Nextra 3.0.0
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    // Optional MDX options
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    }
  });
  
  return withNextra(nextConfig);
};