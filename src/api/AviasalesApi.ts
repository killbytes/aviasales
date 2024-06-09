import { Ticket } from "src/model/Ticket.ts";

const apiBase = 'https://front-test.dev.aviasales.ru';

export async function getSearchID() {
  const res = await fetch(`${apiBase}/search`);
  if (!res.ok) {
    throw new Error(`Could not fetch search ID`);
  }
  return res.json() as Promise<{ searchId: string }>;
}

export async function getTickets(searchID: { searchId: string }) {
  const res = await fetch(`${apiBase}/tickets?searchId=${searchID}`);
  if (!res.ok) {
    throw new Error(`Could not fetch tickets`);
  }
  return res.json() as Promise<{ tickets: Ticket[]; stop: false }>;
}
