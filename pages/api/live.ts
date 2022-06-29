// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { dateFixWindowTime } from "../../src/utils/date";
import BigNumber from "bignumber.js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const matchId: any = req.query.gid;
  const preGameId = new BigNumber(matchId);
  let gameId = BigNumber.sum(preGameId, 1).toString();

  const date = dateFixWindowTime();

  const liveMatchWindow = await fetch(
    `${process.env.API_URL_LIVE}/window/${gameId}?hl=pt-BR&startingTime=${date}`,
    {
      method: "GET",
      headers: { "x-api-key": process.env.API_KEY ?? "" },
    }
  );

  const window = await liveMatchWindow.json();

  const liveMatchDetails = await fetch(
    `${process.env.API_URL_LIVE}/details/${gameId}?hl=pt-BR&startingTime=${date}`,
    {
      method: "GET",
      headers: { "x-api-key": process.env.API_KEY ?? "" },
    }
  );

  const details = await liveMatchDetails.json();

  return res.status(200).json({ window, details });
}
