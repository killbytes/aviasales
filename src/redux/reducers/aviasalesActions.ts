import { ThunkAction } from 'redux-thunk';
import { AviasalesAction, TransferCount } from 'src/redux/reducers/aviasalesReducer.ts';
import { RootState } from 'src/redux/store.ts';

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

const loadTickets = (): ThunkAction<void, RootState, unknown, AviasalesAction> =>
  async dispatch => {

  }

