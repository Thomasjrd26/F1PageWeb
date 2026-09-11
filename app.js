// ==========================================
// 1. DONNÉES GLOBALES (DÉCLARÉES EN PREMIER)
// ==========================================

const openF1Headshots = {};

const constructors = [
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

const drivers = [
  { id: 'antonelli', num: 12, first: 'Kimi', last: 'Antonelli', teamId: 'mercedes', team: 'Mercedes Grand Prix', engine: 'Mercedes-AMG', country: 'Italie', accent: '#00D2BE', rgbTint: 'rgba(0, 210, 190, 0.45)', pts: 267, wins: 7, bio: "Phénomène italien ultra-dominant en tête du championnat du monde 2026 avec Mercedes.", history: [{ gp: 'GP 15 (Monza)', pos: 'P1 (+25 pts)' }, { gp: 'GP 14 (Zandvoort)', pos: 'P2 (+18 pts)' }] },
  { id: 'russell', num: 63, first: 'George', last: 'Russell', teamId: 'mercedes', team: 'Mercedes Grand Prix', engine: 'Mercedes-AMG', country: 'Royaume-Uni', accent: '#00D2BE', rgbTint: 'rgba(0, 210, 190, 0.45)', pts: 201, wins: 2, bio: "Pilier solide et régulier de l'écurie Mercedes, prétendant au titre mondial.", history: [{ gp: 'GP 15 (Monza)', pos: 'P2 (+18 pts)' }] },
  { id: 'hamilton', num: 44, first: 'Lewis', last: 'Hamilton', teamId: 'ferrari', team: 'Scuderia Ferrari', engine: 'Ferrari', country: 'Royaume-Uni', accent: '#E10600', rgbTint: 'rgba(225, 6, 0, 0.45)', pts: 191, wins: 1, bio: "Septuple champion du monde, en quête de sommets sous ses nouvelles couleurs italiennes.", history: [{ gp: 'GP 15 (Monza)', pos: 'P6 (+8 pts)' }] },
  { id: 'norris', num: 4, first: 'Lando', last: 'Norris', teamId: 'mclaren', team: 'McLaren Racing', engine: 'Mercedes-AMG', country: 'Royaume-Uni', accent: '#FF8000', rgbTint: 'rgba(255, 128, 0, 0.45)', pts: 171, wins: 2, bio: "Performeur étincelant avec McLaren, redoutable en piste.", history: [{ gp: 'GP 15 (Monza)', pos: 'P4 (+12 pts)' }] },
  { id: 'leclerc', num: 16, first: 'Charles', last: 'Leclerc', teamId: 'ferrari', team: 'Scuderia Ferrari', engine: 'Ferrari', country: 'Monaco', accent: '#E10600', rgbTint: 'rgba(225, 6, 0, 0.45)', pts: 155, wins: 1, bio: "L'idole de la Scuderia Ferrari, redoutable en qualifications et en course.", history: [{ gp: 'GP 15 (Monza)', pos: 'DNF (0 pt)' }] },
  { id: 'verstappen', num: 3, first: 'Max', last: 'Verstappen', teamId: 'redbull', team: 'Red Bull Racing', engine: 'Red Bull Powertrains', country: 'Pays-Bas', accent: '#3671C6', rgbTint: 'rgba(54, 113, 198, 0.45)', pts: 127, wins: 0, bio: "Quadruple champion du monde bataillant ferme avec sa Red Bull.", history: [{ gp: 'GP 15 (Monza)', pos: 'P3 (+15 pts)' }] },
  { id: 'piastri', num: 81, first: 'Oscar', last: 'Piastri', teamId: 'mclaren', team: 'McLaren Racing', engine: 'Mercedes-AMG', country: 'Australie', accent: '#FF8000', rgbTint: 'rgba(255, 128, 0, 0.45)', pts: 116, wins: 0, bio: "Jeune talent extrêmement régulier et méthodique chez McLaren.", history: [] },
  { id: 'hadjar', num: 6, first: 'Isack', last: 'Hadjar', teamId: 'redbull', team: 'Red Bull Racing', engine: 'Red Bull Powertrains', country: 'France', accent: '#3671C6', rgbTint: 'rgba(54, 113, 198, 0.45)', pts: 71, wins: 0, bio: "Espoir français brillant et prometteur chez Red Bull.", history: [] },
  { id: 'lawson', num: 30, first: 'Liam', last: 'Lawson', teamId: 'racingbulls', team: 'Racing Bulls', engine: 'Red Bull Powertrains', country: 'Nouvelle-Zélande', accent: '#6692FF', rgbTint: 'rgba(102, 146, 255, 0.45)', pts: 51, wins: 0, bio: "Pilote combatif et accrocheur au sein de Racing Bulls.", history: [] },
  { id: 'gasly', num: 10, first: 'Pierre', last: 'Gasly', teamId: 'alpine', team: 'Alpine F1 Team', engine: 'Renault / Alpine', country: 'France', accent: '#0093CC', rgbTint: 'rgba(0, 147, 204, 0.45)', pts: 41, wins: 0, bio: "Leader technique chevronné de l'écurie Alpine.", history: [] },
  { id: 'lindblad', num: 41, first: 'Arvid', last: 'Lindblad', teamId: 'racingbulls', team: 'Racing Bulls', engine: 'Red Bull Powertrains', country: 'Royaume-Uni', accent: '#6692FF', rgbTint: 'rgba(102, 146, 255, 0.45)', pts: 29, wins: 0, bio: "Révélation britannique de la saison chez Racing Bulls.", history: [] },
  { id: 'colapinto', num: 43, first: 'Franco', last: 'Colapinto', teamId: 'alpine', team: 'Alpine F1 Team', engine: 'Renault / Alpine', country: 'Argentine', accent: '#0093CC', rgbTint: 'rgba(0, 147, 204, 0.45)', pts: 21, wins: 0, bio: "Jeune talent sud-américain très rapide.", history: [] },
  { id: 'bearman', num: 87, first: 'Oliver', last: 'Bearman', teamId: 'haas', team: 'Haas F1 Team', engine: 'Ferrari', country: 'Royaume-Uni', accent: '#B6BABD', rgbTint: 'rgba(182, 186, 189, 0.45)', pts: 18, wins: 0, bio: "Jeune espoir britannique titulaire chez Haas.", history: [] },
  { id: 'bortoleto', num: 5, first: 'Gabriel', last: 'Bortoleto', teamId: 'audi', team: 'Audi F1 Team', engine: 'Audi', country: 'Brésil', accent: '#52E252', rgbTint: 'rgba(82, 226, 82, 0.45)', pts: 10, wins: 0, bio: "Représentant brésilien engagé dans le projet Audi.", history: [] },
  { id: 'hulkenberg', num: 27, first: 'Nico', last: 'Hülkenberg', teamId: 'audi', team: 'Audi F1 Team', engine: 'Audi', country: 'Allemagne', accent: '#52E252', rgbTint: 'rgba(82, 226, 82, 0.45)', pts: 6, wins: 0, bio: "Vétéran allemand reconnu pour sa science de la course.", history: [] },
  { id: 'sainz', num: 55, first: 'Carlos', last: 'Sainz', teamId: 'williams', team: 'Williams Racing', engine: 'Mercedes-AMG', country: 'Espagne', accent: '#64C4FF', rgbTint: 'rgba(100, 196, 255, 0.45)', pts: 6, wins: 0, bio: "Pilote expérimenté apportant son savoir-faire à Williams.", history: [] },
  { id: 'albon', num: 23, first: 'Alexander', last: 'Albon', teamId: 'williams', team: 'Williams Racing', engine: 'Mercedes-AMG', country: 'Thaïlande', accent: '#64C4FF', rgbTint: 'rgba(100, 196, 255, 0.45)', pts: 5, wins: 0, bio: "Pilier solide de l'écurie Williams.", history: [] },
  { id: 'ocon', num: 31, first: 'Esteban', last: 'Ocon', teamId: 'haas', team: 'Haas F1 Team', engine: 'Ferrari', country: 'France', accent: '#B6BABD', rgbTint: 'rgba(182, 186, 189, 0.45)', pts: 3, wins: 0, bio: "Pilote français accrocheur et travailleur chez Haas.", history: [] },
  { id: 'alonso', num: 14, first: 'Fernando', last: 'Alonso', teamId: 'astonmartin', team: 'Aston Martin Cognizant F1 Team', engine: 'Mercedes-AMG', country: 'Espagne', accent: '#229971', rgbTint: 'rgba(34, 153, 113, 0.45)', pts: 3, wins: 0, bio: "Légende vivante de la discipline toujours en quête d'exploits.", history: [] },
  { id: 'tsunoda', num: 22, first: 'Yuki', last: 'Tsunoda', teamId: 'racingbulls', team: 'Racing Bulls', engine: 'Red Bull Powertrains', country: 'Japon', accent: '#6692FF', rgbTint: 'rgba(102, 146, 255, 0.45)', pts: 1, wins: 0, bio: "Pilote japonais fougueux.", history: [] },
  { id: 'stroll', num: 18, first: 'Lance', last: 'Stroll', teamId: 'astonmartin', team: 'Aston Martin Cognizant F1 Team', engine: 'Mercedes-AMG', country: 'Canada', accent: '#229971', rgbTint: 'rgba(34, 153, 113, 0.45)', pts: 0, wins: 0, bio: "Pilote canadien engagé avec Aston Martin.", history: [] },
  { id: 'bottas', num: 77, first: 'Valtteri', last: 'Bottas', teamId: 'cadillac', team: 'Cadillac Formula 1 Team', engine: 'General Motors', country: 'Finlande', accent: '#999999', rgbTint: 'rgba(153, 153, 153, 0.45)', pts: 0, wins: 0, bio: "Vétéran finlandais chez Cadillac F1.", history: [] },
  { id: 'perez', num: 11, first: 'Sergio', last: 'Pérez', teamId: 'cadillac', team: 'Cadillac Formula 1 Team', engine: 'General Motors', country: 'Mexique', accent: '#999999', rgbTint: 'rgba(153, 153, 153, 0.45)', pts: 0, wins: 0, bio: "Pilote mexicain chez Cadillac.", history: [] }
];

const races = [
  { id: 'gp-01', status: 'past', round: 1, name: '1. Grand Prix d Australia (Melbourne)', date: '06 - 08 Mars 2026', circuitType: 'australia', length: '5.278 km', laps: '58 tours', qualifDate: 'Samedi 07 Mars 2026', qualifTime: '06:00 CET', raceDate: 'Dimanche 08 Mars 2026', raceTime: '05:00 CET', grid: [{ pos: 1, driver: 'George Russell', team: 'Mercedes', time: '1:23:06.801', pts: '+25 pts' }] },
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

// ==========================================
// 2. FONCTIONS DE CHARGEMENT ET D'IMAGES
// ==========================================

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
    <path d="M 100 200 L 250 180 L 350 120 L 550 120 L 700 200 Z" fill="none" stroke="${accentColor}" stroke-width="4"/>
    <circle cx="200" cy="220" r="30" fill="${accentColor}"/>
    <circle cx="600" cy="220" r="30" fill="${accentColor}"/>
    <text x="400" y="100" font-family="'Titillium Web', sans-serif" font-weight="900" font-size="32" fill="#ffffff" text-anchor="middle" letter-spacing="3">MONOPLACE F1 2026</text>
    <text x="400" y="160" font-family="'Inter', sans-serif" font-weight="800" font-size="22" fill="${accentColor}" text-anchor="middle">${teamName.toUpperCase()}</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function generateF1HelmetBadge(driverNum, accentColor) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">
    <circle cx="150" cy="150" r="130" fill="#161c28" stroke="${accentColor}" stroke-width="4"/>
    <text x="150" y="165" font-family="'Titillium Web', sans-serif" font-weight="900" font-size="70" fill="#ffffff" text-anchor="middle">#${driverNum}</text>
    <text x="150" y="210" font-family="'Inter', sans-serif" font-weight="800" font-size="14" fill="${accentColor}" text-anchor="middle">CASQUE OFFICIEL</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// 1. OpenF1 -> 2. GitHub F1 -> 3. Wikimedia HD -> 4. Badge F1 Vectoriel
function getDriverImageSources(driver) {
  const sources = [];
  if (openF1Headshots[driver.num]) {
    sources.push(openF1Headshots[driver.num]);
  }
  sources.push(`https://raw.githubusercontent.com/marcussacana/f1-api/main/public/images/drivers/${driver.id}.png`);
  
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
  if (wikiMap[driver.id]) sources.push(wikiMap[driver.id]);
  sources.push(generateF1DriverBadge(`${driver.first} ${driver.last}`, driver.num, driver.team, driver.accent));

  return sources;
}

function getHelmetImageSources(driver) {
  return [
    `https://raw.githubusercontent.com/marcussacana/f1-api/main/public/images/helmets/${driver.id}.png`,
    generateF1HelmetBadge(driver.num, driver.accent)
  ];
}

// VRAIS CLICHÉS DE MONOPLACES F1 EXACTES POUR CHAQUE ÉCURIE DANS L'ATELIER ET LES FICHES
function getCarImageSources(teamId) {
  const teamObj = constructors.find(c => c.id === teamId);
  const teamName = teamObj ? teamObj.name : teamId;
  const accent = teamObj ? teamObj.accent : '#00D2BE';

  const realF1CarPhotos = {
    mercedes: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mercedes_F1_W13_2022_Monaco_GP.jpg/1200px-Mercedes_F1_W13_2022_Monaco_GP.jpg",
    ferrari: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ferrari_F1-75_2022_Monaco_GP.jpg/1200px-Ferrari_F1-75_2022_Monaco_GP.jpg",
    redbull: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Red_Bull_RB18_2022_Monaco_GP.jpg/1200px-Red_Bull_RB18_2022_Monaco_GP.jpg",
    mclaren: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/McLaren_MCL36_2022_Monaco_GP.jpg/1200px-McLaren_MCL36_2022_Monaco_GP.jpg",
    alpine: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Alpine_A522_2022_Monaco_GP.jpg/1200px-Alpine_A522_2022_Monaco_GP.jpg",
    astonmartin: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Aston_Martin_AMR22_2022_Monaco_GP.jpg/1200px-Aston_Martin_AMR22_2022_Monaco_GP.jpg",
    williams: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Williams_FW44_2022_Monaco_GP.jpg/1200px-Williams_FW44_2022_Monaco_GP.jpg",
    haas: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Haas_VF-22_2022_Monaco_GP.jpg/1200px-Haas_VF-22_2022_Monaco_GP.jpg",
    racingbulls: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Red_Bull_RB18_2022_Monaco_GP.jpg/1200px-Red_Bull_RB18_2022_Monaco_GP.jpg",
    audi: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Nico_H%C3%BClkenberg_2017_Malaysia_1.jpg/800px-Nico_H%C3%BClkenberg_2017_Malaysia_1.jpg",
    cadillac: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mercedes_F1_W13_2022_Monaco_GP.jpg/1200px-Mercedes_F1_W13_2022_Monaco_GP.jpg"
  };

  const sources = [];
  if (realF1CarPhotos[teamId]) sources.push(realF1CarPhotos[teamId]);
  sources.push(`https://raw.githubusercontent.com/marcussacana/f1-api/main/public/images/cars/${teamId}.png`);
  sources.push(generateF1CarBadge(teamName, accent));

  return sources;
}

function getLogoImageSources(teamId) {
  const teamObj = constructors.find(c => c.id === teamId);
  const teamName = teamObj ? teamObj.name : teamId;
  const accent = teamObj ? teamObj.accent : '#00D2BE';

  return [
    `https://raw.githubusercontent.com/marcussacana/f1-api/main/public/images/teams/${teamId}.png`,
    generateF1CarBadge(teamName, accent)
  ];
}

// ==========================================
// 3. FONCTIONS D'INTERFACE ET DE RENDU
// ==========================================

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

// REMPLIT LE MENU DÉROULANT DES PILOTES
function populateDriverDropdowns() {
  const navSelect = document.getElementById('driverSelectNav');
  if (!navSelect) return;

  navSelect.innerHTML = drivers.map(d => `
    <option value="${d.id}" ${d.id === favoriteDriverId ? 'selected' : ''}>
      #${d.num} ${d.first} ${d.last} (${d.team})
    </option>
  `).join('');
}

// SÉLECTION D'UN PILOTE DEPUIS LE MENU DÉROULANT
function selectDriverFromDropdown(driverId) {
  const d = drivers.find(x => x.id === driverId);
  if (!d) return;

  setFavoriteDriver(d.id);

  // Défilement jusqu'au carrousel pilote
  const cardSlide = document.getElementById(`slide-driver-${d.id}`);
  if (cardSlide) {
    cardSlide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  // Mettre à jour la monoplace dans l'atelier interactif garage
  updateGarageCar(d.teamId);
}

function scrollCarousel(direction) {
  const wrapper = document.getElementById('carouselWrapper');
  if (!wrapper) return;
  const cardWidth = 600;
  wrapper.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

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

  drivers.forEach(d => {
    loadImageWithCascade(document.getElementById(`portrait-img-${d.id}`), getDriverImageSources(d));
    loadImageWithCascade(document.getElementById(`helmet-img-${d.id}`), getHelmetImageSources(d));
    loadImageWithCascade(document.getElementById(`car-img-${d.id}`), getCarImageSources(d.teamId));
    loadImageWithCascade(document.getElementById(`logo-img-${d.id}`), getLogoImageSources(d.teamId));
  });
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

function renderDriversTable() {
  const tbody = document.getElementById('driversTableBody');
  if (!tbody) return;
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
        <td class="pos" style="color:${pos <= 3 ? 'var(--accent-2)' : 'var(--ink)'}">${pos}</td>
        <td><b>${d.first} ${d.last}</b> ${isFav ? '<small style="color:var(--accent-2); font-weight:800;">[FAV]</small>' : ''}</td>
        <td style="color:var(--ink-dim);">${d.team}</td>
        <td class="pts">${d.pts} pts</td>
      </tr>
    `;
  }).join('');
}

function renderConstructorsTable() {
  const tbody = document.getElementById('constructorsTableBody');
  if (!tbody) return;

  const computedConstructors = constructors.map((c, index) => ({
    ...c,
    rank: index + 1,
    pts: drivers.filter(d => d.teamId === c.id).reduce((sum, d) => sum + d.pts, 0)
  })).sort((a,b) => b.pts - a.pts);

  tbody.innerHTML = computedConstructors.map((c, i) => `
    <tr class="clickable-row" onclick="openTeamModal('${c.id}')">
      <td class="pos" style="color:${i < 3 ? 'var(--accent-2)' : 'var(--ink)'}">${i + 1}</td>
      <td><b>${c.name}</b></td>
      <td style="color:var(--ink-dim);">${c.engine}</td>
      <td class="pts">${c.pts} pts</td>
    </tr>
  `).join('');
}

function renderRacesAccordion() {
  const container = document.getElementById('racesAccordionList');
  if (!container) return;

  container.innerHTML = races.map(r => `
    <div class="race-card ${r.status}">
      <div class="race-header-btn">
        <div>
          <div class="name">${r.name}</div>
          <div class="date">${r.date}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function setThemeTint(rgbTint, accent) {
  document.documentElement.style.setProperty('--team-tint', rgbTint);
  document.documentElement.style.setProperty('--accent', accent);
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
  }
}

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

document.addEventListener('DOMContentLoaded', () => {
  populateDriverDropdowns();
  const favDriver = getFavoriteDriver();
  updateTopNavBadge(favDriver);

  renderDriversTable();
  renderConstructorsTable();
  renderRacesAccordion();
  renderDriversCarouselTrack();
  
  // Met à jour la monoplace dans le garage avec l'écurie du pilote favori
  if (favDriver) {
    updateGarageCar(favDriver.teamId);
  }

  initOpenF1Data();
});
