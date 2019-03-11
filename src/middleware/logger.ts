import { HttpRequest, HttpResponse } from "@marblejs/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export const logger$ = (req$: Observable<HttpRequest>, res: HttpResponse): Observable<HttpRequest> =>
  req$.pipe(
    tap(req => console.log(`method: ${req.method}  url: ${req.url}  body: ${req.body}`))
  )