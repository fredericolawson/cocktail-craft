'use server';

import Airtable from 'airtable';

// this server action will create a record in Airtable for the signed up user

export async function signup(data: { email: string; notes?: string; product?: string }) {
  const { email, notes, product } = data;
  if (!email) {
    return { success: false, error: "Email is required" };
  }

  const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_PAT,
  });
  
  const base = airtable.base("app14yXmr6lxStObG");
  const table = base("Interest");

  const record = await table.create({
    Email: email as string,
    Notes: notes as string || "",
    Product: product as string,

  });

  return { success: true, recordId: record.id };
}
