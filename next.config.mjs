/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
    {
      protocol: "https",
      hostname: "lwybrcwglejpqtfqdvyd.supabase.co",
      pathname: "/storage/v1/object/public/cabins-images/**",
    },
     {
        protocol: "https",
        hostname: "mpwacdlynnypykpzgjtg.supabase.co",
        pathname: "/storage/v1/object/public/cabins-images/**",
      },
       {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
  ],
},
    // output: "export"
};

export default nextConfig;
