import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

import { callOpenAIApi } from '~/app/common';

export const postRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`
    };
  }),

  // Tutor response
  tutor: publicProcedure.mutation(async (opts) => {
    const b64img = await opts.getRawInput();
    console.log('<tutor> base64 image: ', b64img.length);

    // Call OpenApi here.
    var result = '';
    try {
      let resp = await callOpenAIApi(b64img);
      console.log('>> 111> openai response: ', resp);
      result = resp.message.content;

    } catch (e: Exception) {
      result = e.Message;
    }
    console.log("result is: ", result);
    return result;
  }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name
        }
      });
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: 'desc' }
    });

    return post ?? null;
  })
});
