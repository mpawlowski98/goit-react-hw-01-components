import css from './Statistics.module.css';

const colorHex = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            style={{
              backgroundColor: colorHex(),
            }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
