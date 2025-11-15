# creating help.jsx
1. some of the things we create in js but we also want to implement before use them in our project so we implement on this help.jsx file
2. i again learn how to install tailwind in my project
    1. npm install tailwindcss @tailwindcss/vite 
    2. import tailwindcss from '@tailwindcss/vite' add in below thing
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite'
    // https://vite.dev/config/
    export default defineConfig({
    plugins: [react(), tailwindcss()],
    })
    3.  tailwindcss(), add in below thing
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite'
    // https://vite.dev/config/
    export default defineConfig({
    plugins: [react(), tailwindcss()],
    })
    4. @import "tailwindcss"; in index.css
    5. npm run dev
    6. than implement in our ToDo.jsx
