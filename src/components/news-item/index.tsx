import { formatDistance, fromUnixTime } from 'date-fns';
import { useTheme } from 'next-themes';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { addFavorite, removeFavorite, selectIsFavorite } from '@/app/appSlice';
import { StarFilledIcon, StarOutlineIcon } from '@/components/icons/star';
import { HackerNewsItem } from '@/types/hacker-news';

type Props = {
  index: number;
  item: HackerNewsItem;
};

const NewsItem: React.FC<Props> = ({ index, item }) => {
  const isFavorite = useAppSelector(state => selectIsFavorite(state, item.id));
  const dispatch = useAppDispatch();
  const { systemTheme, theme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDarkMode = currentTheme === 'dark';

  const getUrlHost = (storyUrl: string) => {
    try {
      return `(${new URL(storyUrl)?.hostname})`;
    } catch (error) {
      return '';
    }
  };

  const pluralize = (text: string, count: number) => `${text}${count && count > 1 ? 's' : ''}`;

  const getTimeDistance = (storyTime: number) => formatDistance(new Date(), fromUnixTime(storyTime));

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(item.id));
    } else {
      dispatch(addFavorite(item.id));
    }
  };

  return (
    item && (
      <div className="flex mb-[26px] dark:text-white">
        <div className="w-[40px] font-mono text-lg pr-2 text-right text-light-text dark:text-dark-text">
          {index + 1}.
        </div>

        <div className="flex flex-col">
          <div className="flex items-center mb-1">
            <div className="text-lg font-mono font-bold">
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            </div>

            <div className="text-xxs text-light-text dark:text-dark-text font-sans pl-3">
              <a href={item.url} target="_blank" rel="noreferrer">
                {getUrlHost(item.url)}
              </a>
            </div>
          </div>

          <div className="flex text-xxs text-light-text dark:text-dark-text">
            <div>
              {item.score} {pluralize('point', item.score)} by {item.by}{' '}
              {item.time ? `${getTimeDistance(item.time)} ago` : ''}
            </div>
            <div className="px-1">|</div>
            <div>{item.kids ? `${item.kids.length} ${pluralize('comment', item?.kids.length)}` : '0 comments'}</div>
            <div className="px-1">|</div>
            <div className="flex items-center cursor-pointer select-none" onClick={toggleFavorite}>
              {isFavorite ? (
                <StarFilledIcon />
              ) : (
                <StarOutlineIcon color={isDarkMode ? 'rgba(var(--dark-text-rgba))' : 'rgba(var(--light-text-rgba))'} />
              )}
              <span className="pl-0.5">save</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export { NewsItem };
