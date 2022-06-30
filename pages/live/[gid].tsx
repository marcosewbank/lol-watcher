import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import GameDetails from "../../src/components/GameDetails";

type Props = {
  match: any;
};

export const LiveGame = ({ match }: Props) => {
  console.log("🚀 ~ file: [gid].tsx ~ line 12 ~ LiveGame ~ match", match);

  return (
    <div>
      <Link href="/">RETURN</Link>

      <GameDetails
        gameMetadata={match.window?.gameMetadata}
        frames={match.details?.frames}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (req: any) => {
  const { gid } = req.query;

  const liveMatch = await fetch(`http://localhost:3000/api/live?gid=${gid}`, {
    method: "GET",
  });

  console.log(
    "🚀 ~ file: [gid].tsx ~ line 31 ~ constgetServerSideProps:GetServerSideProps= ~ liveMatch",
    liveMatch
  );

  const match = await liveMatch.json();

  return { props: { match } };
};

export default LiveGame;
