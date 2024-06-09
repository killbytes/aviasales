import { Ticket } from 'src/model/Ticket.ts';

const apiBase = 'https://aviasales-test-api.kata.academy';

export async function getSearchID() {
  const res = await fetch(`${apiBase}/search`);
  if (!res.ok) {
    throw new Error(`Could not fetch search ID`);
  }
  return res.json() as Promise<{ searchId: string }>;
}

export async function getTickets(searchId: string) {
  const res = await fetch(`${apiBase}/tickets?searchId=${searchId}`);
  if (!res.ok) {
    throw new Error(`Could not fetch tickets`);
  }
  return res.json() as Promise<{ tickets: Ticket[]; stop: false }>;
}
