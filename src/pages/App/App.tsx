import css from './App.module.scss';
import { useAppDispatch, useAppSelector } from "src/redux/hooks.ts";

function App() {
  const state = useAppSelector((state) => state.aviasales);
  const dispatch = useAppDispatch();

  return (
    <main className={css.main}>
      <div>Sort: {state.ticketSort}</div>
      <button onClick={() => dispatch({ type: 'SET_TICKET_SORT', sort: 'fastest' })}>Set fastes sort</button>
    </main>
  );
}

export default App;
