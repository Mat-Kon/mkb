import st from './index.module.scss';

interface Props {
  color?: 'pink' | 'blue' | 'white';
};

export const ContactBtn: React.FC<Props> = ({ color = 'white' }) => {
  return (
    <button className={st[color]}>Связаться</button>
  );
};