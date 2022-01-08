import stream from "stream";
import { promisify } from "util";
import fetch from "node-fetch";
import type { NextApiRequest, NextApiResponse } from "next";
// /pages/api/getAPI.js

const pipeline = promisify(stream.pipeline);
const url = "http://localhost:3000/chetan-resume.pdf";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const response = await fetch(url); // replace this with your API call & options
	if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

	res.setHeader("Content-Type", "application/pdf");
	res.setHeader("Content-Disposition", "attachment; filename=chetan-resume.pdf");
	await pipeline(response.body, res);
};

export default handler;
