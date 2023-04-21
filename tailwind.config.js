/*
 * @Author: 刘浩奇 liuhaoqi@yaozai.net
 * @Date: 2023-04-17 14:36:32
 * @LastEditors: 刘浩奇 liuhaoqi@yaozai.net
 * @LastEditTime: 2023-04-17 17:06:28
 * @FilePath: \next-learn\tailwind.config.js
 * @Description: tailwindcss 配置文件
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
        'event-item': '0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2)',
        'button': '0 1px 6px rgba(0, 0, 0, 0.2)',
        'logistics': '0 2px 6px rgba(0, 0, 0, 0.2)',
        'form': '0 1px 4px rgba(0, 0, 0, 0.2)',
        'notification': '0 -3px 6px rgba(0, 0, 0, 0.2)',
      }


    },
  },
  plugins: [],
}
