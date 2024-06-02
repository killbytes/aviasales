import { Reducer } from "redux";

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
    };

const initialState = {
  transferFilter: [] as TransferCount[],
  ticketSort: 'cheapest' as TicketSort,
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
    default:
      return state;
  }
};

export const toggleTransferCount = (count: TransferCount): AviasalesAction => {
  return {
    type: 'TOGGLE_TRANSFER_COUNT',
    count,
  };
};

export const toggleTransferCountAll = (): AviasalesAction => {
  return {
    type: 'TOGGLE_TRANSFER_COUNT_ALL',
  };
};

export default aviasalesReducer;
