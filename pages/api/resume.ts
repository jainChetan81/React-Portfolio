import stream from "stream";
import { promisify } from "util";
import type { NextApiRequest, NextApiResponse } from "next";

const pipeline = promisify(stream.pipeline);
const url: string = `${process.env.URL}/chetan-resume.pdf`;

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	const response: Response = await fetch(url);
	if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

	res.setHeader("Content-Type", "application/pdf");
	res.setHeader("Content-Disposition", "attachment; filename=chetan-resume.pdf");
	res.send(response.body);
};

export default handler;
