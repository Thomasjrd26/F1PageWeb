// APP F1 2026 V11 — REORGANISATION COMPLETE DE L'ARCHITECTURE ET DES ASSETS
const openF1Headshots = {};

// CHARGEMENT EN CASCADE SANS AUCUNE IMAGE D'UNSPLASH INPERTINENTE OU NON F1
function loadImageWithCascade(imgElement, sourcesList) {
  if (!imgElement || !sourcesList || sourcesList.length === 0) return;

  let sourceIndex = 0;

  function tryNextSource() {
    if (sourceIndex >= sourcesList.length) return;
    const currentUrl = sourcesList[sourceIndex++];

    imgElement.onerror = () => {
      tryNextSource();
    };
    imgElement.src = currentUrl;
  }

  tryNextSource();
}

// CARTE DE DÉPANNAGE ÉLÉGANTE ET 100% SPÉCIFIQUE AU PILOTE (SI AUCUN CDN COMPATIBLE EN ENTRÉE)
function generateF1DriverBadge(driverName, driverNum, teamName, accentColor) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 650" width="100%" height="100%">
    <defs>
      <linearGradient id="bgGrad_${driverNum}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.85"/>
        <stop offset="100%" stop-color="#0e111a" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" rx="24" fill="url(#bgGrad_${driverNum})" stroke="${accentColor}" stroke-width="4"/>
    <text x="450" y="240" font-family="'Titillium Web', sans-serif" font-weight="900" font-size="280" fill="#ffffff" opacity="0.08" text-anchor="end">${driverNum}</text>
    <circle cx="250" cy="230" r="110" fill="none" stroke="${accentColor}" stroke-width="8" opacity="0.4"/>
    <text x="250" y="260" font-family="'Titillium Web', sans-serif" font-weight="900" font-size="90" fill="#ffffff" text-anchor="middle">#${driverNum}</text>
    <rect x="40" y="480" width="420" height="110" rx="16" fill="rgba(14,17,26,0.9)" stroke="${accentColor}" stroke-width="2"/>
    <text x="250" y="525" font-family="'Inter', sans-serif" font-weight="900" font-size="22" fill="#ffffff" text-anchor="middle">${driverName.toUpperCase()}</text>
    <text x="250" y="560" font-family="'Titillium Web', sans-serif" font-weight="700" font-size="16" fill="${accentColor}" text-anchor="middle">${teamName.toUpperCase()}</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function generateF1CarBadge(teamName, accentColor) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300" width="100%" height="100%">
    <rect width="100%" height="100%" rx="16" fill="#161c28" stroke="${accentColor}" stroke-width="3"/>
    <text x="400" y="140" font-family="'Titillium Web', sans-serif" font-weight="900" font-size="36" fill="#ffffff" text-anchor="middle" letter-spacing="3">MONOPLACE F1 2026</text>
    <text x="400" y="190" font-family="'Inter', sans-serif" font-weight="800" font-size="22" fill="${accentColor}" text-anchor="middle">${teamName.toUpperCase()}</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function generateF1HelmetBadge(driverNum, accentColor) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">
    <circle cx="150" cy="150" r="130" fill="#161c28" stroke="${accentColor}" stroke-width="4"/>
    <text x="150" y="165" font-family="'Titillium Web', sans-serif" font-weight="900" font-size="70" fill="#ffffff" text-anchor="middle">#${driverNum}</text>
    <text x="150" y="210" font-family="'Inter', sans-serif" font-weight="800" font-size="14" fill="${accentColor}" text-anchor="middle">CASQUE OFFICEL</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// RETOURNER SEULEMENT DES ASSETS F1 SPECIFIQUES ET PERTINENTS
function getDriverImageSources(driver) {
  const sources = [];

  // 1. OpenF1 Live API CDN
  if (openF1Headshots[driver.num]) {
    sources.push(openF1Headshots[driver.num]);
  }

  // 2. Wikimedia Commons Cropped F1 Driver Photos
  const wikiMap = {
    hamilton: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2022_Monaco_GP.jpg/600px-Lewis_Hamilton_2022_Monaco_GP.jpg",
    verstappen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Max_Verstappen_2017_Malaysia_1.jpg/600px-Max_Verstappen_2017_Malaysia_1.jpg",
    leclerc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Charles_Leclerc_2022_Monaco_GP.jpg/600px-Charles_Leclerc_2022_Monaco_GP.jpg",
    norris: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Lando_Norris_2022_Monaco_GP.jpg/600px-Lando_Norris_2022_Monaco_GP.jpg",
    russell: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/George_Russell_2022_Monaco_GP.jpg/600px-George_Russell_2022_Monaco_GP.jpg",
    alonso: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Fernando_Alonso_2022_Monaco_GP.jpg/600px-Fernando_Alonso_2022_Monaco_GP.jpg",
    sainz: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Carlos_Sainz_Jr._2022_Monaco_GP.jpg/600px-Carlos_Sainz_Jr._2022_Monaco_GP.jpg",
    gasly: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pierre_Gasly_2022_Monaco_GP.jpg/600px-Pierre_Gasly_2022_Monaco_GP.jpg",
    albon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Alex_Albon_2022_Monaco_GP.jpg/600px-Alex_Albon_2022_Monaco_GP.jpg",
    ocon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Esteban_Ocon_2022_Monaco_GP.jpg/600px-Esteban_Ocon_2022_Monaco_GP.jpg",
    hulkenberg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Nico_H%C3%BClkenberg_2017_Malaysia_1.jpg/600px-Nico_H%C3%BClkenberg_2017_Malaysia_1.jpg",
    tsunoda: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Yuki_Tsunoda_2022_Monaco_GP.jpg/600px-Yuki_Tsunoda_2022_Monaco_GP.jpg"
  };

  if (wikiMap[driver.id]) {
    sources.push(wikiMap[driver.id]);
  }

  // 3. GitHub Open F1 Public API repo
  sources.push(`https://raw.githubusercontent.com/marcussacana/f1-api/main/public/images/drivers/${driver.id}.png`);

  // 4. Badge F1 vectoriel sur-mesure (Garantit 0% d'image hors-sujet !)
  sources.push(generateF1DriverBadge(`${driver.first} ${driver.last}`, driver.num, driver.team, driver.accent));

  return sources;
}

function getHelmetImageSources(driver) {
  return [
    `https://raw.githubusercontent.com/marcussacana/f1-api/main/public/images/helmets/${driver.id}.png`,
    generateF1HelmetBadge(driver.num, driver.accent)
  ];
}

function getCarImageSources(teamId) {
  const teamObj = constructors.find(c => c.id === teamId);
  const teamName = teamObj ? teamObj.name : teamId;
  const accent = teamObj ? teamObj.accent : '#00D2BE';

  const wikiCars = {
    mercedes: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mercedes_F1_W13_2022_Monaco_GP.jpg/1200px-Mercedes_F1_W13_2022_Monaco_GP.jpg",
    ferrari: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ferrari_F1-75_2022_Monaco_GP.jpg/1200px-Ferrari_F1-75_2022_Monaco_GP.jpg",
    redbull: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Red_Bull_RB18_2022_Monaco_GP.jpg/1200px-Red_Bull_RB18_2022_Monaco_GP.jpg",
    mclaren: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/McLaren_MCL36_2022_Monaco_GP.jpg/1200px-McLaren_MCL36_2022_Monaco_GP.jpg",
    alpine: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Alpine_A522_2022_Monaco_GP.jpg/1200px-Alpine_A522_2022_Monaco_GP.jpg",
    astonmartin: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Aston_Martin_AMR22_2022_Monaco_GP.jpg/1200px-Aston_Martin_AMR22_2022_Monaco_GP.jpg"
  };

  const sources = [];
  if (wikiCars[teamId]) sources.push(wikiCars[teamId]);
  sources.push(`https://raw.githubusercontent.com/marcussacana/f1-api/main/public/images/cars/${teamId}.png`);
  sources.push(generateF1CarBadge(teamName, accent));

  return sources;
}

function getLogoImageSources(teamId) {
  return [
    `https://raw.githubusercontent.com/marcussacana/f1-api/main/public/images/teams/${teamId}.png`,
    generateF1CarBadge(teamId, '#00D2BE')
  ];
}

// INITIALISATION EN ARRIÈRE PLAN D'OPENF1
async function initOpenF1Data() {
  try {
    const res = await fetch('https://api.openf1.org/v1/drivers?session_key=latest');
    if (res.ok) {
      const data = await res.json();
      data.forEach(d => {
        if (d.driver_number && d.headshot_url) {
          openF1Headshots[d.driver_number] = d.headshot_url;
        }
      });
      renderDriversCarouselTrack();
    }
  } catch (e) {
    console.log("Background OpenF1 Sync...", e);
  }
}

// DONNÉES PILOTES ET SAISON 2026
let drivers = [
  { id: 'antonelli', num: 12, first: 'Kimi', last: 'Antonelli', teamId: 'mercedes', team: 'Mercedes Grand Prix', engine: 'Mercedes-AMG', country: 'Italie', accent: '#00D2BE', rgbTint: 'rgba(0, 210, 190, 0.45)', pts: 267, wins: 7, bio: "Phénomène italien ultra-dominant en tête du championnat du monde 2026 avec Mercedes.", history: [{ gp: 'GP 15 (Monza)', pos: 'P1 (+25 pts)' }, { gp: 'GP 14 (Zandvoort)', pos: 'P2 (+18 pts)' }, { gp: 'GP 13 (Hongrie)', pos: 'P3 (+15 pts)' }] },
  { id: 'russell', num: 63, first: 'George', last: 'Russell', teamId: 'mercedes', team: 'Mercedes Grand Prix', engine: 'Mercedes-AMG', country: 'Royaume-Uni', accent: '#00D2BE', rgbTint: 'rgba(0, 210, 190, 0.45)', pts: 201, wins: 2, bio: "Pilier solide et régulier de l'écurie Mercedes, prétendant au titre mondial.", history: [{ gp: 'GP 15 (Monza)', pos: 'P2 (+18 pts)' }, { gp: 'GP 14 (Zandvoort)', pos: 'P3 (+15 pts)' }, { gp: 'GP 12 (Belgique)', pos: 'P2 (+18 pts)' }] },
  { id: 'hamilton', num: 44, first: 'Lewis', last: 'Hamilton', teamId: 'ferrari', team: 'Scuderia Ferrari', engine: 'Ferrari', country: 'Royaume-Uni', accent: '#E10600', rgbTint: 'rgba(225, 6, 0, 0.45)', pts: 191, wins: 1, bio: "Septuple champion du monde, en quête de sommets sous ses nouvelles couleurs italiennes.", history: [{ gp: 'GP 15 (Monza)', pos: 'P6 (+8 pts)' }, { gp: 'GP 14 (Zandvoort)', pos: 'P4 (+12 pts)' }, { gp: 'GP 11 (Silverstone)', pos: 'P3 (+15 pts)' }] },
  { id: 'norris', num: 4, first: 'Lando', last: 'Norris', teamId: 'mclaren', team: 'McLaren Racing', engine: 'Mercedes-AMG', country: 'Royaume-Uni', accent: '#FF8000', rgbTint: 'rgba(255, 128, 0, 0.45)', pts: 171, wins: 2, bio: "Performeur étincelant avec McLaren, redoutable en piste.", history: [{ gp: 'GP 15 (Monza)', pos: 'P4 (+12 pts)' }, { gp: 'GP 14 (Zandvoort)', pos: 'P1 (+25 pts)' }, { gp: 'GP 13 (Hongrie)', pos: 'P1 (+25 pts)' }] },
  { id: 'leclerc', num: 16, first: 'Charles', last: 'Leclerc', teamId: 'ferrari', team: 'Scuderia Ferrari', engine: 'Ferrari', country: 'Monaco', accent: '#E10600', rgbTint: 'rgba(225, 6, 0, 0.45)', pts: 155, wins: 1, bio: "L'idole de la Scuderia Ferrari, redoutable en qualifications et en course.", history: [{ gp: 'GP 15 (Monza)', pos: 'DNF (0 pt)' }, { gp: 'GP 14 (Zandvoort)', pos: 'P5 (+10 pts)' }, { gp: 'GP 11 (Silverstone)', pos: 'P1 (+25 pts)' }] },
  { id: 'verstappen', num: 3, first: 'Max', last: 'Verstappen', teamId: 'redbull', team: 'Red Bull Racing', engine: 'Red Bull Powertrains', country: 'Pays-Bas', accent: '#3671C6', rgbTint: 'rgba(54, 113, 198, 0.45)', pts: 127, wins: 0, bio: "Quadruple champion du monde bataillant ferme avec sa Red Bull.", history: [{ gp: 'GP 15 (Monza)', pos: 'P3 (+15 pts)' }, { gp: 'GP 14 (Zandvoort)', pos: 'DNF (0 pt)' }, { gp: 'GP 13 (Hongrie)', pos: 'P2 (+18 pts)' }] },
  { id: 'piastri', num: 81, first: 'Oscar', last: 'Piastri', teamId: 'mclaren', team: 'McLaren Racing', engine: 'Mercedes-AMG', country: 'Australie', accent: '#FF8000', rgbTint: 'rgba(255, 128, 0, 0.45)', pts: 116, wins: 0, bio: "Jeune talent extrêmement régulier et méthodique chez McLaren.", history: [{ gp: 'GP 15 (Monza)', pos: 'P5 (+10 pts)' }, { gp: 'GP 14 (Zandvoort)', pos: 'P6 (+8 pts)' }] },
  { id: 'hadjar', num: 6, first: 'Isack', last: 'Hadjar', teamId: 'redbull', team: 'Red Bull Racing', engine: 'Red Bull Powertrains', country: 'France', accent: '#3671C6', rgbTint: 'rgba(54, 113, 198, 0.45)', pts: 71, wins: 0, bio: "Espoir français brillant et prometteur chez Red Bull.", history: [{ gp: 'GP 15 (Monza)', pos: 'P7 (+6 pts)' }, { gp: 'GP 14 (Zandvoort)', pos: 'P8 (+4 pts)' }] },
  { id: 'lawson', num: 30, first: 'Liam', last: 'Lawson', teamId: 'racingbulls', team: 'Racing Bulls', engine: 'Red Bull Powertrains', country: 'Nouvelle-Zélande', accent: '#6692FF', rgbTint: 'rgba(102, 146, 255, 0.45)', pts: 51, wins: 0, bio: "Pilote combatif et accrocheur au sein de Racing Bulls.", history: [{ gp: 'GP 15 (Monza)', pos: 'P14 (0 pt)' }, { gp: 'GP 14 (Zandvoort)', pos: 'P7 (+6 pts)' }] },
  { id: 'gasly', num: 10, first: 'Pierre', last: 'Gasly', teamId: 'alpine', team: 'Alpine F1 Team', engine: 'Renault / Alpine', country: 'France', accent: '#0093CC', rgbTint: 'rgba(0, 147, 204, 0.45)', pts: 41, wins: 0, bio: "Leader technique chevronné de l'écurie Alpine.", history: [{ gp: 'GP 15 (Monza)', pos: 'P8 (+4 pts)' }, { gp: 'GP 14 (Zandvoort)', pos: 'P10 (+1 pt)' }] },
  { id: 'lindblad', num: 41, first: 'Arvid', last: 'Lindblad', teamId: 'racingbulls', team: 'Racing Bulls', engine: 'Red Bull Powertrains', country: 'Royaume-Uni', accent: '#6692FF', rgbTint: 'rgba(102, 146, 255, 0.45)', pts: 29, wins: 0, bio: "Révélation britannique de la saison chez Racing Bulls.", history: [{ gp: 'GP 15 (Monza)', pos: 'P9 (+2 pts)' }] },
  { id: 'colapinto', num: 43, first: 'Franco', last: 'Colapinto', teamId: 'alpine', team: 'Alpine F1 Team', engine: 'Renault / Alpine', country: 'Argentine', accent: '#0093CC', rgbTint: 'rgba(0, 147, 204, 0.45)', pts: 21, wins: 0, bio: "Jeune talent sud-américain très rapide.", history: [{ gp: 'GP 15 (Monza)', pos: 'P10 (+1 pt)' }] },
  { id: 'bearman', num: 87, first: 'Oliver', last: 'Bearman', teamId: 'haas', team: 'Haas F1 Team', engine: 'Ferrari', country: 'Royaume-Uni', accent: '#B6BABD', rgbTint: 'rgba(182, 186, 189, 0.45)', pts: 18, wins: 0, bio: "Jeune espoir britannique titulaire chez Haas.", history: [] },
  { id: 'bortoleto', num: 5, first: 'Gabriel', last: 'Bortoleto', teamId: 'audi', team: 'Audi F1 Team', engine: 'Audi', country: 'Brésil', accent: '#52E252', rgbTint: 'rgba(82, 226, 82, 0.45)', pts: 10, wins: 0, bio: "Représentant brésilien engagé dans le projet Audi.", history: [] },
  { id: 'hulkenberg', num: 27, first: 'Nico', last: 'Hülkenberg', teamId: 'audi', team: 'Audi F1 Team', engine: 'Audi', country: 'Allemagne', accent: '#52E252', rgbTint: 'rgba(82, 226, 82, 0.45)', pts: 6, wins: 0, bio: "Vétéran allemand reconnu pour sa science de la course.", history: [{ gp: 'GP 14 (Zandvoort)', pos: 'P8 (+4 pts)' }] },
  { id: 'sainz', num: 55, first: 'Carlos', last: 'Sainz', teamId: 'williams', team: 'Williams Racing', engine: 'Mercedes-AMG', country: 'Espagne', accent: '#64C4FF', rgbTint: 'rgba(100, 196, 255, 0.45)', pts: 6, wins: 0, bio: "Pilote expérimenté apportant son savoir-faire à Williams.", history: [] },
  { id: 'albon', num: 23, first: 'Alexander', last: 'Albon', teamId: 'williams', team: 'Williams Racing', engine: 'Mercedes-AMG', country: 'Thaïlande', accent: '#64C4FF', rgbTint: 'rgba(100, 196, 255, 0.45)', pts: 5, wins: 0, bio: "Pilier solide de l'écurie Williams.", history: [] },
  { id: 'ocon', num: 31, first: 'Esteban', last: 'Ocon', teamId: 'haas', team: 'Haas F1 Team', engine: 'Ferrari', country: 'France', accent: '#B6BABD', rgbTint: 'rgba(182, 186, 189, 0.45)', pts: 3, wins: 0, bio: "Pilote français accrocheur et travailleur chez Haas.", history: [] },
  { id: 'alonso', num: 14, first: 'Fernando', last: 'Alonso', teamId: 'astonmartin', team: 'Aston Martin Cognizant F1 Team', engine: 'Mercedes-AMG', country: 'Espagne', accent: '#229971', rgbTint: 'rgba(34, 153, 113, 0.45)', pts: 3, wins: 0, bio: "Légende vivante de la discipline toujours en quête d'exploits.", history: [{ gp: 'GP 14 (Zandvoort)', pos: 'P9 (+2 pts)' }] },
  { id: 'tsunoda', num: 22, first: 'Yuki', last: 'Tsunoda', teamId: 'racingbulls', team: 'Racing Bulls', engine: 'Red Bull Powertrains', country: 'Japon', accent: '#6692FF', rgbTint: 'rgba(102, 146, 255, 0.45)', pts: 1, wins: 0, bio: "Pilote japonais fougueux.", history: [{ gp: 'GP 15 (Monza)', pos: 'P10 (+1 pt)' }] },
  { id: 'stroll', num: 18, first: 'Lance', last: 'Stroll', teamId: 'astonmartin', team: 'Aston Martin Cognizant F1 Team', engine: 'Mercedes-AMG', country: 'Canada', accent: '#229971', rgbTint: 'rgba(34, 153, 113, 0.45)', pts: 0, wins: 0, bio: "Pilote canadien engagé avec Aston Martin.", history: [] },
  { id: 'bottas', num: 77, first: 'Valtteri', last: 'Bottas', teamId: 'cadillac', team: 'Cadillac Formula 1 Team', engine: 'General Motors', country: 'Finlande', accent: '#999999', rgbTint: 'rgba(153, 153, 153, 0.45)', pts: 0, wins: 0, bio: "Vétéran finlandais chez Cadillac F1.", history: [] },
  { id: 'perez', num: 11, first: 'Sergio', last: 'Pérez', teamId: 'cadillac', team: 'Cadillac Formula 1 Team', engine: 'General Motors', country: 'Mexique', accent: '#999999', rgbTint: 'rgba(153, 153, 153, 0.45)', pts: 0, wins: 0, bio: "Pilote mexicain chez Cadillac.", history: [] }
];

let constructors = [
  { id: 'mercedes', name: 'Mercedes Grand Prix', engine: 'Mercedes-AMG', principal: 'Toto Wolff', base: 'Brackley, Royaume-Uni', accent: '#00D2BE', bio: "Flèches d'argent ultra-dominantes cette saison 2026." },
  { id: 'ferrari', name: 'Scuderia Ferrari', engine: 'Ferrari', principal: 'Frédéric Vasseur', base: 'Maranello, Italie', accent: '#E10600', bio: "La Scuderia historique en lutte pour les victoires." },
  { id: 'mclaren', name: 'McLaren Racing', engine: 'Mercedes-AMG', principal: 'Andrea Stella', base: 'Woking, Royaume-Uni', accent: '#FF8000', bio: "Écurie britannique rapide et constante." },
  { id: 'redbull', name: 'Red Bull Racing', engine: 'Red Bull Powertrains', principal: 'Christian Horner', base: 'Milton Keynes, Royaume-Uni', accent: '#3671C6', bio: "Puissance et ingénierie de pointe." },
  { id: 'racingbulls', name: 'Racing Bulls', engine: 'Red Bull Powertrains', principal: 'Laurent Mekies', base: 'Faenza, Italie', accent: '#6692FF', bio: "Écurie sœur performante et dynamique." },
  { id: 'alpine', name: 'Alpine F1 Team', engine: 'Renault / Alpine', principal: 'Oliver Oakes', base: 'Enstone, Royaume-Uni', accent: '#0093CC', bio: "Constructeur français engagé dans la performance." },
  { id: 'haas', name: 'Haas F1 Team', engine: 'Ferrari', principal: 'Ayao Komatsu', base: 'Kannapolis, États-Unis', accent: '#B6BABD', bio: "Équipe américaine agile et combative." },
  { id: 'audi', name: 'Audi F1 Team', engine: 'Audi', principal: 'Mattia Binotto', base: 'Hinwil, Suisse / Neubourg, Allemagne', accent: '#52E252', bio: "Le nouveau géant allemand en Formule 1." },
  { id: 'williams', name: 'Williams Racing', engine: 'Mercedes-AMG', principal: 'James Vowles', base: 'Grove, Royaume-Uni', accent: '#64C4FF', bio: "Nom légendaire en pleine reconstruction." },
  { id: 'astonmartin', name: 'Aston Martin Cognizant F1 Team', engine: 'Mercedes-AMG', principal: 'Mike Krack', base: 'Silverstone, Royaume-Uni', accent: '#229971', bio: "Luxe et ambition technique britannique." },
  { id: 'cadillac', name: 'Cadillac Formula 1 Team', engine: 'General Motors', principal: 'Directeur Général', base: 'Détroit, États-Unis', accent: '#999999', bio: "La nouvelle écurie américaine de pointe." }
];

let races = [
  { id: 'gp-01', status: 'past', round: 1, name: '1. Grand Prix d Australia (Melbourne)', date: '06 - 08 Mars 2026', circuitType: 'australia', length: '5.278 km', laps: '58 tours', qualifDate: 'Samedi 07 Mars 2026', qualifTime: '06:00 CET', raceDate: 'Dimanche 08 Mars 2026', raceTime: '05:00 CET', grid: [{ pos: 1, driver: 'George Russell', team: 'Mercedes', time: '1:23:06.801', pts: '+25 pts' }] },
  { id: 'gp-02', status: 'past', round: 2, name: '2. Grand Prix de Chine (Shanghai)', date: '20 - 22 Mars 2026', circuitType: 'china', length: '5.451 km', laps: '56 tours', qualifDate: 'Samedi 21 Mars 2026', qualifTime: '08:00 CET', raceDate: 'Dimanche 22 Mars 2026', raceTime: '09:00 CET', grid: [{ pos: 1, driver: 'Kimi Antonelli', team: 'Mercedes', time: '1:33:15.607', pts: '+25 pts' }] },
  { id: 'gp-03', status: 'past', round: 3, name: '3. Grand Prix du Japon (Suzuka)', date: '27 - 29 Mars 2026', circuitType: 'japan', length: '5.807 km', laps: '53 tours', qualifDate: 'Samedi 28 Mars 2026', qualifTime: '07:00 CEST', raceDate: 'Dimanche 29 Mars 2026', raceTime: '07:00 CEST', grid: [{ pos: 1, driver: 'Kimi Antonelli', team: 'Mercedes', time: '1:28:03.403', pts: '+25 pts' }] },
  { id: 'gp-04', status: 'past', round: 4, name: '4. Grand Prix de Bahreïn (Sakhir)', date: '10 - 12 Avril 2026', circuitType: 'bahrain', length: '5.412 km', laps: '57 tours', qualifDate: 'Samedi 11 Avril 2026', qualifTime: '18:00 CEST', raceDate: 'Dimanche 12 Avril 2026', raceTime: '17:00 CEST', grid: [{ pos: 1, driver: 'Max Verstappen', team: 'Red Bull', time: '1:31:44.742', pts: '+25 pts' }] },
  { id: 'gp-05', status: 'past', round: 5, name: '5. Grand Prix d Arabie Saoudite (Jeddah)', date: '17 - 19 Avril 2026', circuitType: 'saudi', length: '6.174 km', laps: '50 tours', qualifDate: 'Samedi 18 Avril 2026', qualifTime: '19:00 CEST', raceDate: 'Dimanche 19 Avril 2026', raceTime: '19:00 CEST', grid: [{ pos: 1, driver: 'Lewis Hamilton', team: 'Ferrari', time: '1:20:25.110', pts: '+25 pts' }] },
  { id: 'gp-06', status: 'past', round: 6, name: '6. Grand Prix de Miami', date: '01 - 03 Mai 2026', circuitType: 'miami', length: '5.412 km', laps: '57 tours', qualifDate: 'Samedi 02 Mai 2026', qualifTime: '22:00 CEST', raceDate: 'Dimanche 03 Mai 2026', raceTime: '21:30 CEST', grid: [{ pos: 1, driver: 'Kimi Antonelli', team: 'Mercedes', time: '1:33:19.273', pts: '+25 pts' }] },
  { id: 'gp-07', status: 'past', round: 7, name: '7. Grand Prix du Canada (Montréal)', date: '22 - 24 Mai 2026', circuitType: 'canada', length: '4.361 km', laps: '70 tours', qualifDate: 'Samedi 23 Mai 2026', qualifTime: '22:00 CEST', raceDate: 'Dimanche 24 Mai 2026', raceTime: '20:00 CEST', grid: [{ pos: 1, driver: 'Kimi Antonelli', team: 'Mercedes', time: '1:28:15.758', pts: '+25 pts' }] },
  { id: 'gp-08', status: 'past', round: 8, name: '8. Grand Prix de Monaco (Monte-Carlo)', date: '05 - 07 Juin 2026', circuitType: 'monaco', length: '3.337 km', laps: '78 tours', qualifDate: 'Samedi 06 Juin 2026', qualifTime: '16:00 CEST', raceDate: 'Dimanche 07 Juin 2026', raceTime: '15:00 CEST', grid: [{ pos: 1, driver: 'Kimi Antonelli', team: 'Mercedes', time: '2:23:31.243', pts: '+25 pts' }] },
  { id: 'gp-09', status: 'past', round: 9, name: '9. Grand Prix de Barcelone-Catalogne', date: '12 - 14 Juin 2026', circuitType: 'barcelona', length: '4.675 km', laps: '66 tours', qualifDate: 'Samedi 13 Juin 2026', qualifTime: '16:00 CEST', raceDate: 'Dimanche 14 Juin 2026', raceTime: '15:00 CEST', grid: [{ pos: 1, driver: 'Lewis Hamilton', team: 'Ferrari', time: '1:32:28.105', pts: '+25 pts' }] },
  { id: 'gp-10', status: 'past', round: 10, name: '10. Grand Prix d Autriche (Spielberg)', date: '26 - 28 Juin 2026', circuitType: 'austria', length: '4.318 km', laps: '71 tours', qualifDate: 'Samedi 27 Juin 2026', qualifTime: '16:00 CEST', raceDate: 'Dimanche 28 Juin 2026', raceTime: '15:00 CEST', grid: [{ pos: 1, driver: 'George Russell', team: 'Mercedes', time: '1:26:37.979', pts: '+25 pts' }] },
  { id: 'gp-11', status: 'past', round: 11, name: '11. Grand Prix de Grande-Bretagne (Silverstone)', date: '03 - 05 Juillet 2026', circuitType: 'silverstone', length: '5.891 km', laps: '52 tours', qualifDate: 'Samedi 04 Juillet 2026', qualifTime: '16:00 CEST', raceDate: 'Dimanche 05 Juillet 2026', raceTime: '16:00 CEST', grid: [{ pos: 1, driver: 'Charles Leclerc', team: 'Ferrari', time: '1:27:11.335', pts: '+25 pts' }] },
  { id: 'gp-12', status: 'past', round: 12, name: '12. Grand Prix de Belgique (Spa-Francorchamps)', date: '17 - 19 Juillet 2026', circuitType: 'spa', length: '7.004 km', laps: '44 tours', qualifDate: 'Samedi 18 Juillet 2026', qualifTime: '16:00 CEST', raceDate: 'Dimanche 19 Juillet 2026', raceTime: '15:00 CEST', grid: [{ pos: 1, driver: 'Kimi Antonelli', team: 'Mercedes', time: '1:24:42.479', pts: '+25 pts' }] },
  { id: 'gp-13', status: 'past', round: 13, name: '13. Grand Prix de Hongrie (Hungaroring)', date: '24 - 26 Juillet 2026', circuitType: 'hungary', length: '4.381 km', laps: '70 tours', qualifDate: 'Samedi 25 Juillet 2026', qualifTime: '16:00 CEST', raceDate: 'Dimanche 26 Juillet 2026', raceTime: '15:00 CEST', grid: [{ pos: 1, driver: 'Lando Norris', team: 'McLaren', time: '1:39:56.180', pts: '+25 pts' }] },
  { id: 'gp-14', status: 'past', round: 14, name: '14. Grand Prix des Pays-Bas (Zandvoort)', date: '21 - 23 Août 2026', circuitType: 'zandvoort', length: '4.259 km', laps: '72 tours', qualifDate: 'Samedi 22 Août 2026', qualifTime: '15:00 CEST', raceDate: 'Dimanche 23 Août 2026', raceTime: '15:00 CEST', grid: [{ pos: 1, driver: 'Lando Norris', team: 'McLaren', time: '2:04:44.859', pts: '+25 pts' }] },
  { id: 'gp-15', status: 'past', round: 15, name: '15. Grand Prix d Italie (Monza)', date: '04 - 06 Septembre 2026', circuitType: 'monza', length: '5.793 km', laps: '53 tours', qualifDate: 'Samedi 05 Septembre 2026', qualifTime: '16:00 CEST', raceDate: 'Dimanche 06 Septembre 2026', raceTime: '15:00 CEST', grid: [{ pos: 1, driver: 'Kimi Antonelli', team: 'Mercedes', time: '1:51:15.281', pts: '+25 pts' }] },
  { id: 'gp-16', status: 'upcoming', round: 16, name: '16. Grand Prix d Espagne (Madring - Madrid)', date: '11 - 13 Septembre 2026', circuitType: 'madrid', length: '5.474 km', laps: '55 tours', qualifDate: 'Samedi 12 Septembre 2026', qualifTime: '16:00 CEST', raceDate: 'Dimanche 13 Septembre 2026', raceTime: '15:00 CEST', grid: [{ pos: 'DIRECT', driver: 'Prochain GP ce W.E.', team: 'Circuit Urbain Madring', time: '15:00 CEST', pts: '-' }] }
];

const hotspotDetails = {
  moteur: { kicker: 'GROUPE PROPULSEUR', title: 'Unité de Puissance Hybride V6 Turbo', desc: 'Moteur V6 1.6L couplé aux MGU-K développant plus de 1000 ch.', stats: [['Cylindrée', '1.6L V6 Turbo'], ['Régime Max', '15 000 tr/min'], ['Puissance Hybride', '≈ 1000 ch']] },
  aileronAvant: { kicker: 'AÉRODYNAMIQUE', title: 'Aileron Avant à Volets Ajustables', desc: 'Canalise le flux d air vers le fond plat.', stats: [['Matériau', 'Fibre de Carbone'], ['Ajustement', 'Variable']] },
  aileronArriere: { kicker: 'AÉRODYNAMIQUE', title: 'Aileron Arrière & DRS', desc: 'Réduit la traînée de 30% en ligne droite.', stats: [['Système', 'DRS Hydraulique'], ['Gain Vmax', '+15 km/h']] },
  halo: { kicker: 'SÉCURITÉ', title: 'Structure Halo en Titane', desc: 'Protecteur de cockpit résistant à 12 tonnes.', stats: [['Poids', '9 kg'], ['Résistance', '120 kN']] },
  pneus: { kicker: 'PNEUMATIQUES', title: 'Pneus Pirelli 18 Pouces', desc: 'Gommes fournies par Pirelli.', stats: [['Taille Jantes', '18 pouces'], ['Fournisseur', 'Pirelli']] }
};

let favoriteDriverId = localStorage.getItem('f1_fav_driver_2026') || 'antonelli';

function getFavoriteDriver() {
  return drivers.find(d => d.id === favoriteDriverId) || drivers[0];
}

function setFavoriteDriver(driverId) {
  favoriteDriverId = driverId;
  localStorage.setItem('f1_fav_driver_2026', driverId);
  updateTopNavBadge(getFavoriteDriver());
  renderDriversTable();
  renderDriversCarouselTrack();
  populateDriverDropdowns();
}

function updateTopNavBadge(driver) {
  if (!driver) return;
  const navNum = document.getElementById('navNum');
  const navName = document.getElementById('navName');
  const navLive = document.getElementById('navLive');
  
  if (navNum) navNum.textContent = driver.num;
  if (navName) navName.textContent = `${driver.first} ${driver.last}`;
  if (navLive) {
    navLive.style.borderColor = driver.accent;
    navLive.style.background = driver.rgbTint;
  }
}

// REMPLIR ET POPULER LE MENU DÉROULANT DES PILOTES
function populateDriverDropdowns() {
  const navSelect = document.getElementById('driverSelectNav');
  if (!navSelect) return;

  navSelect.innerHTML = drivers.map(d => `
    <option value="${d.id}" ${d.id === favoriteDriverId ? 'selected' : ''}>
      #${d.num} ${d.first} ${d.last} (${d.team})
    </option>
  `).join('');
}

// ACTION QUAND ON SÉLECTIONNE DANS LE MENU DÉROULANT
function selectDriverFromDropdown(driverId) {
  const d = drivers.find(x => x.id === driverId);
  if (!d) return;

  setFavoriteDriver(d.id);

  // Défiler de façon fluide jusqu'à la carte dans le carrousel
  const cardSlide = document.getElementById(`slide-driver-${d.id}`);
  if (cardSlide) {
    cardSlide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  updateGarageCar(d.teamId);
}

// NAVIGUER DANS LE CARROUSEL AVEC LES BOUTONS PRÉCÉDENT / SUIVANT
function scrollCarousel(direction) {
  const wrapper = document.getElementById('carouselWrapper');
  if (!wrapper) return;
  const cardWidth = 600;
  wrapper.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

// RENDU COMPLET DU CARROUSEL DES PILOTES
function renderDriversCarouselTrack() {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  track.innerHTML = drivers.map((d) => {
    const isFav = d.id === favoriteDriverId;

    return `
      <div class="driver-card-slide" id="slide-driver-${d.id}" style="--card-accent:${d.accent}" onmouseenter="setThemeTint('${d.rgbTint}', '${d.accent}'); updateTopNavBadge(drivers.find(x => x.id === '${d.id}'))">
        <div class="stripe"></div>
        <div class="num-bg">${d.num}</div>

        <div>
          <div class="team-header-row">
            <img id="logo-img-${d.id}" alt="Logo ${d.team}" class="card-team-logo">
            <div class="team-tag">${d.team}</div>
          </div>

          <p class="eyebrow"><span class="dot"></span>${d.country}</p>
          <h3>${d.first}<em>${d.last}</em></h3>

          <button class="card-fav-btn" style="margin-top:14px;" onclick="setFavoriteDriver('${d.id}')">
            ${isFav ? '⭐ Pilote Sélectionné' : '☆ Mettre en Favori'}
          </button>
        </div>

        <div class="driver-carousel-bio">${d.bio}</div>

        <div class="visual-duo-slide">
          <img id="car-img-${d.id}" class="car-backdrop-bg" alt="Monoplace ${d.team}">
          <img id="portrait-img-${d.id}" class="img-portrait" alt="${d.first} ${d.last}">
          <img id="helmet-img-${d.id}" class="img-helmet" alt="Casque ${d.last}">
        </div>
      </div>
    `;
  }).join('');

  // Lancement du chargement des images
  drivers.forEach(d => {
    loadImageWithCascade(document.getElementById(`portrait-img-${d.id}`), getDriverImageSources(d));
    loadImageWithCascade(document.getElementById(`helmet-img-${d.id}`), getHelmetImageSources(d));
    loadImageWithCascade(document.getElementById(`car-img-${d.id}`), getCarImageSources(d.teamId));
    loadImageWithCascade(document.getElementById(`logo-img-${d.id}`), getLogoImageSources(d.teamId));
  });
}

const videoSources = {
  canal: { logo: 'CANAL+', title: 'CONNECTEZ-VOUS À MYCANAL', desc: 'Accédez au flux vidéo HD en direct sur CANAL+, aux chronos officiels et caméras embarquées.', btnText: 'Lancer le Direct sur myCANAL', btnUrl: 'https://www.canalplus.com/', accentColor: '#E10600' },
  freetv: { logo: 'FREE TV', title: 'DIRECT F1 GRATUIT SUR FREE TV', desc: 'Regardez les meilleures sessions en direct, commentaires en français et résumés de course.', btnText: 'Ouvrir le Player Free TV Live', btnUrl: 'https://www.free.fr/freebox/tv/', accentColor: '#00D2BE' },
  f1tv: { logo: 'F1 TV PRO', title: 'OFFICIAL F1 TV PRO LIVE STREAM', desc: 'Flux officiel 4K de la Formula 1 avec 20 caméras embarquées et télémétrie en direct.', btnText: 'Accéder à F1 TV Pro', btnUrl: 'https://f1tv.formula1.com/', accentColor: '#F4C10F' }
};

function changePlayerSource(sourceKey) {
  const source = videoSources[sourceKey] || videoSources['canal'];
  const logoEl = document.getElementById('playerLogo');
  const titleEl = document.getElementById('playerTitle');
  const descEl = document.getElementById('playerDesc');
  const btnEl = document.getElementById('playerBtn');

  if (logoEl) { logoEl.textContent = source.logo; logoEl.style.backgroundColor = source.accentColor; }
  if (titleEl) titleEl.textContent = source.title;
  if (descEl) descEl.textContent = source.desc;
  if (btnEl) { btnEl.textContent = source.btnText; btnEl.href = source.btnUrl; btnEl.style.backgroundColor = source.accentColor; }
}

function toggleNotifications(checkbox) {
  const badge = document.getElementById('notifBadge');
  if (checkbox.checked) {
    if ("Notification" in window) {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          badge.textContent = "Activées";
          badge.classList.add("active");
          new Notification("Formule 1 2026 — Hub Live", { body: "Notifications activées ! Prochain GP : Madrid (11-13 Sept)." });
          localStorage.setItem('f1_notif_enabled', 'true');
        } else {
          alert("L'autorisation a été refusée par votre navigateur.");
          checkbox.checked = false;
        }
      });
    } else {
      badge.textContent = "Activées (Simulées)";
      badge.classList.add("active");
      alert("🔔 Notifications GP activées !");
      localStorage.setItem('f1_notif_enabled', 'true');
    }
  } else {
    badge.textContent = "Désactivées";
    badge.classList.remove("active");
    localStorage.setItem('f1_notif_enabled', 'false');
  }
}

