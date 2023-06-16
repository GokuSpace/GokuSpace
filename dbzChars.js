const animeChars = [
  {
    "title": "Kuririn",
    "url": "https://cdn.myanimelist.net/images/characters/2/48517.jpg?s=19014a6433cd36c32f3661b21b38dad3"
  },
  {
    "title": "Piccolo",
    "url": "https://cdn.myanimelist.net/images/characters/8/45628.jpg?s=7f3263916ca42434072fb20a7590c277"
  },
  {
    "title": "Son, Goku",
    "url": "https://cdn.myanimelist.net/images/characters/15/72546.jpg?s=c434a442d8ad1212885a8d02dbcbbee0"
  },
  {
    "title": "Son, Gohan",
    "url": "https://cdn.myanimelist.net/images/characters/2/72715.jpg?s=886561eebbd32941685b470ff9ed78a2"
  },
  {
    "title": "Vegeta",
    "url": "https://cdn.myanimelist.net/images/characters/14/86185.jpg?s=145f25d852734f70db55a92cab54b27b"
  },
  {
    "title": "#C6",
    "url": "https://cdn.myanimelist.net/images/characters/4/257343.jpg?s=2afb3afd567ce932ef43e4d569629b2d"
  },
  {
    "title": "15th Generation's Higashi no Kaioshin",
    "url": "https://cdn.myanimelist.net/images/characters/14/357288.jpg?s=a2af7f4aab9180b33099672937164b43"
  },
  {
    "title": "Ackman",
    "url": "https://cdn.myanimelist.net/images/characters/13/27570.jpg?s=7ad2d5859333f64c2657635bd937b75c"
  },
  {
    "title": "Akkuman",
    "url": "https://cdn.myanimelist.net/images/characters/16/112702.jpg?s=feeca34f768d2efaf6f2d64b13d8f841"
  },
  {
    "title": "Angela",
    "url": "https://cdn.myanimelist.net/images/characters/15/127709.jpg?s=7dce8ef0d379f88db352bd850b886efe"
  },
  {
    "title": "Appule",
    "url": "https://cdn.myanimelist.net/images/characters/16/117013.jpg?s=7af355abd8dc0bb96bf82c711c6d55df"
  },
  {
    "title": "Arqua",
    "url": "https://cdn.myanimelist.net/images/characters/5/280358.jpg?s=66f5a4ca97d8e3e73f165eda10f787fc"
  },
  {
    "title": "Babidi",
    "url": "https://cdn.myanimelist.net/images/characters/10/273651.jpg?s=590ff5cc764dec32bfe19a21966abc78"
  },
  {
    "title": "Bardock",
    "url": "https://cdn.myanimelist.net/images/characters/6/103847.jpg?s=c38c133a809e886e0b01fec8e6bb13ee"
  },
  {
    "title": "Bee",
    "url": "https://cdn.myanimelist.net/images/characters/7/45213.jpg?s=2c85af9da505cfc6ba502fbf80d6387b"
  },
  {
    "title": "Bibidi",
    "url": "https://cdn.myanimelist.net/images/characters/3/111826.jpg?s=b9266b34c2e69407be67f61c77259a58"
  },
  {
    "title": "Blind Boy",
    "url": "https://cdn.myanimelist.net/images/characters/3/127715.jpg?s=fcfa544f7c4c3a4568be692acca26b63"
  },
  {
    "title": "Blueberry",
    "url": "https://cdn.myanimelist.net/images/characters/15/462822.jpg?s=f47d0b80029522dda2840fac5892d3b1"
  },
  {
    "title": "Bora",
    "url": "https://cdn.myanimelist.net/images/characters/6/45195.jpg?s=af181e8861959ca9fa130562d1630688"
  },
  {
    "title": "Bra",
    "url": "https://cdn.myanimelist.net/images/characters/4/380636.jpg?s=42d04fa72fbc7738eb9a7942c528d8b5"
  },
  {
    "title": "Bubbles",
    "url": "https://cdn.myanimelist.net/images/characters/7/45234.jpg?s=f78510e53dc01e4babb6fa68fd2b8117"
  },
  {
    "title": "Bulma",
    "url": "https://cdn.myanimelist.net/images/characters/14/280893.jpg?s=2b0fdc4d608cdb9f6ca28d6192cb9251"
  },
  {
    "title": "Bulma's Mother",
    "url": "https://cdn.myanimelist.net/images/characters/8/357970.jpg?s=7a4b3cbde69f0cefa11f5181931e13ae"
  },
  {
    "title": "Burter",
    "url": "https://cdn.myanimelist.net/images/characters/3/65047.jpg?s=997b89a158f98d70672e844d4a79f25d"
  },
  {
    "title": "Cargo",
    "url": "https://cdn.myanimelist.net/images/characters/12/459010.jpg?s=81cf2cfdf5b3fb8b680417e0b807f81e"
  },
  {
    "title": "Cell",
    "url": "https://cdn.myanimelist.net/images/characters/9/108594.jpg?s=11c75ff4c82ecb2c957dfebede7ab260"
  },
  {
    "title": "Cell Games Announcer",
    "url": "https://cdn.myanimelist.net/images/characters/12/280363.jpg?s=7d5e514f5a75e8e61ea3b793850120f3"
  },
  {
    "title": "Cell Jr.",
    "url": "https://cdn.myanimelist.net/images/characters/5/45216.jpg?s=bc11ac9aeb37a2cabb2b0d0c3a05fa3f"
  },
  {
    "title": "Chi-Chi",
    "url": "https://cdn.myanimelist.net/images/characters/14/247963.jpg?s=f4b64bc7b901fd59d3d9fd6b42afcf1c"
  },
  {
    "title": "Chiaotzu",
    "url": "https://cdn.myanimelist.net/images/characters/13/52822.jpg?s=6e11379dc260224463bcb0990d4cbd1c"
  },
  {
    "title": "Chico",
    "url": "https://cdn.myanimelist.net/images/characters/15/351206.jpg?s=d517968ae0d9e12672ccb883d2433015"
  },
  {
    "title": "Cranberry",
    "url": "https://cdn.myanimelist.net/images/characters/11/417742.jpg?s=4883f0ec17cfb8f4b2fd616bd8a9d4f3"
  },
  {
    "title": "Cui",
    "url": "https://cdn.myanimelist.net/images/characters/8/117014.jpg?s=3ff03ace448a9bf9bcdce6fbc727d9e5"
  },
  {
    "title": "Cynthia",
    "url": "https://cdn.myanimelist.net/images/characters/7/278243.jpg?s=ae33f7a80a59d5a4f42d08900b48cfe0"
  },
  {
    "title": "Dabura",
    "url": "https://cdn.myanimelist.net/images/characters/10/273659.jpg?s=f8257b7ca972acd4445bc49b8d995d4f"
  },
  {
    "title": "Dai Kaio",
    "url": "https://cdn.myanimelist.net/images/characters/11/113182.jpg?s=dd56e359ac9fd497883e6fe140ae4352"
  },
  {
    "title": "Dai Kaioshin",
    "url": "https://cdn.myanimelist.net/images/characters/2/113186.jpg?s=602aa561554a4587483c32bcd02e1ad6"
  },
  {
    "title": "Dende",
    "url": "https://cdn.myanimelist.net/images/characters/5/65195.jpg?s=00f7c13fc7e57fb8b2ead76f83dc08aa"
  },
  {
    "title": "Dodoria",
    "url": "https://cdn.myanimelist.net/images/characters/7/45236.jpg?s=3436c7ce069895be30c3d4e47c6ef962"
  },
  {
    "title": "Dr. Briefs",
    "url": "https://cdn.myanimelist.net/images/characters/16/357827.jpg?s=b534f1305647f468ace8d2ab740da63d"
  },
  {
    "title": "Dr. Gero",
    "url": "https://cdn.myanimelist.net/images/characters/2/52436.jpg?s=5858330ccf3f4a9f0a7e09b206c18018"
  },
  {
    "title": "East Kaio",
    "url": "https://cdn.myanimelist.net/images/characters/16/113184.jpg?s=44c3b54867986b4f3c5d3271da30ab7d"
  },
  {
    "title": "Enma Dai-Ou",
    "url": "https://cdn.myanimelist.net/images/characters/12/111836.jpg?s=83fa2b8e32ea4646fa7a2547d33bbfaa"
  },
  {
    "title": "Erasa",
    "url": "https://cdn.myanimelist.net/images/characters/7/273725.jpg?s=2d8d414fe992ccc77b507f147f73204d"
  },
  {
    "title": "Farmer",
    "url": "https://cdn.myanimelist.net/images/characters/5/127713.jpg?s=57a03e01398cd8ce6ce3e3f403639c0e"
  },
  {
    "title": "Freeza",
    "url": "https://cdn.myanimelist.net/images/characters/7/359258.jpg?s=9283da1c6156a10c96ca75d71522d62d"
  },
  {
    "title": "Future Trunks",
    "url": "https://cdn.myanimelist.net/images/characters/5/375125.jpg?s=dfee723daa759ba6480fa09fe6903b00"
  },
  {
    "title": "Garlic Junior",
    "url": "https://cdn.myanimelist.net/images/characters/5/73432.jpg?s=03a0133e6da95e8ed824173eb9fbc511"
  },
  {
    "title": "Gasshu",
    "url": "https://cdn.myanimelist.net/images/characters/16/280357.jpg?s=5313cb6d628e54256b28768ffadc4df9"
  },
  {
    "title": "Ginyu",
    "url": "https://cdn.myanimelist.net/images/characters/15/371639.jpg?s=cf06dfc35af8089b78e0148b97e18fee"
  },
  {
    "title": "Giran",
    "url": "https://cdn.myanimelist.net/images/characters/6/45207.jpg?s=7ce4db1d81c4e8e5cbcbcae3e1dac6e1"
  },
  {
    "title": "Gotenks",
    "url": "https://cdn.myanimelist.net/images/characters/9/380617.jpg?s=448cefaa910772dc34e257689ab3fd64"
  },
  {
    "title": "Gozu",
    "url": "https://cdn.myanimelist.net/images/characters/5/459011.jpg?s=0bd5f2ed0bc86e4dfaf154c0caddf54a"
  },
  {
    "title": "Gregory",
    "url": "https://cdn.myanimelist.net/images/characters/13/45233.jpg?s=0b89953905c3c875d769703961ef47a9"
  },
  {
    "title": "Guldo",
    "url": "https://cdn.myanimelist.net/images/characters/14/45224.jpg?s=1643e57ce7884f467042c59ea99d27d2"
  },
  {
    "title": "Gyumao",
    "url": "https://cdn.myanimelist.net/images/characters/12/357971.jpg?s=9d41f38a348ce57f24c19b0e4dbed984"
  },
  {
    "title": "Haiya Dragon",
    "url": "https://cdn.myanimelist.net/images/characters/12/72754.jpg?s=2981d503062240f7f6c1f1af3a958a8e"
  },
  {
    "title": "Higashi no Kaioshin",
    "url": "https://cdn.myanimelist.net/images/characters/3/32340.jpg?s=eca0a0e023cdfc81f2866ab1e473240a"
  },
  {
    "title": "Idasa",
    "url": "https://cdn.myanimelist.net/images/characters/13/356316.jpg?s=c429e4a7133ad3e5fe3165d24d4a3bb8"
  },
  {
    "title": "Idasamama",
    "url": "https://cdn.myanimelist.net/images/characters/6/356317.jpg?s=7bb4bfd1ec3b20aa6b380966ab880381"
  },
  {
    "title": "Ikose",
    "url": "https://cdn.myanimelist.net/images/characters/4/356318.jpg?s=6660c54b7e79d63ced6e16d7ad4b8986"
  },
  {
    "title": "Jeice",
    "url": "https://cdn.myanimelist.net/images/characters/9/65046.jpg?s=8f788f50e92c613398513aca839133dd"
  },
  {
    "title": "Jewel",
    "url": "https://cdn.myanimelist.net/images/characters/8/356331.jpg?s=4e21450a4fad35c6fe4aa4bc497872b2"
  },
  {
    "title": "Jinzouningen 16-gou",
    "url": "https://cdn.myanimelist.net/images/characters/10/52825.jpg?s=9983dc67104333321fa2632aba09a5cb"
  },
  {
    "title": "Jinzouningen 17-gou",
    "url": "https://cdn.myanimelist.net/images/characters/16/48582.jpg?s=79dd6757c70b3dc78cc4e1739affe6d4"
  },
  {
    "title": "Jinzouningen 18-gou",
    "url": "https://cdn.myanimelist.net/images/characters/2/357828.jpg?s=f07a58b451c4312cece1db2aa84ebdf8"
  },
  {
    "title": "Jinzouningen 19-gou",
    "url": "https://cdn.myanimelist.net/images/characters/5/65048.jpg?s=e587de47fc2f10a7db9b511841d8b78a"
  },
  {
    "title": "Jinzouningen 8-gou",
    "url": "https://cdn.myanimelist.net/images/characters/7/44762.jpg?s=0a164546d0ee36b5b183417cf1493f34"
  },
  {
    "title": "Kami",
    "url": "https://cdn.myanimelist.net/images/characters/4/73430.jpg?s=696e6b42b9929ef97aa0e4960e464cba"
  },
  {
    "title": "Karin",
    "url": "https://cdn.myanimelist.net/images/characters/4/358479.jpg?s=99c7decef17ee7fcb80041a73d94b06f"
  },
  {
    "title": "Karoni",
    "url": "https://cdn.myanimelist.net/images/characters/13/357864.jpg?s=eb45b418c08d3856616b52589035de2d"
  },
  {
    "title": "Kibito",
    "url": "https://cdn.myanimelist.net/images/characters/16/111834.jpg?s=ea56abfe1d0227736eb124a12f2b0c03"
  },
  {
    "title": "Kibitoshin",
    "url": "https://cdn.myanimelist.net/images/characters/8/380614.jpg?s=bb19168df22cfb476e7c475823500566"
  },
  {
    "title": "Killa",
    "url": "https://cdn.myanimelist.net/images/characters/12/356397.jpg?s=febea41ca13707c10ffbc80d781b54f9"
  },
  {
    "title": "King Cold",
    "url": "https://cdn.myanimelist.net/images/characters/7/111486.jpg?s=c50fb4801b217394a94976fa0cda98e7"
  },
  {
    "title": "King Vegeta",
    "url": "https://cdn.myanimelist.net/images/characters/5/73079.jpg?s=049e14cf371c4d151da946a2066b5627"
  },
  {
    "title": "Kita no Kaioushin",
    "url": "https://cdn.myanimelist.net/images/characters/8/307066.jpg?s=484eb8e4666a83e586e4fe50ed3b48c3"
  },
  {
    "title": "Lemuria",
    "url": "https://cdn.myanimelist.net/images/characters/16/280361.jpg?s=b71b22c27e60383da28ad8b32eb525d6"
  },
  {
    "title": "Lime",
    "url": "https://cdn.myanimelist.net/images/characters/9/398076.jpg?s=1b12dbdc5a86db06f5f3035fcd706a2f"
  },
  {
    "title": "Lunch",
    "url": "https://cdn.myanimelist.net/images/characters/13/126159.jpg?s=b21968d18bc1346f2a00968d741ab3d5"
  },
  {
    "title": "Majin Buu",
    "url": "https://cdn.myanimelist.net/images/characters/6/94545.jpg?s=e94f09be98d06f74ce14862c58394224"
  },
  {
    "title": "Maraikoh",
    "url": "https://cdn.myanimelist.net/images/characters/8/462824.jpg?s=96e56cca3c540c936c793daaed64decb"
  },
  {
    "title": "Maron",
    "url": "https://cdn.myanimelist.net/images/characters/8/111827.jpg?s=6c7c5cfd991fd62960548fe7d23feede"
  },
  {
    "title": "Marron",
    "url": "https://cdn.myanimelist.net/images/characters/11/357959.jpg?s=d28197fa19a0c28c685e498c6e248657"
  },
  {
    "title": "Mezu",
    "url": "https://cdn.myanimelist.net/images/characters/12/459012.jpg?s=7b64fbce15722301dca883d1ac5769e8"
  },
  {
    "title": "Mighty Mask",
    "url": "https://cdn.myanimelist.net/images/characters/3/462823.jpg?s=a89894d4a99ffc315a5771ab4aa19f5a"
  },
  {
    "title": "Minami no Kaioushin",
    "url": "https://cdn.myanimelist.net/images/characters/16/307067.jpg?s=bd142c5a51089f9bd4d4c73dcf1a8948"
  },
  {
    "title": "Mira-kun",
    "url": "https://cdn.myanimelist.net/images/characters/7/112705.jpg?s=2f556dcd4b29af9790f6bdd5c5be047a"
  },
  {
    "title": "Mr. Popo",
    "url": "https://cdn.myanimelist.net/images/characters/8/52871.jpg?s=567db9c01f74737226f13e3ffea679c5"
  },
  {
    "title": "Mr. Satan",
    "url": "https://cdn.myanimelist.net/images/characters/2/48724.jpg?s=ebed3c4d0d5b80d5549185caba758b34"
  },
  {
    "title": "Mr. Shu",
    "url": "https://cdn.myanimelist.net/images/characters/6/459016.jpg?s=c7bcde2301a2716bf6c487ac2861c02e"
  },
  {
    "title": "Mustard",
    "url": "https://cdn.myanimelist.net/images/characters/8/463733.jpg?s=2ddedb6c9adbd67f680d42c6e584cf49"
  },
  {
    "title": "Musuka",
    "url": "https://cdn.myanimelist.net/images/characters/6/356398.jpg?s=491b8461668570af5369d880aded3e0c"
  },
  {
    "title": "Muten-Roushi",
    "url": "https://cdn.myanimelist.net/images/characters/6/359001.jpg?s=b0f6c285cdf733f32738264f42ebdd2f"
  },
  {
    "title": "Muuri",
    "url": "https://cdn.myanimelist.net/images/characters/16/64444.jpg?s=1598275bed2e977c7c8f10b5145ffbcc"
  },
  {
    "title": "Nail",
    "url": "https://cdn.myanimelist.net/images/characters/13/52433.jpg?s=c866f3e706b9978d24ec19320ad657bb"
  },
  {
    "title": "Namu",
    "url": "https://cdn.myanimelist.net/images/characters/6/45210.jpg?s=d62e59be267a1efe5cc511eed44b5490"
  },
  {
    "title": "Nappa",
    "url": "https://cdn.myanimelist.net/images/characters/12/393771.jpg?s=6925bbea554637a389bfea97ef89c81f"
  },
  {
    "title": "Narrator",
    "url": "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c"
  },
  {
    "title": "Nishi no Kaioushin",
    "url": "https://cdn.myanimelist.net/images/characters/12/307065.jpg?s=c455f428be6724b1e83178f4cfa0dfde"
  },
  {
    "title": "Nok",
    "url": "https://cdn.myanimelist.net/images/characters/16/462820.jpg?s=cb8933c0b03f5e1289812e89ac8deca5"
  },
  {
    "title": "North Kaio",
    "url": "https://cdn.myanimelist.net/images/characters/7/53213.jpg?s=b82983f5d6f8417bf3e309d121b64d5a"
  },
  {
    "title": "Old Witch",
    "url": "https://cdn.myanimelist.net/images/characters/10/357286.jpg?s=036e08181aa1fc661c931f3edacd2f7e"
  },
  {
    "title": "Olibu",
    "url": "https://cdn.myanimelist.net/images/characters/6/274559.jpg?s=7e1af6b6e16012233832cf6d7c70c544"
  },
  {
    "title": "Oolong",
    "url": "https://cdn.myanimelist.net/images/characters/15/71204.jpg?s=dd6923f1951d32ba43880275c519a412"
  },
  {
    "title": "Orlen",
    "url": "https://cdn.myanimelist.net/images/characters/16/459013.jpg?s=287748dbdfcd13b514bf6649ecd94e16"
  },
  {
    "title": "Other World Budokai Announcer",
    "url": "https://cdn.myanimelist.net/images/characters/7/459015.jpg?s=b702bdc444b0fbdd12ef908adb467b34"
  },
  {
    "title": "Otokosuki",
    "url": "https://cdn.myanimelist.net/images/characters/12/156643.jpg?s=86fdd8a8ffbd935883f2bdf43287c525"
  },
  {
    "title": "Paikuhan",
    "url": "https://cdn.myanimelist.net/images/characters/13/45231.jpg?s=5d111515d13e570e1618861bb4b2dec5"
  },
  {
    "title": "Pan",
    "url": "https://cdn.myanimelist.net/images/characters/3/112948.jpg?s=918e33cfe47ee84d921e74fb4cdcb973"
  },
  {
    "title": "Papoi",
    "url": "https://cdn.myanimelist.net/images/characters/13/356333.jpg?s=bd25c013fb158579a3ae16b7643754ec"
  },
  {
    "title": "Piccolo Daimao",
    "url": "https://cdn.myanimelist.net/images/characters/10/79720.jpg?s=12c811caec48c2f66ebd53539ef15769"
  },
  {
    "title": "Piegero",
    "url": "https://cdn.myanimelist.net/images/characters/7/459009.jpg?s=c041f8381ea5a88e6f1cc6b94f6a4573"
  },
  {
    "title": "Piiza",
    "url": "https://cdn.myanimelist.net/images/characters/16/240055.jpg?s=7ac6839d88c70efbe9849b8e340869e1"
  },
  {
    "title": "Pirozhki",
    "url": "https://cdn.myanimelist.net/images/characters/6/305144.jpg?s=bd78e16288d4c9b7f8f3459cc93d7304"
  },
  {
    "title": "Porunga",
    "url": "https://cdn.myanimelist.net/images/characters/3/45230.jpg?s=5182cadeaa08f73d3f836dd16e299005"
  },
  {
    "title": "Princess Snake",
    "url": "https://cdn.myanimelist.net/images/characters/9/286567.jpg?s=9554020a0ff623929f30e20e4be10b1c"
  },
  {
    "title": "Pu'ar",
    "url": "https://cdn.myanimelist.net/images/characters/4/358984.jpg?s=0c54161cd9408d73e8dca4e7b95f4516"
  },
  {
    "title": "Pui Pui",
    "url": "https://cdn.myanimelist.net/images/characters/6/111825.jpg?s=c8662011406512c206b7f3d1b37420e1"
  },
  {
    "title": "Punta",
    "url": "https://cdn.myanimelist.net/images/characters/10/356334.jpg?s=c1edeffd4d0dad80eab7f4c9dc185209"
  },
  {
    "title": "Raditz",
    "url": "https://cdn.myanimelist.net/images/characters/12/103846.jpg?s=031f7682e10063bb6cbc7e739a1b95ca"
  },
  {
    "title": "Raspberry",
    "url": "https://cdn.myanimelist.net/images/characters/2/462821.jpg?s=a4bd1b280c49e192d8b75295a405de52"
  },
  {
    "title": "Recoome",
    "url": "https://cdn.myanimelist.net/images/characters/3/52868.jpg?s=59c230b7e9cd92cb389df76e871bffa4"
  },
  {
    "title": "Rock",
    "url": "https://cdn.myanimelist.net/images/characters/3/356335.jpg?s=319b6c4356d0cbefc38fd56733ba2193"
  },
  {
    "title": "Rom",
    "url": "https://cdn.myanimelist.net/images/characters/15/303848.jpg?s=9c3e97a2ccb390558d7ff4259fcf8224"
  },
  {
    "title": "Rou Kaioshin",
    "url": "https://cdn.myanimelist.net/images/characters/10/366264.jpg?s=fa4556a93da9d6373d2edb8b93e60590"
  },
  {
    "title": "Saichourou",
    "url": "https://cdn.myanimelist.net/images/characters/8/71666.jpg?s=2b6ec38a226c46ad3c33e9afe54a2849"
  },
  {
    "title": "Sharpner",
    "url": "https://cdn.myanimelist.net/images/characters/8/273751.jpg?s=f157f7bd5e3eaa954e438569ac1ab5f6"
  },
  {
    "title": "Shen Long",
    "url": "https://cdn.myanimelist.net/images/characters/7/65049.jpg?s=93245f4ea44f894018c3446628fc7d9f"
  },
  {
    "title": "Snake Way Guide",
    "url": "https://cdn.myanimelist.net/images/characters/3/463735.jpg?s=773032c56c0f1ee5c9b83ad7c67c973f"
  },
  {
    "title": "Son, Goten",
    "url": "https://cdn.myanimelist.net/images/characters/11/46985.jpg?s=f7d24b418acbd197dc78cddd3e49a593"
  },
  {
    "title": "Son, Gohan",
    "url": "https://cdn.myanimelist.net/images/characters/12/110722.jpg?s=c5e2fe0a3cd616e8ed016fca54806054"
  },
  {
    "title": "South Kaio",
    "url": "https://cdn.myanimelist.net/images/characters/3/113185.jpg?s=a3f06759d2274e9e0ef4811d66500a09"
  },
  {
    "title": "Spopovitch",
    "url": "https://cdn.myanimelist.net/images/characters/16/71102.jpg?s=8b9a0de7620e9a0397742226c22b07d0"
  },
  {
    "title": "Suno",
    "url": "https://cdn.myanimelist.net/images/characters/16/116397.jpg?s=d670a267b2b5af8c9f26baac30578558"
  },
  {
    "title": "Tama",
    "url": "https://cdn.myanimelist.net/images/characters/3/112701.jpg?s=6983616071860c6f0c0ce268bfe5e911"
  },
  {
    "title": "Tao Pai Pai",
    "url": "https://cdn.myanimelist.net/images/characters/14/111699.jpg?s=bf0d8d19557b8a127d862d033efccfb1"
  },
  {
    "title": "Tenkaichi Budokai Announcer",
    "url": "https://cdn.myanimelist.net/images/characters/10/273719.jpg?s=ab08b02b2f0eb9e313ab5c54f2e7b0fb"
  },
  {
    "title": "Tenshinhan",
    "url": "https://cdn.myanimelist.net/images/characters/8/102021.jpg?s=c059016ec2069e3d78f6be30454d863d"
  },
  {
    "title": "Trunks",
    "url": "https://cdn.myanimelist.net/images/characters/5/312402.jpg?s=efbeab2505cea4065c04d7cb9c313e31"
  },
  {
    "title": "Umigame",
    "url": "https://cdn.myanimelist.net/images/characters/6/358662.jpg?s=98bc518fda8b1ce7883636f9b7f9fbab"
  },
  {
    "title": "Upa",
    "url": "https://cdn.myanimelist.net/images/characters/7/45211.jpg?s=953c88520f69831cad606c12244a867b"
  },
  {
    "title": "Uranai Baba",
    "url": "https://cdn.myanimelist.net/images/characters/2/358931.jpg?s=0daf7d854001f4db7dabe6c4194659d7"
  },
  {
    "title": "Uub",
    "url": "https://cdn.myanimelist.net/images/characters/14/112730.jpg?s=813087f11356500636ecf3bdcc08c29e"
  },
  {
    "title": "Vegetto",
    "url": "https://cdn.myanimelist.net/images/characters/3/498109.jpg?s=db2622b315bcfa64f768a31e26308d50"
  },
  {
    "title": "Videl",
    "url": "https://cdn.myanimelist.net/images/characters/12/357962.jpg?s=0655f3f041c046b45e5df8fa6599a09e"
  },
  {
    "title": "Vinegar",
    "url": "https://cdn.myanimelist.net/images/characters/4/459014.jpg?s=401e62b7fd955f1d226ca72de771de90"
  },
  {
    "title": "Vodka",
    "url": "https://cdn.myanimelist.net/images/characters/8/257345.jpg?s=2da435682629e683ce2e69862a82106e"
  },
  {
    "title": "West Kaio",
    "url": "https://cdn.myanimelist.net/images/characters/3/113183.jpg?s=cdfbda4bd4ee4aeb2ca9669b20672341"
  },
  {
    "title": "Yajirobe",
    "url": "https://cdn.myanimelist.net/images/characters/12/275086.jpg?s=0d9b407e205627543b45d46a92206e05"
  },
  {
    "title": "Yakon",
    "url": "https://cdn.myanimelist.net/images/characters/10/111829.jpg?s=83551c370b30ab07adf364a7f9f846ed"
  },
  {
    "title": "Yamcha",
    "url": "https://cdn.myanimelist.net/images/characters/14/126147.jpg?s=c6b311761d167c90d6717a7555efc3ae"
  },
  {
    "title": "Yamu",
    "url": "https://cdn.myanimelist.net/images/characters/10/356314.jpg?s=ff52513de7fc162f8e49ad3a7902b8d8"
  },
  {
    "title": "Zald",
    "url": "https://cdn.myanimelist.net/images/characters/15/463734.jpg?s=4a77598a3af79b75ec82fcff5cf71d83"
  },
  {
    "title": "Zant, Van",
    "url": "https://cdn.myanimelist.net/images/characters/11/357231.jpg?s=8206018e7c6ea647b6542bf2ce25bb91"
  },
  {
    "title": "Zarbon",
    "url": "https://cdn.myanimelist.net/images/characters/8/45220.jpg?s=984c1745bfe41aa2c0044445890f8f69"
  }
]

module.exports = animeChars;
