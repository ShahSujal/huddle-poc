import { headers } from "next/headers"; // added
import ReowProvider from "@/lib/provider/reowProvider";

export default function ReowLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = headers().get("cookie");

  return <ReowProvider cookies={cookies}>{children}</ReowProvider>;
}