function getComputedConstructors() {
  return constructors.map(c => {
    const teamDrivers = drivers.filter(d => d.teamId === c.id);
    const totalPts = teamDrivers.reduce((sum, d) => sum + (d.pts || 0), 0);
    const totalWins = teamDrivers.reduce((sum, d) => sum + (d.wins || 0), 0);

    return { ...c, pts: totalPts, seasonWins: totalWins, driversList: teamDrivers.map(d => `${d.first} ${d.last}`) };
  }).sort((a, b) => b.pts - a.pts).map((c, index) => ({ ...c, rank: index + 1 }));
}

function getMedal(pos) {
  if (pos === 1) return '<span class="medal">🥇</span>';
  if (pos === 2) return '<span class="medal">🥈</span>';
  if (pos === 3) return '<span class="medal">🥉</span>';
  return '';
}

function renderDriversTable() {
  const tbody = document.getElementById('driversTableBody');
  const sorted = [...drivers].sort((a,b) => b.pts - a.pts);
  tbody.innerHTML = sorted.map((d, i) => {
    const pos = i + 1;
    const isFav = d.id === favoriteDriverId;
    return `
      <tr class="clickable-row ${isFav ? 'is-favorite' : ''}" onclick="openDriverModal('${d.id}')">
        <td>
          <button class="fav-star-btn" onclick="event.stopPropagation(); setFavoriteDriver('${d.id}')" title="${isFav ? 'Favori actuel' : 'Définir en favori'}">
            ${isFav ? '⭐' : '☆'}
          </button>
        </td>
        <td class="pos" style="color:${pos <= 3 ? 'var(--accent-2)' : 'var(--ink)'}">${getMedal(pos)}${pos}</td>
        <td><b>${d.first} ${d.last}</b> ${isFav ? '<small style="color:var(--accent-2); font-weight:800;">[FAV]</small>' : ''}</td>
        <td style="color:var(--ink-dim);">${d.team}</td>
        <td class="pts">${d.pts} pts</td>
      </tr>
    `;
  }).join('');
}

