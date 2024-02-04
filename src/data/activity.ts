export type ActivityType = {
  name: string;
  description?: string;
  link?: string;
  hide?: boolean;
};

// 攤位
const booths: ActivityType[] = [
  {
    name: "攤位一",
    description: "攤位一的描述",
    link: "https://sitcon.org/2024",
  },
  {
    name: "攤位二",
    description: "攤位二的描述",
    link: "https://sitcon.org/2024",
  },
  {
    name: "攤位三",
    description: "攤位三的描述",
    link: "https://sitcon.org/2024",
  },
  {
    name: "攤位四",
    description: "攤位四的描述",
    link: "https://sitcon.org/2024",
  },
  {
    name: "攤位五",
    description: "攤位五的描述",
    link: "https://sitcon.org/2024",
  },
  {
    name: "攤位六",
    description: "攤位六的描述",
    link: "https://sitcon.org/2024",
  },
  {
    name: "攤位七",
    description: "攤位七的描述",
    link: "https://sitcon.org/2024",
  },
  {
    name: "攤位八",
    description: "攤位八的描述",
    link: "https://sitcon.org/2024",
  },
  {
    name: "攤位九",
    description: "攤位九的描述",
    link: "https://sitcon.org/2024",
  },
  {
    name: "攤位十",
    description: "攤位十的描述",
    link: "https://sitcon.org/2024",
  },
];

// 年會活動
const events: ActivityType[] = [
  {
    name: "活動一",
    description: "活動一的描述",
  },
  {
    name: "活動二",
    description: "活動二的描述",
  },
  {
    name: "活動三",
    description: "活動三的描述",
  },
  {
    name: "活動四",
    description: "活動四的描述",
  },
  {
    name: "活動五",
    description: "活動五的描述",
  },
  {
    name: "活動六",
    description: "活動六的描述",
  },
  {
    name: "活動七",
    description: "活動七的描述",
  },
  {
    name: "活動八",
    description: "活動八的描述",
  },
  {
    name: "活動九",
    description: "活動九的描述",
  },
  {
    name: "活動十",
    description: "活動十的描述",
  }
];

const bonus: ActivityType[] = [
  {
    name: "開幕式",
    description: "開幕式的描述",
  },
  {
    name: "獎品一",
    description: "獎品一的描述",
  },
  {
    name: "獎品二",
    description: "獎品二的描述",
  },
  {
    name: "躲貓貓一",
    hide: true,
  },
  {
    name: "躲貓貓二",
    hide: true,
  },
  {
    name: "躲貓貓三",
    hide: true,
  },
];

export const activities = [booths, events, bonus];
