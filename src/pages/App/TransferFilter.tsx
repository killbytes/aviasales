import css from './TransferFilter.module.scss';

function TransferFilter() {
  return (
    <aside className={css.filter}>
      <h2 className={css.filter__title}>Количество пересадок</h2>
      <label className={css.filter__label} for="All">
        <input type="checkbox" className={css.filter__input} checked="" id="All"/>
        <span className="sc-dJGMql ksbTqM">Все</span>
      </label>
      <label className={css.filter__label}>
        <input type="checkbox" className={css.filter__input} checked="true"/>
        <span className="sc-dJGMql ksbTqM">Без пересадок</span>
      </label>
      <label className={css.filter__label}>
        <input type="checkbox" className={css.filter__input} checked=""/>
        <span className="sc-dJGMql ksbTqM">1 пересадка</span>
      </label>
      <label className={css.filter__label}>
        <input type="checkbox" className={css.filter__input} checked=""/>
        <span className="sc-dJGMql ksbTqM">2 пересадки</span>
      </label>
      <label className={css.filter__label}>
        <input type="checkbox" className={css.filter__input} checked=""/>
        <span className="sc-dJGMql ksbTqM">3 пересадки</span>
      </label>
    </aside>
  );
}

export default TransferFilter;
