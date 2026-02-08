export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ur" dir="rtl">
      <body style={{ 
        margin: 0, 
        padding: 0, 
        backgroundColor: '#f4f7f9', 
        minHeight: '100vh',
        overflowX: 'hidden' 
      }}>
        {children}
      </body>
    </html>
  );
}