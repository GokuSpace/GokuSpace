const characters = [
  {
    user_id: 1,
    name: "Elric, Alphonse",
    text: "'A lesson without pain is meaningless.' - Edward Elric",
    image_url:
      "https://cdn.myanimelist.net/images/characters/5/54265.jpg?s=65c1a674adae3d7c5740d5711517285a",
    is_friend: true,
    series: "Fullmetal Alchemist",
    character: "Edward Elric",
    votes: [
      {
        series: "Fullmetal Alchemist",
        created_at: "02/04/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=2ab13dc6a3e874f5dc8b7229632f8c1f",
      },
      {
        series: "Attack on Titan",
        created_at: "03/06/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=1d0dbdd1836e26c0f9da72675a71e7e5",
      },
      {
        series: "Naruto",
        created_at: "05/10/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/3/83.jpg?s=85e5e3eb0709631191d66db3f6db4cfa",
      },
      {
        series: "One Piece",
        created_at: "06/15/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=8d17d0926af85f54b6db87875a77be62",
      },
      {
        series: "Death Note",
        created_at: "07/20/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/5/64.jpg?s=7e5bc3f9e0c348a71de6d207cb3b3a3a",
      },
    ],
  },
  {
    user_id: 2,
    name: "Elric, Edward",
    text:
      "Don't forget, we're not gods. 'Humankind cannot gain anything without first giving something in return.' - Alphonse Elric",
    image_url:
      "https://cdn.myanimelist.net/images/characters/9/72533.jpg?s=d38cf4e2e5cbb46ddaf2b23345a03eae",
    is_friend: true,
    series: "Fullmetal Alchemist",
    character: "Alphonse Elric",
    votes: [
      {
        series: "Attack on Titan",
        created_at: "03/06/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=1d0dbdd1836e26c0f9da72675a71e7e5",
      },
      {
        series: "Naruto",
        created_at: "05/10/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/3/83.jpg?s=85e5e3eb0709631191d66db3f6db4cfa",
      },
      {
        series: "One Piece",
        created_at: "06/15/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=8d17d0926af85f54b6db87875a77be62",
      },
      {
        series: "Death Note",
        created_at: "07/20/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/5/64.jpg?s=7e5bc3f9e0c348a71de6d207cb3b3a3a",
      },
      {
        series: "Bakugou",
        created_at: "09/01/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/1166/121040.jpg?s=4b69b9c4d1d2c936d9066b605a314f8b",
      },
    ],
  },
  {
    user_id: 3,
    name: "Armstrong, Olivier Mira",
    text: "Strength is beauty, and my muscles are a miracle of grace! - Olivier Mira Armstrong",
    image_url:
      "https://cdn.myanimelist.net/images/characters/7/83953.jpg?s=616c3cbf0f0a02068ac4f9bf7e52c746",
    is_friend: false,
    series: "Attack on Titan",
    character: "Mikasa Ackerman",
    votes: [
      {
        series: "Fullmetal Alchemist",
        created_at: "02/04/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=2ab13dc6a3e874f5dc8b7229632f8c1f",
      },
      {
        series: "Attack on Titan",
        created_at: "03/06/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=1d0dbdd1836e26c0f9da72675a71e7e5",
      },
      {
        series: "Naruto",
        created_at: "05/10/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/3/83.jpg?s=85e5e3eb0709631191d66db3f6db4cfa",
      },
      {
        series: "One Piece",
        created_at: "06/15/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=8d17d0926af85f54b6db87875a77be62",
      },
      {
        series: "Death Note",
        created_at: "07/20/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/5/64.jpg?s=7e5bc3f9e0c348a71de6d207cb3b3a3a",
      },
    ],
  },
  {
    user_id: 4,
    name: "Armstrong, Kathleen Elle",
    text: "I am a soldier, but more than that, I am a woman! - Kathleen Elle Armstrong",
    image_url:
      "https://cdn.myanimelist.net/images/characters/14/80951.jpg?s=3aa6cce3cb9f8c3080771bc4960eabbf",
    is_friend: false,
    series: "Naruto",
    character: "Sakura Haruno",
    votes: [
      {
        series: "Fullmetal Alchemist",
        created_at: "02/04/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=2ab13dc6a3e874f5dc8b7229632f8c1f",
      },
      {
        series: "Attack on Titan",
        created_at: "03/06/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=1d0dbdd1836e26c0f9da72675a71e7e5",
      },
      {
        series: "Naruto",
        created_at: "05/10/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/3/83.jpg?s=85e5e3eb0709631191d66db3f6db4cfa",
      },
      {
        series: "One Piece",
        created_at: "06/15/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=8d17d0926af85f54b6db87875a77be62",
      },
      {
        series: "Death Note",
        created_at: "07/20/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/5/64.jpg?s=7e5bc3f9e0c348a71de6d207cb3b3a3a",
      },
    ],
  },
  {
    user_id: 5,
    name: "Armstrong, Alex Louis",
    text: "Behold! These are my ultimate abs! - Alex Louis Armstrong",
    image_url:
      "https://cdn.myanimelist.net/images/characters/2/71066.jpg?s=c20e0eaade03719e6637e381a63c8154",
    is_friend: true,
    series: "Fullmetal Alchemist",
    character: "Roy Mustang",
    votes: [
      {
        series: "Fullmetal Alchemist",
        created_at: "02/04/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=2ab13dc6a3e874f5dc8b7229632f8c1f",
      },
      {
        series: "Attack on Titan",
        created_at: "03/06/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=1d0dbdd1836e26c0f9da72675a71e7e5",
      },
      {
        series: "Naruto",
        created_at: "05/10/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/3/83.jpg?s=85e5e3eb0709631191d66db3f6db4cfa",
      },
      {
        series: "One Piece",
        created_at: "06/15/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=8d17d0926af85f54b6db87875a77be62",
      },
      {
        series: "Death Note",
        created_at: "07/20/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/5/64.jpg?s=7e5bc3f9e0c348a71de6d207cb3b3a3a",
      },
    ],
  },
  {
    user_id: 6,
    name: "Armstrong, Philip Gargantos",
    text: "I'm going to devour you! Prepare yourself, humans! - Philip Gargantos Armstrong",
    image_url:
      "https://cdn.myanimelist.net/images/characters/11/177627.jpg?s=5e7c3f6ed6d1a87c3d327a9fde6bdb68",
    is_friend: false,
    series: "One Piece",
    character: "Monkey D. Luffy",
    votes: [
      {
        series: "Fullmetal Alchemist",
        created_at: "02/04/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=2ab13dc6a3e874f5dc8b7229632f8c1f",
      },
      {
        series: "Attack on Titan",
        created_at: "03/06/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=1d0dbdd1836e26c0f9da72675a71e7e5",
      },
      {
        series: "Naruto",
        created_at: "05/10/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/3/83.jpg?s=85e5e3eb0709631191d66db3f6db4cfa",
      },
      {
        series: "One Piece",
        created_at: "06/15/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=8d17d0926af85f54b6db87875a77be62",
      },
      {
        series: "Death Note",
        created_at: "07/20/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/5/64.jpg?s=7e5bc3f9e0c348a71de6d207cb3b3a3a",
      },
    ],
  },
  {
    user_id: 7,
    name: "Barry the Chopper",
    text: "Killing people is fun! - Barry the Chopper",
    image_url:
      "https://cdn.myanimelist.net/images/characters/3/52723.jpg?s=ae88023ff5b97c95f191e228f6543e3c",
    is_friend: false,
    series: "Death Note",
    character: "Light Yagami",
    votes: [
      {
        series: "Fullmetal Alchemist",
        created_at: "02/04/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=2ab13dc6a3e874f5dc8b7229632f8c1f",
      },
      {
        series: "Attack on Titan",
        created_at: "03/06/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=1d0dbdd1836e26c0f9da72675a71e7e5",
      },
      {
        series: "Naruto",
        created_at: "05/10/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/3/83.jpg?s=85e5e3eb0709631191d66db3f6db4cfa",
      },
      {
        series: "One Piece",
        created_at: "06/15/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=8d17d0926af85f54b6db87875a77be62",
      },
      {
        series: "Death Note",
        created_at: "07/20/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/5/64.jpg?s=7e5bc3f9e0c348a71de6d207cb3b3a3a",
      },
    ],
  },
  {
    user_id: 8,
    name: "Bido",
    text: "I just want to live freely. - Bido",
    image_url:
      "https://cdn.myanimelist.net/images/characters/3/56215.jpg?s=b5a4372968023b6dec7cd7ae283563cc",
    is_friend: true,
    series: "Bakugou",
    character: "My Hero Academia",
    votes: [
      {
        series: "Fullmetal Alchemist",
        created_at: "02/04/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=2ab13dc6a3e874f5dc8b7229632f8c1f",
      },
      {
        series: "Attack on Titan",
        created_at: "03/06/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=1d0dbdd1836e26c0f9da72675a71e7e5",
      },
      {
        series: "Naruto",
        created_at: "05/10/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/3/83.jpg?s=85e5e3eb0709631191d66db3f6db4cfa",
      },
      {
        series: "One Piece",
        created_at: "06/15/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=8d17d0926af85f54b6db87875a77be62",
      },
      {
        series: "Death Note",
        created_at: "07/20/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/5/64.jpg?s=7e5bc3f9e0c348a71de6d207cb3b3a3a",
      },
    ],
  },
  {
    user_id: 9,
    name: "Black Hayate",
    text: "Woof! - Black Hayate",
    image_url:
      "https://cdn.myanimelist.net/images/characters/12/81547.jpg?s=fc3b02fa7a612d9197588646c078cbd7",
    is_friend: true,
    series: "Fullmetal Alchemist",
    character: "Riza Hawkeye",
    votes: [
      {
        series: "Fullmetal Alchemist",
        created_at: "02/04/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=2ab13dc6a3e874f5dc8b7229632f8c1f",
      },
      {
        series: "Attack on Titan",
        created_at: "03/06/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=1d0dbdd1836e26c0f9da72675a71e7e5",
      },
      {
        series: "Naruto",
        created_at: "05/10/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/3/83.jpg?s=85e5e3eb0709631191d66db3f6db4cfa",
      },
      {
        series: "One Piece",
        created_at: "06/15/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=8d17d0926af85f54b6db87875a77be62",
      },
      {
        series: "Death Note",
        created_at: "07/20/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/5/64.jpg?s=7e5bc3f9e0c348a71de6d207cb3b3a3a",
      },
    ],
  },
  {
    user_id: 10,
    name: "Bobby",
    text: "I'm Bobby, the most awesome side character ever!",
    is_friend: true,
    series: "Bakugou",
    character: "My Hero Academia",
    image_url:
      "https://cdn.myanimelist.net/images/characters/3/473873.jpg?s=b1eb0b078de7156c08601714498d009b",
    votes: [
      {
        series: "Fullmetal Alchemist",
        created_at: "02/04/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=2ab13dc6a3e874f5dc8b7229632f8c1f",
      },
      {
        series: "Attack on Titan",
        created_at: "03/06/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=1d0dbdd1836e26c0f9da72675a71e7e5",
      },
      {
        series: "Naruto",
        created_at: "05/10/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/3/83.jpg?s=85e5e3eb0709631191d66db3f6db4cfa",
      },
      {
        series: "One Piece",
        created_at: "06/15/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=8d17d0926af85f54b6db87875a77be62",
      },
      {
        series: "Death Note",
        created_at: "07/20/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/5/64.jpg?s=7e5bc3f9e0c348a71de6d207cb3b3a3a",
      },
    ],
  },
];

export default characters;
