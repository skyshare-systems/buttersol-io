import WagmiProviders from "@/providers/WagmiProviders";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Quick Raven",
  description: "Quick Raven",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WagmiProviders>
          <Navbar />
          {children}
        </WagmiProviders>
      </body>
    </html>
  );
}
