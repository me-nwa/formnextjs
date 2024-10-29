import type { ThemeConfig } from "antd";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../../public/DINNextLTArabic-Regular.ttf",
});

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#B19573",
    fontFamily: myFont.style.fontFamily,
    //fontSize: 16,
    //colorPrimary: '#52c41a',
  },
};

export default theme;