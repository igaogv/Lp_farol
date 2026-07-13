/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ['"Bebas Neue"', "sans-serif"],
        sans: ['"Manrope"', "system-ui", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Farol Novo Pro brand palette
        brand: {
          black: "#08090C",
          graphite: "#171A20",
          steel: "#22262F",
          red: "#D71920",
          "red-dark": "#9E1118",
          yellow: "#F4B000",
          gray: "#E5E7EB",
          "gray-mute": "#9CA3AF",
        },
      },
      boxShadow: {
        "red-glow": "0 0 30px rgba(215,25,32,0.35), 0 0 80px rgba(215,25,32,0.15)",
        "red-glow-lg":
          "0 0 40px rgba(215,25,32,0.5), 0 0 120px rgba(215,25,32,0.25)",
        "yellow-glow": "0 0 40px rgba(244,176,0,0.45)",
        card: "0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "red-gradient":
          "linear-gradient(135deg, #D71920 0%, #9E1118 60%, #6B0C10 100%)",
        "graphite-gradient":
          "linear-gradient(180deg, #171A20 0%, #08090C 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 30px rgba(215,25,32,0.35)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 60px rgba(215,25,32,0.7)",
            transform: "scale(1.02)",
          },
        },
        "headlight-breathe": {
          "0%, 100%": { filter: "brightness(1) drop-shadow(0 0 20px rgba(244,176,0,0.35))" },
          "50%": { filter: "brightness(1.15) drop-shadow(0 0 45px rgba(244,176,0,0.7))" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
        "headlight-breathe": "headlight-breathe 3.6s ease-in-out infinite",
        "shimmer": "shimmer 2.4s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
