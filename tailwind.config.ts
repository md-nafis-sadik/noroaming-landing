import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['responsive'],
      scrollSnapType: ['responsive'],
      fontFamily: {
        sans: ["var(--font-inter-tight)", "Arial", "Helvetica", "sans-serif"],
        inter: ["var(--font-inter-tight)"],
        bonbon: ["var(--font-bonbon)"],
        "yeseva-one": ["var(--font-yeseva-one)"],
        poppins: ["var(--font-poppins)"],
        scoutcond: ["var(--font-scout-one)"],
      },
      padding: {
        30: "7.5rem", // 120px
        15: "3.75rem", // 60px
      },
      screens: {
        xs: "380px",
      },
      height: {
        30: "7.5rem", // 120px
      },
      width: {
        30: "7.5rem", // 120px
      },
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          100: "#fafafa",
        },
        black: "#000000",
        "main": {
          "50": "#E5ECF3",
          "100": "#CCD9E7",
          "200": "#99B3CF",
          "300": "#668EB7",
          "350": "#0D6E8E",
          "400": "#002A4E",
          "500": "#003E7C",
          "600": "#001C3E",
          "700": "#00152F",
          "800": "#000E1F",
          "900": "#000710",
          "950": "#000408"
        },
        "secondary": {
          "50": "#FFEAED",
          "100": "#FFD5DB",
          "200": "#FFABB7",
          "300": "#FF8193",
          "400": "#FF576F",
          "500": "#FF2D4B",
          "600": "#FC2640",
          "700": "#C11E32",
          "800": "#861724",
          "900": "#430B12",
          "950": "#210609"
        },
        "paste": {
          "50": "#E8F9F5",
          "100": "#D1F3EB",
          "200": "#A3E7D7",
          "300": "#75DBC3",
          "400": "#47CFAF",
          "500": "#42C5A8",
          "600": "#42D5B3",
          "700": "#2F9780",
          "800": "#1F6454",
          "900": "#0F322A",
          "950": "#081915"
        },
        yellowish: {
          50: "#FFF8ED",
          100: "#FFFCC5",
          200: "#FFFA85",
          300: "#FFF146",
          400: "#FFE31B",
          500: "#FFC400",
          600: "#E29800",
          700: "#FFBD1B",
          800: "#985308",
          900: "#7C440B",
          950: "#FF9D00",
        },
        skyish: {
          50: "#FFF8ED",
          100: "#FFFCC5",
          200: "#F0F8FF",
          300: "#FFF146",
          400: "#FFE31B",
          500: "#FFC400",
          600: "#E29800",
          700: "#22A4EB",
          800: "#985308",
          900: "#7C440B",
          950: "#FF9D00",
        },
        status: {
          success: "#2CC672",
          error: "#FF6B6B",
          warning: "#FF9F43",
          info: "#54A0FF",
          alert: "#FECA57",
        },
        text: {
          disabled: "#D0D0D0",
          50: "#FFFFFF",
          100: "#E7E7E7",
          200: "#D1D1D1",
          500: "#6D6D6D",
          600: "#888888",
          700: "#4F4F4F",
          750: "#474747",
          800: "#0A2C47",
          850: "#191919",
          900: "#000000",
        },
        natural: {
          50: "#FFFFFF",
          100: "#F6F6F6",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          gray: "#2B2B2B",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          950: "#0F0F0F",
          black: "#000000"
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        gradientGreen:
          "linear-gradient(90deg, #483BDC 30%, #FFA8A9 70.5%, #82D3A4 100%)",
        blandGradient:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #002F25 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
