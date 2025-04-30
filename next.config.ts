import type { NextConfig } from "next";

const securityHeaders = [
      {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
      },
      {
            key: "X-Content-Type-Options",
            value: "nosniff",
      },
      {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
      },
      {
            key: "X-XSS-Protection",
            value: "1; mode=block",
      },
];

const nextConfig: NextConfig = {
      /* config options here */
      reactStrictMode: true,
      async headers() {
            return [
                  {
                        // Apply these headers to all routes in your application.
                        source: "/:path*",
                        headers: securityHeaders,
                  },
            ];
      },
      poweredByHeader: false,
};

export default nextConfig;
