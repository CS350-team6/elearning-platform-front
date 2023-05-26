import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "@/redux/provider";
import Navbar from '../components/Navbar';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Learing Platform",
  description: "Developed by Team 6",
};

// const defaultTheme = createTheme();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider theme={defaultTheme}> */}
          <Navbar />
          <Providers>
            {children}     
          </Providers>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
