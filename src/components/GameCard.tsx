import React from "react";
import Image from "next/image";
import { HStack, Box, Badge, Tooltip, Link } from "@chakra-ui/react";

import type { Team, Event } from "../../types/global";

type Props = {
  event: Event;
};

export const GameCard = ({ event }: Props) => {
  return (
    <HStack spacing="24px" padding="1rem" borderWidth="1px" p="2rem">
      <span>{event.league.name}</span>

      <Link href={`/live/${event.match.id}`}>
        {event.match.teams.map((team: Team) => (
          <Box
            key={team.code}
            display="flex"
            flexDirection="row"
            alignItems="space-between"
          >
            <Tooltip label={team.name}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                shadow="md"
                borderWidth="1px"
                padding="2rem"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  src={team.image}
                  alt={team.name}
                  width="100px"
                  height="100px"
                />
                <Badge borderRadius="full" px="4" mt="4">
                  {team.code}
                </Badge>
              </Box>
            </Tooltip>
          </Box>
        ))}
      </Link>
    </HStack>
  );
};
