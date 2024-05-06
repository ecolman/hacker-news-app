import { LogoIcon } from '@/components/icons/logo';
import { ViewSwitcher } from '@/components/view-switcher';
import { ThemeSwitcher } from '@/components/theme-switcher';

type Props = {
  isLoading: boolean;
  isError: boolean;
};

const Header: React.FC<Props> = ({ isLoading, isError }) => {
  return (
    <div className="flex mb-[60px] pl-1 items-center">
      <LogoIcon />
      <div className="pl-9"></div>
      {!isLoading && !isError && <ViewSwitcher />}

      <ThemeSwitcher />
    </div>
  );
};

export { Header };
