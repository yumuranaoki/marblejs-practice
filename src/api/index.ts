import { combineRoutes } from "@marblejs/core";
import { userApi$ } from "./users";
import { postsApi$ } from "./posts";

export const api$ = combineRoutes(
  '',
  [ userApi$, postsApi$ ]
);