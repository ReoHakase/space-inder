import { z } from 'zod';

const PriceSchema = z.object({
  minText: z.string().nullable(), // 未設定の場合は、null もしくは 空文字列
  maxText: z.string().nullable(), // 未設定の場合は、null もしくは 空文字列
});

const ThumbnailSchema = z.object({
  url: z.string().url(),
  description: z.string().nullable(), // 未設定の場合は、null もしくは 空文字列
});

export const RoomSchema = z.object({
  id: z.number(),
  uid: z.string(),
  spaceUsername: z.string(),
  name: z.string(),
  rentalReputationCount: z.number(),
  rentalReputationScore: z.number(),
  prices: z.array(PriceSchema).length(1), // 謎の長さ1配列
  thumbnails: z.array(ThumbnailSchema),
  spaceTypeText: z.string(),
  access: z.string(),
  area: z.number(),
  capacity: z.number(),
  stateText: z.string(),
  city: z.string(),
  latitude: z.number(),
  longitude: z.number(),
});

export type Room = z.infer<typeof RoomSchema>;
