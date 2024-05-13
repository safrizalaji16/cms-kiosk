import type { NextApiRequest, NextApiResponse } from "next";
import { templateService } from "@/services/templateService";
import { cookieName } from "@/constants/api/config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, cookies } = req;
  const id = req.query.id as string;
  const currentCookies = cookies[cookieName];

  if (!currentCookies) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    if (req.method === "GET") {
      const { data } = await templateService.getTemplate(id, currentCookies);
      return res.status(200).json(data);
    }
    if (req.method === "PUT") {
      const { data } = await templateService.editTemplate(
        id,
        req.body,
        currentCookies
      );

      return res.status(201).json(data);
    }

    return res.status(405).json("Method not allowed");
  } catch (e) {
    console.log(e);
    if (e) {
      return res.status(e.code).json(e.message);
    }
    return res.status(500).json("Loh...");
  }
}
