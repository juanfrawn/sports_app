interface Teams {
    name: string
    color: string
    logo: string
}

interface Forecast {
    name: string
    description: string
}

export const MLB_TEAMS: Teams[] = [
    { name: 'Arizona Diamondbacks', color: 'from-rose-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/Yg133Fg5-pOFr9UWT.png' },
    { name: 'Atlanta Braves', color: 'from-rose-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/IPmhSoEa-8QWFJMSI.png' },
    { name: 'Baltimore Orioles', color: 'from-amber-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/dWIh4Til-8tgGA6Sj.png' },
    { name: 'Boston Red Sox', color: 'from-red-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/E92vTtZA-Qk3h66ge.png' },
    { name: 'Cincinnati Reds' , color: 'from-red-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/tUgxR1zB-WIS1nC2M.png'},
    { name: 'Cleveland Guardians', color: 'from-red-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/CMe9zXzS-8I4qQ8j7.png' },
    { name: 'Chicago Cubs', color: 'from-blue-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/nFvRbjHG-A9R5oWHS.png' },
    { name: 'Chicago White Sox', color: 'from-stone-900 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/rHrt6LAr-IyW3lxkm.png' },
    { name: 'Colorado Rockies', color: 'from-purple-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/nizqvCEa-dtxHhmPe.png' },
    { name: 'Detroit Tigers', color: 'from-blue-900 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/WC5CNNGG-p4u2Y9Kc.png' },
    { name: 'Houston Astros', color: 'from-orange-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/KUkA1be5-CIDXtjQq.png' },
    { name: 'Kansas City Royals', color: 'from-blue-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/dWjjpIxS-OYOMQIIl.png' },
    { name: 'Los Angeles Angels', color: 'from-red-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/jmLVKEcM-jXQJpflC.png' },
    { name: 'Los Angeles Dodgers', color: 'from-blue-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/YeWStKhl-Y3O2GjH2.png' },
    { name: 'Miami Marlins', color: 'from-blue-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/riFAKCzS-vu2We3Ot.png' },
    { name: 'Milwaukee Brewers', color: 'from-yellow-600 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/nitvFMWg-S2o92yip.png' },
    { name: 'Minnesota Twins', color: 'from-rose-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/48zwVQil-UyDFPgoI.png' },
    { name: 'New York Yankees', color: 'from-blue-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/plT1Aqil-MuDZddMN.png' },
    { name: 'New York Mets', color: 'from-amber-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/ID1PVAjl-GQdeWaCO.png' },
    { name: 'Oakland Athletics', color: 'from-green-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/OnC9Vnjl-GvhQT6jQ.png' },
    { name: 'Pittsburgh Pirates', color: 'from-yellow-500 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/4jc6udhl-WIS1nC2M.png' },
    { name: 'Philadelphia Phillies', color: 'from-red-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/AcX8PwzB-jqZ7Lrb6.png' },
    { name: 'San Diego Padres', color: 'from-blue-900 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/YsFz7vWg-8SJIC8GR.png' },
    { name: 'San Francisco Giants', color: 'from-orange-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/faj1OHdM-tSv9f9fq.png' },
    { name: 'Seattle Mariners', color: 'from-teal-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/YPyyksFG-GKwhPQbs.png' },
    { name: 'St. Louis Cardinals', color: 'from-red-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/6cQJ9nAr-lS4l7nvk.png' },
    { name: 'Tampa Bay Rays', color: 'from-blue-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/lGlxbdyB-foDUJA54.png' },
    { name: 'Texas Rangers', color: 'from-red-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/jq5P2KYg-K6LYNG27.png' },
    { name: 'Toronto Blue Jays', color: 'from-sky-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/ncOoVXBr-rPtfnC5s.png' },
    { name: 'Washington Nationals', color: 'from-red-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/niIgU2Ca-bXjacXXH.png' },
]

