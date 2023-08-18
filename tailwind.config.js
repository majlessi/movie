/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    darkMode: "class",
    plugins: [nextui({
        themes: {
            dark: {
                colors: {
                    primary: {
                        DEFAULT: "#FF3257", foreground: "#ffffff",
                    }, focus: "rgba(255,50,87,0.15)",
                    success: {
                        DEFAULT: "#00B574", foreground: "#ffffff",
                    }, focus: "rgba(3,179,0,0.1)",
                    dark: {
                        DEFAULT: "rgba(255, 255, 255, 0.02)", foreground: "#ffffff",
                    }, focus: "rgba(3,179,0,0.1)",
                },
            },
        },
    }),]

}
