import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

import MatchMLB from "./MatchMLB";
import MatchNFL from "./MatchNFL";

interface Props {
  url: string;
  sport: string;
}
  
interface Team {
  id: number
  name: string
  nameCode: string
}

interface MatchData {
  homeTeam: Team
  awayTeam: Team
  id: number
  startTimestamp: number
}

const MatchList = (props : Props) => {
  const [matchs, setMatchs] = useState<Array<MatchData>>([]);

  useEffect(() => {
    fetchFromAPI(props.url)
      .then((data) => setMatchs(data?.events)
    );}, [])
  //     setMatchs(data?.events
  //       .filter((item: MatchData) => {
  //       const date = new Date(item.startTimestamp * 1000)
  //       const now = new Date()
  //       return date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()
  //     })))
  // }, []);

  return (
    <div>
        {matchs.map((item, idx) => {
          const num = idx + 1
          if (props.sport === 'mlb') {
          return (
            <MatchMLB match={item} key={idx} num={num} />
          )} else if (props.sport === 'nfl') {
            return (
            <MatchNFL match={item} key={idx} num={num} />
            )
          }
        })}
    </div>
  );
};

export default MatchList;
