import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "Node pyODBC",
  tagline: "A simple way to connect to databases using the ODBC protocol",
  favicon: "img/favicon.ico",
  future: {
    v4: true,
  },
  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",
  organizationName: "Yuri-Chaves",
  projectName: "node-pyodbc",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-BR"],
    localeConfigs: {
      en: {
        label: "English",
        htmlLang: "en-US",
        direction: "ltr",
      },
      "pt-BR": {
        label: "Português",
        htmlLang: "pt-BR",
        direction: "ltr",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/social-card.jpg",
    navbar: {
      title: "Node pyODBC",
      logo: {
        alt: "Node pyODBC",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Getting Started",
        },
        {
          href: "https://github.com/Yuri-Chaves/node-pyodbc",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "ODBC Client",
              to: "/docs/category/client",
            },
            {
              label: "Select",
              to: "/docs/dml/select",
            },
            {
              label: "Insert",
              to: "/docs/dml/insert",
            },
            {
              label: "Update",
              to: "/docs/dml/update",
            },
            {
              label: "Delete",
              to: "/docs/dml/delete",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/yuri-chaves-330612214/",
            },
            {
              label: "Email",
              href: "mailto:Yuri.Chaves39@hotmail.com",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Yuri-Chaves",
            },
          ],
        },
      ],
      copyright: `Copyright © 2025 Yuri Chaves. Built with 💚.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
