import type { NextApiRequest, NextApiResponse } from "next";
import { layoutService } from "@/services/layoutService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req;
  const id = req.query.id;
  const { title, code, device } = req.body;

  try {
    if (req.method === "GET") {
      const { data } = await layoutService.getLayout(query, id);

      return res.status(200).json(data);
    }
    if (req.method === "PUT") {
      const payload = {
        id,
        data: {
          title,
          code: [
            {
              type: "code",
              children: [
                {
                  text: code,
                  type: "text",
                },
              ],
            },
          ],
          device,
        },
      };

      await layoutService.editLayout(payload);

      return res.status(201).json("Success");
    }

    return res.status(405).json("Method not allowed");
  } catch (e) {
    if (e) {
      return res.status(e.code).json(e.message);
    }
    return res.status(500).json("Loh...");
  }
}
