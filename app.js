// Mappage des images locales autonomes
const driverPhotos = {
  'leclerc': 'images/drivers/leclerc.svg',
  'hamilton': 'images/drivers/hamilton.svg',
  'verstappen': 'images/drivers/verstappen.svg',
  'hadjar': 'images/drivers/hadjar.svg',
  'norris': 'images/drivers/norris.svg',
  'piastri': 'images/drivers/piastri.svg',
  'russell': 'images/drivers/russell.svg',
  'antonelli': 'images/drivers/antonelli.svg',
  'alonso': 'images/drivers/alonso.svg',
  'stroll': 'images/drivers/stroll.svg',
  'gasly': 'images/drivers/gasly.svg',
  'doohan': 'images/drivers/doohan.svg',
  'albon': 'images/drivers/albon.svg',
  'sainz': 'images/drivers/sainz.svg',
  'tsunoda': 'images/drivers/tsunoda.svg',
  'lawson': 'images/drivers/lawson.svg',
  'hulkenberg': 'images/drivers/hulkenberg.svg',
  'bortoleto': 'images/drivers/bortoleto.svg',
  'ocon': 'images/drivers/ocon.svg',
  'bearman': 'images/drivers/bearman.svg'
};

const teamCars = {
  'Scuderia Ferrari': 'images/cars/ferrari.svg',
  'Mercedes-AMG Petronas': 'images/cars/mercedes.svg',
  'Red Bull Racing': 'images/cars/redbull.svg',
  'McLaren F1 Team': 'images/cars/mclaren.svg',
  'Aston Martin Aramco': 'images/cars/astonmartin.svg',
  'Alpine F1 Team': 'images/cars/alpine.svg',
  'Williams Racing': 'images/cars/williams.svg',
  'Racing Bulls': 'images/cars/racingbulls.svg',
  'Haas F1 Team': 'images/cars/haas.svg',
  'Stake F1 Team Kick Sauber': 'images/cars/sauber.svg'
};

const circuitImages = {
  australia: 'images/circuits/australia.svg',
  china: 'images/circuits/china.svg',
  japan: 'images/circuits/japan.svg',
  bahrain: 'images/circuits/bahrain.svg',
  saudi: 'images/circuits/saudi.svg',
  miami: 'images/circuits/miami.svg',
  canada: 'images/circuits/canada.svg',
  monaco: 'images/circuits/monaco.svg',
  barcelona: 'images/circuits/barcelona.svg',
  austria: 'images/circuits/austria.svg',
  silverstone: 'images/circuits/silverstone.svg',
  spa: 'images/circuits/spa.svg',
  hungary: 'images/circuits/hungary.svg',
  zandvoort: 'images/circuits/zandvoort.svg',
  monza: 'images/circuits/monza.svg',
  madrid: 'images/circuits/madrid.svg',
  baku: 'images/circuits/baku.svg',
  singapore: 'images/circuits/singapore.svg',
  austin: 'images/circuits/austin.svg',
  mexico: 'images/circuits/mexico.svg',
  brazil: 'images/circuits/brazil.svg',
  vegas: 'images/circuits/vegas.svg',
  qatar: 'images/circuits/qatar.svg',
  abudhabi: 'images/circuits/abudhabi.svg'
};

