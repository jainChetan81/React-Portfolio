import stream from "stream";
import { promisify } from "util";
import fetch, { Response } from "node-fetch";
import type { NextApiRequest, NextApiResponse } from "next";

const pipeline = promisify(stream.pipeline);
const url = `${process.env.URL}/chetan-resume.pdf`;

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	const response: Response = await fetch(url);
	if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

	res.setHeader("Content-Type", "application/pdf");
	res.setHeader("Content-Disposition", "attachment; filename=chetan-resume.pdf");
	await pipeline(response.body, res);
};

export default handler;
