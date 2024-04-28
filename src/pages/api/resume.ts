import type { NextApiRequest, NextApiResponse } from "next";
import fs from "node:fs/promises";

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		const file = await fs.readFile("public/chetan-resume.pdf");
		if (!file) throw new Error("File not found");

		res.setHeader("Content-Type", "application/pdf");
		res.setHeader("Content-Disposition", "attachment; filename=chetan-resume.pdf");
		res.send(file);
	} catch (error: any) {
		res.status(500).send(error.message);
	}
};

export default handler;