// BASE DE DONNÉES PILOTES COMPLÈTE
let drivers = [
  { id: 'leclerc', num: 16, first: 'Charles', last: 'Leclerc', team: 'Scuderia Ferrari', engine: 'Ferrari', country: 'Monaco', accent: '#E10600', rgbTint: 'rgba(225, 6, 0, 0.45)', pts: 215, ptsGainedLast: 25, titles: 0, seasonWins: 4, pod: 9, bio: "Pilote monégasque d'exception et leader de la Scuderia Ferrari, réputé pour sa vitesse pure phénoménale.", history: [{ gp: 'GP 15 (Monza)', pos: 'P1 (+25 pts)' }, { gp: 'GP 14 (Zandvoort)', pos: 'P3 (+15 pts)' }, { gp: 'GP 13 (Spa)', pos: 'P1 (+25 pts)' }] },
  { id: 'hamilton', num: 44, first: 'Lewis', last: 'Hamilton', team: 'Scuderia Ferrari', engine: 'Ferrari', country: 'Royaume-Uni', accent: '#E10600', rgbTint: 'rgba(225, 6, 0, 0.45)', pts: 188, ptsGainedLast: 18, titles: 7, seasonWins: 3, pod: 8, bio: "Septuple champion du monde de légende, fer de lance de Ferrari.", history: [{ gp: 'GP 15 (Monza)', pos: 'P2 (+18 pts)' }, { gp: 'GP 13 (Spa)', pos: 'P3 (+15 pts)' }] },
  { id: 'verstappen', num: 1, first: 'Max', last: 'Verstappen', team: 'Red Bull Racing', engine: 'Red Bull Powertrains', country: 'Pays-Bas', accent: '#3671C6', rgbTint: 'rgba(54, 113, 198, 0.45)', pts: 245, ptsGainedLast: 12, titles: 4, seasonWins: 5, pod: 11, bio: "Quadruple champion du monde néerlandais.", history: [{ gp: 'GP 15 (Monza)', pos: 'P4 (+12 pts)' }, { gp: 'GP 14 (Zandvoort)', pos: 'P2 (+18 pts)' }] },
  { id: 'hadjar', num: 6, first: 'Isack', last: 'Hadjar', team: 'Red Bull Racing', engine: 'Red Bull Powertrains', country: 'France', accent: '#3671C6', rgbTint: 'rgba(54, 113, 198, 0.45)', pts: 72, ptsGainedLast: 8, titles: 0, seasonWins: 0, pod: 2, bio: "Jeune prodige français promu au sein de Red Bull Racing.", history: [{ gp: 'GP 15 (Monza)', pos: 'P6 (+8 pts)' }] },
  { id: 'norris', num: 4, first: 'Lando', last: 'Norris', team: 'McLaren F1 Team', engine: 'Mercedes-AMG', country: 'Royaume-Uni', accent: '#FF8000', rgbTint: 'rgba(255, 128, 0, 0.45)', pts: 220, ptsGainedLast: 15, titles: 0, seasonWins: 4, pod: 10, bio: "Pilote britannique ultra-rapide chez McLaren.", history: [{ gp: 'GP 15 (Monza)', pos: 'P3 (+15 pts)' }, { gp: 'GP 14 (Zandvoort)', pos: 'P1 (+25 pts)' }] },
  { id: 'piastri', num: 81, first: 'Oscar', last: 'Piastri', team: 'McLaren F1 Team', engine: 'Mercedes-AMG', country: 'Australie', accent: '#FF8000', rgbTint: 'rgba(255, 128, 0, 0.45)', pts: 154, ptsGainedLast: 10, titles: 0, seasonWins: 1, pod: 5, bio: "Prodige australien à la précision chirurgicale.", history: [{ gp: 'GP 15 (Monza)', pos: 'P5 (+10 pts)' }] },
  { id: 'russell', num: 63, first: 'George', last: 'Russell', team: 'Mercedes-AMG Petronas', engine: 'Mercedes-AMG', country: 'Royaume-Uni', accent: '#27F4D2', rgbTint: 'rgba(39, 244, 210, 0.45)', pts: 178, ptsGainedLast: 6, titles: 0, seasonWins: 2, pod: 6, bio: "Leader méthodique chez Mercedes.", history: [{ gp: 'GP 15 (Monza)', pos: 'P7 (+6 pts)' }] },
  { id: 'antonelli', num: 12, first: 'Kimi', last: 'Antonelli', team: 'Mercedes-AMG Petronas', engine: 'Mercedes-AMG', country: 'Italie', accent: '#27F4D2', rgbTint: 'rgba(39, 244, 210, 0.45)', pts: 148, ptsGainedLast: 0, titles: 0, seasonWins: 1, pod: 5, bio: "Nouveau phénomène italien de la F1.", history: [{ gp: 'GP 13 (Spa)', pos: 'P2 (+18 pts)' }] },
  { id: 'alonso', num: 14, first: 'Fernando', last: 'Alonso', team: 'Aston Martin Aramco', engine: 'Mercedes-AMG', country: 'Espagne', accent: '#229971', rgbTint: 'rgba(34, 153, 113, 0.45)', pts: 58, ptsGainedLast: 4, titles: 2, seasonWins: 0, pod: 1, bio: "Double champion du monde espagnol.", history: [{ gp: 'GP 15 (Monza)', pos: 'P8 (+4 pts)' }] },
  { id: 'stroll', num: 18, first: 'Lance', last: 'Stroll', team: 'Aston Martin Aramco', engine: 'Mercedes-AMG', country: 'Canada', accent: '#229971', rgbTint: 'rgba(34, 153, 113, 0.45)', pts: 24, ptsGainedLast: 1, titles: 0, seasonWins: 0, pod: 0, bio: "Pilote canadien chez Aston Martin.", history: [{ gp: 'GP 15 (Monza)', pos: 'P10 (+1 pt)' }] },
  { id: 'gasly', num: 10, first: 'Pierre', last: 'Gasly', team: 'Alpine F1 Team', engine: 'Renault / Alpine', country: 'France', accent: '#0093CC', rgbTint: 'rgba(0, 147, 204, 0.45)', pts: 32, ptsGainedLast: 2, titles: 0, seasonWins: 0, pod: 0, bio: "Meneur du projet Alpine.", history: [{ gp: 'GP 15 (Monza)', pos: 'P9 (+2 pts)' }] },
  { id: 'doohan', num: 7, first: 'Jack', last: 'Doohan', team: 'Alpine F1 Team', engine: 'Renault / Alpine', country: 'Australie', accent: '#0093CC', rgbTint: 'rgba(0, 147, 204, 0.45)', pts: 14, ptsGainedLast: 0, titles: 0, seasonWins: 0, pod: 0, bio: "Jeune Australien chez Alpine.", history: [] },
  { id: 'albon', num: 23, first: 'Alexander', last: 'Albon', team: 'Williams Racing', engine: 'Mercedes-AMG', country: 'Thaïlande', accent: '#64C4FF', rgbTint: 'rgba(100, 196, 255, 0.45)', pts: 28, ptsGainedLast: 0, titles: 0, seasonWins: 0, pod: 0, bio: "Pilier de Williams Racing.", history: [] },
  { id: 'sainz', num: 55, first: 'Carlos', last: 'Sainz', team: 'Williams Racing', engine: 'Mercedes-AMG', country: 'Espagne', accent: '#64C4FF', rgbTint: 'rgba(100, 196, 255, 0.45)', pts: 42, ptsGainedLast: 0, titles: 0, seasonWins: 0, pod: 1, bio: "Vainqueur de GP chez Williams.", history: [] },
  { id: 'tsunoda', num: 22, first: 'Yuki', last: 'Tsunoda', team: 'Racing Bulls', engine: 'Red Bull Powertrains', country: 'Japon', accent: '#6692FF', rgbTint: 'rgba(102, 146, 255, 0.45)', pts: 22, ptsGainedLast: 0, titles: 0, seasonWins: 0, pod: 0, bio: "Pilote japonais impulsif.", history: [] },
  { id: 'lawson', num: 30, first: 'Liam', last: 'Lawson', team: 'Racing Bulls', engine: 'Red Bull Powertrains', country: 'Nouvelle-Zélande', accent: '#6692FF', rgbTint: 'rgba(102, 146, 255, 0.45)', pts: 36, ptsGainedLast: 0, titles: 0, seasonWins: 0, pod: 0, bio: "Challenger néo-zélandais chez Racing Bulls.", history: [] },
  { id: 'hulkenberg', num: 27, first: 'Nico', last: 'Hülkenberg', team: 'Stake F1 Team Kick Sauber', engine: 'Ferrari', country: 'Allemagne', accent: '#52E252', rgbTint: 'rgba(82, 226, 82, 0.45)', pts: 18, ptsGainedLast: 0, titles: 0, seasonWins: 0, pod: 0, bio: "Vétéran allemand chez Sauber.", history: [] },
  { id: 'bortoleto', num: 5, first: 'Gabriel', last: 'Bortoleto', team: 'Stake F1 Team Kick Sauber', engine: 'Ferrari', country: 'Brésil', accent: '#52E252', rgbTint: 'rgba(82, 226, 82, 0.45)', pts: 8, ptsGainedLast: 0, titles: 0, seasonWins: 0, pod: 0, bio: "Espoir brésilien chez Sauber.", history: [] },
  { id: 'ocon', num: 31, first: 'Esteban', last: 'Ocon', team: 'Haas F1 Team', engine: 'Ferrari', country: 'France', accent: '#B6BABD', rgbTint: 'rgba(182, 186, 189, 0.45)', pts: 20, ptsGainedLast: 0, titles: 0, seasonWins: 0, pod: 0, bio: "Leader français chez Haas.", history: [] },
  { id: 'bearman', num: 87, first: 'Oliver', last: 'Bearman', team: 'Haas F1 Team', engine: 'Ferrari', country: 'Royaume-Uni', accent: '#B6BABD', rgbTint: 'rgba(182, 186, 189, 0.45)', pts: 14, ptsGainedLast: 0, titles: 0, seasonWins: 0, pod: 0, bio: "Jeune prodige chez Haas.", history: [] }
];

