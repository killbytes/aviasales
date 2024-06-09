import css from './App.module.scss';
import { useAppDispatch, useAppSelector } from "src/redux/hooks.ts";
import Logo from 'src/assets/Logo.svg';
import TransferFilter from 'src/pages/App/TransferFilter.tsx';
import { useEffect } from "react";
import { loadTickets } from "src/redux/reducers/aviasalesActions.ts";


function App() {
  const state = useAppSelector((state) => state.aviasales);
  const dispatch = useAppDispatch();
  useEffect(()=> {
      dispatch(loadTickets())
    },
    []);

  return (
    <main className={css.main}>
      <div>Sort: {state.ticketSort}</div>
      <button onClick={() => dispatch({ type: 'SET_TICKET_SORT', sort: 'fastest' })}>Set fastes sort</button>
      <header className="header">
        <img src={Logo} className="image" alt="img" />
      </header>
      <div className="app-grid">
        <TransferFilter />
      </div>
      <div>
        isLoading:
        {state.ticketsIsLoading + ''}
      </div>
      <div>
        {state.tickets.map((t) => <div>{JSON.stringify(t)}</div>)}
      </div>
    </main>
  );
}

export default App;
