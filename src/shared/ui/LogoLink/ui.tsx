import { Link } from "react-router-dom";
import st from './index.module.scss';

export const LogoLink = () => {
  return (
    <Link to={'/'}>
      <div className={st.iconWrapper}>
        <h1>MK</h1>
      </div>
    </Link>
  );
};