let constructors = [
  { id: 'ferrari', name: 'Scuderia Ferrari', engine: 'Ferrari', principal: 'Frédéric Vasseur', base: 'Maranello, Italie', bio: "Écurie mythique basée à Maranello." },
  { id: 'mclaren', name: 'McLaren F1 Team', engine: 'Mercedes-AMG', principal: 'Andrea Stella', base: 'Woking, Royaume-Uni', bio: "Écurie britannique de Woking." },
  { id: 'redbull', name: 'Red Bull Racing', engine: 'Red Bull Powertrains', principal: 'Christian Horner', base: 'Milton Keynes, Royaume-Uni', bio: "Référence d'ingénierie à Milton Keynes." },
  { id: 'mercedes', name: 'Mercedes-AMG Petronas', engine: 'Mercedes-AMG', principal: 'Toto Wolff', base: 'Brackley, Royaume-Uni', bio: "Les flèches d'argent de Brackley." },
  { id: 'astonmartin', name: 'Aston Martin Aramco', engine: 'Mercedes-AMG', principal: 'Mike Krack', base: 'Silverstone, Royaume-Uni', bio: "Structures à Silverstone." },
  { id: 'williams', name: 'Williams Racing', engine: 'Mercedes-AMG', principal: 'James Vowles', base: 'Grove, Royaume-Uni', bio: "Monument de la F1 en pleine renaissance." },
  { id: 'racingbulls', name: 'Racing Bulls', engine: 'Red Bull Powertrains', principal: 'Laurent Mekies', base: 'Faenza, Italie', bio: "Écurie de Faenza." },
  { id: 'alpine', name: 'Alpine F1 Team', engine: 'Renault / Alpine', principal: 'Oliver Oakes', base: 'Enstone, Royaume-Uni', bio: "Écurie française d'Enstone." },
  { id: 'haas', name: 'Haas F1 Team', engine: 'Ferrari', principal: 'Ayao Komatsu', base: 'Kannapolis, États-Unis', bio: "Écurie américaine." },
  { id: 'sauber', name: 'Stake F1 Team Kick Sauber', engine: 'Ferrari', principal: 'Mattia Binotto', base: 'Hinwil, Suisse', bio: "Structure suisse de Hinwil." }
];

