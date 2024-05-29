import { Router } from "express";

const router = Router();

router.get("/cases", (req, res, next) => {
    res.send("cases");
});

export default router;
