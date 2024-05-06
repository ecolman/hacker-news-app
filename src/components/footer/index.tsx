import { ViewSwitcher } from '@/components/view-switcher';

type Props = {
  isLoading: boolean;
  isError: boolean;
};

const Footer: React.FC<Props> = ({ isLoading, isError }) => {
  return (
    <>
      <div className="border-t-4 border-orange mt-[52px] mb-[27px]"></div>
      <div className="flex flex-col items-center">
        <div className="font-bold text-lg mb-2 dark:text-white">Hacker News</div>
        {!isLoading && !isError && <ViewSwitcher />}
      </div>
    </>
  );
};

export { Footer };
