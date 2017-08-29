export const index = async (ctx, next) => {
  const title = 'koa2 title'

  await ctx.render('index', {
    title
  })
}

export const start = async (ctx, next) => {
  const title = 'koa2 title'

  await ctx.render('start', {
    title
  })
}
