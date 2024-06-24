import { Link } from "react-router-dom";
import { Logo } from "../assets";
import st from './styles.module.scss';

export const Header = () => {
  return (
    <header>
      <Link to={'/'}>
        <div className={st.iconWrapper}>
        <Logo />
        </div>
      </Link>

      <nav></nav>
      <button></button>
    </header>
  );
};