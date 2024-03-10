'use server'

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export async function studies() {

  try {
    const data = await sql`SELECT * FROM studies
    ORDER BY id ASC;`;

    const data2 = data.rows;
    return data2;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the studies.');
  }
} 

/////projects/////
const FormSchema = z.object({
  id: z.string(),
  titulospa: z.string(), 
  tituloeng: z.string(),
   tituloita: z.string(),
    cuerpospa: z.string(),
     cuerpoeng: z.string(),
      cuerpoita: z.string(),
       img_path: z.string(),
        link1: z.string(),
         link2: z.string(),
          link1name: z.string(),
           link2name: z.string(),
            ytlink: z.string(),
             yttitle: z.string()
})
 
const CreateProject = FormSchema.omit({ id: true, date: true });

export async function projects() {

  try {
    const data = await sql`SELECT * FROM projects
    ORDER BY id DESC;`;

    const latestInvoices = data.rows;
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}


export type State = {
  errors?: {
    id?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createProject(prevState: State, formData: FormData) {
  const validatedFields = CreateProject.safeParse({
    id: formData.get('id'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

 //try{
 //  await sql`
 // INSERT INTO projects (id, titulospa, tituloeng, tituloita, cuerpospa, cuerpoeng, cuerpoita, img_path, link1, link2, link1name, link2name, ytlink, yttitle)
  //VALUES (${id}, ${titulospa}, ${tituloeng}, ${tituloita}, ${cuerpospa}, ${cuerpoeng}, ${cuerpoita}, ${img_path}, ${link1}, ${link2}, ${link1name}, ${link2name}, ${ytlink}, ${yttitle})
//`; 
//} catch (error){
 // return{
 //   message: 'Database Error: Failed to create project'
 // };
//}


revalidatePath('/admin/edit/projects');
redirect('/admin/edit/projects');    
}


export async function workExp() {

  try {
    const data = await sql`SELECT * FROM work_exp
    ORDER BY id ASC;`;

    const data2 = data.rows;
    return data2;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the studies.');
  }
} 