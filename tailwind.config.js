const defaultSans = [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  '"Noto Sans"',
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

const defaultSerif = [
  "Georgia",
  "Cambria",
  '"Times New Roman"',
  "Times",
  "serif",
];

/*
--light-gray: ;
--madder-lake: #cc2936ff;
--white: #ffffffff;
--dim-gray: #686963ff;
--xiketic: #0e0004ff;
*/

module.exports = {
  purge: {
    mode: "all",
    content: [
      "./components/**/*.{js,ts,jsx,tsx,css}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: { deep: [/blur$/] },
    },
  },
  theme: {
    extend: {
      colors: {
        "primary": "#cc2936ff",
        "secondary": "#0e0004ff",
        "background": "#cdd7d6ff",
        "dim-grey": "#686963ff"
      },
      fontSize: {
        "7xl": "4.5rem",
      },
      spacing: {
        14: "3.375rem",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
            },
            "ol > li::before": {
              color: theme("colors.gray.700"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.700"),
            },
            a: {
              color: theme("colors.primary"),
            },
          },
        },
      }),
    },
    fontFamily: {
      display: ["Open Sans", ...defaultSans],
      body: ["Merriweather", ...defaultSerif],
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")]
};
