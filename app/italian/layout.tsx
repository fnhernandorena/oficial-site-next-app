import Header from "../components/hearders/header";
import Nav from "../components/navs/ita-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900">
     <Header />
      <Nav />
      <div className="max-w-screen-lg w-full pb-32">{children}</div>
    </div>
  );
}
