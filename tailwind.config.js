/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      m: '768px',
      l: '1440px',
    },
    extend: {
      colors: {
        active: '#dcfce7',
        notactive: '#fee2e2',
        pending: '#ffedd5',
        suspended: '#dbeafe',
      },
    },
  },
  plugins: [],
};
