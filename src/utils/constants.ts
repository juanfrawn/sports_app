interface Teams {
    name: string
    color: string
    logo: string
}

interface Forecast {
    name: string
    description: string
}

export const teams: Teams[] = [
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