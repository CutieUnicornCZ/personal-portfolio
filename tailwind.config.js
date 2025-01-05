/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        medium: "840px",
        small: "720px",
      },

      colors: {
        primary: "#9aa6b2",
        "primary-content": "#21262c",
        "primary-dark": "#7d8c9c",
        "primary-light": "#b7bfc8",

        secondary: "#9ab29a",
        "secondary-content": "#212c21",
        "secondary-dark": "#7d9c7d",
        "secondary-light": "#b7c8b7",

        background: "#111a22",
        foreground: "#192633",
        border: "#2a4055",

        copy: "#fafbfc",
        "copy-light": "#ccd9e6",
        "copy-lighter": "#88a6c4",

        success: "#9ab29a",
        warning: "#b2b29a",
        error: "#b29a9a",

        "success-content": "#212c21",
        "warning-content": "#2c2c21",
        "error-content": "#2c2121",

        facebook: "#1877f2",
        bluesky: "#1185fe",
        github: "#2dba4e",
        linkedin: "#0a66c2",
      },

      boxShadow: {
        shFacebook: "0 0 20px #1877f2",
        shBluesky: "0 0 20px #1185fe",
        shGithub: "0 0 20px #2dba4e",
        shLinkedin: "0 0 20px #0a66c2",
      },
      height: {
        cust1: "25rem",
        cust2: "22.5rem",
      },

      width: {
        cust1: "23.75rem",
        cust2: "22.5rem",
      },

      backgroundImage: {
        "radial-gradient": "radial-gradient(#7d8c9c, #b7bfc8)",
      },
    },
  },
  plugins: [],
};
