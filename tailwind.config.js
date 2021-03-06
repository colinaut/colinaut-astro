const scale = {
    '2xs': '0.236rem',
    xs: '0.382rem',
    sm: '0.618rem',
    base: '1rem',
    md: '1.618rem',
    lg: '2.618rem',
    xl: '4.236rem'
}
  
const colors = {
    "wine": {
        "50": "#d25484",
        "100": "#c84a7a",
        "200": "#be4070",
        "300": "#b43666",
        "400": "#aa2c5c",
        "500": "#a02252",
        "600": "#961848",
        "700": "#8c0e3e",
        "800": "#820434",
        "900": "#78002a"
      },
      "blue": {
        "50": "#5ebef7",
        "100": "#54b4ed",
        "200": "#4aaae3",
        "300": "#40a0d9",
        "400": "#3696cf",
        "500": "#2c8cc5",
        "600": "#2282bb",
        "700": "#1878b1",
        "800": "#0e6ea7",
        "900": "#04649d"
      },
      "orange": {
        "50": "#ffa387",
        "100": "#ff997d",
        "200": "#ff8f73",
        "300": "#ff8569",
        "400": "#fa7b5f",
        "500": "#f07155",
        "600": "#e6674b",
        "700": "#dc5d41",
        "800": "#d25337",
        "900": "#c8492d"
      },
      "teal": {
        "50": "#77c5e0",
        "100": "#6dbbd6",
        "200": "#63b1cc",
        "300": "#59a7c2",
        "400": "#4f9db8",
        "500": "#4593ae",
        "600": "#3b89a4",
        "700": "#317f9a",
        "800": "#277590",
        "900": "#1d6b86"
      },
      "yellow": {
        "50": "#ffff84",
        "100": "#ffff7a",
        "200": "#ffff70",
        "300": "#ffff66",
        "400": "#fffd5c",
        "500": "#fff352",
        "600": "#f5e948",
        "700": "#ebdf3e",
        "800": "#e1d534",
        "900": "#d7cb2a"
      },
      "seafoam": {
        "50": "#94ffeb",
        "100": "#8affe1",
        "200": "#80f8d7",
        "300": "#76eecd",
        "400": "#6ce4c3",
        "500": "#62dab9",
        "600": "#58d0af",
        "700": "#4ec6a5",
        "800": "#44bc9b",
        "900": "#3ab291"
      }
}
module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'],
    theme: {
        extend: {
            spacing: scale,
            colors: colors,
            typography: theme => ({
              DEFAULT: {
                  css: {
                    a: {
                      color: theme('colors.teal.600')
                    },
                    h2: {
                      color: theme('colors.wine.700')
                    }
                  }
              }
            })
        }
    },
    plugins: [
      require('@tailwindcss/typography'),
      // ...
    ],
};