// CALENDRIER OFFICIEL REVISITÉ DE A À Z POUR TOUTES LES 24 ÉPREUVES DE LA SAISON 2026 FIA
let races = [
  { id: 'gp-01', status: 'past', round: 1, name: '1. Grand Prix d Australie (Melbourne)', date: '06 - 08 Mars 2026', time: '05:00 CET', circuitType: 'australia', length: '5.278 km', laps: '58 tours', grid: [{ pos: 1, driver: 'George Russell', team: 'Mercedes', time: '1:24:20.900', pts: '+25 pts' }] },
  { id: 'gp-02', status: 'past', round: 2, name: '2. Grand Prix de Chine (Shanghai)', date: '20 - 22 Mars 2026', time: '09:00 CET', circuitType: 'china', length: '5.451 km', laps: '56 tours', grid: [{ pos: 1, driver: 'Lewis Hamilton', team: 'Ferrari', time: '1:32:10.000', pts: '+25 pts' }] },
  { id: 'gp-03', status: 'past', round: 3, name: '3. Grand Prix du Japon (Suzuka)', date: '03 - 05 Avril 2026', time: '07:00 CEST', circuitType: 'japan', length: '5.807 km', laps: '53 tours', grid: [{ pos: 1, driver: 'Max Verstappen', team: 'Red Bull', time: '1:54:23.500', pts: '+25 pts' }] },
  { id: 'gp-04', status: 'past', round: 4, name: '4. Grand Prix de Bahreïn (Sakhir)', date: '10 - 12 Avril 2026', time: '17:00 CEST', circuitType: 'bahrain', length: '5.412 km', laps: '57 tours', grid: [{ pos: 1, driver: 'Max Verstappen', team: 'Red Bull', time: '1:31:44.742', pts: '+25 pts' }] },
  { id: 'gp-05', status: 'past', round: 5, name: '5. Grand Prix d Arabie Saoudite (Jeddah)', date: '17 - 19 Avril 2026', time: '19:00 CEST', circuitType: 'saudi', length: '6.174 km', laps: '50 tours', grid: [{ pos: 1, driver: 'Lewis Hamilton', team: 'Ferrari', time: '1:20:25.110', pts: '+25 pts' }] },
  { id: 'gp-06', status: 'past', round: 6, name: '6. Grand Prix de Miami', date: '01 - 03 Mai 2026', time: '21:30 CEST', circuitType: 'miami', length: '5.412 km', laps: '57 tours', grid: [{ pos: 1, driver: 'Lando Norris', team: 'McLaren', time: '1:30:49.876', pts: '+25 pts' }] },
  { id: 'gp-07', status: 'past', round: 7, name: '7. Grand Prix du Canada (Montréal)', date: '22 - 24 Mai 2026', time: '20:00 CEST', circuitType: 'canada', length: '4.361 km', laps: '70 tours', grid: [{ pos: 1, driver: 'Kimi Antonelli', team: 'Mercedes', time: '1:35:40.100', pts: '+25 pts' }] },
  { id: 'gp-08', status: 'past', round: 8, name: '8. Grand Prix de Monaco (Monte-Carlo)', date: '05 - 07 Juin 2026', time: '15:00 CEST', circuitType: 'monaco', length: '3.337 km', laps: '78 tours', grid: [{ pos: 1, driver: 'Charles Leclerc', team: 'Ferrari', time: '1:42:15.112', pts: '+25 pts' }] },
  { id: 'gp-09', status: 'past', round: 9, name: '9. Grand Prix d Autriche (Spielberg)', date: '26 - 28 Juin 2026', time: '15:00 CEST', circuitType: 'austria', length: '4.318 km', laps: '71 tours', grid: [{ pos: 1, driver: 'George Russell', team: 'Mercedes', time: '1:22:15.800', pts: '+25 pts' }] },
  { id: 'gp-10', status: 'past', round: 10, name: '10. Grand Prix de Grande-Bretagne (Silverstone)', date: '10 - 12 Juillet 2026', time: '16:00 CEST', circuitType: 'silverstone', length: '5.891 km', laps: '52 tours', grid: [{ pos: 1, driver: 'Lewis Hamilton', team: 'Ferrari', time: '1:22:27.059', pts: '+25 pts' }] },
  { id: 'gp-11', status: 'past', round: 11, name: '11. Grand Prix de Belgique (Spa-Francorchamps)', date: '24 - 26 Juillet 2026', time: '15:00 CEST', circuitType: 'spa', length: '7.004 km', laps: '44 tours', grid: [{ pos: 1, driver: 'Lando Norris', team: 'McLaren', time: '1:21:18.990', pts: '+25 pts' }] },
  { id: 'gp-12', status: 'past', round: 12, name: '12. Grand Prix de Hongrie (Hungaroring)', date: '31 Juillet - 02 Août 2026', time: '15:00 CEST', circuitType: 'hungary', length: '4.381 km', laps: '70 tours', grid: [{ pos: 1, driver: 'Oscar Piastri', team: 'McLaren', time: '1:38:01.980', pts: '+25 pts' }] },
  { id: 'gp-13', status: 'past', round: 13, name: '13. Grand Prix des Pays-Bas (Zandvoort)', date: '21 - 23 Août 2026', time: '15:00 CEST', circuitType: 'zandvoort', length: '4.259 km', laps: '72 tours', grid: [{ pos: 1, driver: 'Lando Norris', team: 'McLaren', time: '1:30:45.500', pts: '+25 pts' }] },
  { id: 'gp-14', status: 'past', round: 14, name: '14. Grand Prix d Italie (Monza)', date: '04 - 06 Septembre 2026', time: '15:00 CEST', circuitType: 'monza', length: '5.793 km', laps: '53 tours', grid: [{ pos: 1, driver: 'Charles Leclerc', team: 'Ferrari', time: '1:14:40.727', pts: '+25 pts' }] },

  // PROCHAIN GRAND PRIX EN DIRECT DE LA SAISON : MADRID (11 - 13 SEPTEMBRE 2026)
  { id: 'gp-15', status: 'upcoming', round: 15, name: '15. Grand Prix d Espagne (Madring - Madrid)', date: '11 - 13 Septembre 2026', time: '15:00 CEST', circuitType: 'madrid', length: '5.474 km', laps: '55 tours', grid: [{ pos: 'DIRECT', driver: 'Prochain GP ce W.E.', team: 'Circuit Urbain Madring', time: '15:00 CEST', pts: '-' }] },

  { id: 'gp-16', status: 'upcoming', round: 16, name: '16. Grand Prix d Azerbaïdjan (Baku)', date: '25 - 27 Septembre 2026', time: '13:00 CEST', circuitType: 'baku', length: '6.003 km', laps: '51 tours', grid: [{ pos: '-', driver: 'À venir', team: '-', time: '-', pts: '-' }] },
  { id: 'gp-17', status: 'upcoming', round: 17, name: '17. Grand Prix de Singapour (Marina Bay)', date: '09 - 11 Octobre 2026', time: '14:00 CEST', circuitType: 'singapore', length: '4.940 km', laps: '62 tours', grid: [{ pos: '-', driver: 'À venir', team: '-', time: '-', pts: '-' }] },
  { id: 'gp-18', status: 'upcoming', round: 18, name: '18. Grand Prix des États-Unis (Austin)', date: '23 - 25 Octobre 2026', time: '21:00 CEST', circuitType: 'austin', length: '5.513 km', laps: '56 tours', grid: [{ pos: '-', driver: 'À venir', team: '-', time: '-', pts: '-' }] },
  { id: 'gp-19', status: 'upcoming', round: 19, name: '19. Grand Prix du Mexique (Mexico City)', date: '30 Octobre - 01 Novembre 2026', time: '21:00 CET', circuitType: 'mexico', length: '4.304 km', laps: '71 tours', grid: [{ pos: '-', driver: 'À venir', team: '-', time: '-', pts: '-' }] },
  { id: 'gp-20', status: 'upcoming', round: 20, name: '20. Grand Prix du Brésil (Interlagos)', date: '13 - 15 Novembre 2026', time: '18:00 CET', circuitType: 'brazil', length: '4.309 km', laps: '71 tours', grid: [{ pos: '-', driver: 'À venir', team: '-', time: '-', pts: '-' }] },
  { id: 'gp-21', status: 'upcoming', round: 21, name: '21. Grand Prix de Las Vegas', date: '19 - 21 Novembre 2026', time: '07:00 CET', circuitType: 'vegas', length: '6.201 km', laps: '50 tours', grid: [{ pos: '-', driver: 'À venir', team: '-', time: '-', pts: '-' }] },
  { id: 'gp-22', status: 'upcoming', round: 22, name: '22. Grand Prix du Qatar (Lusail)', date: '27 - 29 Novembre 2026', time: '18:00 CET', circuitType: 'qatar', length: '5.419 km', laps: '57 tours', grid: [{ pos: '-', driver: 'À venir', team: '-', time: '-', pts: '-' }] },
  { id: 'gp-23', status: 'upcoming', round: 23, name: '23. Grand Prix d Abou Dabi (Yas Marina)', date: '04 - 06 Décembre 2026', time: '14:00 CET', circuitType: 'abudhabi', length: '5.281 km', laps: '58 tours', grid: [{ pos: '-', driver: 'À venir', team: '-', time: '-', pts: '-' }] },
  { id: 'gp-24', status: 'upcoming', round: 24, name: '24. Grand Prix de Catalogne (Barcelone)', date: '11 - 13 Décembre 2026', time: '15:00 CET', circuitType: 'barcelona', length: '4.675 km', laps: '66 tours', grid: [{ pos: '-', driver: 'À venir', team: '-', time: '-', pts: '-' }] }
];

