import { Inter } from "next/font/google";
import "./globals.css";
import { HuddleClient, HuddleProvider } from "@huddle01/react";
import ReowProvider from "@/lib/provider/reowProvider";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const huddleClient = new HuddleClient({
    projectId: process.env.NEXT_PUBLIC_HUDDLE_PROJECT_ID!,
    options: {},
  });
  const cookies = headers().get("cookie");
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReowProvider cookies={cookies}>
          <HuddleProvider client={huddleClient}>{children}</HuddleProvider>;
        </ReowProvider>
      </body>
    </html>
  );
}
