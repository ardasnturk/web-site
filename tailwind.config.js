/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0c0b0e",
        surface: "#16151a",
        raised: "#1f1d24",
        paper: "#f5f1e8",
        muted: "#a5a1ab",
        ember: "#ff6a3d",
        line: "rgba(245, 241, 232, 0.1)",
      },
      fontFamily: {
        sans: [
          '"Inter Variable"',
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          '"Hiragino Sans"',
          '"PingFang SC"',
          '"Noto Sans"',
          "sans-serif",
        ],
        display: [
          '"Bricolage Grotesque Variable"',
          '"Inter Variable"',
          "system-ui",
          "-apple-system",
          '"Hiragino Sans"',
          '"PingFang SC"',
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
