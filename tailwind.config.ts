import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta tierra / earth
        earth: {
          50:  "#FAF7F4",
          100: "#F3EDE5",
          200: "#E5D9CC",
          300: "#D2BFA8",
          400: "#B89E82",
          500: "#9C7E60",
          600: "#7D6249",
          700: "#5F4836",
          800: "#3F3024",
          900: "#261D16",
        },
        // Tonos complementarios
        sage:    "#6B7D5F",
        cream:   "#F8F4EF",
        stone:   "#B5A99A",
        charcoal:"#1C1A18",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 7rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 5rem)",  { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.4rem, 2.5vw, 2.25rem)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
      },
      spacing: {
        section: "clamp(5rem, 10vw, 10rem)",
        "section-sm": "clamp(3rem, 6vw, 6rem)",
      },
      maxWidth: {
        prose:   "68ch",
        content: "80rem",
        narrow:  "52rem",
      },
      letterSpacing: {
        widest: "0.25em",
        wide:   "0.12em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        slow: "800ms",
      },
      animation: {
        "fade-up":   "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in":   "fadeIn 1s ease both",
        "scale-in":  "scaleIn 1s cubic-bezier(0.16,1,0.3,1) both",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%":   { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)"    },
        },
      },
    },
  },
  plugins: [],
};

export default config;
