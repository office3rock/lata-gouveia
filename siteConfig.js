module.exports = {
  siteUrl: "https://lata-gouveia.com", // Site domain. Do not include a trailing slash!

  postsPerPage: 12, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

  siteTitleMeta: "lata-gouveia", // This allows an alternative site title for meta data for pages.
  siteDescriptionMeta:
    "utnupes", // This allows an alternative site description for meta data for pages.

  shareImageWidth: 1000, // Change to the width of your default share image
  shareImageHeight: 523, // Change to the height of your default share image

  shortTitle: "lata-gouveia", // Used for App manifest e.g. Mobile Home Screen
  siteIcon: "favicon.png", // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: "#e9e9e9", // Used for Offline Manifest
  themeColor: "#15171A", // Used for Offline Manifest
  apiUrl: "https://reshet.jetdomains.co.il/lata-gouveia",
  subscribeWidget: {
    visible: false,
    title: "lata-gouveia",
    helpText: "Keep following",
    successMessage: "Thank you The message was sent successfully",
  },
  header: {
    navigation: [
      {
        label: "Homepage",
        url: "https://lata-gouveia.com/",
      },
      {
        label: "Contact",
        url: "https://lata-gouveia.com/contact",
      },
    ],
  },
  footer: {
    copyright: "All rights reserved ",
    navigation: [
      {
        label: "Homepage",
        url: "https://lata-gouveia.com/",
      },
      {
        label: "Sitemap",
        url: "https://lata-gouveia.com/sitemap.xml",
      },
      
      {
        label: "Contact",
        url: "https://lata-gouveia.com/contact",
      },
      
    ],
  },
  socialLinks: {
    twitter: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    github: "",
    pinterest: "",
    youtube: "",
    dribbble: "",
    behance: "",
    externalLink: "",
    whatsapp: "",
  },
  contactWidget: {
    title: "Contact Us",
    successMessage: "We’ll get in touch with you soon.",
  },
  metadata: {
    title: "lata-gouveia",
    description:
      "lata-gouveia",
  },
  twitterCard: {
    title: "",
    description:
      "",
    imageUrl: "twitterImage.png",
    username: "@DraftboxHQ",
  },
  facebookCard: {
    title: "utnupes",
    description:
      "Lightning fast, built on Gatsby.",
    imageUrl: "facebookImage.png",
    appId: "2391725224459953",
  },
  siteTitle: "lata-gouveia",
  siteDescription:
    "lata-gouveia",
  language: "he",
  logoUrl: "",
  iconUrl: "",
  coverUrl: "cover.jpg",
  alternateLogoUrl: "",
  themeConfig: {
    variables: [
      {
        varName: "--primary-color",
        value: `#2b6cb0`,
      },
      {
        varName: "--primary-color-active",
        value: `#2a4365`,
      },
      {
        varName: "--primary-color-light",
        value: `#bee3f8`,
      },
      {
        varName: "--sans-font",
        value: `"Assistant"`,
      },
      {
        varName: "--sans-font-normal",
        value: `400`,
      },
      {
        varName: "--sans-font-medium",
        value: `500`,
      },
      {
        varName: "--sans-font-semibold",
        value: `600`,
      },
      {
        varName: "--sans-font-bold",
        value: `700`,
      },
      {
        varName: "--serif-font",
        value: `Assistant`,
      },
      { varName: "--serif-font-light", value: `400` },
      { varName: "--serif-font-normal", value: `400` },
      { varName: "--serif-font-medium", value: `400` },
      { varName: "--serif-font-bold", value: `700` },
    ],
    fonts: [
      {
        family: "Assistant",
        variants: ["300", "400", "500", "600", "700"],
        fontDisplay: "swap",
        strategy: "selfHosted",
      },
    ],
        fontDisplay: "swap",
        strategy: "selfHosted",
      },
    ],
  },
};
