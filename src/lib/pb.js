import Pocketbase from "pocketbase";
import { pb_url } from "../lib/enVariables.js";

const url = pb_url || "http://localhost:0890";

const pb = new Pocketbase(url);

export default pb;
