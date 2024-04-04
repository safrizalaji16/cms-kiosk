import type { NextApiRequest, NextApiResponse } from "next";
import { layoutService } from "@/services/layoutService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req;

  try {
    if (req.method === "GET") {
      const { data } = await layoutService.getAllLayouts(query);

      return res.status(200).json(data);
    }

    return res.status(405).json("Method not allowed");
  } catch (e) {
    if (e) {
      return res.status(e.code).json(e.message);
    }
    return res.status(500).json("Loh...");
  }
}
