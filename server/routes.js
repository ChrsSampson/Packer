import { Router } from "express";
import params from "./serverParams.js";
import { sendGetRequest } from "./snipeRequests.js";

const router = Router();

// gets all road cases from snipe IT
router.get("/cases", async (req, res, next) => {
    const case_endpoint = `${params.snipe_url}/hardware?model_id=42&sort=last_checkout`;

    const data = await sendGetRequest(case_endpoint);

    if (data) {
        res.json(data.rows);
    } else {
        res.status(400).send();
    }
});

router.get("/cases/search", async (req, res) => {
    const { search } = req.params;
    const search_endpoint = `${params.snipe_url}/hardware?model_id=42&search=${search}`;

    const data = await sendGetRequest(search_endpoint);

    if (data) {
        console.log(data);
        res.json(data.rows);
    } else {
        console.log(failed);
        res.status(400).send();
    }
});

export default router;
