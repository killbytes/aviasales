import css from './App.module.scss';
import { useAppDispatch, useAppSelector } from "src/redux/hooks.ts";
import Logo from 'src/assets/Logo.svg';
import TransferFilter from 'src/pages/App/TransferFilter.tsx';

function App() {
  const state = useAppSelector((state) => state.aviasales);
  const dispatch = useAppDispatch();

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
    </main>
  );
}

export default App;
