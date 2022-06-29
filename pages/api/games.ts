// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const getSchedule = await fetch(
    `${process.env.API_URL_PERSISTED}/getSchedule?hl=pt-BR`,
    {
      method: "GET",
      redirect: "follow",
      headers: { "x-api-key": process.env.API_KEY ?? "" },
    }
  );
  const schedule = await getSchedule.json();

  const getLiveMatches = await fetch(
    `${process.env.API_URL_PERSISTED}/getLive?hl=pt-BR`,
    {
      method: "GET",
      redirect: "follow",
      headers: { "x-api-key": process.env.API_KEY ?? "" },
    }
  );
  const liveMatches = await getLiveMatches.json();

  return res.status(200).json({
    allMatches: schedule.data.schedule.events,
    liveMatches: liveMatches.data.schedule.events,
  });
}
