import { useAppDispatch, useAppSelector } from 'src/redux/hooks.ts';

import css from './TransferFilter.module.scss';
import { toggleTransferCount, toggleTransferCountAll } from "src/redux/reducers/aviasalesReducer.ts";

function TransferFilter() {
  const { transferFilter: counts } = useAppSelector((state) => state.aviasales);
  const dispatch = useAppDispatch();

  return (
    <aside className={css.filter}>
      <h2 className={css.filter__title}>Количество пересадок</h2>
      <label className={css.filter__label}>
        <input type="checkbox" className={css.filter__input} checked={counts.length === 4}
          onChange={() => dispatch(toggleTransferCountAll())}
        />
        <span className={css.filter__desc}>Все</span>
      </label>
      <label className={css.filter__label}>
        <input type="checkbox" className={css.filter__input} checked={counts.includes(0)}
          onChange={() => dispatch(toggleTransferCount(0))}
        />
        <span className={css.filter__desc}>Без пересадок</span>
      </label>
      <label className={css.filter__label}>
        <input type="checkbox" className={css.filter__input} checked={counts.includes(1)}
          onChange={() => dispatch(toggleTransferCount(1))}
        />
        <span className={css.filter__desc}>1 пересадка</span>
      </label>
      <label className={css.filter__label}>
        <input type="checkbox" className={css.filter__input} checked={counts.includes(2)}
          onChange={() => dispatch(toggleTransferCount(2))}
        />
        <span className={css.filter__desc}>2 пересадки</span>
      </label>
      <label className={css.filter__label}>
        <input type="checkbox" className={css.filter__input} checked={counts.includes(3)}
          onChange={() => dispatch(toggleTransferCount(3))}
        />
        <span className={css.filter__desc}>3 пересадки</span>
      </label>
    </aside>
  );
}

export default TransferFilter;
