import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Everest Phone",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "umami",
      host: "https://cloud.umami.is/script.js",
      websiteId: "eaa3d864-e013-4de9-b4b4-02ff6737416b"
    },
    locale: "en-US",
    baseUrl: "lithos-labs.github.io/everest-phone",
    ignorePatterns: ["private", "templates", ".obsidian", ".trash"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: "JetBrains Mono",
        header: "Roboto Mono",
        body: "Noto Sans",
        code: "JetBrains Mono",
      },
      colors: {
        // From the Catppuccin colortheme
        // Catppuccin late
        lightMode: {
          light: "#eff1f5", // Background - Base
          lightgray: "#9ca0b0", // Borders - Overlay 0
          gray: "#7c7f93", // Heavier borders, graph links - Overlay 2
          darkgray: "#4c4f69", // Body text - Text
          dark: "#1e66f5", // Header text, icons - Blue
          secondary: "#5c5f77", // Link color, current graph node - Subtext 1
          tertiary: "#209fb5", // Hover, visited graph nodes - Sapphire
          highlight: "rgba(10, 102, 245, 0.15)", // Link background, highlighted text - Blue
          textHighlight: "#40a02b", // Mardkown highlight - Green
        },
        // Catpuccin Machiato
        darkMode: {
          light: "#24273a", // Background - Base
          lightgray: "#6e738d", // Borders - Overlay 0
          gray: "#939ab7", // Heavier borders, graph links - Overlay 2
          darkgray: "#cad3f5", // Body text - Text
          dark: "#8aadf4", // Header text, icons - Blue
          secondary: "#b8c0e0", // Link color, current graph node - Subtext 1
          tertiary: "#7dc4e4", // Hover, visited graph nodes - Sapphire
          highlight: "rgba(138, 173, 244, 0.2)", // Link background, highlighted text - Blue
          textHighlight: "#a6da95", // Markdown highlight - Green
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      /*
      Plugin.CustomOgImages({
        colorScheme: "darkMode"
      }),
      */
    ],
  },
}

export default config
