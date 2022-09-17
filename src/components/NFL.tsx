import React from 'react'
import { useEffect } from "react";
import TeamList from './TeamList'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e91c9fcb1dmshab38d52978f2d2bp197e1bjsnba6ec0751407',
		'X-RapidAPI-Host': 'allsportsapi2.p.rapidapi.com'
	}
};


const NFL = () => {
  
  return (
    <div className='text-zinc-800'>
      <h1></h1>
      <TeamList 
        url='american-football/tournament/9464/season/41528/matches/next/0' 
        sport='nfl'
      />
    </div>
  )
}

export default NFL