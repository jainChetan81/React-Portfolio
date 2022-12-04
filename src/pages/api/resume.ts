import type { NextApiRequest, NextApiResponse } from "next";

const url: string = `${process.env.URL}/chetan-resume.pdf`;

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const response: Response = await fetch(url);
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=chetan-resume.pdf");
    res.send(response.body);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export default handler;
