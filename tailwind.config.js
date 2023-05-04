/*
 * @Author: 刘浩奇 liuhaoqw1ko@gmail.com
 * @Date: 2023-05-04 23:14:27
 * @LastEditors: 刘浩奇 liuhaoqw1ko@gmail.com
 * @LastEditTime: 2023-05-04 23:35:34
 * @FilePath: \next-learn\tailwind.config.js
 * @Description: 
 * 
 * Copyright (c) 2023 by 遥在科技, All Rights Reserved. 
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow:{
        'auth': '0 1px 4px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
