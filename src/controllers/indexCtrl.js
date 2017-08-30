export const index = async (ctx, next) => {
  const title = 'koa2 title'

  await ctx.render('index', {
    title
  })
}

export const start = async (ctx, next) => {
  const title = 'koa2 title'

  await ctx.render('game/start', {
    title
  })
}

export const login = async (ctx, next) => {
  const title = 'koa2 title'

  await ctx.render('pages/login', {
    title
  })
}
