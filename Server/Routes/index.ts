import { join } from "path";
import { Request, Response, Router } from "express";

const router = Router();

router.get('**', (req: Request, res: Response) => {
	res.sendFile(join(__dirname, "../public/index.html"));
});

export default router;