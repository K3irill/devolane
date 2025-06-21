import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	transpilePackages: ['mui-tel-input'],
	images: {
		domains: ['localhost'],
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: 'img-src * blob: data:;',
					},
				],
			},
		]
	},
}

export default nextConfig
