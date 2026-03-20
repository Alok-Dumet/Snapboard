import Navbar from "@/components/navbar";
import Background1 from "@/components/background1";

export default function WithNavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Background1>
      <Navbar />
      {children}
    </Background1>
  );
}