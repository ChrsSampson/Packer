// this maps out the enviromental envs
const pb_url = "http://localhost:8090/";
const snipe_url = import.meta.env.SNIPE_API;
const snipe_key = import.meta.env.SNIPE_KEY;
const port = import.meta.env.PORT;

export { snipe_key, snipe_url, port, pb_url };
