import { Project } from "@/app/lib/definitions";
import { createProject } from "@/app/lib/data";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function Form({ project }: { project: Project[] }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createProject, initialState);
  
    return (
      <form action={dispatch}>
        
         <label htmlFor="titlespa" className="mb-2 block text-sm font-medium">
      Spanish title
    </label>
    <div className="relative mt-2 rounded-md">
      <div className="relative">
        <input
          id="titulospa"
          name="titulospa"
          type="text"
          placeholder="Enter spanish title"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          aria-describedby="amount-error"
        />
       </div>
    </div> 
        
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/invoices"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <button type="submit">Create Project</button>
        </div>
      </form>
    );
  }