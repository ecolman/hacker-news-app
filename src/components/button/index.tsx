import { ReactElement } from 'react';
import clsx from 'clsx';

type Props = {
  text: string | ReactElement;
  className?: string;
  [props: string]: any;
};

const Button: React.FC<Props> = ({ text, className, ...props }) => {
  return (
    <div
      className={clsx('w-[104px] h-[34px] flex items-center justify-center bg-orange cursor-pointer', className)}
      {...props}
    >
      <div className="font-sans font-semibold text-white">{text}</div>
    </div>
  );
};

export { Button };
