import { httpListener } from '@marblejs/core'
import { api$ } from "./api/users";
const middlewares = [
  
];

const effects = [
  api$
];

export default httpListener({ middlewares, effects })