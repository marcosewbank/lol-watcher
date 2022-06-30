import React from "react";
import {
  Wrap,
  WrapItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { GameCard } from "./GameCard";

import type { EventList, Event } from "../../types/global";

type Props = {
  // filteredMatches: EventList;
  filteredMatches: any;
};

export const MatchesWrapper = ({ filteredMatches }: Props) => {
  if (!filteredMatches) {
    return <>no games rn</>;
  }

  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Live</Tab>
          {/* <Tab>Completed</Tab>
          <Tab>Next games</Tab> */}
        </TabList>

        <TabPanels>
          <TabPanel>
            {filteredMatches.live
              ?.filter((event: Event) => event.match)
              .map((event: Event) => {
                return <GameCard key={event.match.id} event={event} />;
              })}
          </TabPanel>
          {/* {Object.entries(filteredMatches)?.map((value) => (
            <TabPanel key={value[0]}>
              {value[1]
                .filter((event: Event) => event.match)
                .map((event: Event) => (
                  <GameCard key={event.match.id} event={event} />
                ))}
            </TabPanel>
          ))} */}
        </TabPanels>
      </Tabs>
    </>
  );
};
