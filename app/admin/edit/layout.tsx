import Header from "../../components/adminComp/header";
import Nav from "@/app/components/adminComp/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-900">
        <Header />
        <Nav />
        <div className="max-w-screen-lg">{children}</div>
      </div>
    );
  }
  