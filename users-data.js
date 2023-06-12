const users = [
  {
    user_id: 1,
    name: "Elric, Alphonse",
    image_url:
      "https://cdn.myanimelist.net/images/characters/5/54265.jpg?s=65c1a674adae3d7c5740d5711517285a",
    is_friend: true,
    series: "Fullmetal Alchemist",
    character: "Edward Elric",
    posts:[
      'Death is simply another stage of our life',
      'Death is the end',
      'I could go one step farther If I wanted to',
      'Death is not another stage of our life',
      'Death is simply another life',
      'Sometimes, we have to look beyond what we want and do what is best',
      'Sometimes, we have to look beyond what we want and do what is best',
      'Death is simply another stage of our life',
    ],
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
    name: "Monkey D. Luffy",
    image_url:
      "https://cdn.myanimelist.net/images/characters/10/73545.jpg?s=297f2226e9f217b61c01e68a4040630b",
    is_friend: false,
    series: "One Piece",
    character: "Monkey D. Luffy",
    posts:[
      'I am going to be the Pirate King!',
      'I will never give up!',
      'The One Piece is real, and I am going to find it!',
      'I believe in my crew!',
      'I won\'t let anyone hurt my friends!',
      'Let\'s set sail for adventure!',
    ],
    votes: [
      {
        series: "One Piece",
        created_at: "03/04/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=8d17d0926af8554b6db87875a77be62",
      },
      {
        series: "Naruto",
        created_at: "05/10/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/3/83.jpg?s=85e5e3eb0709631191d66db3f6db4cfa",
      },
      {
        series: "Attack on Titan",
        created_at: "07/12/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=1d0dbdd1836e26c0f9da72675a71e7e5",
      },
    ],
  },
  {
    user_id: 3,
    name: "Uzumaki Naruto",
    image_url:
      "https://cdn.myanimelist.net/images/characters/3/73731.jpg?s=fe6a2fcda4df7dc802ae4a45b3fd632f",
    is_friend: true,
    series: "Naruto",
    character: "Naruto Uzumaki",
    posts:[
      'Believe it!',
      'I will become Hokage!',
      'I won\'t let my friends down!',
      'I never go back on my word!',
      'I won\'t give up!',
    ],
    votes: [
      {
        series: "Naruto",
        created_at: "04/01/2023",
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
        series: "Attack on Titan",
        created_at: "08/22/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=1d0dbdd1836e26c0f9da72675a71e7e5",
      },
      {
        series: "Dragon Ball",
        created_at: "10/05/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/7/74506.jpg?s=2e0a57b12d6be30f8728916a91e91248",
      },
    ],
  },
  {
    user_id: 4,
    name: "Levi Ackerman",
    image_url:
      "https://cdn.myanimelist.net/images/characters/14/231271.jpg?s=b5e4742b439e73f9eb899bf898a351b3",
    is_friend: false,
    series: "Attack on Titan",
    character: "Levi Ackerman",
    posts:[
      'I will protect humanity!',
      'No regrets!',
      'I won\'t let the Titans win!',
      'Trust in your comrades!',
      'I will avenge everyone!',
    ],
    votes: [
      {
        series: "Attack on Titan",
        created_at: "03/06/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=1d0dbdd1836e26c0f9da72675a71e7e5",
      },
      {
        series: "Death Note",
        created_at: "05/20/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/5/64.jpg?s=7e5bc3f9e0c348a71de6d207cb3b3a3a",
      },
    ],
  },
  {
    user_id: 5,
    name: "L Lawliet",
    image_url:
      "https://cdn.myanimelist.net/images/characters/7/52580.jpg?s=480a541605daad1fe9510ae8e45a1d1c",
    is_friend: true,
    series: "Death Note",
    character: "L Lawliet",
    posts:[
      'I am justice!',
      'I will solve this case!',
      'No one can escape from me!',
      'I am the world\'s greatest detective!',
      'I will catch Kira!',
    ],
    votes: [
      {
        series: "Death Note",
        created_at: "07/20/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/5/64.jpg?s=7e5bc3f9e0c348a71de6d207cb3b3a3a",
      },
      {
        series: "Fullmetal Alchemist",
        created_at: "09/08/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=2ab13dc6a3e874f5dc8b7229632f8c1f",
      },
    ],
  },
  {
    user_id: 6,
    name: "Kurosaki Ichigo",
    image_url:
      "https://cdn.myanimelist.net/images/characters/10/73611.jpg?s=6c23161c6c3c4b47ab957d3f8c0cc1c9",
    is_friend: true,
    series: "Bleach",
    character: "Ichigo Kurosaki",
    posts:[
      'I will protect my friends!',
      'I am a Soul Reaper!',
      'Bankai!',
      'I won\'t let anyone harm innocent souls!',
      'I will defeat the Hollows!',
    ],
    votes: [
      {
        series: "Bleach",
        created_at: "04/12/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/1/269.jpg?s=83b0386a2af9c57ea9e178f902bce06a",
      },
      {
        series: "Naruto",
        created_at: "06/25/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/3/83.jpg?s=85e5e3eb0709631191d66db3f6db4cfa",
      },
    ],
  },
  {
    user_id: 7,
    name: "Sakata Gintoki",
    image_url:
      "https://cdn.myanimelist.net/images/characters/9/331652.jpg?s=aa4a6e882d4b59aeb9ac22f169644f4c",
    is_friend: false,
    series: "Gintama",
    character: "Gintoki Sakata",
    posts:[
      'I will take any odd job for money!',
      'Yorozuya is always open for business!',
      'I may be lazy, but I get the job done!',
      'I will protect what is important to me!',
      'I am the White Demon!',
    ],
    votes: [
      {
        series: "Gintama",
        created_at: "07/03/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/4/91882.jpg?s=cdb78393e21c1b8cb1a2abf628bb2c2c",
      },
      {
        series: "One Piece",
        created_at: "09/15/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=8d17d0926af85f54b6db87875a77be62",
      },
      {
        series: "Attack on Titan",
        created_at: "11/28/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=1d0dbdd1836e26c0f9da72675a71e7e5",
      },
    ],
  },
  {
    user_id: 8,
    name: "Saitama",
    image_url:
      "https://cdn.myanimelist.net/images/characters/8/284621.jpg?s=7aeadf860247fcf6ee5b15f03a8b5dcf",
    is_friend: true,
    series: "One Punch Man",
    character: "Saitama",
    posts:[
      'I can defeat any enemy with just one punch!',
      'I may be bald, but I\'m the strongest!',
      'Being a hero is just a hobby for me!',
      'I am Saitama, the Caped Baldy!',
      'No one can match my power!',
    ],
    votes: [
      {
        series: "One Punch Man",
        created_at: "05/30/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/7/76049.jpg?s=1d4ae8314f702d0c7a5488940a0656fb",
      },
      {
        series: "Dragon Ball",
        created_at: "08/08/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/7/74506.jpg?s=2e0a57b12d6be30f8728916a91e91248",
      },
      {
        series: "Naruto",
        created_at: "10/18/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/3/83.jpg?s=85e5e3eb0709631191d66db3f6db4cfa",
      },
    ],
  },
  {
    user_id: 9,
    name: "Mikasa Ackerman",
    image_url:
      "https://cdn.myanimelist.net/images/characters/6/115472.jpg?s=62a15c62ae53ed16f4a39dd76a16d7ab",
    is_friend: false,
    series: "Attack on Titan",
    character: "Mikasa Ackerman",
    posts:[
      'I will protect Eren at all costs!',
      'I won\'t let anyone harm my family!',
      'I am strong!',
      'I am the best soldier!',
      'I will avenge my parents!',
    ],
    votes: [
      {


 series: "Attack on Titan",
        created_at: "03/06/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=1d0dbdd1836e26c0f9da72675a71e7e5",
      },
      {
        series: "One Piece",
        created_at: "06/15/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=8d17d0926af85f54b6db87875a77be62",
      },
      {
        series: "Naruto",
        created_at: "09/28/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/3/83.jpg?s=85e5e3eb0709631191d66db3f6db4cfa",
      },
      {
        series: "Demon Slayer",
        created_at: "12/10/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/1286/109462.jpg?s=36090a28f66d19f7f46d8784f7a2fd85",
      },
    ],
  },
  {
    user_id: 10,
    name: "Edward Elric",
    image_url:
      "https://cdn.myanimelist.net/images/characters/5/54266.jpg?s=de4ce267d3eeae13ab79514bbf5d1eb7",
    is_friend: true,
    series: "Fullmetal Alchemist",
    character: "Edward Elric",
    posts:[
      'Equivalent exchange is the law of alchemy!',
      'I will find the Philosopher\'s Stone!',
      'I won\'t let anyone use alchemy for evil!',
      'Alchemy is the science of understanding!',
      'I am the Fullmetal Alchemist!',
    ],
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
      {
        series: "Bleach",
        created_at: "09/25/2023",
        url:
          "https://cdn.myanimelist.net/images/anime/1/269.jpg?s=83b0386a2af9c57ea9e178f902bce06a",
      },
    ],
  },
];