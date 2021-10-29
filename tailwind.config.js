module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        125: "31.25rem",
        160: "40rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
