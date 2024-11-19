import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const postRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`
    };
  }),

  upload: publicProcedure.mutation(async (opts) => {
    // entries in the FormData.
    console.log("path", opts.path);
    const formData = await opts.getRawInput();
    console.log("form data", formData);

    let reader = new FileReader();
    for(var image of formData.values()) {
        console.log("form data image: ", image.data);
        const b64 = reader.readAsDataURL(image);
        console.log(" image b64: ", b64);
    }



    return {
      msg: 'Got file'
    };
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
