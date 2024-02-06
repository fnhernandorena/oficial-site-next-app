import Header from "../components/hearders/header";
import Nav from "../components/navs/spa-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900">
     <Header />
      <Nav />
      <div className="max-w-screen-lg">{children}</div>
    </div>
  );
}
