export interface Project {
    id: string;
    title: string;
    artist: string;
    image: string;
    category: 'mixing' | 'production' | 'mastering' | 'session';
    spotifyId: string;
    spotifyType: 'track' | 'album' | 'playlist';
    releaseDate: string;
    description: {
      en: string;
      fi: string;
    };
    clientName: string;
  }
  
  export const projects: Project[] = [
    {
      id: "project1",
      title: "Miksaus",
      artist: "Erkki Esimerkki",
      image: "/img/mixconsole_temp.jpg",
      category: "mixing",
      spotifyId: "2wVocRFuhxPSjQFvBltq53",
      spotifyType: "track",
      releaseDate: "2023-06-15",
      description: {
        en: "Mixed and finalized the entire album, focusing on creating a spacious soundscape while maintaining the raw energy of the original recordings.",
        fi: "Miksasin ja viimeistelin koko albumin, keskittyen luomaan avaruudellista äänimaisemaa säilyttäen samalla alkuperäisten äänitysten raakan energian."
      },
      clientName: "Bandi Numero Yksi"
    },
    {
      id: "project2",
      title: "Lost in Furr",
      artist: "HANNSAL",
      image: "/img/production_temp.jpg",
      category: "production",
      spotifyId: "2wVocRFuhxPSjQFvBltq53",
      spotifyType: "track",
      releaseDate: "2022-11-03",
      description: {
        en: "Full production from concept to final master. Created arrangements, and guided the entire creative process.",
        fi: "Täystuotanto konseptista lopulliseen masteriin. Loin sovitukset ja ohjasin koko luovan prosessin."
      },
      clientName: "HANNSAL"
    },
    {
      id: "project3",
      title: "Sovitus",
      artist: "Teppo Esimerkki",
      image: "/img/piano_temp.jpg",
      category: "session",
      spotifyId: "2wVocRFuhxPSjQFvBltq53",
      spotifyType: "track",
      releaseDate: "2023-01-22",
      description: {
        en: "Performed guitar and bass parts for this intimate acoustic album. Created complementary arrangements that enhance the vocal performance.",
        fi: "Soitin kitara- ja basso-osuudet tälle intiimille akustiselle albumille. Loin täydentäviä sovituksia, jotka korostavat lauluesitystä."
      },
      clientName: "Independent Artist"
    },
    {
      id: "project4",
      title: "Masterointi",
      artist: "Keijo Esimerkki",
      image: "/img/temp_mastering.jpg",
      category: "mastering",
      spotifyId: "1IiKG3c6yyYDTjyv7nRthD",
      spotifyType: "track",
      releaseDate: "2022-08-10",
      description: {
        en: "Mastered this electronic music EP to ensure consistent levels and tonal balance across streaming platforms while preserving the dynamic impact.",
        fi: "Masteroin tämän elektronisen musiikin EP:n varmistaakseni yhtenäiset tasot ja sointibalanssin eri suoratoistoalustoilla säilyttäen samalla dynaamisen vaikutuksen."
      },
      clientName: "EDM Hero"
    }
  ];