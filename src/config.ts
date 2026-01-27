export const SITE = {
  website: "https://poorthoughts.com",
  author: "Gabriel Taufer",
  title: "Poor Thoughts",
  desc: "this is just me thinking, don't take it seriously",
  ogImage: "https://taufer.dev/profile_pic_small.jpeg",
  keywords: ["Gabriel Taufer", "Engineering", "Integrations", "Data", "AWS"],
  lightAndDarkMode: true,
  timezone: "America/Sao_Paulo",
  profile: "https://taufer.dev/",
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
} as const;
