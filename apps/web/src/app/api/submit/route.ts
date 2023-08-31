/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prismaClient } from '@/utils/prisma/client';

export async function POST(request: Request) {
  try {
    // 例
    // const test_json = {
    //     "isMatch": "MATCH",
    //     "keyword": "広い",
    //     "spaceUid": "123"
    // };

    const rawEvaluation = await request.json();

    //enumバリデーション用の配列
    const isMatch = ['MATCH', 'UNMATCH'] as const;

    //POSTされたデータを受け取るスキーマ
    const EvaluationSchema = z.object({
      isMatch: z.enum(isMatch),
      keyword: z.string(),
      spaceUid: z.string(),
    });
    const Evaluation = EvaluationSchema.parse(rawEvaluation);
    const result = await prismaClient.evaluation.create({
      data: {
        isMatch: Evaluation.isMatch,
        keyword: Evaluation.keyword,
        spaceUid: Evaluation.spaceUid,
      },
    });

    return NextResponse.json(
      {
        message: '登録成功',
        evaluation: {
          isMatch: result.isMatch,
          lastName: result.keyword,
          userId: result.spaceUid,
          imageUrl: result.id,
        },
      },
      { status: 200 },
    );
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json(
        {
          message: e.message,
        },
        { status: 400 },
      );
    } else {
      return NextResponse.json(
        {
          message: '不明なエラーが発生しました',
        },
        { status: 400 },
      );
    }
  }
}
