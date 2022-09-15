import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const MatchList = () => {
  // Soccer: 1 // Basketball: 3 // Hockey: 4 // Football: 5
  // Baseball ID: 6
  // MLB ID: "Y3LHwBCm"
  // MLB STAGE: ""MuHAcNJm""
  // MLB Match: tournaments/fixtures?tournament_stage_id=MuHAcNJm&locale=en_INT&page=1
  // MLB Data: tournaments/stages/data?tournament_stage_id=MuHAcNJm&locale=en_INT
  // https://allsportsapi2.p.rapidapi.com/api/baseball/tournament/11205/season/39143/matches/next/0
  interface Match {
    AN: string;
    AWAY_NAME: string;
    AWAY_IMAGES: string[];
    HOME_NAME: string;
    HOME_IMAGES: string[];
    EVENT_ID: string;
    SHORTNAME_AWAY: string;
    SHORTNAME_HOME: string;
    START_TIME: number;
  }
  const [matchs, setMatchs] = useState<Array<Match>>([]);

  useEffect(() => {
    fetchFromAPI(
      `tournaments/fixtures?tournament_stage_id=MuHAcNJm&locale=en_INT&page=1`
    ).then(({ DATA }) =>
      setMatchs(DATA[0]?.EVENTS.filter((item: Match) => item.AN === "y"))
    );
  }, []);

  return (
    <div>
      {matchs.map(
        ({
          HOME_IMAGES,
          SHORTNAME_HOME,
          HOME_NAME,
          AWAY_NAME,
          SHORTNAME_AWAY,
          AWAY_IMAGES,
          START_TIME,
        }) => {
            const date = new Date(START_TIME * 1000);
          return (
            <div>
              <div className="flex w-full justify-center py-10">
                <div className="flex items-center text-xl font-bold">
                  <div className="w-8 mr-2 mb-1">
                    <img src={HOME_IMAGES[0]} alt={HOME_NAME} />
                  </div>
                  {SHORTNAME_HOME} {HOME_NAME}
                </div>

                <div className="flex items-center text-xl font-bold">
                  {AWAY_NAME} {SHORTNAME_AWAY}
                  <div className="w-8 ml-2 mb-1">
                    <img src={AWAY_IMAGES[0]} alt={AWAY_NAME} />
                  </div>
                </div>
              </div>
              <p>
                {date.getHours()}:
                {date.getMinutes() <= 9
                  ? `0${date.getMinutes()}`
                  : date.getMinutes()}
              </p>
            </div>
          );
        }
      )}
    </div>
  );
};

export default MatchList;
