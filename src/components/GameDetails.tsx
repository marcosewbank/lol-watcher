import { Box } from "@chakra-ui/react";
import React from "react";
import { TeamCard } from "./TeamCard";

type Props = {
  gameMetadata: any;
  frames: any;
};

export const GameDetails = ({ gameMetadata, frames }: Props) => {
  console.log(
    "🚀 ~ file: GameDetails.tsx ~ line 11 ~ GameDetails ~ frames",
    frames
  );
  if (!gameMetadata) {
    return <>sad</>;
  }

  const { blueTeam, redTeam, gameState } = frames;

  return (
    <Box display="flex" flexDirection="row">
      {gameState}
      <TeamCard team={blueTeam} teamColor="blue" />
      <TeamCard team={redTeam} teamColor="red" />

      {/* <Box>
        Red team
        <Box>
          PLAYER DATA:
          {gameMetadata["redTeamMetadata"].participantMetadata.map(
            ({
              championId,
              participantId,
              role,
              summonerName,
              esportsPlayerId,
            }: any) => {
              return (
                <Box key={esportsPlayerId} mb="2rem">
                  <p>championId: {championId}</p>
                  <p>participantId: {participantId}</p>
                  <p>role: {role}</p>
                  <p>summonerName: {summonerName}</p>
                </Box>
              );
            }
          )}
        </Box>
      </Box> */}
    </Box>
  );
};

export default GameDetails;
