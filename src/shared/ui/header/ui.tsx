import { NavbarHeader } from "@/features";
import { WrapperBase } from "../wrapper-base";
import st from './styles.module.scss';
import { LogoLink } from "../LogoLink";
import { ContactBtn } from "../buttons";

export const Header = () => {
  return (
    <header className={st.header}>
      <WrapperBase>
        <LogoLink />
        <NavbarHeader />
        <ContactBtn color="pink"/>
      </WrapperBase>
    </header>
  );
};