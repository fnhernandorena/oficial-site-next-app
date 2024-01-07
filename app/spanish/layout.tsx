import Footer from "../components/footers/spa-footer";
import Header from "../components/hearders/spa-header";
import Nav from "../components/navs/spa-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Nav />
      <div className="max-w-screen-lg">{children}</div>
      <Footer />
    </div>
  );
}
