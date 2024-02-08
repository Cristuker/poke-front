import type { Metadata } from "next";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: "Poke API Consumer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.cdnfonts.com/css/pokemon-solid" rel="stylesheet"/>

      </head>
      <body>
      <Providers>{children}</Providers>
      <ToastContainer />
      </body>
    </html>
  );
}
