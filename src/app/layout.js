import "./globals.css";  

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-50">{children}</body>
    </html>
  );
}
