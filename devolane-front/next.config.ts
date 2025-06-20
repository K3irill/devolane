import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
