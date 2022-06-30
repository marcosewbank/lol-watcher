import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  team: any;
  teamColor: string;
};

export const TeamCard = ({ team, teamColor }: Props) => {
  return (
    <Box mr="5rem">
      {teamColor.toUpperCase()} TEAM:
      <Box>
        <p>Barons: {team?.barons ?? 0}</p>
        <p>
          Dragons:
          {team?.dragons.map((dragon: string) => {
            return dragon;
          }) ?? 0}
        </p>
        <p>inhibitors: {team?.inhibitors ?? 0}</p>
        <p>totalGold: {team?.totalGold ?? 0}</p>
        <p>totalKills: {team?.totalKills ?? 0}</p>
        <p>towers: {team?.towers ?? 0}</p>
      </Box>
    </Box>
  );
};
