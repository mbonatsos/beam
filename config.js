window.SPOTLIGHT_CONFIG = {
  themeKey: "spotlight_launcher_theme_v1",
  appsStorageKey: "spotlight_launcher_apps_v1",
  envGroups: [
    { key: "production", label: "Production", tags: ["production", "prod", "prd"] },
    { key: "staging", label: "Staging", tags: ["staging", "stg"] }
  ],
  ungroupedKey: "ungrouped",
  ungroupedLabel: "",
  maxUrlDisplayLength: 84,
  maxTagsPerResult: 8,
  mouseShortcuts: [],
  showEnterHintByDefault: false,
  showShortcutsByDefault: true,
  lightThemeEasterEggs: [
    "./assets/easter-eggs/light-theme-1.png"
  ],
  queryPlaceholder: "Beam",
  enterHint: "Type 3+ characters. Enter opens top result. Tab starts action mode.",
  actionModeHint: "Action mode: type {param} and press Enter",
  actionModePlaceholder: "Type {param}",
  actionModeExitHint: "Tab or Esc exits",
  emptyStateHtml: "No apps found.<br/>Try broader terms, or use filters like <code>tag:stg</code>."
};
