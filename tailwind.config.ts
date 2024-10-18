import type { Config } from 'tailwindcss'

const config: Config = {
  // darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        ring: 'hsl(var(--ring))',
      },
      fontFamily: {
        sans: ['var(--font-roboto-sans)'],
        serif: ['var(--font-roboto-serif)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
