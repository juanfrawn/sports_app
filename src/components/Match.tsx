import React from "react";
import team1 from "../img/team1.png";
import team2 from "../img/team2.png";

const Match = () => {
  return (
    <>
      <div className="w-full grid grid-cols-teams">
        <div className="bg-gradient-to-l from-rose-700 to-zinc-900 p-10 text-zinc-300 relative overflow-hidden rounded-r-lg">
          <img
            className="absolute -top-20 -left-10 w-80 opacity-20"
            src={team1}
            alt={team1}
          />
          <div className="flex items-center text-xl z-10">
            <div className="w-18 mr-1 mb-1 z-10">
              <img src={team1} alt={team1} />
            </div>

            <div className="z-10 text-3xl font-bold">
              <h2>Philladelphia Phillies</h2>
              <p className="text-lg text-zinc-300 opacity-90">Juan Ramirez <span>12 - 2</span></p>
            </div>
          </div>
        </div>

        <div className="text-center text-2xl text-zinc-300 font-bold my-auto">
          <p>14:00</p>
        </div>

        <div className="bg-gradient-to-r from-blue-700 to-gray-900 relative overflow-hidden p-10 text-zinc-300 rounded-l-lg">
        <img
            className="absolute -top-20 -right-10 w-80 opacity-20"
            src={team2}
            alt={team2}
          />
          <div className="flex items-center text-xl font-bold justify-end">
            <div className="z-10 text-3xl text-end">
              <h2>Miami Marlins</h2>
              <p className="text-lg text-zinc-300 opacity-90"><span>12 - 2 </span>Juan Ramirez</p>
            </div>
            <div className="w-18 ml-2 mb-1 z-10">
              <img src={team2} alt={team2} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-zinc-300 text-center font-bold text-4xl py-8">
        <p>Phillies win</p>
        <p></p>
      </div>
    </>
  );
};

export default Match;
