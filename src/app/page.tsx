'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { LoaderIcon } from '@/components/icons/loader';
import { NewsItem } from '@/components/news-item';
import { useGetNewsItemsQuery, useGetNewsStoriesQuery } from '@/services/hacker-news';
import { useAppSelector } from '@/store/hooks';
import { HackerNewsItem } from '@/types/hacker-news';

export default function Home() {
  const pageSize = useAppSelector(state => state.app.newsItemsPageSize);
  const [newsItemIds, setNewsItemIds] = useState<number[]>([]);
  const [newsItems, setNewsItems] = useState<HackerNewsItem[]>([]);

  const {
    data: newsStoriesData,
    error: newsStoriesError,
    isLoading: newsStoriesIsLoading,
    isSuccess: newsStoriesIsSuccess,
  } = useGetNewsStoriesQuery(undefined, { refetchOnMountOrArgChange: true });
  const {
    currentData,
    error: newsItemsError,
    isFetching: newsItemsIsFetching,
    isLoading: newsItemsIsLoading,
    isSuccess: newsItemsIsSuccess,
  } = useGetNewsItemsQuery(newsItemIds);

  const isLoading: boolean = newsStoriesIsLoading || newsItemsIsLoading;
  const isError: boolean = newsStoriesError !== undefined || newsItemsError !== undefined;

  const onShowMoreClick = () => {
    setNewsItemIds(newsStoriesData?.slice(0, newsItemIds.length + pageSize) || []);
  };

  // inital load, wait for getNewsStoriesQuery to be successful, then get individual stories
  useEffect(() => {
    if (newsStoriesIsSuccess) {
      setNewsItems([]);
      setNewsItemIds(newsStoriesData?.slice(0, pageSize) || []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsStoriesIsSuccess]);

  // when more data has loaded from getNewsItemQuery, add it to state
  useEffect(() => {
    if (newsItemsIsSuccess && currentData) {
      setNewsItems(currentData);
    }
  }, [newsItemsIsSuccess, currentData]);

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
          <div className="flex flex-col">
            {newsItems?.map((d: HackerNewsItem, index: number) => <NewsItem index={index} item={d} key={d.title} />)}
          </div>

          {newsItems.length > 0 && (
            <Button
              text={newsItemsIsFetching ? <LoaderIcon className="h-4 w-4" /> : 'show more'}
              onClick={onShowMoreClick}
              className="ml-10"
            />
          )}
        </>
      )}

      {!isLoading && isError && (
        <div className="w-full min-h-[250px] flex items-center justify-center text-lg">
          There was an error, please reload the page.
        </div>
      )}

      {!isLoading && newsItems.length > 0 && <Footer isLoading={isLoading} isError={isError} />}
    </>
  );
}
