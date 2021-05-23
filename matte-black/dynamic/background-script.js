var currentTheme = "";

const themes = {
  "dark": {
    colors: {
      // frame
      frame: "rgba(20, 21, 24, 1)",
      frame_inactive: "rgba(30, 31, 34, 1)",

      // tabs
      tab_text: "rgba(235, 235, 235, 1)",
      tab_background_text: "rgba(170, 170, 170, 1)",
      tab_line: "rgba(10, 11, 14, 0.50)",
      tab_loading: "rgba(64, 65, 68, 1)",
      tab_selected: "rgba(64, 65, 68, 1)",

      // toolbar
      toolbar: "rgba(50, 51, 54, 1)",
      toolbar_top_separator: "rgba(50, 51, 54, 1)",
      toolbar_bottom_separator: "rgba(30, 31, 34, 1)",
      toolbar_vertical_separator: "rgba(50, 51, 54, 1)",
      toolbar_field: "rgba(30, 31, 34, 1)",
      toolbar_field_text: "rgba(200, 200, 200, 1)",
      toolbar_field_border: "rgba(30, 31, 34, 1)",
      toolbar_field_separator: "rgba(30, 31, 34, 1)",
      toolbar_field_focus: "rgba(30, 31, 34, 1)",
      toolbar_field_border_focus: "rgba(28, 143, 164, 0.95)",

      // buttons
      button_background_hover: "rgba(255, 255, 255, 0.12)",
      button_background_active: "rgba(255, 255, 255, 0.15)",

      // icons
      icons: "rgba(200, 200, 200, 1)",
      bookmark_text: "rgba(200, 200, 200, 1)",

      // popup
      popup: "rgba(41, 42, 45, 1)",
      popup_text: "rgba(200, 200, 200, 1)",
      popup_border: "rgba(20, 21, 24, 0.50)",
      popup_highlight: "rgba(50, 51, 54, 1)",
      popup_highlight_text: "rgba(235, 235, 235, 1)",

      // new tab page
      ntp_background: "rgba(50, 51, 54, 1)",
      ntp_text: "rgba(240, 240, 240, 1)",

      // sidebar
      sidebar: "rgba(53, 54, 58, 1)",
      sidebar_text: "rgba(200, 200, 200, 1)",
      sidebar_border: "rgba(41, 42, 45, 1)",
      sidebar_highlight: "rgba(41, 42, 45, 1)",
      sidebar_highlight_text: "rgba(200, 200, 200, 1)"
    }
  },
  "light": {
    colors: {
      // frame
      frame: "rgba(232, 233, 236, 1)",
      frame_inactive: "rgba(242, 243, 246, 1)",

      // tabs
      tab_text: "rgba(73, 74, 77, 1)",
      tab_background_text: "rgba(73, 74, 77, 1)",
      tab_line: "rgba(191, 192, 195, 1)",
      tab_loading: "rgba(73, 74, 77, 1)",
      tab_selected: "rgba(255, 255, 255, 1)",

      // toolbar
      toolbar: "rgba(255, 255, 255, 1)",
      toolbar_top_separator: "rgba(255, 255, 255, 1)",
      toolbar_bottom_separator: "rgba(218, 219, 222, 1)",
      toolbar_vertical_separator: "rgba(255, 255, 255, 1)",
      toolbar_field: "rgba(241, 242, 245, 1)",
      toolbar_field_text: "rgba(32, 33, 36, 1)",
      toolbar_field_border: "rgba(241, 242, 245, 1)",
      toolbar_field_focus: "rgba(255, 255, 255, 1)",
      toolbar_field_border_focus: "rgba(136, 176, 234, 0.95)",

      // buttons
      button_background_hover: "rgba(200, 201, 204, 0.42)",
      button_background_active: "rgba(200, 201, 204, 0.85)",

      // icons
      icons: "rgba(96, 97, 100, 1)",
      bookmark_text: "rgba(96, 97, 100, 1)",

      // popup
      popup: "rgba(255, 255, 255, 1)",
      popup_text: "rgba(32, 33, 36, 1)",
      popup_border: "rgba(191, 192, 195, 0.50)",
      popup_highlight: "rgba(246, 247, 250, 1)",
      popup_highlight_text: "rgba(32, 33, 36, 1)",

      // new tab page
      ntp_background: "rgba(255, 255, 255, 1)",
      ntp_text: "rgba(32, 33, 36, 1)",

      // sidebar
      sidebar: "rgba(255, 255, 255, 1)",
      sidebar_text: "rgba(32, 33, 36, 1)",
      sidebar_border: "rgba(218, 219, 222, 1)",
      sidebar_highlight: "rgba(216, 217, 220, 1)",
      sidebar_highlight_text: "rgba(32, 33, 36, 1)"
    }
  },
};

function setTheme(theme) {
  if (currentTheme !== theme) {
    currentTheme = theme;
    browser.theme.update(themes[theme]);
  }
}

function onChange(colorScheme) {
  if (colorScheme.matches) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

function checkSystemTheme() {
  var colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
  colorScheme.addEventListener("change", onChange);
  onChange(colorScheme);
}

checkSystemTheme();
