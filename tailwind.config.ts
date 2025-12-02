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
        // Nordic Theme Colors (matching Archicon palette)
        primary: {
          DEFAULT: '#F1F1EE',
          light: '#F8F8F6',
        },
        secondary: {
          DEFAULT: '#555555',
          light: '#707070',
        },
        dark: {
          DEFAULT: '#121212',
          light: '#262724',
        },
        accent: {
          DEFAULT: '#f94e41',
          hover: '#d43e33',
        },
        body: {
          bg: '#ffffff',
          text: '#555555',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Space Grotesk', 'sans-serif'],
        body: ['var(--font-body)', 'DM Sans', 'sans-serif'],
      },
      lineHeight: {
        'heading': '1.2',
        'body': '1.667',
        'relaxed': '1.8',
      },
      letterSpacing: {
        'tighter': '-0.025em',
        'tight': '-0.015em',
        'wide': '0.05em',
        'wider': '0.1em',
      },
      spacing: {
        'container': '1400px',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'container': '1400px',
        'content': '1100px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.33, 0.02, 0, 0.93)',
        'fade-out': 'fadeOut 0.6s cubic-bezier(0.33, 0.02, 0, 0.93)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.33, 0.02, 0, 0.93)',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.33, 0.02, 0, 0.93)',
        'slide-left': 'slideLeft 0.8s cubic-bezier(0.33, 0.02, 0, 0.93)',
        'slide-right': 'slideRight 0.8s cubic-bezier(0.33, 0.02, 0, 0.93)',
        'scale-up': 'scaleUp 0.6s cubic-bezier(0.33, 0.02, 0, 0.93)',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 1s ease-in-out',
        'image-reveal': 'imageReveal 1.2s cubic-bezier(0.33, 0.02, 0, 0.93)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', visibility: 'hidden' },
          '100%': { opacity: '1', visibility: 'visible' },
        },
        fadeOut: {
          '0%': { opacity: '1', visibility: 'visible' },
          '100%': { opacity: '0', visibility: 'hidden' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        bounceSubtle: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          },
          '40%': {
            transform: 'translateY(-15px)',
            animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
          },
          '60%': {
            transform: 'translateY(-7px)',
          },
        },
        imageReveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
      },
      transitionTimingFunction: {
        'archicon': 'cubic-bezier(0.33, 0.02, 0, 0.93)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};

export default config;
