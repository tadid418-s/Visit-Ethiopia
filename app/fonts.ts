import localFont from "next/font/local";

const amhara = localFont({
  src: "./fonts/Amhara_reduced.otf", // local font file in app/fonts directory
  variable: "--font-amhara",
  weight: "400",
  style: "normal",
});

export { amhara };
