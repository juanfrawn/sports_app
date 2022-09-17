import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

import Match from "./Match";

const MatchList = () => {
  // https://allsportsapi2.p.rapidapi.com/api/baseball/tournament/11205/season/39143/matches/next/0
  const [matchs, setMatchs] = useState<Array<Match>>([]);
  
  interface Team {
    id: number
    name: string
    nameCode: string
}

  interface Match {
    homeTeam: Team
    awayTeam: Team
    id: number
    startTimestamp: number
  }

  useEffect(() => {
    fetchFromAPI(
      `baseball/tournament/11205/season/39143/matches/next/0`
    ).then((data) =>
      setMatchs(data?.events.filter((item: Match) => {
        const date = new Date(item.startTimestamp * 1000)
        const now = new Date()
        return date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()
      })))
  }, []);

  return (
    <div>
        {matchs.map((item, idx) => {
          const num = idx + 1
          return (
            <Match match={item} key={idx} num={num} />
          )
        })}
    </div>
  );
};

export default MatchList;
