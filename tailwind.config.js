export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        loading: {
          '0%': { width: '0%', marginLeft: '0%' },
          '50%': { width: '50%', marginLeft: '25%' },
          '100%': { width: '0%', marginLeft: '100%' },
        },
      },
      animation: {
        loading: 'loading 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
