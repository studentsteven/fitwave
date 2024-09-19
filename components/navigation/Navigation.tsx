import "@/global.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Navigation({ children }) {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
}