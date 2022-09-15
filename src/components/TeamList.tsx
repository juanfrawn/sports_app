import { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const MatchList = () => {
    // Soccer: 1 // Basketball: 3 // Hockey: 4 // Football: 5
    // Baseball ID: 6
       // MLB ID: "Y3LHwBCm"
       // MLB STAGE: ""MuHAcNJm""
       // MLB Match: tournaments/fixtures?tournament_stage_id=MuHAcNJm&locale=en_INT&page=1
       // MLB Data: tournaments/stages/data?tournament_stage_id=MuHAcNJm&locale=en_INT
    interface Match {
        AWAY_NAME: string,
        AWAY_IMAGES: string[],
        HOME_NAME: string,
        HOME_IMAGES: string[]
    }
       const [matchs, setMatchs] = useState<Array<Match>>([])

    useEffect(() => {
        fetchFromAPI(`tournaments/fixtures?tournament_stage_id=MuHAcNJm&locale=en_INT&page=1`)
        .then(({ DATA }) => setMatchs(DATA[0]?.EVENTS))
    
    }, []);


  return (
    <div>
        {matchs.map(match => (
            <div className='mb-10'>
                <div>
                    <div>
                        <img src={match.HOME_IMAGES[0]} alt="" />
                    </div>
                    {match.HOME_NAME}
                </div>
                <div>
                    <div>
                        <img src={match.AWAY_IMAGES[0]} alt="" />
                    </div>
                    {match.AWAY_NAME}
                </div>
            </div>
        ))}
    </div>
  )
}

export default MatchList