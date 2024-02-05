import { sql } from '@vercel/postgres';

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

export async function projects() {

  try {
    const data = await sql`SELECT * FROM projects
    ORDER BY id ASC;`;

    const latestInvoices = data.rows;
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}