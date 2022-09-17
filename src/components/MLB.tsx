import React from 'react'
import TeamList from './TeamList'

const MLB = () => {
  return (
    <div className='text-zinc-800'>
      <TeamList 
        url='baseball/tournament/11205/season/39143/matches/next/0'
        sport='mlb'
      />
    </div>
  )
}

export default MLB