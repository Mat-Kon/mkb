import { HEADER_LINKS } from "@/shared/constans/navbar";
import { NavLink } from "react-router-dom";
import st from './index.module.scss';

export const NavbarHeader = () => {
  return (
    <nav className={st.navHeader} role="navigation">
      <ul className={st.navHeader__list}>
        {HEADER_LINKS.map((link) =>
        (
          <li key={link.title}>
            <NavLink to={link.link}>{link.title}</NavLink>
          </li>
        )
        )}
      </ul>
    </nav>
  );
};