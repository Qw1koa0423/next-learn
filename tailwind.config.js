/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-21 17:04:17
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-21 17:49:20
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
      boxShadow: {
        "image": '0 1px 8px rgba(0, 0, 0, 0.2),'
      }

    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
