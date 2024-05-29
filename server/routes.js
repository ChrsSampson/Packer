import { Router } from "express";
import params from "./serverParams.js";

const router = Router();

// gets all road cases from snipe IT
router.get("/cases", async (req, res, next) => {
    const case_endpoint = `${params.snipe_url}/hardware?model_id=42&sort=last_checkout`;

    const result = await fetch(case_endpoint, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${params.snipe_key}`,
        },
    });

    const data = await result.json();

    if (result.status == 200) {
        res.json(data.rows);
    } else {
        res.status(400).send();
    }
});

export default router;
