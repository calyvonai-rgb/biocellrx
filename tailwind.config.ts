import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        "medical-gold": "hsl(var(--medical-gold))",
        "medical-gold-light": "hsl(var(--medical-gold-light))",
        "medical-dark": "hsl(var(--medical-dark))",
        "medical-gray": "hsl(var(--medical-gray))",
        "medical-light": "hsl(var(--medical-light))",
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
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-out": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)"
          },
          "100%": {
            opacity: "0",
            transform: "translateY(10px)"
          }
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },
        "scale-out": {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.95)", opacity: "0" }
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" }
        },
        "shimmer": {
          "0%": { 
            transform: "translateX(-100%)",
            opacity: "0"
          },
          "50%": { 
            opacity: "1" 
          },
          "100%": { 
            transform: "translateX(100%)",
            opacity: "0"
          }
        },
        "glow-pulse": {
          "0%, 100%": { 
            filter: "drop-shadow(0 0 8px hsl(var(--medical-gold))) drop-shadow(0 0 16px hsl(var(--medical-gold) / 0.6))",
            transform: "scale(1)"
          },
          "50%": { 
            filter: "drop-shadow(0 0 12px hsl(var(--medical-gold))) drop-shadow(0 0 24px hsl(var(--medical-gold) / 0.8)) drop-shadow(0 0 32px hsl(var(--medical-gold) / 0.4))",
            transform: "scale(1.02)"
          }
        },
        "sparkle": {
          "0%, 100%": { 
            opacity: "0",
            transform: "scale(0) rotate(0deg)"
          },
          "50%": { 
            opacity: "1",
            transform: "scale(1) rotate(180deg)"
          }
        },
        "floating": {
          "0%, 100%": { 
            transform: "translateY(0px)"
          },
          "50%": { 
            transform: "translateY(-3px)"
          }
        },
        "radiant-glow": {
          "0%": { 
            background: "linear-gradient(45deg, transparent 30%, hsl(var(--medical-gold) / 0.8) 50%, transparent 70%)",
            transform: "translateX(-100%) skew(-20deg)"
          },
          "100%": { 
            background: "linear-gradient(45deg, transparent 30%, hsl(var(--medical-gold) / 0.8) 50%, transparent 70%)",
            transform: "translateX(200%) skew(-20deg)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce": "bounce 2s infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "scale-out": "scale-out 0.2s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
        "enter": "fade-in 0.3s ease-out, scale-in 0.2s ease-out",
        "exit": "fade-out 0.3s ease-out, scale-out 0.2s ease-out",
        "shimmer": "shimmer 3s infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "sparkle": "sparkle 2s linear infinite",
        "floating": "floating 6s ease-in-out infinite",
        "radiant-glow": "radiant-glow 4s linear infinite"
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-gold": "var(--gradient-gold)",
      },
      boxShadow: {
        "medical": "var(--shadow-medical)",
        "gold": "var(--shadow-gold)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
