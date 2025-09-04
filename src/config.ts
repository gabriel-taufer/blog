export const SITE = {
  website: "https://blog.taufer.dev",
  author: "Gabriel Taufer",
  title: "When Things Break",
  desc: "Engineering notes and playbooks. Things I think about.",
  ogImage: "https://taufer.dev/profile_pic_small.jpeg",
  keywords: ["Gabriel Taufer", "Engineering", "Integrations", "Data", "AWS"],
  lightAndDarkMode: true,
  timezone: "America/Sao_Paulo",
  profile: "https://satnaing.dev/",
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
