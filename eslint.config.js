import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
    // Bỏ qua thư mục build
    { ignores: ["dist", "build"] },

    {
        files: ["**/*.{js,jsx,ts,tsx}"],

        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },

        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },

        rules: {
            // base rules
            ...js.configs.recommended.rules,

            // react
            ...react.configs.recommended.rules,
            "react/jsx-no-undef": "error", // 🚨 JSX chưa import (BrowserRouter, Route...)
            "react/react-in-jsx-scope": "off", // React 17+ không cần import React
            "react/jsx-uses-react": "off",

            // react hooks
            ...reactHooks.configs.recommended.rules,

            // refresh
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],

            // custom
            "no-undef": "error",
            "no-unused-vars": ["warn", { varsIgnorePattern: "^[A-Z_]" }],
        },

        settings: {
            react: { version: "detect" },
        },
    },
];
