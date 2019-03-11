import { HttpEffect, EffectFactory, combineRoutes } from "@marblejs/core";
import { mapTo } from 'rxjs/operators';

const postsEffect$: HttpEffect = req$ =>
  req$.pipe(
    mapTo({ body: 'response for posts'})
  );

const posts$ = EffectFactory
  .matchPath('/')
  .matchType('GET')
  .use(postsEffect$)

export const postsApi$ = combineRoutes(
  '/posts',
  [ posts$ ],
)