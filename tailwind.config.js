/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        colors: {
            primary: '#34495E',
            hover: '#46627F'
        }
      }
    },
    plugins: []
  };