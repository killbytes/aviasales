import { useEffect, useReducer, useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from 'src/redux/hooks.ts';
import Logo from 'src/assets/Logo.svg';
import TransferFilter from 'src/pages/App/TransferFilter.tsx';
import { loadTickets } from 'src/redux/reducers/aviasalesActions.ts';

import css from './App.module.scss';

function countReducer(state: number, action: { type: 'SHOW_NEXT' }) {
  switch (action.type) {
    case 'SHOW_NEXT':
      return state + 5;
    default:
      return state;
  }
}
function App() {
  const state = useAppSelector((state) => state.aviasales);
  const dispatch = useAppDispatch();

  const isLoadingRef = useRef(false);
  useEffect(() => {
    if (!isLoadingRef.current) {
      isLoadingRef.current = true;
      dispatch(loadTickets()).finally(() => {
        isLoadingRef.current = false;
      });
    }
  }, []);

  // const [count, setCount] = useState();
  const [count, countDispatch] = useReducer(countReducer, 5);

  return (
    <main className={css.main}>
      <div>Sort: {state.ticketSort}</div>
      <button type="button" onClick={() => dispatch({ type: 'SET_TICKET_SORT', sort: 'fastest' })}>
        Set fastes sort
      </button>
      <header className="header">
        <img src={Logo} className="image" alt="img" />
      </header>
      <div className="app-grid">
        <TransferFilter />
      </div>
      <div>
        isLoading:
        {`${state.ticketsIsLoading}`}
      </div>
      <div>
        {state.tickets.slice(0, count).map((t) => (
          <div key={JSON.stringify(t)}>{JSON.stringify(t)}</div>
        ))}
      </div>
      <button type="button" onClick={() => countDispatch({ type: 'SHOW_NEXT' })}>
        Show next 5
      </button>
    </main>
  );
}

export default App;
