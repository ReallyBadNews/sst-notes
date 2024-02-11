import { ApiHandler } from "sst/node/api";
import { Time } from "@sst-notes/core/time";

export const handler = ApiHandler(async (_evt) => {
  return {
    statusCode: 200,
    body: JSON.stringify(`Hi from SST ${Time.now()}`),
  };
});
