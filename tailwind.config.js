module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        120: "30 rem",
        128: "32 rem",
      },
      backgroundImage: {
        "blob-haikei": "url('/src/assets/homepage/blob-haikei.svg')",
        "theguide-haikei": "url('/src/assets/homepage/theguide-haikei.svg')",
      },
    },
  },
  plugins: [],
};
