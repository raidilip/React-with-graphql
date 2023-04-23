function withOpacity(variableName) {
  return ({ opacityValue}) => {
    if(opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else {
      return `rgb(var(${variableName}))`;
    }
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: withOpacity("--color-primary"),
        secondary: withOpacity("--color-secondary"),
        dark: withOpacity("--color-dark"),
        "gray-body": withOpacity("--color-gray-body"),
        "primary-300": withOpacity("--color-primary-300"),
        

      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}