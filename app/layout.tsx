import './globals.css';

export const metadata = {
  title: 'Tale Nest',
  description:
    'One website were you can find all the stories you need for your kids',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        Navbar
        <main>{children}</main>
        Footer
      </body>
    </html>
  );
}