function renderConstructorsTable() {
  const tbody = document.getElementById('constructorsTableBody');
  const computedConstructors = getComputedConstructors();

  tbody.innerHTML = computedConstructors.map((c) => {
    const pos = c.rank;
    return `
      <tr class="clickable-row" onclick="openTeamModal('${c.id}')">
        <td class="pos" style="color:${pos <= 3 ? 'var(--accent-2)' : 'var(--ink)'}">${getMedal(pos)}${pos}</td>
        <td><b>${c.name}</b></td>
        <td style="color:var(--ink-dim);">${c.engine}</td>
        <td class="pts">${c.pts} pts</td>
      </tr>
    `;
  }).join('');
}

function renderRacesAccordion() {
  const container = document.getElementById('racesAccordionList');
  const upcomingIndex = races.findIndex(r => r.status === 'upcoming');

  container.innerHTML = races.map((r, idx) => {
    const isTarget = idx === upcomingIndex;
    const circuitImgId = `circuit-img-${r.id}`;

    setTimeout(() => {
      const el = document.getElementById(circuitImgId);
      if (el) loadImageWithCascade(el, [generateF1CarBadge(r.name, '#00D2BE')]);
    }, 0);

    return `
      <div class="race-card ${r.status} ${isTarget ? 'current-target' : ''}" id="card-${r.id}">
        <button class="race-header-btn" onclick="toggleRaceAccordion('card-${r.id}')">
          <div>
            <div class="name">${r.name}</div>
            <div class="date">${r.date}</div>
          </div>
          <div style="text-align:right">
            <div class="time">Course : ${r.raceTime}</div>
            <span class="toggle-icon">▼</span>
          </div>
        </button>
        <div class="race-details">
          <div class="schedule-grid">
            <div class="schedule-box">
              <span class="type-tag">⏱️ Qualifications</span>
              <span class="s-date">${r.qualifDate}</span>
              <span class="s-time">Heure : ${r.qualifTime}</span>
            </div>
            <div class="schedule-box">
              <span class="type-tag" style="color:#00E676;">🏁 Grand Prix / Course</span>
              <span class="s-date">${r.raceDate}</span>
              <span class="s-time">Heure : ${r.raceTime}</span>
            </div>
          </div>

          <div class="circuit-box">
            <img id="${circuitImgId}" alt="Tracé ${r.name}">
            <div class="circuit-info">Longueur: ${r.length} · Distance: ${r.laps}</div>
          </div>

          <h5 style="font-size:12px; color:var(--ink-dim); margin-bottom:8px;">RÉSULTAT / STATUT ÉPREUVE</h5>
          <table class="live-table">
            <thead>
              <tr><th>POS</th><th>PILOTE</th><th>ÉCURIE</th><th style="text-align:right">POINTS</th></tr>
            </thead>
            <tbody>
              ${r.grid.map(g => `
                <tr>
                  <td class="pos">${typeof g.pos === 'number' ? getMedal(g.pos) + g.pos : g.pos}</td>
                  <td><b>${g.driver}</b></td>
                  <td style="color:var(--ink-dim);">${g.team}</td>
                  <td class="pts">${g.pts}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }).join('');
}

