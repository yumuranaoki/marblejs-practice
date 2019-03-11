import { HttpEffect, EffectFactory, combineRoutes } from "@marblejs/core";
import { mapTo, map } from 'rxjs/operators';

const indexEffect$: HttpEffect = req$ =>
    req$.pipe(
      mapTo({ body: 'response for users'})
    );

const index$ = EffectFactory
  .matchPath('/')
  .matchType('GET')
  .use(indexEffect$)

const postEffect$: HttpEffect = req$ =>
      req$.pipe(
        map(req$ => req$.body as {name: string, email: string, password: string} ),
        map(body => ({ body: body.name }))
      )

const post$ = EffectFactory
  .matchPath('/')
  .matchType('POST')
  .use(postEffect$)

export const userApi$ = combineRoutes(
  '/users',
  [ index$, post$ ],
)