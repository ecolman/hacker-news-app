import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { HackerNewsItem } from '../types/hacker-news';

// Define a service using a base URL and expected endpoints
export const hackerNewsApi = createApi({
  reducerPath: 'hackerNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: builder => ({
    getNewsStories: builder.query<number[], void>({
      query: () => `newstories.json?print=pretty`,
    }),

    getNewsItems: builder.query<HackerNewsItem[], number[]>({
      queryFn: async (ids, { dispatch }) => {
        const promises: any[] = ids.map(id => {
          return dispatch(hackerNewsApi.endpoints.getNewsItem.initiate(id));
        });

        return Promise.allSettled(promises).then(results => {
          return {
            data: results
              .filter(r => r.status === 'fulfilled')
              // @ts-ignore
              .map(r => r?.value?.data || {}) as HackerNewsItem[],
          };
        });
      },
    }),

    getNewsItem: builder.query<HackerNewsItem, number>({
      query: (id: number) => `item/${id}.json?print=pretty`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNewsStoriesQuery, useGetNewsItemsQuery, useGetNewsItemQuery } = hackerNewsApi;