function scrollToCurrentRace() {
  const container = document.getElementById('racesScrollContainer');
  const target = document.querySelector('.race-card.current-target') || document.querySelector('.race-card.upcoming');
  if (container && target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else if (container) {
    container.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function setThemeTint(rgbTint, accent) {
  document.documentElement.style.setProperty('--team-tint', rgbTint);
  document.documentElement.style.setProperty('--accent', accent);
}

let activeModalDriverId = null;

function openDriverModal(driverId) {
  const d = drivers.find(x => x.id === driverId);
  if (!d) return;

  activeModalDriverId = d.id;
  setThemeTint(d.rgbTint, d.accent);
  updateTopNavBadge(d);

  document.getElementById('dpKicker').textContent = `STATISTIQUES PILOTE — #${d.num}`;
  document.getElementById('dpTitle').textContent = `${d.first} ${d.last}`;
  document.getElementById('dpTeam').textContent = `${d.team} (${d.engine})`;
  document.getElementById('dpBio').textContent = d.bio;
  
  loadImageWithCascade(document.getElementById('dpTeamLogo'), getLogoImageSources(d.teamId));
  loadImageWithCascade(document.getElementById('dpHelmetImg'), getHelmetImageSources(d));
  loadImageWithCascade(document.getElementById('dpCarImg'), getCarImageSources(d.teamId));

  const modalFavBtn = document.getElementById('modalFavBtn');
  if (modalFavBtn) {
    modalFavBtn.textContent = (d.id === favoriteDriverId) ? '⭐ Pilote Favori Actuel' : '☆ Définir comme Favori';
  }

  document.getElementById('dpStats').innerHTML = `
    <div class="row"><span class="l">Total Points Saison 2026</span><span class="v" style="color:var(--accent-2);">${d.pts} pts</span></div>
    <div class="row"><span class="l">Victoires en Grand Prix</span><span class="v" style="color:#00E676;">${d.wins} victoire(s)</span></div>
  `;

  document.getElementById('dpRecentRaces').innerHTML = (d.history || []).map(h => `
    <div class="recent-race-item">
      <span class="gp">${h.gp}</span>
      <span class="pos-badge">${h.pos}</span>
    </div>
  `).join('');

  updateGarageCar(d.teamId);

  document.getElementById('driverPerfPanel').classList.add('open');
  document.getElementById('backdrop').classList.add('open');
}

function toggleFavoriteFromModal() {
  if (activeModalDriverId) {
    setFavoriteDriver(activeModalDriverId);
    const modalFavBtn = document.getElementById('modalFavBtn');
    if (modalFavBtn) modalFavBtn.textContent = '⭐ Pilote Favori Actuel';
  }
}

function openTeamModal(teamId) {
  const computedList = getComputedConstructors();
  const c = computedList.find(x => x.id === teamId);
  if (!c) return;

  document.getElementById('tpKicker').textContent = `STATISTIQUES ÉCURIE — RANG #${c.rank}`;
  document.getElementById('tpTitle').textContent = c.name;
  document.getElementById('tpEngine').textContent = `Propulseur : ${c.engine} | Siège : ${c.base}`;
  document.getElementById('tpBio').textContent = c.bio;

  loadImageWithCascade(document.getElementById('tpTeamLogo'), getLogoImageSources(c.id));
  loadImageWithCascade(document.getElementById('tpCarImg'), getCarImageSources(c.id));

  document.getElementById('tpStats').innerHTML = `
    <div class="row"><span class="l">Classement Constructeurs FIA</span><span class="v" style="color:var(--accent-2);">${c.rank}e Place</span></div>
    <div class="row"><span class="l">Total Points Cumulés</span><span class="v" style="color:#00E676;">${c.pts} pts</span></div>
    <div class="row"><span class="l">Victoires d'Écurie</span><span class="v">${c.seasonWins} victoire(s)</span></div>
    <div class="row"><span class="l">Pilotes Titulaires</span><span class="v">${(c.driversList || []).join(' & ')}</span></div>
    <div class="row"><span class="l">Directeur d'Écurie</span><span class="v">${c.principal}</span></div>
  `;

  updateGarageCar(c.id);

  document.getElementById('teamPerfPanel').classList.add('open');
  document.getElementById('backdrop').classList.add('open');
}

function updateGarageCar(teamId) {
  const carImg = document.getElementById('garageCarImg');
  const nameLabel = document.getElementById('garageDriverName');
  const logoImg = document.getElementById('garageTeamLogo');
  const teamObj = constructors.find(c => c.id === teamId);

  if (carImg) loadImageWithCascade(carImg, getCarImageSources(teamId));
  if (nameLabel && teamObj) nameLabel.textContent = teamObj.name;
  if (logoImg) loadImageWithCascade(logoImg, getLogoImageSources(teamId));
}

function openHotspotModal(key) {
  const item = hotspotDetails[key];
  if (!item) return;

  document.getElementById('techKicker').textContent = item.kicker;
  document.getElementById('techTitle').textContent = item.title;
  document.getElementById('techDesc').textContent = item.desc;
  document.getElementById('techStats').innerHTML = item.stats.map(([l, v]) => `
    <div class="row"><span class="l">${l}</span><span class="v">${v}</span></div>
  `).join('');

  document.getElementById('techPanel').classList.add('open');
  document.getElementById('backdrop').classList.add('open');
}

function closeModal() {
  document.getElementById('driverPerfPanel').classList.remove('open');
  document.getElementById('teamPerfPanel').classList.remove('open');
  document.getElementById('techPanel').classList.remove('open');
  document.getElementById('backdrop').classList.remove('open');
}

function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

  if (tabName === 'drivers') {
    document.querySelectorAll('.tab-btn')[0].classList.add('active');
    document.getElementById('tabDrivers').classList.add('active');
  } else if (tabName === 'constructors') {
    document.querySelectorAll('.tab-btn')[1].classList.add('active');
    document.getElementById('tabConstructors').classList.add('active');
  } else if (tabName === 'races') {
    document.querySelectorAll('.tab-btn')[2].classList.add('active');
    document.getElementById('tabRaces').classList.add('active');
    setTimeout(scrollToCurrentRace, 100);
  }
}

function toggleRaceAccordion(cardId) {
  document.getElementById(cardId).classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
  const favDriver = getFavoriteDriver();
  updateTopNavBadge(favDriver);

  const notifSaved = localStorage.getItem('f1_notif_enabled');
  if (notifSaved === 'true') {
    const notifToggle = document.getElementById('notifToggle');
    const badge = document.getElementById('notifBadge');
    if (notifToggle) notifToggle.checked = true;
    if (badge) { badge.textContent = "Activées"; badge.classList.add("active"); }
  }

  renderDriversTable();
  renderConstructorsTable();
  renderRacesAccordion();
  renderDriversCarouselTrack();
  populateDriverDropdowns();
  updateGarageCar('mercedes');

  initOpenF1Data();
});
