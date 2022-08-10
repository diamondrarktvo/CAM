/*const oneFilmTemplate = {
   adult: false,
   backdrop_path: '/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg',
   belongs_to_collection: null,
   budget: 63000000,
   genres: [
      {
         id: 18,
         name: 'Drama',
      },
   ],
   homepage: 'http://www.foxmovies.com/movies/fight-club',
   id: 550,
   imdb_id: 'tt0137523',
   original_language: 'en',
   original_title: 'Fight Club',
   overview:
      'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
   popularity: 59.188,
   poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
   production_companies: [
      {
         id: 508,
         logo_path: '/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png',
         name: 'Regency Enterprises',
         origin_country: 'US',
      },
      {
         id: 711,
         logo_path: '/tEiIH5QesdheJmDAqQwvtN60727.png',
         name: 'Fox 2000 Pictures',
         origin_country: 'US',
      },
      {
         id: 4700,
         logo_path: '/A32wmjrs9Psf4zw0uaixF0GXfxq.png',
         name: 'The Linson Company',
         origin_country: 'US',
      },
      {
         id: 20555,
         logo_path: '/hD8yEGUBlHOcfHYbujp71vD8gZp.png',
         name: 'Taurus Film',
         origin_country: 'DE',
      },
      {
         id: 54051,
         logo_path: null,
         name: 'Atman Entertainment',
         origin_country: '',
      },
      {
         id: 54052,
         logo_path: null,
         name: 'Knickerbocker Films',
         origin_country: 'US',
      },
   ],
   production_countries: [
      {
         iso_3166_1: 'DE',
         name: 'Germany',
      },
      {
         iso_3166_1: 'US',
         name: 'United States of America',
      },
   ],
   release_date: '1999-10-15',
   revenue: 100853753,
   runtime: 139,
   spoken_languages: [
      {
         english_name: 'English',
         iso_639_1: 'en',
         name: 'English',
      },
   ],
   status: 'Released',
   tagline: 'Mischief. Mayhem. Soap.',
   title: 'Fight Club',
   video: false,
   vote_average: 8.43,
   vote_count: 24490,
};*/

/*const allFilmTemplate = [
   {
      adult: false,
      backdrop_path: '/p1F51Lvj3sMopG948F5HsBbl43C.jpg',
      genre_ids: [28, 12, 14],
      id: 616037,
      original_language: 'en',
      original_title: 'Thor: Love and Thunder',
      overview:
         'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
      popularity: 14911.5,
      poster_path: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
      release_date: '2022-07-06',
      title: 'Thor: Love and Thunder',
      video: false,
      vote_average: 6.7,
      vote_count: 1523,
   },
];*/

/*const allGenresMovieTemplate = [
   {
      id: 28,
      name: 'Action',
   },
];*/

/*const allGenresTvTemplate = [
   {
      id: 10759,
      name: 'Action & Adventure',
   },
];*/

const film = [
   {
      id: 1,
      title: 'Ducobu 1',
      type: 'film',
      poster_path: require('_images/ducobu.jpeg'), //on utilise ce syntaxe car cela pose un probleme lors de l'appele de ce propriété au rendu
   },
   {
      id: 2,
      title: 'Dracula',
      type: 'film',
      poster_path: require('_images/dracula.jpeg'),
   },
   {
      id: 3,
      title: 'Jurassic Park',
      type: 'film',
      poster_path: require('_images/jurassic.jpeg'),
   },
   {
      id: 4,
      title: 'Jurassic World',
      type: 'film',
      poster_path: require('_images/jurassic2.jpeg'),
   },
   {
      id: 5,
      title: 'Fast furious',
      type: 'film',
      poster_path: require('_images/fast.jpeg'),
   },

   {
      id: 6,
      title: 'Jurassic World',
      type: 'film',
      poster_path: require('_images/jurassic2.jpeg'),
   },
   {
      id: 7,
      title: 'Fast furious',
      type: 'film',
      poster_path: require('_images/fast.jpeg'),
   },

   {
      id: 8,
      title: 'Jurassic World',
      type: 'film',
      poster_path: require('_images/jurassic2.jpeg'),
   },
   {
      id: 9,
      title: 'Fast furious',
      type: 'film',
      poster_path: require('_images/fast.jpeg'),
   },
];

const genres = [
   {
      id: 1,
      nom: 'Drama',
      type: 'genre',
      poster_path: require('_images/fast.jpeg'),
   },
   {
      id: 2,
      nom: 'Action',
      type: 'genre',
      poster_path: require('_images/dominion.jpeg'),
   },
   {
      id: 3,
      nom: 'Horreur',
      type: 'genre',
      poster_path: require('_images/dracula.jpeg'),
   },
   {
      id: 4,
      nom: 'Education',
      type: 'genre',
      poster_path: require('_images/ducobu.jpeg'),
   },
];

export { film, genres };
