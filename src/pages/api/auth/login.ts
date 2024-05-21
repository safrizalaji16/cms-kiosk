import type { NextApiRequest, NextApiResponse } from "next";
import { authService } from "@/services/authService";
import { serialize } from "cookie";
import { cookieName } from "@/constants/api/config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password }: { username: string; password: string } =
    req.body;

  try {
    if (req.method === "POST") {
      const { data } = await authService.login({ username, password });
      const now = new Date();
      // active for 30 minutes
      // note that this session will not be updated, even if the user keeps navigating/is still active.
      // TODO: update the cookie to keep the cookie updated when the user is still active
      const oneDayInMillis = 24 * 60 * 60 * 1000; // Satu hari dalam milidetik
      const expiryTimestamp = now.getTime() + oneDayInMillis; // Menambahkan satu hari ke waktu saat ini

      now.setTime(expiryTimestamp);

      const cookie = serialize(cookieName, data.token, {
        httpOnly: true,
        path: "/",
        sameSite: "none",
        secure: true,
        expires: now,
      });

      res.setHeader("Set-Cookie", cookie);

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
