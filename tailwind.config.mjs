/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'rosita': {
          'terra': '#C15B3F',
          'orange': '#F4A460',
          'green': '#4A6741',
          'blue': '#345995',
          'cream': '#FFF5E9'
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Poppins', 'sans-serif']
      }
    }
  }
}