export type ActivityType = {
  name: string;
  description?: string[];
  piece: number;
  link?: string;
  hide?: boolean;
};

// 攤位
const booths: ActivityType[] = [
  {
    name: "LINE",
    description: [
      "總部位於日本的LINE以「拉近你我的距離」為企業使命，透過多元的行動服務與內容，致力將人們、資訊與社會緊密連結。自2011年6月以通訊軟體的型態推出，現更推展其多元的全球生態系，並將觸角延伸至人工智慧、金融科技等領域，積極實現「智慧入口」的願景，2021年3月，LINE與日本規模最大的網路科技集團之一Z Holdings 正式整併，未來也將持續提供用戶享有最即時、便利的行動生活。",
    ],
    piece: 3,
    link: "https://techblog.lycorp.co.jp/zh-hant/search?q=intern",
  },
  {
    name: "美商超微半導體股份有限公司台灣分公司",
    description: [
      "50多年來，AMD（NASDAQ：AMD）推動創新高效能運算、繪圖及視覺技術，建構遊戲、高臨場感平台與資料中心等重要領域。全球數十億的消費者、世界500強企業以及尖端科學研究機構皆仰賴AMD的技術來改善生活、工作及娛樂。AMD員工致力於研發領先的高效能與自行調適產品，不斷突破技術的極限。",
    ],
    piece: 2,
    link: "https://www.amd.com/zh-tw.html",
  },
  {
    name: "帕亞科技股份有限公司 & 臺科大營建系",
    description: [
      "帕亞科技目前主力產品為 PAIA 遊戲AI競賽平台，我們打造了一個遊戲情境，讓使用者可以上傳各自的AI在平台上競賽，也提供積木式的開發工具，讓國中小學生可以輕易使用，學習AI。https://www.paia-arena.com/",
      "臺科大營建系資訊組以促進資通訊科技於土木營建與防災工程的全生命週期導入與應用為目標，朝向智慧營建及永續土木工程等方向發展。",
    ],
    piece: 1,
    link: "https://www.ct.ntust.edu.tw/ct/",
  },
  {
    name: "Dcard 狄卡科技",
    description: [
      "Dcard 是全台最大匿名社群， 從台灣走向世界，每月不重複訪客高達 2,200 萬，發展出廣告、電商、跨國市場等領域，持續探索新型商業模式，邁向世界級網路公司前進。",
    ],
    piece: 1,
    link: "https://about.dcard.tw/joblist",
  },
  {
    name: "曉數碼 Akatsuki",
    description: [
      "曉數碼為 Akatsuki Inc. 於 2014 年在台灣設立的子公司，以「與創作者共鳴，娛樂全世界」為使命，致力於開發、營運各種能躍動人心的遊戲。",
      "曉數碼重視在地化品質並放眼國際市場，團隊中聚集來自各地的成員，包含台、日、韓、英、法、德、西與印度等多語言人才。我們亦積極打造幸福職場，以此支持成員們盡情發揮創意，使其發光發熱，共同成長。",
    ],
    piece: 1,
    link: "https://bit.ly/3bwhylS",
  },
  {
    name: "趨勢科技",
    description: [
      "趨勢科技為資訊安全解提供決方案全球領導廠商，致力建立一個安全的資訊交換世界。為資料中心、雲端工作負載、網路、端點裝置提供多層式安全防護。",
    ],
    piece: 1,
    link: "https://careers.trendmicro.tw",
  },
  {
    name: "Ruby Taiwan",
    description: [
      "Ruby Taiwan 社群成立於2008年10月，主要是針對 Ruby 程式語言及軟體開發，進行業界的交流及分享，提昇開發人員的技術深度與廣度",
    ],
    piece: 1,
  },
  {
    name: "g0v 零時小學校",
    description: [
      "零時小學校致力於將 g0v 零時政府（公民科技社群）自發性運用科技做專案解決社會問題的經驗與精神，轉化為專題導向教學模式與學習資源，將數位公民素養向下扎根。透過與學校合作課程、提供 70 堂以上數位公民線上課程、舉辦營隊與專案孵化競賽等方式，陪伴 2000 位以上師生，近四年來共收到 123 件公民科技專案，其中 74 件作品係由國高中生及大學生提出。",
    ],
    piece: 1,
  },
  {
    name: "島島阿學學習社群",
    description: [
      "島島阿學是由親師生以集體智慧共創的民主學習社群。邀請學習者一同解決民主教育兩大元素「自主學習、民主社群」的困難，如找不到目標、資源、學伴等。目前提供可共編的學習資源平台，邀學習者共享資源。今年上半年也將上架找學伴、老師、揪團的功能。一起慢慢學不用急，在互助共好中成就彼此。",
    ],
    piece: 1,
  },
  {
    name: "台灣不分系學生聯合協會",
    description: [
      "不分系是近幾年於台灣大專院校所開始嘗試之實驗教育，透過鬆綁大專院校制度，藉由校級或是院級學士的方式讓同學能夠順利以其他科系的方式畢業。而這個制度雖然帶來同學選課的自由，同時帶來同學對於自己未來的迷惘，在大學路上努力的過程可能能夠被看見，但也可能會停留在原地，也沒有身旁的朋友能夠幫助。",
      "台灣不分系學生聯合協會是一個正進行籌組的協會，現有成員多以成大不分系，部分其它科系為主，未來期望在籌組階段可以廣招全台各地對於不分系有興趣的學生，無論是否是不分系學生均可加入。我們期待能夠作為一個能夠幫助大家接軌，聯合各校不分系系學會合作，舉辦全國性不分系相關團體活動，透過「競賽」和「團隊媒合」的平台，作為全台灣自由度最高的科系，以及想法最天馬行空的科系，能夠透過各個大學的特色與各個同學個人不分系的經驗結合，讓大家能夠獲得一個想法付諸實現的平台，以及結交新同儕的一個資訊交流互通平台。",
    ],
    piece: 1,
  },
  {
    name: "Ubuntu-TW",
    description: [
      "Ubuntu-TW 成立於2005年6月，是由數名愛好者發起，以推廣 Ubuntu 為目標的台灣在地社群。除了每年固定舉辦的 Release Party 以及在台灣各開源研討會擺攤展示之外，我們的成員也時常出沒於各大開源社團，而所舉辦的 Release Party 也一直都有其他 Linux 發行版愛好者的參與。除了社群活動之外，我們的成員也有參與 Ubuntu 及其他發行版、開源軟體的 L10N，編篡文件，以及在網上替人解惑。歡迎各路新手高手、舊雨新知，加入 Ubuntu-TW ，跟我們一起推廣 Ubuntu、Linux 及開源文化！",
    ],
    piece: 1,
  },
  {
    name: "開放文化基金會",
    description: [
      "OCF 希望能夠藉由法人組織的力量，協助台灣的開放文化相關社群，包含開放原始碼軟體、開放資料、開放政府三個主要領域的發展和應用。期許能將開源自由的精神，更廣泛地應用在各個領域。",
    ],
    piece: 1,
  },
  {
    name: "PyCon TW",
    description: [
      "PyCon，亦即 Python 年會，是全球 Python 社群年度盛會。PyCon TW 今年九月即將在高雄科工館舉辦第十二年的台灣 Python 年會。PyCon TW 旨在聚集台灣各領域應用 Python 的人，交流彼此的經驗心得，分享最新的技術發展，並親身體驗社群獨有的熱情。",
    ],
    piece: 1,
  },
  {
    name: "StarUp 人才孵化器",
    description: [
      "StarUp人才孵化器致力透過建置校園創新創業生態系，培育新時代的未來領袖。",
      "",
      "我們透過三大核心業務「社群、育成、投創」聚集積極成長的大學生，透過彼此相互的連結與交流，創造不同的可能性。",
      "",
      "我們在疫情中，由創辦人小朱從經營瀕臨倒社的陽明交大創新創業社開始，一步步舉辦活動，匯集「不躺平的年輕人」，現已舉辦44場活動、觸及1500+人次，目前Line 社群人數達404人，匯聚超過40所系所學生，並且於2023開始與海洋大學創客社、大同大學創新創業社組成「BeTheChange 創創聯盟」，共同舉辦活動、共享資源和機會。",
      "",
      "除了社群經營外，StarUp人才孵化器也提供社群中的人才關於創業家與經理人的培訓計畫，進行自我探索、創業思維、專案管理等出社會必備的職場素養課程，並將人才的學習歷程匯集成人才履歷，提供企業參考，幫助認證人才進入企業見習、實習的就業機會，目前已培育37位夥伴，成功媒合22人次的優秀人才進入職場。",
      "",
      "同時我們也將於2024年開始，與炙星投創合作，成立學生投創基金，管理300萬資金專注投資學生創業團隊，期待挖掘、培跑下一個改變世界的未來領袖。",
      "",
      "在今年，我們將成立「台灣創新創業青年領袖協會」，並複製社團拓點模式至不同學校，透過幫助人才進行自我探索，職場素養培訓，以及提供就業與投資機會，協助人才發展個人天賦與熱忱，建立未來世代所需的素養，成為新時代的創新創業領袖。",
      "",
      "更多資料歡迎閱覽以下簡報",
      "https://reurl.cc/67dXRb",
      "",
    ],
    piece: 1,
  },
  {
    name: "2024 第十二屆梅竹黑客松",
    description: [
      "梅竹黑客松在今年邁入第十二屆，我們定期在清大與交大兩校間辦理黑客松相關活動，致力搭起學生與企業之間的橋樑，學生運用企業資源並發揮潛力回應企業命題，同時企業方更提供實習機會，能讓學生進一步實踐創意發想。我們期待可以創造一個平台，讓任何人都可以享受想法的誕生與實作。",
    ],
    piece: 1,
  },
  {
    name: "MozTW 社群 / 摩茲工寮",
    description: [
      "MozTW 是台灣 Mozilla 愛好者的實體社群，設有網站提供相關軟體下載等服務，並負責維護 Mozilla 大部分軟體的正體中文版本與語言套件的在地化。摩茲工寮是 MozTW 為開放社群與活動所設計，也由社群共同管理的空間。",
    ],
    piece: 1,
  },
  {
    name: "HKCOTA x 香港開源年會",
    description: [
      "《香港創意開放科技協會》成立於 2014 年，致力向學生及在職人士推廣及教育開放文化、標準，自由及開放軟體、硬體、資料，以及 Creative Commons 《共享創意》概念及授權條款。而至今已經舉辦過 10 屆的《香港開源年會》既是一個年會，也是一個空間、平台，匯聚著香港和海外開源社群、開發者，以及各個界別的朋友，一同在年會中分享開發或使用開源、自由軟體，以及大家一路走來在開源自由領域的經驗。",
    ],
    piece: 1,
  },
  {
    name: "中部高中電資社團聯合會議",
    description: ["中部高中電資社團聯合會議"],
    piece: 1,
  },
  {
    name: "台灣敏捷協會",
    description: [
      "https://www.act.club.tw/",
      "台灣敏捷協會 Agile Community Taiwan 由一群敏捷志工與業界先驅發起，是內政部正式登記的社團法人協會，致力於提供並推廣敏捷價值、思維與務實導向理念，藉由推動敏捷文化引擎以驅動轉化、改善台灣這塊土地上的人們的生活、學習、社群、產業與經濟。",
    ],
    piece: 1,
  },
  {
    name: "COSCUP 開源人年會",
    description: [
      "COSCUP 是由台灣開放原始碼社群聯合推動的年度研討會，起源於 2006 年，是台灣自由軟體運動 (FOSSM) 重要的推動者之一。活動包括有講座、攤位、社團同樂會等，除了邀請國際的重量級演講者之外，台灣本土的自由軟體推動者也經常在此發表演說，會議的發起人、工作人員與講者都是志願參與的志工。COSCUP 的宗旨在於提供一個聯結開放原始碼開發者、使用者與推廣者的平台。希望藉由每年一度的研討會，來推動自由及開放原始碼軟體 (FLOSS)。",
    ],
    piece: 1,
  },
  {
    name: "SITCON 學生計算機年會",
    description: [
      "學生計算機年會（Students’ Information Technology Conference）自 2013 年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。",
    ],
    piece: 1,
    link: "https://sitcon.org/",
  },
];
// 年會活動
const events: ActivityType[] = [
  {
    name: "靜態海報展",
    description: [
      "【參觀海報展，一起加入學術派對！】",
      "※ 活動說明：",
      "    。找到藏身於海報架中的 QR code，點開「掃描器」掃描，即可獲得拼圖獎勵。",
      "    。活動地點：2F 梯廳",
      "    。可獲拼圖數：1 塊",
    ],
    piece: 1,
  },
  {
    name: "咖啡廳",
    description: [
      "【一杯咖啡、一場邂逅。】",
      "※ 活動說明：",
      "    。找到藏身於咖啡廳中的 QR code，點開「掃描器」掃描，即可獲得拼圖獎勵。",
      "    。活動地點：2F 梯廳",
      "    。可獲拼圖數：1 塊",
    ],
    piece: 1,
  },
  {
    name: "導遊團（限時）",
    description: [
      "【跟著導遊團走透透！】",
      "※ 活動說明：",
      "    。在以下指定時間前 5 分鐘，於集合處找到拿著旗子的導遊…身旁的 SITCON 年會工作人員，點開「掃描器」掃描這位工人手上的 QR code，即可獲得拼圖獎勵。",
      "    。活動地點：",
      "          。早上 11 點整 - 3F 白板區旁牆壁",
      "          。下午 2 點 40 分 - 2F 靜態海報展現場",
      "    。可獲拼圖數：1 塊",
    ],
    piece: 1,
  },
  {
    name: "白板大戰",
    description: [
      "【在白板大戰留下巨作！】",
      "※ 活動說明：",
      "    。找到藏身於白板牆某處角落上的 QR code，點開「掃描器」掃描，即可獲得拼圖獎勵。",
      "    。活動地點：3F 白板牆留言區",
      "    。可獲拼圖數：1 塊",
    ],
    piece: 1,
  },
];
// bonus
const bonus: ActivityType[] = [
  {
    name: "開幕式",
    description: [
      "【迷因拼圖第一站新手村】",
      "※ 活動說明：",
      "    。在 SITCON 2024 年會開幕式中，主持人將帶領大家步入迷因拼圖新手村。您會於投影幕上找到專屬的 QR code，點開「掃描器」掃描此 QR code，即可獲得第一塊拼圖獎勵。",
      "    。活動地點：R0",
      "    。可獲拼圖數：1 塊",
    ],
    piece: 1,
  },
  {
    name: "打卡牆",
    description: [
      "【打卡賺 Double Bonus 獎勵！！】",
      "※ 活動說明：",
      "    。踩點各大 SITCON 2024 的年會特別活動，拍下您印象最深刻或最喜歡的內容，或跟他她它在打卡牆前來個美美的合照！",
      "    。將照片分享至任意社群平台，發文或限時動態，打卡標註 SITCON 2024，並於 13：00 後至 3F 議程組服務台找到工作人員進行驗證，出示您的 QR code 即可獲得 Bonus 拼圖獎勵！",
      "    。活動地點：整個年會會場",
      "    。可獲拼圖數：3 塊",
    ],
    piece: 3,
  },
  {
    name: "躲貓貓 ฅ^•ﻌ•^ฅ",
    description: [
      "｜д•´)!!",
      "※ 活動說明：    ",
      "    。想不到吧～年會的現場還藏有驚喜小彩蛋！快去找找其他拼圖在哪裡吧！",
      "        為保留其他會眾的遊戲體驗，不要聲張喔！噓～d('ε'〃)",
      "    。活動地點：整個年會會場",
      "    。可獲拼圖數：1 塊",
    ],
    piece: 1,
    hide: true,
  },
  {
    name: "躲貓貓 /ᐠ .ᆺ. ᐟ\\ﾉ",
    description: [
      "｜д•´)!!",
      "※ 活動說明： ",
      "    。想不到吧～年會的現場還藏有驚喜小彩蛋！快去找找其他拼圖在哪裡吧！",
      "        為保留其他會眾的遊戲體驗，不要聲張喔！噓～d('ε'〃)",
      "    。活動地點：整個年會會場",
      "    。可獲拼圖數：1 塊",
    ],
    piece: 1,
    hide: true,
  },
  {
    name: "躲貓貓 ▼・ᴥ・▼",
    description: [
      "｜д•´)!!",
      "※ 活動說明： ",
      "    。想不到吧～年會的現場還藏有驚喜小彩蛋！快去找找其他拼圖在哪裡吧！",
      "        為保留其他會眾的遊戲體驗，不要聲張喔！噓～d('ε'〃)",
      "    。活動地點：整個年會會場",
      "    。可獲拼圖數：1 塊",
    ],
    piece: 1,
    hide: true,
  },
  {
    name: "躲貓貓 (o･e･)",
    description: [
      "｜д•´)!!",
      "※ 活動說明： ",
      "    。想不到吧～年會的現場還藏有驚喜小彩蛋！快去找找其他拼圖在哪裡吧！",
      "        為保留其他會眾的遊戲體驗，不要聲張喔！噓～d('ε'〃)",
      "    。活動地點：整個年會會場",
      "    。可獲拼圖數：1 塊",
    ],
    piece: 1,
    hide: true,
  },
  {
    name: "躲貓貓 (^._.^)ﾉ",
    description: [
      "｜д•´)!!",
      "※ 活動說明： ",
      "    。想不到吧～年會的現場還藏有驚喜小彩蛋！快去找找其他拼圖在哪裡吧！",
      "        為保留其他會眾的遊戲體驗，不要聲張喔！噓～d('ε'〃)",
      "    。活動地點：整個年會會場",
      "    。可獲拼圖數：1 塊",
    ],
    piece: 1,
    hide: true,
  },
  {
    name: "躲貓貓 (＾• ω •＾)",
    description: [
      "｜д•´)!!",
      "※ 活動說明： ",
      "    。想不到吧～年會的現場還藏有驚喜小彩蛋！快去找找其他拼圖在哪裡吧！",
      "        為保留其他會眾的遊戲體驗，不要聲張喔！噓～d('ε'〃)",
      "    。活動地點：整個年會會場",
      "    。可獲拼圖數：1 塊",
    ],
    piece: 1,
    hide: true,
  },
  {
    name: "躲貓貓 (✪ω✪)",
    description: [
      "｜д•´)!!",
      "※ 活動說明： ",
      "    。想不到吧～年會的現場還藏有驚喜小彩蛋！快去找找其他拼圖在哪裡吧！",
      "        為保留其他會眾的遊戲體驗，不要聲張喔！噓～d('ε'〃)",
      "    。活動地點：整個年會會場",
      "    。可獲拼圖數：1 塊",
    ],
    piece: 1,
    hide: true,
  },
  {
    name: "躲貓貓 ʕง•ᴥ•ʔง",
    description: [
      "｜д•´)!!",
      "※ 活動說明： ",
      "    。想不到吧～年會的現場還藏有驚喜小彩蛋！快去找找其他拼圖在哪裡吧！",
      "        為保留其他會眾的遊戲體驗，不要聲張喔！噓～d('ε'〃)",
      "    。活動地點：整個年會會場",
      "    。可獲拼圖數：1 塊",
    ],
    piece: 1,
    hide: true,
  },
  {
    name: "躲貓貓 ( Ꙭ)",
    description: [
      "｜д•´)!!",
      "※ 活動說明： ",
      "    。想不到吧～年會的現場還藏有驚喜小彩蛋！快去找找其他拼圖在哪裡吧！",
      "        為保留其他會眾的遊戲體驗，不要聲張喔！噓～d('ε'〃)",
      "    。活動地點：整個年會會場",
      "    。可獲拼圖數：1 塊",
    ],
    piece: 1,
    hide: true,
  },
  {
    name: "躲貓貓 |•'-'•) ✧",
    description: [
      "｜д•´)!!",
      "※ 活動說明： ",
      "    。想不到吧～年會的現場還藏有驚喜小彩蛋！快去找找其他拼圖在哪裡吧！",
      "        為保留其他會眾的遊戲體驗，不要聲張喔！噓～d('ε'〃)",
      "    。活動地點：整個年會會場",
      "    。可獲拼圖數：1 塊",
    ],
    piece: 1,
    hide: true,
  },
  {
    name: "躲貓貓 (〃'▽'〃)",
    description: [
      "｜д•´)!!",
      "※ 活動說明： ",
      "    。想不到吧～年會的現場還藏有驚喜小彩蛋！快去找找其他拼圖在哪裡吧！",
      "        為保留其他會眾的遊戲體驗，不要聲張喔！噓～d('ε'〃)",
      "    。活動地點：整個年會會場",
      "    。可獲拼圖數：1 塊",
    ],
    piece: 1,
    hide: true,
  },
];

export const activities = [booths, events, bonus];
