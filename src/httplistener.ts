import { httpListener } from '@marblejs/core'
import { bodyParser$ } from "@marblejs/middleware-body";
import { api$ } from "./api/index";
import { logger$ } from "./middleware/logger";

const middlewares = [
  bodyParser$(),
  logger$,  
];

const effects = [
  api$
];

export default httpListener({ middlewares, effects })