import { NextResponse } from "next/server";

const recents = [
    {
      id: "9550d800-3e72-4a0e-9034-00e0d6a10234",
      image:
        "https://mangadex.org/covers/9550d800-3e72-4a0e-9034-00e0d6a10234/9461aaf6-54f4-4bd2-a606-e96a6a9b26dd.jpg",
      title: "Choushihazure na Onna Joushi ga Suki na Otoko no Hanashi",
      altTitles: [
        { ja: "調子外れな女上司が好きな男の話" },
        {
          en: "A Story About A Man Who Loves His Out-Of-Tune Female Superior",
        },
        { en: "A story about a man who likes his out-of-touch boss" },
        { ja: "調子外れな女上司が好きな男の話 ハミタの読み切り" },
        {
          "ja-ro":
            "Choushihazure na Onna Joushi ga Suki na Otoko no Hanashi - Hamita no Yomikiri",
        },
        {
          en: "A Story About A Man Who Loves His Out-Of-Tune Female Superior - Hamita Oneshots",
        },
      ],
      status: "Completed",
      releaseDate: 2023,
      contentRating: "safe",
      lastVolume: "1",
      lastChapter: "10",
    },
    {
      id: "9550d800-3e72-4a0e-9034-00e0d6a10234",
      image:
        "https://mangadex.org/covers/9550d800-3e72-4a0e-9034-00e0d6a10234/9461aaf6-54f4-4bd2-a606-e96a6a9b26dd.jpg",
      title: "Choushihazure na Onna Joushi ga Suki na Otoko no Hanashi",
      altTitles: [
        { ja: "調子外れな女上司が好きな男の話" },
        {
          en: "A Story About A Man Who Loves His Out-Of-Tune Female Superior",
        },
        { en: "A story about a man who likes his out-of-touch boss" },
        { ja: "調子外れな女上司が好きな男の話 ハミタの読み切り" },
        {
          "ja-ro":
            "Choushihazure na Onna Joushi ga Suki na Otoko no Hanashi - Hamita no Yomikiri",
        },
        {
          en: "A Story About A Man Who Loves His Out-Of-Tune Female Superior - Hamita Oneshots",
        },
      ],
      status: "Completed",
      releaseDate: 2023,
      contentRating: "safe",
      lastVolume: "",
      lastChapter: "",
    },
    {
      id: "8dacd186-ba0f-45f9-910e-18d8c978bd1a",
      image:
        "https://mangadex.org/covers/8dacd186-ba0f-45f9-910e-18d8c978bd1a/d9078930-6ac2-4ed0-9896-f8479ad89fca.jpg",
      title: "Y13",
      altTitles: [],
      status: "Ongoing",
      releaseDate: 2024,
      contentRating: "safe",
      lastVolume: "",
      lastChapter: "",
    },
    {
      id: "c7c6a237-0c2c-470d-9020-71394e58fc8f",
      image:
        "https://mangadex.org/covers/c7c6a237-0c2c-470d-9020-71394e58fc8f/fd19d341-d571-47c0-841d-83125cbfd801.png",
      title: "Oshi no Shuuchakushin wo Namete Ita",
      altTitles: [
        { ja: "推しの執着心を舐めていた" },
        { en: "I Underestimated My Oshi's Attachment" },
      ],
      status: "Ongoing",
      releaseDate: 2024,
      contentRating: "",
      lastVolume: "",
      lastChapter: "",
    },
    {
      id: "8d5eea8a-aad6-4f52-a084-26cb6435b5ed",
      image:
        "https://mangadex.org/covers/8d5eea8a-aad6-4f52-a084-26cb6435b5ed/f4232d44-5aa4-4567-8459-1c561bfa1dfb.jpg",
      title: "Luo Zhi Yongzhe - Yi Shijie Luchu Da Maoxian",
      altTitles: [
        { en: "Naked Hero - An Exposed Adventure in Another World" },
        { "zh-hk": "裸之勇者-異世界露出大冒險" },
      ],
      status: "Ongoing",
      releaseDate: 2023,
      contentRating: "erotica",
      lastVolume: "",
      lastChapter: "",
    },
    {
      id: "96b021aa-e8db-4372-846d-45ecf3fa53f4",
      image:
        "https://mangadex.org/covers/96b021aa-e8db-4372-846d-45ecf3fa53f4/66a9b3fa-40ac-458d-a072-f0c797b4ffea.jpg",
      title: "Kibotos Eujeil Mutu Daehoe",
      altTitles: [
        { ko: "키보토스제일무투대회" },
        {
          en: "Blue Archive - Kivotos' First Martial Arts Tournament (Sensei 🍇 Battle)",
        },
      ],
      status: "Ongoing",
      releaseDate: 2023,
      contentRating: "suggestive",
      lastVolume: "",
      lastChapter: "",
    },
    {
      id: "14f44d56-dd16-41d9-95a4-c334aa953c0a",
      image:
        "https://mangadex.org/covers/14f44d56-dd16-41d9-95a4-c334aa953c0a/fe5ee29f-6bfc-4557-9b41-733e195bc0b1.jpg",
      title: "Kizokuka Sannan no Nariagari Life",
      altTitles: [
        {
          "ja-ro":
            "Kizokuka Sannan no Nariagari Life: Umarete Sugu ni Jingai Nintei Sareta Shounen wa Isekai wo Mankitsu Suru",
        },
        {
          ja: "貴族家三男の成り上がりライフ: 生まれてすぐに人外認定された少年は異世界を満喫する",
        },
      ],
      status: "Ongoing",
      releaseDate: 2024,
      contentRating: "safe",
      lastVolume: "",
      lastChapter: "",
    },
    {
      id: "bd5b7e90-c768-4725-85ec-d3ed95477348",
      image:
        "https://mangadex.org/covers/bd5b7e90-c768-4725-85ec-d3ed95477348/79b93845-2925-4479-8801-448f43c01e8c.jpg",
      title: "Dear, 00",
      altTitles: [{ ko: "디어, 제로제로" }],
      status: "Ongoing",
      releaseDate: null,
      contentRating: "erotica",
      lastVolume: "",
      lastChapter: "",
    },
    {
      id: "dfc262fc-be3f-4d7e-a605-7a538d8d7a44",
      image:
        "https://mangadex.org/covers/dfc262fc-be3f-4d7e-a605-7a538d8d7a44/26a57cb8-7faa-4e54-8ade-31a7dd895e2b.jpg",
      title: "Masisseo Jyeora yap!♡",
      altTitles: [{ ko: "맛있어져라 얍!♡" }, { en: "Be Delicious!" }],
      status: "Completed",
      releaseDate: 2024,
      contentRating: "erotica",
      lastVolume: "",
      lastChapter: "",
    },
    {
      id: "5c397486-c0a2-4e58-af37-e07899c1bef2",
      image:
        "https://mangadex.org/covers/5c397486-c0a2-4e58-af37-e07899c1bef2/d9673741-0341-49f7-bc6b-8326ed202023.png",
      title: "Yowaki na Kimi to Nagai Shiawase",
      altTitles: [
        { ja: "弱気なきみと永いしあわせ" },
        { en: "Eternal Happiness With a Shy Boy Like You" },
      ],
      status: "Completed",
      releaseDate: 2023,
      contentRating: "suggestive",
      lastVolume: "1",
      lastChapter: "5.5",
    },
    {
      id: "d6796530-605f-48fa-b1e9-b11f68711193",
      image:
        "https://mangadex.org/covers/d6796530-605f-48fa-b1e9-b11f68711193/1e89875c-2aab-4378-ae85-66b3895168ff.png",
      title: "Lolita to Ane",
      altTitles: [
        { ko: "로리타와 언니" },
        { en: "Lolita and Sister" },
        { ja: "ロリィタと姉" },
      ],
      status: "Completed",
      releaseDate: 2024,
      contentRating: "safe",
      lastVolume: "",
      lastChapter: "1",
    },
    {
      id: "97f1b530-6284-471a-9425-549b8acce615",
      image:
        "https://mangadex.org/covers/97f1b530-6284-471a-9425-549b8acce615/c4619434-e297-4930-87d3-6da51b2a36ca.jpg",
      title: "Bocchi The Rock! - Bocchi The Classic! (Doujinshi)",
      altTitles: [{ en: "Bocchi The Classic!" }, { ko: "봇치 더 클래식!" }],
      status: "Completed",
      releaseDate: 2023,
      contentRating: "safe",
      lastVolume: "",
      lastChapter: "",
    },
    {
      id: "a72d5653-7238-40ba-8135-c93910a02bc4",
      image:
        "https://mangadex.org/covers/a72d5653-7238-40ba-8135-c93910a02bc4/6c77dc6b-5b8b-42db-8e74-debb413ad4a9.jpg",
      title: "Shuu ni Ichido Classmate wo Kau Hanashi",
      altTitles: [
        { ja: "週に一度クラスメイトを買う話～ふたりの時間、言い訳の五千円" },
        {
          "ja-ro":
            "Shuu ni Ichido Classmate wo Kau Hanashi ~ Futari No Jikan, Iiwake No Gozen'en",
        },
        {
          en: "A Story About Buying a Classmate Once a Week ~ 5,000 Yen for an Excuse to Spend Time Together",
        },
      ],
      status: "Ongoing",
      releaseDate: 2024,
      contentRating: "suggestive",
      lastVolume: "",
      lastChapter: "",
    },
    {
      id: "8b75a0d1-b500-40f4-8604-e5e8f4913e08",
      image:
        "https://mangadex.org/covers/8b75a0d1-b500-40f4-8604-e5e8f4913e08/1554bac8-3691-4009-b4da-57d6171742a0.jpg",
      title: "Yubisaki ni Koi wo Sakasete",
      altTitles: [{ ja: "指先に恋を咲かせて" }],
      status: "Completed",
      releaseDate: 2024,
      contentRating: "safe",
      lastVolume: "",
      lastChapter: "",
    },
    {
      id: "b07db420-63ec-4d4d-9b4f-7e148c982b38",
      image:
        "https://mangadex.org/covers/b07db420-63ec-4d4d-9b4f-7e148c982b38/cd914e30-f88f-40b7-ab0f-655cf8442785.jpg",
      title: "Chang Eomneun Bang",
      altTitles: [
        { tr: "Camları Olmayan Bir Oda" },
        { ko: "창 없는 방" },
        { en: "A Room Without Windows" },
        { en: "A Room Without Space" },
        { en: "Windowless Room" },
      ],
      status: "Completed",
      releaseDate: 2024,
      contentRating: "erotica",
      lastVolume: "",
      lastChapter: "5",
    },
    {
      id: "151a1fac-9069-4a98-a2bb-fb0b4046ee2e",
      image:
        "https://mangadex.org/covers/151a1fac-9069-4a98-a2bb-fb0b4046ee2e/7e1ab272-235e-482a-b125-e4608479ece2.jpg",
      title: "Kick Off",
      altTitles: [
        { "pt-br": "O começo" },
        { ko: "킥오프" },
        { "ko-ro": "Kigopeu" },
      ],
      status: "Completed",
      releaseDate: 2021,
      contentRating: "erotica",
      lastVolume: "2",
      lastChapter: "58",
    },
    {
      id: "d723a153-12f9-4a9b-ac0b-4f4488d6b9b5",
      image:
        "https://mangadex.org/covers/d723a153-12f9-4a9b-ac0b-4f4488d6b9b5/2fbb7eac-db77-4390-9307-ad4bce6db962.jpg",
      title: "Ouji-sama no Dakimakura",
      altTitles: [{ ja: "王子さまの抱きまくら" }],
      status: "Completed",
      releaseDate: 2021,
      contentRating: "safe",
      lastVolume: "2",
      lastChapter: "12.5",
    },
    {
      id: "542452db-bd1c-4fba-90ee-1213f0bc6718",
      image:
        "https://mangadex.org/covers/542452db-bd1c-4fba-90ee-1213f0bc6718/1ec75343-d1ff-4c09-9f6a-b0f8e6f6315c.png",
      title: "PEEP",
      altTitles: [{ ja: "ピープ" }],
      status: "Ongoing",
      releaseDate: 2024,
      contentRating: "suggestive",
      lastVolume: "",
      lastChapter: "",
    },
    {
      id: "5d639725-fa15-4e6f-8799-66e0ac9e4e7f",
      image:
        "https://mangadex.org/covers/5d639725-fa15-4e6f-8799-66e0ac9e4e7f/7c5aeb61-675d-4449-9f02-dcd2373c4dc9.jpg",
      title: "Escape into Oblivion",
      altTitles: [
        {
          ko: "Domang, Mang-gag Run, Forget Беги, забудь Побег в забвение 도망, 망각 도망,망각",
        },
      ],
      status: "Completed",
      releaseDate: 2017,
      contentRating: "safe",
      lastVolume: "",
      lastChapter: "",
    },
    {
      id: "528fdd65-4c0d-4e21-82d8-66da8d6113d6",
      image:
        "https://mangadex.org/covers/528fdd65-4c0d-4e21-82d8-66da8d6113d6/70cb625d-3b5a-4b1f-a33f-7ef66d7ba1b5.jpg",
      title: "The Person I Met In-Game Was Actually My Big Sister.",
      altTitles: [
        { ja: "ゲーム内で知り合った人が実は姉弟だった" },
        { "ja-ro": "Game Nai de Shiriatta Hito ga Jitsu wa Kyoudai datta" },
        { ja: "複雑な姉弟の４コマ" },
        { "ja-ro": "Fukuzatsu na Kyoudai no 4koma" },
        { "ja-ro": "Fukuzatsu na Kyoudai no Yonkoma" },
        { en: "A Complicated Sibling Relationship 4-Koma" },
        { en: "The Person I met in the game was actually My Big Sister." },
      ],
      status: "Completed",
      releaseDate: 2020,
      contentRating: "suggestive",
      lastVolume: "1",
      lastChapter: "100",
    },
    {
      id: "ac778e5c-9f31-43d3-93e3-d5ea04c7dbc8",
      image:
        "https://mangadex.org/covers/ac778e5c-9f31-43d3-93e3-d5ea04c7dbc8/01ee2b7d-c1d0-404e-b7d1-6c7e989aed1a.jpg",
      title: "Flame Peacemaker",
      altTitles: [{ ko: "화염의 피스메이커" }],
      status: "Ongoing",
      releaseDate: 2024,
      contentRating: "safe",
      lastVolume: "",
      lastChapter: "",
    },
  ];

export async function GET() {
    try {
        return NextResponse.json({
            data: recents
        })
    } catch (error) {
        return NextResponse.json({
            msg: "Internal Server Error"
        })
    }
}