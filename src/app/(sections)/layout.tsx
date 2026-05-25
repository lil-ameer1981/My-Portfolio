import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
    
    </div>
  );
}