const hotspotDetails = {
  moteur: { kicker: 'GROUPE PROPULSEUR', title: 'Unité de Puissance Hybride V6 Turbo', desc: 'Moteur V6 1.6L couplé aux MGU-K développant plus de 1000 ch.', stats: [['Cylindrée', '1.6L V6 Turbo'], ['Régime Max', '15 000 tr/min'], ['Puissance Hybride', '≈ 1000 ch']] },
  aileronAvant: { kicker: 'AÉRODYNAMIQUE', title: 'Aileron Avant à Volets Ajustables', desc: 'Canalise le flux d air vers le fond plat.', stats: [['Matériau', 'Fibre de Carbone'], ['Ajustement', 'Variable']] },
  aileronArriere: { kicker: 'AÉRODYNAMIQUE', title: 'Aileron Arrière & DRS', desc: 'Réduit la traînée de 30% en ligne droite.', stats: [['Système', 'DRS Hydraulique'], ['Gain Vmax', '+15 km/h']] },
  halo: { kicker: 'SÉCURITÉ', title: 'Structure Halo en Titane', desc: 'Protecteur de cockpit résistant à 12 tonnes.', stats: [['Poids', '9 kg'], ['Résistance', '120 kN']] },
  pneus: { kicker: 'PNEUMATIQUES', title: 'Pneus Pirelli 18 Pouces', desc: 'Gommes fournies par Pirelli.', stats: [['Taille Jantes', '18 pouces'], ['Fournisseur', 'Pirelli']] }
};

