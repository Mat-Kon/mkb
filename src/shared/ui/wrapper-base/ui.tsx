import { ReactNode } from "react";
import st from './index.module.scss';

interface Props {
  children: ReactNode;
  isColumn?: boolean;
};

export const WrapperBase: React.FC<Props> = ({ children, isColumn }) => {
  return (
    <div className={`${st.wrapper} ${isColumn ? st.column : ''}`}>
      {children}
    </div>
  );
};