import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // GlobalTrack Logistics Brand Colors
        royal: {
          50: "hsl(221, 100%, 97%)",
          100: "hsl(221, 100%, 93%)",
          200: "hsl(221, 100%, 86%)",
          300: "hsl(221, 100%, 76%)",
          400: "hsl(221, 89%, 65%)",
          500: "hsl(221, 83%, 53%)", // Royal Blue
          600: "hsl(221, 83%, 43%)",
          700: "hsl(221, 80%, 36%)",
          800: "hsl(221, 74%, 30%)",
          900: "hsl(221, 70%, 25%)",
          950: "hsl(221, 69%, 16%)",
        },
        orange: {
          50: "hsl(33, 100%, 96%)",
          100: "hsl(34, 100%, 92%)",
          200: "hsl(32, 100%, 83%)",
          300: "hsl(31, 100%, 72%)",
          400: "hsl(27, 96%, 61%)",
          500: "hsl(25, 95%, 53%)", // Gradient Orange
          600: "hsl(21, 90%, 48%)",
          700: "hsl(17, 88%, 40%)",
          800: "hsl(15, 79%, 34%)",
          900: "hsl(15, 75%, 28%)",
          950: "hsl(13, 81%, 17%)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
