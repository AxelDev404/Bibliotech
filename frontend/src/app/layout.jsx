
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-white text-white">
        <ReduxProvider>
          
          {children}
          
        </ReduxProvider>
      </body>
    </html>
  );
}