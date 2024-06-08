module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        wrapShadow: "0px 4px 35px 0px #00000014",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        orange: {
          400: "#C6553B",
          100: "#ECBC76",
        },
      },
      borderRadius: {
        "3xl": "40px",
      },
    },
  },
};
