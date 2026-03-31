// C:\Users\vivek_laxvnt1\Desktop\projects\NestNext\apps\web\app\layout.tsx
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">        
        {children}
      </body>
    </html>
  );
}