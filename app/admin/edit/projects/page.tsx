import Projects from "@/app/components/adminComp/projects";
import Link from "next/link"

export default async function Page() {
    return (
      <main className="flex-1 flex max-w-4xl flex-col">
      <div className="w-full flex justify-around">
        <h3>Projects:</h3> 
        <Link href={'/admin/edit/projects/create-project'}>ADD</Link>
        </div>
        <Projects />
      </main>
    );
  }