import { z } from 'zod';
import { env } from '@/env';

import { SearchResponseSchema } from '@/models/searchResponse';

const FetchParameterSchema = z.object({
  keyword: z.string().min(1),
  page: z.number().positive().default(1),
  limit: z.number().positive().default(10),
});

type FetchParameter = z.infer<typeof FetchParameterSchema>;

export const searchQueryFn = async (param: FetchParameter) => {
  const { keyword, page, limit } = FetchParameterSchema.parse(param);

  const searchApiEndpoint = new URL('/rest/lists', env.NEXT_PUBLIC_SPACEMARKET_API_URL);
  searchApiEndpoint.searchParams.set('keyword', keyword);
  searchApiEndpoint.searchParams.set('page', String(page));
  searchApiEndpoint.searchParams.set('limit', String(limit));

  const res = await fetch(searchApiEndpoint.href, {
    headers: {
      'x-api-key': env.NEXT_PUBLIC_SPACEMARKET_API_KEY,
    },
  });

  const searchResponse = SearchResponseSchema.parse(await res.json());
  return searchResponse;
};
