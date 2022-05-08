module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "unkle-blue": "#08224c",
                "unkle-blue-light": "#2b9dfe",

            },
            keyframes: {
                wave: {
                    '0%': {transform: 'rotate(0.0deg)'},
                    '10%': {transform: 'rotate(14deg)'},
                    '20%': {transform: 'rotate(-8deg)'},
                    '30%': {transform: 'rotate(14deg)'},
                    '40%': {transform: 'rotate(-4deg)'},
                    '50%': {transform: 'rotate(10.0deg)'},
                    '60%': {transform: 'rotate(0.0deg)'},
                    '100%': {transform: 'rotate(0.0deg)'},
                },
                wiggle: {
                    '0%': {transform: 'translateY(-10px)'},
                    '100%': {transform: 'translateY(0px)'},
                }
            },
            animation: {
                'waving-hand': 'wave 2s ease-in-out 3',
                wiggle: 'wiggle 1s ease-in-out',
            },
        },
    },
    plugins: [],
}