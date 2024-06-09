import { ThunkAction } from 'redux-thunk';

import { AviasalesAction, TransferCount } from 'src/redux/reducers/aviasalesReducer.ts';
import { RootState } from 'src/redux/store.ts';
import { Ticket } from 'src/model/Ticket.ts';
import { getSearchID, getTickets } from 'src/api/AviasalesApi.ts';

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

export const pushTickets = (tickets: Ticket[]): AviasalesAction => {
  return {
    type: 'PUSH_TICKETS',
    tickets,
  };
};
export const loadTickets = (): ThunkAction<void, RootState, unknown, AviasalesAction> => async (dispatch) => {
  dispatch({ type: 'START_LOADING_TICKETS' });
  try {
    const { searchId } = await getSearchID();
    // eslint-disable-next-line no-constant-condition
    while (true) {
      // eslint-disable-next-line no-await-in-loop
      const { tickets, stop } = await getTickets(searchId);
      if (stop) break;
      dispatch(pushTickets(tickets));
    }
  } finally {
    dispatch({ type: 'END_LOADING_TICKETS' });
  }
};
