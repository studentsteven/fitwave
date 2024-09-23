import Header from "./Header";
import Footer from "./Footer";

type NavigationProps = {
  children: any;
  background: string;
};

export default function Navigation({ children, background }: NavigationProps) {
  return (
    <>
      <Header achtergrond={background} /> 
      {children}
      <Footer />
    </>
  );
}
