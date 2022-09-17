import { useEffect, useState } from "react";

import { fetchFromAPI } from "../utils/fetchFromAPI";

import { NFL_TEAMS, forecast } from '../utils/constants'

import football from '../img/american-football_1f3c8.png'
import flame from '../img/fire_1f525.png'

interface Team {
    id: number
    name: string
    nameCode: string
}

interface TeamForm {
  form: string[]
  position: number
  value: string
}

interface Match {
    homeTeam: Team
    awayTeam: Team
    id: number
    startTimestamp: number
}

interface Props {
    match: Match
    key: number
    num: number
}

interface Form {
  awayTeam: TeamForm
  homeTeam: TeamForm
  label: string
}

interface Pitcher {
  id: number
  firstName: string
  lastName: string
  name: string
  shortName: string
}

interface Player {
  player: Pitcher
  position: string
}

interface LineupData {
  goalkeeperColor: string
  playerColor: string
  players: Player[]
}

interface Lineups {
  away: LineupData
  confirmed: boolean
  home: LineupData
}

const MatchNFL = ( props : Props ) => {
    const [form, setForm] = useState<Form>({
      awayTeam: {} as TeamForm,
      homeTeam: {} as TeamForm,
      label: ''
    })
    const [pitcher, setPitcher] = useState<Lineups>({
      away: {} as LineupData,
      confirmed: false,
      home: {} as LineupData
    })
    
    const home = NFL_TEAMS.find(team => team.name === props.match.homeTeam.name)
    const away = NFL_TEAMS.find(team => team.name === props.match.awayTeam.name)
    
    const handleInfo = (team: number) : void => {
      fetchFromAPI(`american-football/match/${props.match.id}/form`)
        .then((data) => setForm(data))
    }

    const handlePosition = (position: number) : string => {
      if(position) {
      if(position === 1) {
        return '1st'
      } else if(position === 2) {
        return '2nd'
      } else if(position === 3) {
        return '3rd'
      } else {
        return `${position}th`
      } } else {
        return ''
      }
    }

  return (
    <>
      <div className="w-full grid grid-cols-teams font-poppins" onClick={() => handleInfo(props.match.id)}>
        <div className={`bg-gradient-to-l text-zinc-300 ${home?.color} p-12 relative overflow-hidden rounded-r-lg`}>
          <img
            className="absolute -top-20 -left-10 w-96 opacity-10"
            src={home?.logo}
            alt={props.match.homeTeam.name}
          />
          <div className="flex items-center text-xl z-10">
            <div className="w-18 mr-4 mb-1 z-10">
              <img src={home?.logo} alt={props.match.homeTeam.name} className="w-32" />
            </div>

            <div className="z-10 text-4xl font-bold">
              <h2 className="flex items-end">{props.match.homeTeam.name}<span className="ml-3 text-2xl text-slate-400">{handlePosition(form.homeTeam.position)}</span></h2>
              <p className="text-2xl mb-2">{form?.homeTeam?.value}</p>
              <div className="flex text-center gap-x-2">
                {form?.homeTeam?.form?.map(item => {
                  return (
                    <div className={`${item === 'W' ? 'bg-green-600' : 'bg-red-600'} text-sm p-1 rounded-md w-7`}>{item}</div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-2xl text-zinc-300 font-bold my-auto">
            <p>
              {new Date(props.match.startTimestamp * 1000).getHours()}:
              {new Date(props.match.startTimestamp * 1000).getMinutes() <= 9
                ? `0${new Date(props.match.startTimestamp * 1000).getMinutes()}`
                : new Date(props.match.startTimestamp * 1000).getMinutes()}
            </p>
        </div>

        <div className={`bg-gradient-to-r ${away?.color} relative overflow-hidden p-12 text-zinc-300 rounded-l-lg`}>
        <img
            className="absolute -top-20 -right-10 w-96 opacity-10"
            src={away?.logo}
            alt={props.match.awayTeam.name}
          />
          <div className="flex items-center text-xl font-bold justify-end">
            <div className="z-10 text-4xl text-end">
              <h2 className="flex items-center"><span className="mr-3 text-2xl text-slate-400">{handlePosition(form.awayTeam.position)}</span>{props.match.awayTeam.name}</h2>
              <p className="text-2xl mb-2">{form?.awayTeam?.value}</p>
              <div className="flex text-center justify-end gap-x-2">
                {form?.awayTeam?.form?.map(item => {
                  return (
                    <div className={`${item === 'W' ? 'bg-green-600' : 'bg-red-600'} text-sm p-1 rounded-md w-7`}>{item}</div>
                  )
                })}
              </div>
            </div>
            <div className="w-18 ml-4 mb-1 z-10">
              <img src={away?.logo} alt={props.match.awayTeam.name} className="w-32" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-zinc-300 text-center font-bold text-4xl pb-12 font-poppins">
        <div className="flex justify-center text-2xl gap-x-28">
          <p className="bg-gradient-to-l from-zinc-800 to-zinc-900 w-1/2 py-2 rounded-br-3xl">{pitcher?.home?.players?.find(item => item.position === "P")?.player.name || 'No pitcher'}</p>
          <p className="bg-gradient-to-r from-zinc-800 to-zinc-900 w-1/2 py-2 rounded-bl-3xl">{pitcher?.away?.players?.find(item => item.position === "P")?.player.name || 'No pitcher'}</p>
        </div>
        <p className="mt-8 mb-3 text-6xl flex items-center justify-center">
          <img src={football} className="w-10 mx-4" alt="" />
          {forecast[props?.num]?.name} 
          <img src={football} className="w-10 mx-4" alt="" />
        </p>
        <p className="text-2xl font-semibold flex items-center justify-center"> 
          <img src={flame} className="w-10 mx-4" alt="" />
          { forecast[props?.num]?.description } 
          <img src={flame} className="w-10 mx-4" alt="" />
        </p>
      </div>
    </>
  );
};

export default MatchNFL;
