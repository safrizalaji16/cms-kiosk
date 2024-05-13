import type { NextApiRequest, NextApiResponse } from "next";

import { deviceService } from "@/services/deviceService";
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
      const { data } = await deviceService.getDevice(id, currentCookies);

      return res.status(200).json(data);
    }
    if (req.method === "PUT") {
      const { data }: any = await deviceService.editDevice(
        id,
        req.body,
        currentCookies
      );

      return res.status(201).json(data);
    }

    return res.status(405).json("Method not allowed");
  } catch (e) {
    if (e) {
      return res.status(e.code).json(e.message);
    }
    return res.status(500).json("Loh...");
  }
}
