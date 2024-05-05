export type TransferCount = 0 | 1 | 2 | 3;
export type TicketSort = 'cheapest' | 'fastest';

export type AviasalesAction =
  | {
      type: 'SET_TRANSFER_FILTER';
      filter: TransferCount[];
    }
  | {
      type: 'SET_TICKET_SORT';
      sort: TicketSort;
    };

const initialState = {
  transferFilter: [] as TransferCount[],
  ticketSort: 'cheapest' as TicketSort,
};
const aviasalesReducer = (state = initialState, action: AviasalesAction) => {
  switch (action.type) {
    case 'SET_TRANSFER_FILTER':
      return {
        ...state,
        transferFilter: action.filter,
      };
    case 'SET_TICKET_SORT':
      return {
        ...state,
        ticketSort: action.sort,
      };
    default:
      return state;
  }
};

export default aviasalesReducer;