function getComputedConstructors() {
  return constructors.map(c => {
    const teamDrivers = drivers.filter(d => d.team.toLowerCase().includes(c.name.toLowerCase()) || c.name.toLowerCase().includes(d.team.toLowerCase()));
    const totalPts = teamDrivers.reduce((sum, d) => sum + (d.pts || 0), 0);
    const totalWins = teamDrivers.reduce((sum, d) => sum + (d.seasonWins || 0), 0);

    return {
      ...c,
      pts: totalPts,
      seasonWins: totalWins,
      driversList: teamDrivers.map(d => `${d.first} ${d.last}`)
    };
  }).sort((a, b) => b.pts - a.pts).map((c, index) => ({ ...c, rank: index + 1 }));
}

async function loadLiveDataFromAPI() {
  try {
    const driverRes = await fetch('https://api.jolpi.ca/ergast/f1/current/driverStandings.json');
    if (driverRes.ok) {
      const dData = await driverRes.json();
      const standings = dData?.MRData?.StandingsTable?.StandingsLists[0]?.DriverStandings;
      if (standings && standings.length > 0) {
        standings.forEach(item => {
          const apiId = item.Driver.driverId;
          const familyName = item.Driver.familyName.toLowerCase();
          const localMatch = drivers.find(d => d.id === apiId || d.last.toLowerCase() === familyName);
          if (localMatch) {
            localMatch.pts = parseInt(item.points) || localMatch.pts;
            localMatch.seasonWins = parseInt(item.wins) || localMatch.seasonWins;
          }
        });
      }
    }
  } catch (err) {
    console.warn("⚠️ Mode autonome actif :", err);
  } finally {
    renderDriversTable();
    renderConstructorsTable();
    renderRacesAccordion();
    renderDriversCarousel();
  }
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
    return `
      <tr class="clickable-row" onclick="openDriverModal('${d.id}')">
        <td class="pos" style="color:${pos <= 3 ? 'var(--accent-2)' : 'var(--ink)'}">${getMedal(pos)}${pos}</td>
        <td><b>${d.first} ${d.last}</b></td>
        <td style="color:var(--ink-dim);">${d.team}</td>
        <td class="pts">${d.pts} pts <small style="color:#00E676; font-size:11px;">(+${d.ptsGainedLast} pts)</small></td>
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
    const circuitImg = circuitImages[r.circuitType] || "images/circuits/default.svg";

    return `
      <div class="race-card ${r.status} ${isTarget ? 'current-target' : ''}" id="card-${r.id}">
        <button class="race-header-btn" onclick="toggleRaceAccordion('card-${r.id}')">
          <div>
            <div class="name">${r.name}</div>
            <div class="date">${r.date}</div>
          </div>
          <div style="text-align:right">
            <div class="time">${r.time}</div>
            <span class="toggle-icon">▼</span>
          </div>
        </button>
        <div class="race-details">
          <div class="circuit-box">
            <img src="${circuitImg}" alt="Tracé ${r.name}">
            <div class="circuit-info">Longueur: ${r.length} · Distance: ${r.laps}</div>
          </div>
          <h5 style="font-size:12px; color:var(--ink-dim); margin-bottom:8px;">GRILLE & RÉSULTATS</h5>
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

function renderDriversCarousel() {
  const grid = document.getElementById('sectionDrivers');
  grid.innerHTML = drivers.map((d) => {
    const photoUrl = driverPhotos[d.id] || "images/drivers/default.svg";
    return `
      <div class="driver-card" style="--card-accent:${d.accent}" onmouseenter="setThemeTint('${d.rgbTint}', '${d.accent}')">
        <div class="stripe"></div>
        <div class="num-bg">${d.num}</div>
        <div class="team-tag">${d.team}</div>
        <p class="eyebrow"><span class="dot"></span>${d.country}</p>
        <h2>${d.first}<em>${d.last}</em></h2>
        <p class="team">Propulsé par <b>${d.engine}</b>.</p>
        <div class="driver-carousel-bio">${d.bio}</div>
        
        <div class="visual-duo">
          <img class="img-portrait" src="${photoUrl}" alt="${d.first} ${d.last}">
        </div>
      </div>
    `;
  }).join('');
}

function setThemeTint(rgbTint, accent) {
  document.documentElement.style.setProperty('--team-tint', rgbTint);
  document.documentElement.style.setProperty('--accent', accent);
}

function openDriverModal(driverId) {
  const d = drivers.find(x => x.id === driverId);
  if (!d) return;

  setThemeTint(d.rgbTint, d.accent);

  document.getElementById('dpKicker').textContent = `STATISTIQUES PILOTE — #${d.num}`;
  document.getElementById('dpTitle').textContent = `${d.first} ${d.last}`;
  document.getElementById('dpTeam').textContent = `${d.team} (${d.engine})`;
  document.getElementById('dpBio').textContent = d.bio;
  
  document.getElementById('dpStats').innerHTML = `
    <div class="row"><span class="l">Total Points Saison</span><span class="v" style="color:var(--accent-2);">${d.pts} pts</span></div>
    <div class="row"><span class="l">Points Gagnés sur le Dernier GP</span><span class="v" style="color:#00E676;">+${d.ptsGainedLast} pts</span></div>
    <div class="row"><span class="l">Victoires cette Saison</span><span class="v" style="color:#fff;">${d.seasonWins} victoire(s)</span></div>
    <div class="row"><span class="l">Titres de Champion du Monde</span><span class="v" style="color:var(--accent-2);">${d.titles > 0 ? d.titles + ' Titre(s)' : '0 (Prétendant)'}</span></div>
  `;

  document.getElementById('dpRecentRaces').innerHTML = (d.history || []).map(h => `
    <div class="recent-race-item">
      <span class="gp">${h.gp}</span>
      <span class="pos-badge">${h.pos}</span>
    </div>
  `).join('');

  updateGarageCar(d.team);

  document.getElementById('driverPerfPanel').classList.add('open');
  document.getElementById('backdrop').classList.add('open');
}

function openTeamModal(teamId) {
  const computedList = getComputedConstructors();
  const c = computedList.find(x => x.id === teamId);
  if (!c) return;

  document.getElementById('tpKicker').textContent = `STATISTIQUES ÉCURIE — RANG #${c.rank}`;
  document.getElementById('tpTitle').textContent = c.name;
  document.getElementById('tpEngine').textContent = `Propulseur : ${c.engine} | Siège : ${c.base}`;
  document.getElementById('tpBio').textContent = c.bio;

  document.getElementById('tpStats').innerHTML = `
    <div class="row"><span class="l">Classement Officiel</span><span class="v" style="color:var(--accent-2);">${c.rank}e Place</span></div>
    <div class="row"><span class="l">Total Points (Cumul Pilotes)</span><span class="v" style="color:#00E676;">${c.pts} pts</span></div>
    <div class="row"><span class="l">Victoires d'Écurie Saison</span><span class="v">${c.seasonWins} victoire(s)</span></div>
    <div class="row"><span class="l">Pilotes de l'Écurie</span><span class="v">${(c.driversList || []).join(' & ')}</span></div>
    <div class="row"><span class="l">Directeur d'Écurie</span><span class="v">${c.principal}</span></div>
  `;

  updateGarageCar(c.name);

  document.getElementById('teamPerfPanel').classList.add('open');
  document.getElementById('backdrop').classList.add('open');
}

function updateGarageCar(teamName) {
  const carImg = document.getElementById('garageCarImg');
  const nameLabel = document.getElementById('garageDriverName');
  if (carImg) carImg.src = teamCars[teamName] || "images/cars/default.svg";
  if (nameLabel) nameLabel.textContent = teamName;
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
  loadLiveDataFromAPI();
  updateGarageCar('Scuderia Ferrari');
});
