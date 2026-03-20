import Navbar from "@/components/navbar";
import Background1 from "@/components/background1";

export default function WithoutNavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Background1>
      {children}
    </Background1>
  );
}