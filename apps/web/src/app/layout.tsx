import VenueMenu from "@/components/VenueMenu";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-100">
        <VenueMenu />
        <main>{children}</main>
      </body>
    </html>
  );
}