export const NFL_TEAMS: Teams[] = [
    { name: 'Arizona Cardinals', color: 'from-rose-600 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/dE1kFhDa-ttp49BeG.png' },
    { name: 'Atlanta Falcons', color: 'from-rose-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/be5PNHyB-vaxHzlfF.png' },
    { name: 'Baltimore Ravens', color: 'from-indigo-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/dUe4S2il-WbCyOAA9.png' },
    { name: 'Buffalo Bills', color: 'from-blue-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/WxLvPwFa-0WTw39Yq.png' },
    { name: 'Carolina Panthers', color: 'from-sky-500 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/vXZIzSzS-UueFGS2q.png' },
    { name: 'Chicago Bears', color: 'from-orange-900 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/Wr2txCEG-GpRo1m3d.png' },
    { name: 'Cincinnati Bengals', color: 'from-orange-600 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/KI7ZD8ZA-h8DXOje3.png' },
    { name: 'Cleveland Browns', color: 'from-amber-900 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/2BODDmFa-OOLKJfYB.png' },
    { name: 'Dallas Cowboys', color: 'from-blue-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/2DROi6Wg-EHETPWuc.png' },
    { name: 'Denver Broncos', color: 'from-orange-600 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/bs8k9qcM-0WTw39Yq.png' },
    { name: 'Detroit Lions', color: 'from-sky-500 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/zkjAStEa-bkMjUoXr.png' },
    { name: 'Green Bay Packers', color: 'from-emerald-900 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/hpgNlTf5-08wDyUv9.png' },
    { name: 'Houston Texans', color: 'from-state-900 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/t0j6ujYA-hfI2RqH1.png' },
    { name: 'Indianapolis Colts', color: 'from-blue-800 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/MN9imLGG-MHv9xAP2.png' },
    { name: 'Jacksonville Jaguars', color: 'from-yellow-500 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/CppQTQil-OpiRDQn2.png' },
    { name: 'Kansas City Chiefs', color: 'from-red-600 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/0ly3wzFG-63gJFnIk.png' },
    { name: 'Las Vegas Raiders', color: 'from-black to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/rD2Lyqil-WApOJwc2.png' },
    { name: 'Los Angeles Chargers', color: 'from-sky-500 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/d0vpBaCr-dhvVZH1I.png' },
    { name: 'Los Angeles Rams', color: 'from-blue-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/xKV01zyS-vRIOhJcs.png' },
    { name: 'Miami Dolphins' , color: 'from-cyan-500 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/YeHJQVeM-IZSEaq12.png'},
    { name: 'Minnesota Vikings', color: 'from-violet-900 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/biIGYHdM-djua4Slc.png' },
    { name: 'New England Patriots', color: 'from-blue-900 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/6BZuUlhl-zDKfT5nk.png' },
    { name: 'New Orleans Saints', color: 'from-amber-400 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/MDbgCuCr-A1J7RkG8.png' },
    { name: 'New York Giants', color: 'from-blue-800 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/rek8GixS-zTW0UOan.png' },
    { name: 'New York Jets', color: 'from-emerald-900 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/nZEMYPAr-zuLZEwVN.png' },
    { name: 'Philadelphia Eagles', color: 'from-teal-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/p41c4aCr-ltAqMluM.png' },
    { name: 'Pittsburgh Steelers', color: 'from-yellow-400 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/4YD54NCr-08wDyUv9.png' },
    { name: 'San Francisco 49ers', color: 'from-red-700 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/CMor3wZg-E3JbSP1e.png' },
    { name: 'Seattle Seahawks', color: 'from-blue-900 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/r3Fomsf5-KWr88VAM.png' },
    { name: 'Tampa Bay Buccaneers', color: 'from-red-600 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/Ym4bBOeM-pfhNE6Xe.png' },
    { name: 'Tennessee Titans', color: 'from-blue-800 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/nFpHjpg5-IkyLZ79L.png' },
    { name: 'Washington Commanders', color: 'from-red-900 to-zinc-900', logo: 'https://www.flashscore.com/res/image/data/KbmUMPg5-hQUb4kea.png' },
]

export const forecast: Forecast[] = [
    {name: 'Pronosticos', description: ''},
    {name: 'Guardians Win', description: 'Cleveland are 7-1 SU in their last 8 games'},
    {name: 'Cardinals Win', description: 'Cincinnati are 6-12 SU in their last 18 games against St. Louis'},
    {name: 'Under 10', description: "The total has gone UNDER in 9 of Colorado's last 11 games on the road."},
    {name: 'Blue Jays Win', description: 'Toronto are 12-4 SU in their last 16 games.'},
    {name: 'Marlins Win', description: 'Washington are 1-8 SU in their last 9 games when playing at home against Miami.'},
    {name: 'Red Sos Win', description: 'Kansas City are 1-6 SU in their last 7 games'},
    {name: 'White Sox Win', description: 'White Sox are 11-5 SU in their last 16 games'},
    {name: 'Under 8', description: "The total has gone UNDER in 9 of Texas' last 13 games"},
    {name: 'Over 7', description: "The total has gone OVER in 5 of Milwaukee's last 7 games against NY Yankees"},
    {name: 'Astros Win', description: 'Houston are 6-0 SU in their last 6 games'},
    {name: 'Mets Win', description: 'Mets are 7-2 SU in their last 9 games when playing at home against Pittsburgh'},
    {name: 'Guardians Win', description: 'Cleveland are 7-1 SU in their last 8 games'},
    {name: 'Cardinals Win', description: 'Cincinnati are 6-12 SU in their last 18 games against St. Louis'},
    {name: 'Braves Win', description: 'Atlanta are 10-4 SU in their last 14 games'},
    {name: 'Under 7.5', description: "The total has gone UNDER in 5 of Arizona's last 7 games against an opponent in the National League"},
    {name: 'Dodgers Win', description: 'Dodgers are 11-1 SU in their last 12 games against Giants'},
    {name: 'Mariners Win', description: 'Seattle are 4-1 SU in their last 5 games against Angels'},
]