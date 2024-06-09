import { Reducer } from "redux";
import { Ticket } from "src/model/Ticket.ts";

export type TransferCount = 0 | 1 | 2 | 3;
export type TicketSort = 'cheapest' | 'fastest';

export type AviasalesAction =
  | {
      type: '';
    }
  | {
      type: 'TOGGLE_TRANSFER_COUNT';
      count: TransferCount;
    }
  | {
      type: 'TOGGLE_TRANSFER_COUNT_ALL';
    }
  | {
      type: 'SET_TICKET_SORT';
      sort: TicketSort;
    }
  | {
      type: 'PUSH_TICKETS';
      tickets: Ticket[];
    }
  | {
      type: 'START_LOADING_TICKETS';
    }
  | {
      type: 'END_LOADING_TICKETS';
    };

const initialState = {
  ticketsIsLoading: false,
  transferFilter: [] as TransferCount[],
  ticketSort: 'cheapest' as TicketSort,
  tickets: [] as Ticket[],
};
const aviasalesReducer: Reducer<typeof initialState, AviasalesAction> = (
  state = initialState,
  action: AviasalesAction = { type: '' }
) => {
  switch (action.type) {
    case 'TOGGLE_TRANSFER_COUNT': {
      const index = state.transferFilter.findIndex((value) => action.count === value);
      if (index === -1) {
        return {
          ...state,
          transferFilter: [...state.transferFilter, action.count],
        };
      } else {
        return {
          ...state,
          transferFilter: (() => {
            const v = [...state.transferFilter];
            v.splice(index, 1);
            return v;
          })(),
        };
      }
    }
    case 'TOGGLE_TRANSFER_COUNT_ALL': {
      if (state.transferFilter.length === 4) {
        return {
          ...state,
          transferFilter: [],
        };
      } else {
        return {
          ...state,
          transferFilter: [0, 1, 2, 3],
        };
      }
    }
    case 'SET_TICKET_SORT':
      return {
        ...state,
        ticketSort: action.sort,
      };
    case 'PUSH_TICKETS':
      return {
        ...state,
        tickets: [...state.tickets, ...action.tickets],
      };
    case 'START_LOADING_TICKETS':
      return {
        ...state,
        ticketsIsLoading: true,
      };
    case 'END_LOADING_TICKETS':
      return {
        ...state,
        ticketsIsLoading: false,
      };
    default:
      return state;
  }
};

export default aviasalesReducer;
