import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  gameMetadata: any;
};

export const GameDetails = ({ gameMetadata }: Props) => {
  if (!gameMetadata) {
    return <>sad</>;
  }

  Object.values(gameMetadata)
    .filter((value) => typeof value !== "string")
    .map((teams) => {
      console.log("🚀 ~ file: GameDetails.tsx ~ line 14 ~ .map ~ teams", teams);

      const {} = teams.participantMetadata;

      return <>team</>;
    });

  return (
    <Box>
      <Box>
        Blue team
        <Box>{}</Box>
      </Box>
      <Box>Red team</Box>
    </Box>
  );
};

export default GameDetails;
