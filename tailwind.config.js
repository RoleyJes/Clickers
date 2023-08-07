/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#1B1B1B",
          200: "#3B3E42",
        },
        secondary: {
          blue: "#156FD9",
          lightblue: "#72B1FC",
          linkblue: "#6994c8",
        },
        bground: {
          light: "#fafafa",
          verylightblue: "#D0E3F9",
          verydarkblue: "#122B48",
          input: "#f5f5f5",
        },
      },

      fontFamily: {
        inter: ["Inter"],
        roboto: ["Roboto"],
        lato: ["Lato"],
        poppins: ["Poppins"],
      },

      boxShadow: {
        card: "0px 4px 75px 0px rgba(186, 186, 186, 0.25)",
      },
    },
  },
  plugins: [],
};
