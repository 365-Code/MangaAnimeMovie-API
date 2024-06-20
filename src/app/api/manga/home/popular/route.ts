import { NextResponse } from "next/server";

const popular = [
  {
    image:
      "https://mangadex.org/covers/32d76d19-8a05-4db0-9fc2-e0b0648fe9d0/e90bdc47-c8b9-4df7-b2c0-17641b645ee1.jpg",
    id: "32d76d19-8a05-4db0-9fc2-e0b0648fe9d0",
    title: "Solo Leveling",
    altTitles: [
      {
        ko: "나 혼자만 레벨업",
      },
      {
        en: "Only I Level up",
      },
      {
        "ko-ro": "Na Honjaman Lebel-eob",
      },
      {
        en: "I level up alone",
      },
      {
        "ja-ro": "Ore Dake Level Up na Ken",
      },
      {
        ru: "Поднятие уровня в одиночку",
      },
      {
        ja: "俺だけレベルアップな件",
      },
      {
        zh: "我独自升级",
      },
      {
        en: "I am the only the one who levels up",
      },
      {
        "zh-hk": "我獨自升級",
      },
      {
        la: "Solo Adtritio",
      },
      {
        tr: "Yalnız Seviye Atlama",
      },
      {
        tr: "Sadece Ben Seviye Atlayabiliyorum",
      },
      {
        "ko-ro": "Na Honjaman Level-Up",
      },
      {
        en: "I Alone Level-Up",
      },
      {
        "pt-br": "Jogador solo",
      },
      {
        "pt-br": "Upando sozinho",
      },
      {
        ro: "Singur îmi ridic nivelul",
      },
      {
        uk: "Тільки я візьму новий рівень",
      },
      {
        fa: "سولو لولینگ",
      },
      {
        fa: "تکرو",
      },
      {
        hi: "केवल मैं स्तर बढ़ाता हूं",
      },
      {
        ne: "सोलो लेभलिङ",
      },
      {
        id: "Aku Level Up Sendiri",
      },
      {
        id: "Grinding Sendiri",
      },
      {
        tr: "Ben yanlız gelişirim",
      },
      {
        tr: "Tek başına seviye atlama",
      },
      {
        ka: "სოლო ლეველინგი",
      },
      {
        ar: "سولو ليفيلنغ",
      },
      {
        ar: "الإرتقاء بالمستوى منفردًا",
      },
      {
        ja: "俺だけレベルアップな件〜外伝〜",
      },
      {
        bn: "সোলো লেভেলিং",
      },
      {
        he: "שחקן בודד",
      },
      {
        hi: "सोलो लेवलिंग",
      },
      {
        hu: "Egyéni szintlépés",
      },
      {
        ta: "சோலோ லெவெலிங்",
      },
    ],
    description:
      "Als sich vor zehn Jahren das „Gate“ öffnete und unsere Welt sich mit der von Monstern verband, erhielten einige normale Menschen die Macht, diese Monster zu jagen. Sie sind als die „Hunter“ bekannt. Doch nicht alle Hunter sind mächtig. Mein Name ist Jin-Woo Sung, ich bin ein Hunter mit Rang E. Ich bin ein Hunter, der selbst in den einfachsten Dungeons sein Leben riskieren muss, der „weltschwächste“. Da ich keine einzige, hervorstechende Fähigkeit habe, schaffte ich es kaum, das nötige Geld für den Zutritt zu den schwächsten Dungeons zu verdienen … jedenfalls, bis ich in einem Rang D Dungeon einen versteckten Dungeon mit der höchstmöglichen Schwierigkeit fand! Als ich dort letztendlich meinen Tod akzeptiert hatte, erhielt ich eine seltsame Macht, einen Questlog, den nur ich sehen konnte, ein Geheimnis, mit dem ich mein Level steigern konnte! Wenn ich die Quests erfülle und basierend auf den gestellten Aufgaben trainiere und Monster jage, steigt mein Level. Ich werde vom weltschwächsten Hunter zum stärksten Rang S Hunter! \n\n\n- [Book <German Edition>](https://altraverse.de/manga/solo-leveling/)\n\n- [<German Edition>](https://altraverse.de/manga/solo-leveling/)",
    status: "completed",
    releaseDate: 2018,
    contentRating: "safe",
    lastVolume: "3",
    lastChapter: "200",
  },
  {
    image:
      "https://mangadex.org/covers/77bee52c-d2d6-44ad-a33a-1734c1fe696a/c384dedc-0f09-46ed-ae68-c81eb5eacdf4.jpg",
    id: "77bee52c-d2d6-44ad-a33a-1734c1fe696a",
    title: "Kage no Jitsuryokusha ni Naritakute!",
    altTitles: [
      {
        en: "The Eminence in Shadow",
      },
      {
        ru: "Восхождение в тени",
      },
      {
        ja: "陰の実力者になりたくて！",
      },
      {
        ko: "숨은 실력자가 되고싶어서",
      },
      {
        uk: "Сходження у тіні",
      },
      {
        en: "I Want To Be The Eminence In Shadow!",
      },
      {
        en: "To Be a Power in the Shadows!",
      },
    ],
    description:
      "Just like how everyone adored heroes in their childhood, a certain young man adored those powers hidden in shadows. Ninjas, rogues, shadowy mentor types, that sort of deal.  \r\nAfter hiding his strength and living the mediocre life of a NPC by day while undergoing frenzied training by night, he finally reincarnates into a different world and gains ultimate power.  \r\nThe young man who is only pretending to be a power in the shadows… his subordinates who took him more seriously than he expected… and a giant organization in the shadows that gets accidentally trampled…  \r\nThis is the story of a young boy who had adored powers in shadows possibly eventually reigning over the world of shadows in another world.",
    status: "ongoing",
    releaseDate: 2018,
    contentRating: "safe",
    lastVolume: "",
    lastChapter: "",
  },
  {
    image:
      "https://mangadex.org/covers/aa6c76f7-5f5f-46b6-a800-911145f81b9b/426242c4-b281-4f19-bb79-c4e15ab6bb24.jpg",
    id: "aa6c76f7-5f5f-46b6-a800-911145f81b9b",
    title: "Sono Bisque Doll wa Koi wo Suru",
    altTitles: [
      {
        de: "More than a Doll",
      },
      {
        fr: "Sexy Cosplay Doll",
      },
      {
        ru: "Эта фарфоровая кукла влюбилась",
      },
      {
        ja: "その着せ替え人形は恋をする",
      },
      {
        zh: "更衣人偶墜入愛河",
      },
      {
        ko: "그 장난감 인형은 사랑을 한다",
      },
      {
        "es-la": "Esa muñeca de porcelana está enamorada",
      },
      {
        ne: "ड्रेस-अप पुतली प्रेममा पर्छ",
      },
      {
        ar: "ماي دريس-أب دارلينغ",
      },
      {
        "zh-hk": "戀上換裝娃娃",
      },
      {
        th: "หนุ่มเย็บผ้ากับสาวนักคอสเพลย์",
      },
      {
        hi: "എന്റെ വസ്ത്രധാരണം പ്രിയേ",
      },
      {
        pl: "Projekt Cosplay",
      },
      {
        "ja-ro": "Sono Kisekae Ningyou wa Koi wo Suru",
      },
      {
        vi: "Cô Nàng Nổi Loạn X Chàng Thợ May",
      },
      {
        vi: "Nàng Búp Bê Thử Đồ Của Tôi Biết Yêu",
      },
      {
        "pt-br": "Minha Adorável Cosplayer",
      },
      {
        uk: "Ця порцелянова лялечка закохалася",
      },
      {
        "ja-ro": "Sono Bisque Doll wa Koi wo Suru",
      },
      {
        en: "My Dress-Up Darling",
      },
      {
        en: "The Bisque doll is falling in love",
      },
    ],
    description:
      "Wakana Gojou is a fifteen year old high-school boy who was socially traumatized in the past due to his passions. That incident left a mark on him that made him into a social recluse. Until one day he had an encounter with Kitagawa who is a sociable gyaru, who is the complete opposite of him. They soon share their passions with one another which leads to their odd relationship.\n\n---\n**Links:**\n- Promotional video - [YouTube](https://youtu.be/FdEk9V9g424)",
    status: "ongoing",
    releaseDate: 2018,
    contentRating: "suggestive",
    lastVolume: "",
    lastChapter: "",
  },
  {
    image:
      "https://mangadex.org/covers/e78a489b-6632-4d61-b00b-5206f5b8b22b/322e1d4e-5d1f-4e38-b456-327a4b51d0b8.jpg",
    id: "e78a489b-6632-4d61-b00b-5206f5b8b22b",
    title: "Tensei Shitara Slime Datta Ken",
    altTitles: [
      {
        en: "That Time I Got Reincarnated as a Slime",
      },
      {
        fr: "Moi, quand je me réincarne en Slime",
      },
      {
        pl: "Odrodzony jako galareta",
      },
      {
        en: "Regarding Reincarnated to Slime",
      },
      {
        "ja-ro": "Tensei Slime",
      },
      {
        "ja-ro": "TenSli",
      },
      {
        "ja-ro": "TenSura",
      },
      {
        en: "In Regards to My Reincarnation as a Slime",
      },
      {
        it: "Vita da Slime",
      },
      {
        ru: "О моём перерождении в слизь",
      },
      {
        th: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว",
      },
      {
        "zh-hk": "关于我转生后成为史莱姆的那件事",
      },
      {
        ja: "転生したらスライムだった件",
      },
      {
        ko: "전생했더니 슬라임이었던건에 대하여",
      },
      {
        "es-la": "Aquella vez que me convertí en Slime",
      },
      {
        ar: "ذلك الوقت الذي تجسدت فيه كسلايم",
      },
      {
        fi: "Kun jälleensynnyin hirviönä",
      },
      {
        tr: "O zaman bir balçık olarak reenkarne oldum",
      },
      {
        tr: "O zaman bir slime olarak reenkarne oldum",
      },
      {
        de: "Meine Wiedergeburt als Schleim in einer anderen Welt",
      },
    ],
    description:
      "The ordinary Mikami Satoru found himself dying after being stabbed by a slasher. It should have been the end of his meager 37 years, but he found himself deaf and blind after hearing a mysterious voice.  \nHe had been reincarnated into a slime!  \n  \nWhile complaining about becoming the weak but famous slime and enjoying the life of a slime at the same time, Mikami Satoru met with the Catastrophe-level monster “Storm Dragon Veldora”, and his fate began to move.\n\n---\n**Links:**\n- Alternative Official English - [K MANGA](https://kmanga.kodansha.com/title/10044/episode/317350) (U.S. Only), [INKR](https://comics.inkr.com/title/233-that-time-i-got-reincarnated-as-a-slime), [Azuki](https://www.azuki.co/series/that-time-i-got-reincarnated-as-a-slime), [Coolmic](https://coolmic.me/titles/587), [Manga Planet](https://mangaplanet.com/comic/618e32db10673)",
    status: "ongoing",
    releaseDate: 2015,
    contentRating: "safe",
    lastVolume: "",
    lastChapter: "",
  },
  {
    image:
      "https://mangadex.org/covers/b0b721ff-c388-4486-aa0f-c2b0bb321512/f812f3d4-f1df-40ce-bd3c-dcc0fd0eb17b.jpg",
    id: "b0b721ff-c388-4486-aa0f-c2b0bb321512",
    title: "Sousou no Frieren",
    altTitles: [
      {
        en: "Frieren: Beyond Journey's End",
      },
      {
        en: "Frieren at the Funeral",
      },
      {
        ru: "Фрирен, провожающая в последний путь",
      },
      {
        ja: "葬送のフリーレン",
      },
      {
        "zh-hk": "葬送的芙莉蓮",
      },
      {
        ko: "장송의 프리렌",
      },
      {
        th: "คำอธิษฐานในวันที่จากลา Frieren",
      },
      {
        el: "Φρίρεν: Πέρα από το Τέλος του Ταξιδιού",
      },
      {
        de: "Frieren: Nach dem Ende der Reise",
      },
      {
        en: "Frieren: Remnants Of The Departed",
      },
      {
        "es-la": "Frieren: Más allá del final",
      },
      {
        "es-la": "Frieren: Más allá del fin del viaje",
      },
    ],
    description:
      "Έχοντας νικήσει τον βασιλιά των δαιμόνων, το ταξίδι μιας δεκαετίας φτάνει στο τέλος του και μια νέα εποχή ειρήνης ξεκινά. Η ζωή όμως συνεχίζεται, ειδικά για την Φρίρεν, πως ως ξωτικό έχει ακόμα αιώνες ζωής μπροστά της. Με τις δεκαετίες να περνάνε, η Φρίρεν έρχεται αντιμέτωπη με την μεταβλητότητα του κόσμου και την παροδικότητα των ανθρώπων. Μετά από μια τελευταία συνάντηση με όλη την παλιά της ομάδα, συνειδητοποιεί ότι ο χρόνος που πέρασε με τους φίλους της ήταν υπερβολικά σύντομος και ότι δεν θα έχει ποτέ την ευκαιρία να τους μάθει καλύτερα. Έρχοντας αντιμέτωπη με την αλήθεια αυτή, η Φρίρεν αποφασίζει να ξεκινήσει ένα ακόμα ταξίδι αλλά αυτή τη φορά έχοντας σκοπό να μάθει το τι σημαίνει να είσαι άνθρωπος.",
    status: "hiatus",
    releaseDate: 2020,
    contentRating: "safe",
    lastVolume: "",
    lastChapter: "",
  },
  {
    image:
      "https://mangadex.org/covers/a96676e5-8ae2-425e-b549-7f15dd34a6d8/ba47ca06-012c-4957-a4bd-5e1ff508ebae.jpg",
    id: "a96676e5-8ae2-425e-b549-7f15dd34a6d8",
    title: "Komi-san wa Komyushou Desu.",
    altTitles: [
      {
        "ja-ro": "Comi-san ha Comyusho Desu.",
      },
      {
        en: "Komi Can't Communicate",
      },
      {
        en: "Komi-san Can't Communicate.",
      },
      {
        en: "Komi-san Has a Communication Disorder.",
      },
      {
        "ja-ro": "Komi-san wa, Communication Shougai desu.",
      },
      {
        en: "Miss Komi Is Bad at Communication.",
      },
      {
        ru: "У Коми-сан проблемы с общением",
      },
      {
        th: "โฉมงามพูดไม่เก่งกับผองเพื่อนไม่เต็มเต็ง",
      },
      {
        ja: "古見さんは、コミュ症です。",
      },
      {
        ko: "코미 양은, 커뮤증이에요",
      },
      {
        ar: "كومي سان لا يمكنها التواصل",
      },
      {
        "ja-ro": "Furumi-san wa, Komyu-shōdesu.",
      },
      {
        vi: "Komi - Nữ thần sợ giao tiếp",
      },
      {
        fr: "Komi cherche ses mots",
      },
      {
        tr: "Komi Konuşmaktan Korkuyor",
      },
      {
        pt: "Komi não consegue se comunicar",
      },
      {
        id: "Komi Sulit Berkomunikasi",
      },
      {
        ms: "Komi Tidak Boleh Berkomunikasi",
      },
      {
        hu: "Komi-san Kommunikációs Zavarral Küzd",
      },
      {
        cs: "Komi-san nemůže komunikovat",
      },
      {
        pl: "Komi-san nie móc komunikuje",
      },
      {
        pl: "Komi-san nie móc porozumiewa",
      },
      {
        es: "Komi-san no puede comunicarse",
      },
      {
        pt: "Senhora Komi não consegue se comunicar",
      },
      {
        "pt-br": "Senhorita Komi não consegue se comunicar",
      },
      {
        ru: "Коми-сан ва, комюсё: дэсу",
      },
      {
        mn: "Коми-сан харилцаж чаддаггүй",
      },
      {
        ru: "У Коми-сан проблемы с общением",
      },
      {
        uk: "У Комі-сан проблеми зі спілкуванням",
      },
      {
        ar: "كومي لا تستطيع التواصل",
      },
      {
        fa: "کومی نمیتواند صحبت کند",
      },
      {
        ne: "कोमी सञ्चार गर्न सक्दैन।",
      },
      {
        th: "โฉมงามพูดไม่เก่งกับผองเพื่อนไม่เต็มเต็ง",
      },
      {
        "zh-hk": "古見同學是溝通魯蛇。",
      },
      {
        "zh-hk": "古見同學有交流障礙症",
      },
      {
        zh: "古见同学有交流障碍症",
      },
      {
        ko: "코미 양은 커뮤증입니다",
      },
      {
        ko: "코미 양은, 커뮤증이에요",
      },
    ],
    description:
      "Komi-san is a beautiful and admirable girl that no one can take their eyes off of. Almost the whole school sees her as the cold beauty that's out of their league, but Tadano Hitohito knows the truth: she's just really bad at communicating with others.\r\n\r\nKomi-san, who wishes to fix this bad habit of hers, tries to improve it with the help of Tadano-kun by achieving her goal of having 100 friends.",
    status: "ongoing",
    releaseDate: 2016,
    contentRating: "safe",
    lastVolume: null,
    lastChapter: null,
  },
  {
    image:
      "https://mangadex.org/covers/bd6d0982-0091-4945-ad70-c028ed3c0917/2e097c9f-ddcc-4dfa-90c7-418d0b768476.jpg",
    id: "bd6d0982-0091-4945-ad70-c028ed3c0917",
    title: "Mushoku Tensei ~Isekai Ittara Honki Dasu~",
    altTitles: [
      {
        "pt-br":
          "A Reencarnação do Vagabundo: Vou dar meu melhor se for para outro mundo",
      },
      {
        en: "Jobless Reincarnation - I Will Go All Out When I'm Transported to Another World",
      },
      {
        en: "Jobless Reincarnation - It Will be All Out if I Go to Another World",
      },
      {
        en: "Mr. No-Job's New Life - If I Go to a Parallel World, Then I'll Get Serious",
      },
      {
        "ja-ro": "Mushoku Tensei",
      },
      {
        fr: "Mushoku Tensei - Nouvelle vie, nouvelle chance",
      },
      {
        en: "Mushoku Tensei: If I Get to a Parallel Universe I'll Bring Out my True Effort",
      },
      {
        en: "Mushoku Tensei: Jobless Reincarnation",
      },
      {
        ru: "Реинкарнация безработного ~История о приключениях в другом мире~",
      },
      {
        ru: "Реинкарнация безработного: Попав в другой мир, я стану сёръёзнее",
      },
      {
        th: "เกิดชาตินี้พี่ต้องเทพ",
      },
      {
        zh: "无职转生~在异世界认真地活下去~",
      },
      {
        ja: "無職転生 〜異世界行ったら本気だす〜",
      },
      {
        ko: "무직전생 〜다른 세계 가면 진심 낸다〜",
      },
      {
        it: "Mushoku Tensei: Jobless Reincarnation",
      },
      {
        de: "Mushoku Tensei - In dieser Welt mach ich alles anders",
      },
      {
        es: "Mushoku Tensei: Reencarnación desde cero",
      },
      {
        fa: "موشوکو تنسی: تناسخ علاف",
      },
      {
        "zh-hk": "無職轉生~在異世界認真地活下去~",
      },
      {
        "pt-br":
          "Jobless Reincarnation: I Will Seriously Try If I Go to Another World",
      },
      {
        ms: "Penjelmaan Semula yang Menganggur: Jika Saya Pergi ke Dunia Lain, Saya Akan Menjadi Serius",
      },
      {
        it: "Reincarnazione senza lavoro: Ci proverò seriamente se vado in un altro mondo",
      },
      {
        fr: "Réincarnation sans emploi : j'essaierai sérieusement si je vais dans un autre monde",
      },
      {
        vi: "Thất nghiệp chuyển sinh ~ Sống hết mình sau khi tới thế giới khác~",
      },
      {
        ru: "Реинкарнация безработного: Я серьёзно постараюсь, если отправлюсь в другой мир",
      },
      {
        ar: "موشوكو تينسي",
      },
      {
        fa: "موشوکو تنسی",
      },
      {
        tr: "Mushoku Tensei: İşsiz Reenkarnasyon",
      },
      {
        tr: "Mushoku Tensei: Paralel Evrene Taşındığımda Her Şeyi Yapacağım",
      },
    ],
    description:
      "A 34-year-old NEET gets killed in a traffic accident and finds himself in a world of magic. Rather than waking up as a full-grown mage, he gets reincarnated as a newborn baby, retaining the memories of his past life. Before he can even properly move his body, he resolves to never make the same mistakes he made in his first life ever again and instead live a life with no regrets with the new one that was given to him. Because he has the knowledge of a middle-aged man, by the age of two, he has already become a prodigy and possesses power unthinkable for anyone his age and even older. Thus begins the chronicles of Rudeus Greyrat, son of swordsman Paul and healer Zenith, as he enters a new world to become the strongest mage known to man, with powers rivaling even the gods themselves.",
    status: "ongoing",
    releaseDate: 2014,
    contentRating: "suggestive",
    lastVolume: "",
    lastChapter: "",
  },
  {
    image:
      "https://mangadex.org/covers/d86cf65b-5f6c-437d-a0af-19a31f94ec55/9536e948-9e5c-4b22-8e35-e88174731984.jpg",
    id: "d86cf65b-5f6c-437d-a0af-19a31f94ec55",
    title: "Ijiranaide, Nagatoro-san",
    altTitles: [
      {
        id: "Jangan goda aku, Nagatoro",
      },
      {
        "es-la": "No te burles de mi, Nagatoro",
      },
      {
        fr: "Arrête de me chauffer, Nagatoro",
      },
      {
        ru: "Не издевайся, Нагаторо",
      },
      {
        ja: "イジらないで、長瀞さん",
      },
      {
        ko: "괴롭히지 말아요, 나가토로 양",
      },
      {
        de: "Neck mich nicht, Nagatoro-san",
      },
      {
        "zh-hk": "不要欺負我，長瀞同學",
      },
      {
        th: "ยัยตัวแสบแอบน่ารัก นางาโทโระ",
      },
      {
        ar: "لا تلعبي معي يا آنسة ناغاتورو",
      },
      {
        it: "Non tormentarmi, Nagatoro!",
      },
      {
        fa: "اذیتم نکن، ناگاتورو سان",
      },
      {
        he: "אל תשתעשעי איתי, נאגאטורו",
      },
      {
        "es-la": "No me Molestes, Nagatoro-san",
      },
      {
        en: "Please Don't Bully Me, Nagatoro",
      },
      {
        uk: "Не дражни мене, Нагаторо-сан",
      },
      {
        cs: "Nehraj si se mnou Nagatoro",
      },
      {
        en: "Don't Toy With Me, Miss Nagatoro!",
      },
      {
        es: "No me rayes, Nagatoro",
      },
      {
        "pt-br": "Não Mexa Comigo, Nagatoro",
      },
      {
        pl: "Nie drocz się ze mną, Nagatoro!",
      },
    ],
    description:
      'Naoto Hachiouji —our spineless— MC (Known also as "Senpai") is a second-year high school student and a loner who spends his afternoons at the Arts Club room. He attracts the attention of one of his schoolmates, a sadistic freshman girl named Nagatoro. However, in between the bullying and teasing, something else begins to blossom.\n\nA lovey-dovey(…?) story between a shy nerd and an S-Dere (Sadistic Tsundere) begins.\n\n---\n\n**Links:**\n\n- Alternative Official English - [K Manga](https://kmanga.kodansha.com/title/10042/episode/313808) (U.S. Only), [Kodansha](https://kodansha.us/series/dont-toy-with-me-miss-nagatoro/)',
    status: "ongoing",
    releaseDate: 2017,
    contentRating: "suggestive",
    lastVolume: "",
    lastChapter: "",
  },
  {
    image:
      "https://mangadex.org/covers/d8a959f7-648e-4c8d-8f23-f1f3f8e129f3/fd109385-623d-46fe-b908-aedc4528a35c.jpg",
    id: "d8a959f7-648e-4c8d-8f23-f1f3f8e129f3",
    title: "One-Punch Man",
    altTitles: [
      {
        es: "El hombre de un solo golpe",
      },
      {
        en: "One Punch Man",
      },
      {
        en: "One-Punch Man",
      },
      {
        en: "OPM",
      },
      {
        tr: "Tek Yumruk",
      },
      {
        "ja-ro": "Wanpanman",
      },
      {
        ru: "Ванпанчмен",
      },
      {
        fa: "مرد تک\u200cمشتی",
      },
      {
        fa: "وان\u200cپانچ\u200cمن",
      },
      {
        ja: "ワンパンマン",
      },
      {
        zh: "一拳超人",
      },
      {
        ko: "원펀맨",
      },
      {
        zh: "一击男",
      },
      {
        ne: "वान्-पन्च् म्यान्",
      },
      {
        ar: "ون بنش مان",
      },
      {
        ar: "رجل اللكمة الواحدة",
      },
      {
        th: "วันพันช์แมน",
      },
      {
        he: "איש האגרוף הבודד",
      },
      {
        he: "וואן פאנץ' מן",
      },
      {
        kk: "Бірұрман",
      },
      {
        kk: "Уанпанчмен",
      },
      {
        de: "ONE-PUNCH MAN",
      },
      {
        "pt-br": "One-Punch Man",
      },
    ],
    description:
      "After rigorously training for three years, the ordinary Saitama has gained immense strength which allows him to take out anyone and anything with just one punch. He decides to put his new skill to good use by becoming a hero. However, he quickly becomes bored with easily defeating monsters, and wants someone to give him a challenge to bring back the spark of being a hero.  \n  \nUpon bearing witness to Saitama's amazing power, Genos, a cyborg, is determined to become Saitama's apprentice. During this time, Saitama realizes he is neither getting the recognition that he deserves nor known by the people due to him not being a part of the Hero Association. Wanting to boost his reputation, Saitama decides to have Genos register with him, in exchange for taking him in as a pupil. Together, the two begin working their way up toward becoming true heroes, hoping to find strong enemies and earn respect in the process.  \n  \n\n\n\n---\n\n**Notes:**  \n- Because some groups use the web version of the manga while others use the magazine version, the numbering won't match between different languages.  \n- **Because a takedown notice was sent to MangaDex from the owners of this series, fan translations of One Punch Man are currently unavailable to be uploaded. The series can be read in its entirety at [the official Shonen Jump website,](https://www.viz.com/shonenjump/chapters/one-punch-man) with the first and latest three chapters available at any time and the rest accessible with a Shonen Jump membership (which costs about $2 a month and can be accessed via a VPN if you are outside the US).**",
    status: "ongoing",
    releaseDate: 2012,
    contentRating: "suggestive",
    lastVolume: "",
    lastChapter: "",
  },
  {
    image:
      "https://mangadex.org/covers/a77742b1-befd-49a4-bff5-1ad4e6b0ef7b/9a60773c-e882-45d7-909b-60a78af09003.jpg",
    id: "a77742b1-befd-49a4-bff5-1ad4e6b0ef7b",
    title: "Chainsaw Man",
    altTitles: [
      {
        uk: "Людина-бензопила",
      },
      {
        ru: "Человек-бензопила",
      },
      {
        ja: "チェンソーマン",
      },
      {
        zh: "电锯人",
      },
      {
        "zh-hk": "鏈鋸人",
      },
      {
        "zh-hk": "電鋸人",
      },
      {
        tr: "Testere Adam",
      },
      {
        kk: "Шынжырлы ара адам",
      },
    ],
    description:
      "Broke young man + chainsaw dog demon = Chainsaw Man!  \n  \nThe name says it all! Denji's life of poverty is changed forever when he merges with his pet chainsaw dog, Pochita! Now he's living in the big city and an official Devil Hunter. But he's got a lot to learn about his new job and chainsaw powers!",
    status: "ongoing",
    releaseDate: 2018,
    contentRating: "suggestive",
    lastVolume: "",
    lastChapter: "",
  },
  {
    image:
      "https://mangadex.org/covers/801513ba-a712-498c-8f57-cae55b38cc92/22ff2622-e93c-420f-b477-7a86eec02a1d.jpg",
    id: "801513ba-a712-498c-8f57-cae55b38cc92",
    title: "Berserk",
    altTitles: [
      {
        he: "ברזרק",
      },
      {
        fa: "برزرک",
      },
      {
        ar: "برسرك",
      },
      {
        th: "เบอร์เซิร์ก",
      },
      {
        ja: "ベルセルク",
      },
      {
        "zh-hk": "劍風傳奇",
      },
      {
        zh: "烙印勇士",
      },
      {
        ko: "베르세르크",
      },
      {
        ar: "بيرسيرك",
      },
      {
        th: "เทพมรณะ",
      },
      {
        uk: "Берсерк",
      },
      {
        ru: "Берсерк",
      },
      {
        en: "Berserk",
      },
      {
        ne: "बर्सर्क",
      },
      {
        de: "Berserk",
      },
    ],
    description:
      "Guts, known as the Black Swordsman, seeks sanctuary from the demonic forces attracted to him and his woman because of a demonic mark on their necks, and also vengeance against the man who branded him as an unholy sacrifice.\n\nAided only by his titanic strength gained from a harsh childhood lived with mercenaries, a gigantic sword, and an iron prosthetic left hand, Guts must struggle against his bleak destiny, all the while fighting with a rage that might strip him of his humanity.  \n  \n***Won the 6th Osamu Tezuka Cultural Prize Excellence Award in 2002.***\n\n---\n\nNote: Following Miura Kenta's death in 2021, the series has been taken over by Kouji Mori, who supervises the series with art done by Studio Gaga.",
    status: "ongoing",
    releaseDate: 1989,
    contentRating: "suggestive",
    lastVolume: "",
    lastChapter: "",
  },
  {
    image:
      "https://mangadex.org/covers/28c77530-dfa1-4b05-8ec3-998960ba24d4/b0a3e41c-f17f-4f3b-9208-e77f83878d43.png",
    id: "28c77530-dfa1-4b05-8ec3-998960ba24d4",
    title: "Otomege Sekai wa Mob ni Kibishii Sekai desu",
    altTitles: [
      {
        "ja-ro": "MobuSeka",
      },
      {
        vi: "Thế Giới Otomegame Thật Khắc Nghiệt Với Nhân Vật Quần Chúng",
      },
      {
        th: "ชีวิตตัวประกอบอย่างตูช่างอยู่ยากเมื่ออยู่ในโลกเกมจีบหนุ่ม",
      },
      {
        ja: "乙女ゲー世界はモブに厳しい世界です",
      },
      {
        ko: "여성향 게임 세계는 엑스트라에게 어려운 세상입니다",
      },
      {
        "ja-ro": "Otome Game Sekai wa Mob ni Kibishii Sekai desu",
      },
      {
        ru: "Мир отомэ-игр — это тяжёлый мир для мобов",
      },
      {
        en: "Trapped in a Dating Sim: The World of Otome Games Is Tough for Mobs",
      },
      {
        fr: "Mon Destin... Entre Les Mains Des Femmes",
      },
      {
        "zh-hk": "女性向遊戲世界對路人角色很不友好",
      },
      {
        en: "The World of Otome Games Is Tough for Mobs",
      },
    ],
    description:
      "Leon, a former Japanese worker, was reincarnated into an “otome game” world, and despaired at how it was a world where females hold dominance over males. It was as if men were just livestock that served as stepping stones for females in this world. The only exceptions were the game’s romantic targets, a group of handsome men led by the crown prince. In these bizarre circumstances, Leon held one weapon: his knowledge from his previous world, where his brazen sister had forced him to complete this game. This is a story about his adventure to survive and thrive in this world.",
    status: "ongoing",
    releaseDate: 2018,
    contentRating: "suggestive",
    lastVolume: "",
    lastChapter: "",
  },
  {
    image:
      "https://mangadex.org/covers/58bc83a0-1808-484e-88b9-17e167469e23/00ed749a-835b-4d06-b08a-c87a893bff0f.jpg",
    id: "58bc83a0-1808-484e-88b9-17e167469e23",
    title: "Lv2 kara Cheat datta Moto Yuusha Kouho no Mattari Isekai Life",
    altTitles: [
      {
        en: "Chillin’ in Another World with Level 2 Super Cheat Powers",
      },
      {
        ja: "LV2からチートだった元勇者候補のまったり異世界ライフ",
      },
      {
        "pt-br":
          "O ex-candidato a herói, que esteve em lv2, almeja ter uma vida pacífica em outro mundo",
      },
      {
        ru: "Непринужденная жизнь в другом мире экс-кандидата в герои, оказавшегося читером со 2 уровня",
      },
      {
        zh: "勇者候补的悠闲的异世界生活",
      },
      {
        uk: "Спокійне життя колишнього висуванця в герої, котрий виявився читером із 2 рівня",
      },
      {
        ko: "LV2부터 치트였던 전직 용사후보의 유유자적 이세계 라이프",
      },
    ],
    description:
      "Banaza, who was summoned to the magic kingdom of Cryroad as a Hero candidate, was disqualified as a Hero because of his ordinary abilities. He was supposed to be returned to his original world, but due to the magical kingdom's mistake, he became unable to return to his original world. However, the moment he reached Level 2, he acquired every single possible skill and kind of magic, turning him into a super cheat with infinite skills! Despite this, he takes Fenris of the demons as his wife, and fully enjoys his newly-married life with an easygoing smile. He changes his name to Fulio and tries to lead his life quietly, but things are a bit chaotic with the likes of a pet saber, four freeloading female knights, a Majin, and even an ex-Demon Lord. However, even with all of this chaos, he still manages to enjoy his life peacefully.",
    status: "ongoing",
    releaseDate: 2019,
    contentRating: "suggestive",
    lastVolume: "",
    lastChapter: "",
  },
  {
    image:
      "https://mangadex.org/covers/eb2d1a45-d4e7-4e32-a171-b5b029c5b0cb/054719a9-4b04-4870-976f-8ce5d2246c92.jpg",
    id: "eb2d1a45-d4e7-4e32-a171-b5b029c5b0cb",
    title: "Kumo Desu ga, Nani ka?",
    altTitles: [
      {
        tr: "Örümceğim ben, ne olmuş?",
      },
      {
        lt: "AÅ¡ voras, ir kas iÅ¡ to?",
      },
      {
        id: "Aku ini laba laba, lalu apa ?",
      },
      {
        sv: "Jag är en spindel, vadå då?",
      },
      {
        no: "Jeg er en edderkopp, hva så?",
      },
      {
        "ja-ro": "kumoko",
      },
      {
        pl: "No i co z tego że jestem pająkiem?",
      },
      {
        it: "Sono un ragno, e quindi?",
      },
      {
        es: "Soy una araña, ¿y qué?",
      },
      {
        ru: "Да, я паук, и что же?",
      },
      {
        ru: "Да, я паук, и что с того?",
      },
      {
        ar: "أنا عنكبوت، وماذا في ذلك؟",
      },
      {
        fa: "من یک عنکبوتم. خب که چی؟",
      },
      {
        th: "แมงมุมแล้วไง, ข้องใจเหรอคะ?",
      },
      {
        zh: "不过是蜘蛛什么的",
      },
      {
        ja: "蜘蛛ですが、なにか？",
      },
      {
        ko: "거미입니다만, 문제라도?",
      },
      {
        de: "Ich bin eine Spinne, na und?!",
      },
      {
        "pt-br": "Então eu sou uma aranha, e daí?",
      },
      {
        en: "So I'm a Spider, So What?",
      },
      {
        kk: "Өрмекшімін, енді не?",
      },
      {
        "ja-ro": "Kumo Desu ga, Nani ka?",
      },
    ],
    description:
      "When a mysterious explosion killed an entire class full of high school students, the souls of everyone in class were transported into a fantasy world and reincarnated. While some students were reincarnated as princes or prodigies, others were not as blessed.  \nOur heroine, who was the lowest in the class, discovered that she was reincarnated as a spider! Now at the bottom of the food chain, she needs to adapt to the current situation with willpower in order to live. Stuck in a dangerous labyrinth filled with monsters, it's eat or be eaten!  \nThis is the story of a spider doing whatever she can in order to survive!",
    status: "ongoing",
    releaseDate: 2015,
    contentRating: "safe",
    lastVolume: "",
    lastChapter: "",
  },
  {
    image:
      "https://mangadex.org/covers/7643e9f6-8455-4a58-b7e8-bf6cd00f5251/2ba663bf-902b-4b7f-ac30-5948c8c07e2a.jpg",
    id: "7643e9f6-8455-4a58-b7e8-bf6cd00f5251",
    title: "Tsuki ga Michibiku Isekai Douchuu",
    altTitles: [
      {
        en: "Moon-led Journey Across Another World",
      },
      {
        en: "TSUKIMICHI - Moonlit Fantasy -",
      },
      {
        fr: "Un voyage dans un autre monde, éclairé par la lune",
      },
      {
        ru: "Лунный бог, приключение и другой мир",
      },
      {
        ja: "月が導く異世界道中",
      },
      {
        zh: "月光下的异世界之旅",
      },
      {
        id: "Rembulan Menuntun Arah di Dunia Lain",
      },
      {
        ko: "달이 이끄는 이세계 여행길",
      },
      {
        "ko-ro": "Dali Ikkeuneun Isegye Yeohaenggil",
      },
      {
        "pt-br": "UMA JORNADA PARA OUTRO MUNDO LIDERADA PELA LUA",
      },
    ],
    description:
      "High school student Misumi Makoto is called into a fantasy world by the god Tsukuyomi, in order to be a hero. However, powerful others in this world aren't as thrilled to have him there, and they kick him to the edge of the world just as Tsukuyomi declares that he must leave Makoto to find his own way. Now it's up to Makoto to find his own way!",
    status: "ongoing",
    releaseDate: 2015,
    contentRating: "suggestive",
    lastVolume: "",
    lastChapter: "",
  },
  {
    image:
      "https://mangadex.org/covers/878634d2-ea39-4001-a4bf-31458020d16a/0a4bedde-52a2-469a-be80-fec8b7d24a06.jpg",
    id: "878634d2-ea39-4001-a4bf-31458020d16a",
    title:
      "Akuyaku Reijou Level 99: Watashi wa UraBoss desu ga Maou de wa Arimasen",
    altTitles: [
      {
        en: "Villainess Level 99 ~I May Be the Hidden Boss but I'm Not the Demon Lord~",
      },
      {
        ja: "悪役令嬢レベル99～私は裏ボスですが魔王ではありません～",
      },
      {
        ja: "悪役令嬢レベル99",
      },
      {
        id: "Antagonis Level 99",
      },
      {
        id: "Antagonis Level 99~ Aku Memang Bos Rahasia, Tapi Aku Bukanlah Raja Iblis~",
      },
      {
        th: "ยัยตัวร้าย เลเวล99",
      },
      {
        zh: "恶役千金LV99",
      },
      {
        vi: "Nữ Phụ Phản Diện Lv99! Tôi Là Trùm Cuối Nhưng Không Phải Là Ma Vương!",
      },
      {
        ru: "Злодейка 99 уровня: Я могу быть скрытым боссом, но я не Король демонов",
      },
      {
        fr: "Personnage au niveau 99 - Bien que je sois en réalité le boss caché, je ne suis pas le Roi Démon",
      },
    ],
    description:
      'I reincarnated as the "Villainess Eumiella" from an RPG Otome game. In the main story, Eumiella is merely a side character, but after the ending, she re-enters the story as the Hidden Boss, a character boasting high stats on par with the heroes! \n\nLighting a fire in my gamer\'s soul, and taking advantage of being left on my own in my parent\'s territory, I trained, trained, and trained! As a result of my training… by the time I enrolled in the academy, I managed to reach level 99. \n\nThough I had planned to live out my days as inconspicuously and peacefully as possible, soon after entering the school, I\'m suspected by the Heroine and Love Interests of being the "Demon Lord"…?  \n  \nBased on a popular web novel of seeking a peaceful life, a fantasy story of the strongest villainess!',
    status: "ongoing",
    releaseDate: 2020,
    contentRating: "safe",
    lastVolume: "",
    lastChapter: "",
  },
  {
    image:
      "https://mangadex.org/covers/6670ee28-f26d-4b61-b49c-d71149cd5a6e/b881ba09-58fc-4b3c-888e-9258b0a4d800.jpg",
    id: "6670ee28-f26d-4b61-b49c-d71149cd5a6e",
    title: "Mieruko-chan",
    altTitles: [
      {
        ja: "見える子ちゃん",
      },
      {
        en: "The Girl Who Can See Them",
      },
      {
        en: 'The Girl Who Sees "Them"',
      },
      {
        en: "Can See Them–chan",
      },
      {
        en: "Can-See-Ghosts-chan",
      },
      {
        en: "Girl That Can See It",
      },
      {
        en: "Child That Can See It",
      },
      {
        en: "Li'l Miss Can-See-Ghosts",
      },
      {
        fr: "Mieruko-chan : Slice of Horror",
      },
      {
        zh: "看得见的女孩",
      },
      {
        "zh-hk": "陰陽眼見子",
      },
      {
        ru: "Девочка, которая видит это",
      },
      {
        ne: "मिएरुको-चान",
      },
      {
        ar: "مييروكو تشان",
      },
      {
        th: "มิเอรุโกะจัง ใครว่าหนูเห็นผี",
      },
      {
        ko: "보이는 여고생",
      },
      {
        de: "Mieruko-chan - Die Geister, die mich riefen",
      },
    ],
    description:
      "All of a sudden, Miko is able to see grotesque monsters all around her; but no one else can. Rather than trying to run away or face them, she instead musters all of her courage and… ignores them. Join in on her day-to-day life as she keeps up her best poker face despite the supernatural goings-on.\n___\n[Alt Raw (niconico Manga)](http://seiga.nicovideo.jp/comic/37662)",
    status: "ongoing",
    releaseDate: 2018,
    contentRating: "safe",
    lastVolume: "",
    lastChapter: "",
  },
  {
    image:
      "https://mangadex.org/covers/55ace2fb-e157-4d76-9e72-67c6bd762a39/ccb8b6f2-a715-4719-8db7-31b68b6671dd.jpg",
    id: "55ace2fb-e157-4d76-9e72-67c6bd762a39",
    title: "An Archdemon's Dilemma: How to Love Your Elf Bride",
    altTitles: [
      {
        id: "Aku, Seorang Raja Iblis, Mengambil Budak Elf Sebagai Istriku, Tapi Bagaimana Cara Aku Mencintainya?",
      },
      {
        "ja-ro":
          "Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba ii?",
      },
      {
        id: "Bagaimana Cara Mencintai Budak Elfmu?",
      },
      {
        pt: "Eu, um Lorde Demônio, comprei uma elfa escrava como minha esposa, mas como eu amo ela?",
      },
      {
        en: "I, the Demon Lord, Took a Slave Elf as My Wife, but How Do I Love Her?",
      },
      {
        fr: "Je, un seigneur des démons, ai épousé un elfe esclavagisant, mais comment l'aime-je?",
      },
      {
        ru: "Я, Владыка демонов, взял эльфийку в жёны. И как прикажете её любить?",
      },
      {
        ru: "Я, Владыка демонов, взял эльфийку-рабыню в жёны. И как же мне её любить?",
      },
      {
        zh: "我这魔王娶了一个奴隶精灵当老婆，该怎么疼爱才好？",
      },
      {
        "zh-hk": "身為魔王的我娶了奴隸精靈為妻、該如何表白我的愛？",
      },
      {
        zh: "魔奴嫁",
      },
      {
        ja: "魔王の俺が奴隷エルフを嫁にしたんだが、どう愛でればいい？",
      },
      {
        ko: "마왕인 내가 노예 엘프를 신부로 삼았는데 어떻게 사랑하면 되지?",
      },
      {
        "pt-br": "O Dilema de um Arquidemônio: Como Amar sua Noiva Elfa",
      },
      {
        es: "Soy un Rey Demonio y he Tomado Como Esposa a una Elfa Esclava, ¿Cómo Puedo Amarla?",
      },
      {
        "es-la":
          "Soy un Rey Demonio y he Tomado Como Esposa a una Elfa Esclava, ¿Cómo Puedo Amarla?",
      },
    ],
    description:
      "Zagan is feared as an evil mage, he is awkward and has a sharp tongue, and once again had to put down thieves that encroached on his territory when he was researching that morning. In a dark auction, he finds a white slave elf, Nephie, who holds a peerless beauty. Falling in love with her at first sight, he uses his fortune to buy her, but as poor as he is socially, he doesn’t understand how to connect with her. Thus, the clumsy cohabitation of the mage that can’t convey his love, and the slave that pines for her master but doesn’t understand how to bring it up, begins.",
    status: "ongoing",
    releaseDate: 2018,
    contentRating: "safe",
    lastVolume: "",
    lastChapter: "",
  },
  {
    image:
      "https://mangadex.org/covers/737a846b-2e67-4d63-9f7e-f54b3beebac4/cbd0f7b8-3fc5-4161-b3a2-102048c314ae.jpg",
    id: "737a846b-2e67-4d63-9f7e-f54b3beebac4",
    title: "Please Go Home, Akutsu-san!",
    altTitles: [
      {
        "ja-ro": "Kaette Kudasai! Akutsu-san",
      },
      {
        ja: "ヤンキー娘",
      },
      {
        ja: "帰ってください！ 阿久津さん",
      },
      {
        "ja-ro": "Kaette Kudasai, Akutsu-san!",
      },
      {
        "ja-ro": "Yankee Musume",
      },
      {
        vi: "Xin hãy về nhà, Akutsu-san!",
      },
      {
        uk: "Будь ласка, йди додому, Акуцу-сан!",
      },
      {
        ru: "Пожалуйста, иди домой, Акуцу-сан!",
      },
      {
        ru: "Пожалуйста, иди домой, Акуцу!",
      },
      {
        zh: "请你回去吧！阿久津同学",
      },
      {
        "es-la": "Por favor vete a casa, ¡Akutsu-san!",
      },
      {
        it: "Per favore torna a casa, Akutsu-san!",
      },
      {
        vi: "Cút mẹ về nhà đi Akutsu!",
      },
      {
        de: "Bitte geh heim, Akutsu-san!",
      },
      {
        "pt-br": "Por favor vá para casa, Akutsu-san!",
      },
    ],
    description:
      "Ooyama-kun normally doesn’t get involved with Akutsu-san, a delinquent girl in his class, but for some reason she makes his house her hang-out place!\n\nWill she do something horrible to him behind closed doors or will he chase her out? But dealing with Akutsu-san’s sexy, cute behavior in such a confined space… he’s sure to get flustered! He wants her to go home, but he also doesn’t?\n\nA teasing comedy under a single roof!",
    status: "ongoing",
    releaseDate: 2019,
    contentRating: "suggestive",
    lastVolume: "",
    lastChapter: "",
  },
  {
    image:
      "https://mangadex.org/covers/6b958848-c885-4735-9201-12ee77abcb3c/53a05c31-1043-4f74-b1e4-8f1963f04466.jpg",
    id: "6b958848-c885-4735-9201-12ee77abcb3c",
    title: "SPY×FAMILY",
    altTitles: [
      {
        ja: "スパイ ファミリー",
      },
      {
        ru: "Семья шпиона",
      },
      {
        uk: "Сім'я × шпигуна",
      },
      {
        cs: "Špión x Rodina",
      },
      {
        pl: "SZPIEG X RODZINA",
      },
      {
        lt: "ŠNIPO×ŠEIMA",
      },
      {
        fa: "جاسوس × خانواده",
      },
      {
        hi: "जासूस X परिवार",
      },
      {
        ne: "जासूस×परिवार",
      },
      {
        zh: "间谍过家家",
      },
      {
        "zh-hk": "間諜過家家",
      },
      {
        "zh-hk": "間諜家家酒",
      },
      {
        mn: "ТАГНУУЛУ × ГЭР БҮЛ",
      },
      {
        tr: "CASUS × AİLE",
      },
      {
        ar: "جاسوس x عائله",
      },
      {
        kk: "Тыңшы × Отбасы",
      },
      {
        de: "Spy x Family",
      },
      {
        "pt-br": "SPY×FAMILY",
      },
      {
        ka: "ჯაშუში×ოჯახი",
      },
      {
        hi: "स्पाई×फैमिली",
      },
    ],
    description:
      "أمضى الجاسوس الخبير المسمى <الشفق> أيامه في مهام سرية ، وكل ذلك من أجل تحقيق عالم أفضل. لكن في يوم من الأيام ، حصل على أمر جديد صعب للغاية من القيادة. من أجل مهمته ، يجب عليه تكوين أسرة مؤقتة وبدء حياة جديدة؟!",
    status: "ongoing",
    releaseDate: 2019,
    contentRating: "safe",
    lastVolume: "",
    lastChapter: "",
  },
];

export async function GET() {
    try {
        return NextResponse.json({
            data: popular
        })
    } catch (error) {
        return NextResponse.json({
            msg: "Internal Server Error"
        })
    }
}