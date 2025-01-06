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
        primary: "#02abf5",
        "primary-content": "#000000",
        "primary-dark": "#0288c2",
        "primary-light": "#2dbefd",

        secondary: "#f50246",
        "secondary-content": "#fff7f9",
        "secondary-dark": "#c20238",
        "secondary-light": "#fd2d67",

        background: "#111d22",
        foreground: "#192b34",
        border: "#294856",

        copy: "#fafcfd",
        "copy-light": "#cbdee6",
        "copy-lighter": "#87b2c5",

        success: "#02f502",
        warning: "#f5f502",
        error: "#f50202",

        "success-content": "#000000",
        "warning-content": "#000000",
        "error-content": "#fff7f7",

        facebook: "#1877f2",
        bluesky: "#1185fe",
        github: "#2dba4e",
        linkedin: "#0a66c2",

        html: "#e9744e",
        css: "#6596f5",
        js: "#7d5016",
        tailwind: "#165863",
        postgresql: "#253e55",
      },

      boxShadow: {
        shFacebook: "0 0 20px #1877f2",
        shBluesky: "0 0 20px #1185fe",
        shGithub: "0 0 20px #2dba4e",
        shLinkedin: "0 0 20px #0a66c2",
      },

      height: {
        cust1: "400px",
        cust2: "360px",
        cust3: "500px",
      },

      width: {
        cust1: "380px",
        cust2: "360px",
        cust3: "400px",
      },

      backgroundImage: {
        "gradient-striped": "linear-gradient(to bottom,#fafcfd,transparent)",
      },

      animation: {
        scale: "scale 1.5s ease-in-out alternate infinite",
        blink: "blink 1s ease-out alternate infinite",
      },

      keyframes: {
        scale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },

        blink: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
        },
      },
    },
  },
  plugins: [],
};
