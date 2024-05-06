'use client';

import { LoaderIcon } from '@/components/icons/loader';
import { NewsItem } from '@/components/news-item';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { useGetNewsItemsQuery } from '@/services/hacker-news';
import { HackerNewsItem } from '@/types/hacker-news';
import { useAppSelector } from '@/store/hooks';

export default function Starred() {
  const favoriteIds = useAppSelector(state => state.app.favoriteIds);
  const { data: newsItems, isError, isLoading } = useGetNewsItemsQuery(favoriteIds);

  return (
    <>
      <Header isLoading={isLoading} isError={isError} />

      {isLoading && (
        <div className="w-full min-h-[250px] flex items-center justify-center">
          <LoaderIcon className="h-12 w-12" />
        </div>
      )}

      {!isLoading && !isError && (
        <>
          {newsItems && newsItems.length === 0 && (
            <div className="w-full min-h-[250px] flex items-center justify-center">No items, better save a few!</div>
          )}

          {newsItems && newsItems.length > 0 && (
            <div className="flex flex-col">
              {newsItems?.map((d: HackerNewsItem, index: number) => <NewsItem index={index} item={d} key={d.title} />)}
            </div>
          )}
        </>
      )}

      {!isLoading && isError && (
        <div className="w-full min-h-[250px] flex items-center justify-center text-lg">
          There was an error, please reload the page.
        </div>
      )}

      <Footer isLoading={isLoading} isError={isError} />
    </>
  );
}
