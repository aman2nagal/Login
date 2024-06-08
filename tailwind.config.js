module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/@cpm/package-manager/**/*.{js,jsx,ts,tsx}",
    //"node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      boxShadow: {
        "small-button": "0px 1px 2px rgba(126, 56, 0, 0.5)",
        button:
          "-6px 8px 10px rgba(81, 41, 10, 0.1), 0px 2px 2px rgba(81, 41, 10, 0.2)",
        "button-active":
          "-1px 2px 5px rgba(81, 41, 10, 0.15), 0px 1px 1px rgba(81, 41, 10, 0.15)",
      },
      animation: {
        enter: "enter 200ms ease-out",
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        leave: "leave 150ms ease-in forwards",
      },
      keyframes: {
        enter: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        leave: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.9)", opacity: 0 },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
        lobobgColor1: "#63AEED",
        lobobgColor2: "#86C1F3",
        trustgreen: "#038E60",
        transparencyyellow: "#D89D08",
        excellenceBlue: "#2E94EA",
        stepsGreen: "#0CC269",
        DarkBlue: "#064E89",
        BorderBlue: "#8BC3F1",
        StepperbgGray: " var(--Grayscale-Input-Background, #EFF0F6)",
        pvBlue: "#1887E4",
        grayText:"#787878",
        fieldNameColor: " var(--Grayscale-Title-Active, #1C2033)",
        requiredColor: "var(--6, #ED5757)",
        fieldBorder: "var(--Grayscale-Input-Stroke, #CACACA)",
        fieldBg: "var(--White-10, #FFF)",
        primaryBlue: "var(--Colors-Primary, #2E94EA)",
        primaryBtnTxt: "var(--gray-50, #F9FAFB)",
        secondaryBtnBg: "#F0F0F0",
        pvRed: "#ED5757",
        pvLightGray: "#F0F0F0",
        pvPlaceHolder:"#B8B8B8",
        pvtextgray:"#787878",
        pvBackGroundGray:"#FAFAFA",
        pvborderRadius:"#A5A5A5",

        "black-b": {
          400: "#181818",
          300: "#1C2033",
          150: "#4A4A4A",
          100: "#2B3049",
          50: "#374151",
        },
        "primary-o": {
          900: "#4F46E5",
          800: "#5865f2",
          600: "#2E94EA",
          550: "#46A9FD",
          500: "#B4C6FC",
          450: "#8DC0EB",
        },
        "secondary-g": {
          150: "#E0FFE2",
          100: "#EBF4FC",
          90: "#E3F2FD",
          50: "#EEF7FF"
        },
        "secondary-o": {
          100: "#FFE6A7",
          50: "#FFF3E0",
        },
        "secondary-p": {
          900: "#6E7191",
        },
        "status-success": {
          900: "#038E60",
        },
        "status-danger": {
          900: "#FE0000",
          800: "#ED5757",
          50: "#FEEBEE"
        },
        "status-warning": {
          900: "#D89D08",
          800: "#FEC022",
        },
        "gray-o": {
          650: "#202225",
          620: "#424242",
          600: "#6B7280",
          550: "#737373",
          500: "#757575",
          480: "#787878",
          470: "#7C7C7C",
          460: "#75838E",
          450: "#b8b8b8",
          420: "#CCC",
          400: "#CACACA",
          370: "#D1D5DB",
          360: "#D2D6DC",
          350: "#D9D9D9",
          300: "#E2E2E2",
          250: "#F0F0F0",
          150: "#F5F5F5",
          100: "#F9FAFB",
          50: "#F9F9F9",
        },
        
        subHeading: "var(--3, #040B11)",
        tertiaryBtnBorderColor: "#F0F2F5",
        tab: {
          normal: "#737373",
          selected: "#4F46E5",
        },
      },
      spacing: {
        88: "22rem",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    //require("tw-elements/dist/plugin"),
    //require("@tailwindcss/aspect-ratio")
  ],
};
