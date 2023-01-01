'use client';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import './globals.css';
import Header from './Header';
import Preloader from './Preloader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 7000);
  }, []);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        {preloader ? (
          <Preloader />
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
