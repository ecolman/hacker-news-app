import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

const rootRoute = '/';
const starredRoute = '/starred';

const ViewSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const onClickView = () => {
    if (pathname !== starredRoute) {
      router.push('/starred');
    } else {
      router.back();
    }
  };

  return (
    <div className="font-sans text-sm mt-0.5 dark:text-white">
      <span
        className={clsx('pr-1 cursor-pointer', {
          ['font-bold text-orange']: pathname === rootRoute,
        })}
        onClick={onClickView}
      >
        latest
      </span>
      |
      <span
        className={clsx('pl-1 cursor-pointer', {
          ['font-bold text-orange']: pathname === starredRoute,
        })}
        onClick={onClickView}
      >
        starred
      </span>
    </div>
  );
};

export { ViewSwitcher };
