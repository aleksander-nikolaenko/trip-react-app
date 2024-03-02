import { NavLink } from 'react-router-dom';

import s from './NotFoundPageComponent.module.css';

export const NotFoundPageComponent = () => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>Not Found</h2>
      <NavLink
        to="/"
        className={s.link}
      >
        Go to home page
      </NavLink>
    </section>
  );
};
