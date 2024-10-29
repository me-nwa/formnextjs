// src/pages/_app.tsx
import { AppProps } from 'next/app';
import localFont from 'next/font/local';
import '@/styles/globals.css'; // Assuming you have global styles here

// Load the Janna LT Bold font
const jannaFont = localFont({
  src: 'fonts/Janna LT Bold.ttf', // Adjust path as necessary
  variable: '--janna-font', // Custom CSS variable for easy reference
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${jannaFont.variable} font-janna`}>
      <Component {...pageProps} />
    </main>
  );
}
