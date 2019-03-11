import { HttpEffect, EffectFactory, combineRoutes } from "@marblejs/core";
import { mapTo } from 'rxjs/operators';

const usersEffect$: HttpEffect = req$ =>
  req$.pipe(
    mapTo({ body: 'Hello, world'})
  );

const users$ = EffectFactory
  .matchPath('/users')
  .matchType('GET')
  .use(usersEffect$)

export const api$ = combineRoutes(
  '',
  [ users$ ],
)