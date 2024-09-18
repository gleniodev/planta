import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img_bg_hero': "url('../assets/bg-hero.png')",
        'gradient-fade':
          "linear-gradient(to top, white 20%, transparent 100%);",
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'primary': {
          100:'#000000',
          200:'#1E1E1E',
          300: '#988C8C',
          400: '#D9D9D9',
          500: '#F7F7F7'
        },
        'secondary': '#00A99D',
        'terciary': '#4D7460',
        // 'outra-cor': {
        //   100: '#f0e68c',
        //   200: '#fad02e', // Você pode também especificar variantes
        //   // Adicione tantas variantes quanto necessário
        // },
    },
    },
  },
  plugins: [],
};
export default config;
