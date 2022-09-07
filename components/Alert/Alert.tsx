import styles from './alert.module.css';
import cn from 'classnames';
import { NextPage } from 'next';

const Alert: NextPage<{ children: any; type: string }, {}> = ({
  children,
  type,
}: {
  children: any;
  type: string;
}) => {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
};

export default Alert;
