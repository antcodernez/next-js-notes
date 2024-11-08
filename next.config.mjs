/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/sass')],
        additionalData: "@import 'main.sass'", //Ya no se usa preaprenData
    },
    images: {
        remotePatterns: [
            {
                hostname: "cdn.shopify.com",
                protocol: "https"
            }
        ]
    }
};

export default nextConfig;
