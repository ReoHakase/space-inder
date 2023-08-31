import { z } from 'zod';
import { SpaceSchema } from './space';

export const SearchResponseSchema = z.object({
  data: z.object({
    pageInfo: z.object({
      currentPage: z.number().positive(),
      hasNextPage: z.boolean(),
      hasPreviousPage: z.boolean(),
      nextPage: z.number().positive().nullable(),
      previousPage: z.number().positive().nullable(),
      resultsCount: z.number().nonnegative(),
      totalCount: z.number().nonnegative(),
      totalPages: z.number().positive(),
    }),
    results: z.array(SpaceSchema),
  }),
});

export type SearchResponse = z.infer<typeof SearchResponseSchema>;
