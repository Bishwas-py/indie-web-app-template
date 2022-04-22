const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layout/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "dark-purple": "#243245",
                "light-white": "rgba(255, 255, 255, 0.17)",
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            },
        },
        screens: {
            'ultra-sm': {'max': '640px'},
            ...defaultTheme.screens,
        }
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}