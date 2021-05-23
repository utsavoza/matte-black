var currentTheme = '';

const themes = {
  'dark': {
    colors: {
      // frame
      frame: 'rgba(20, 21, 24, 1)',
      frame_inactive: 'rgba(30, 31, 34, 1)',

      // tabs
      tab_text: 'rgba(235, 235, 235, 1)',
      tab_background_text: 'rgba(170, 170, 170, 1)',
      tab_line: 'rgba(20, 21, 24, 1)',
      tab_loading: 'rgba(64, 65, 68, 1)',
      tab_selected: 'rgba(64, 65, 68, 1)',

      // toolbar
      toolbar: 'rgba(50, 51, 54, 1)',
      toolbar_top_separator: 'rgba(50, 51, 54, 1)',
      toolbar_bottom_separator: 'rgba(30, 31, 34, 1)',
      toolbar_vertical_separator: 'rgba(50, 51, 54, 1)',
      toolbar_field: 'rgba(30, 31, 34, 1)',
      toolbar_field_text: 'rgba(235, 235, 235, 1)',
      toolbar_field_border: 'rgba(30, 31, 34, 1)',
      toolbar_field_separator: 'rgba(30, 31, 34, 1)',
      toolbar_field_focus: 'rgba(30, 31, 34, 1)',
      toolbar_field_border_focus: 'rgba(28, 143, 164, 0.95)',

      // buttons
      button_background_hover: 'rgba(255, 255, 255, 0.12)',
      button_background_active: 'rgba(255, 255, 255, 0.15)',

      // icons
      icons: 'rgba(235, 235, 235, 1)',
      bookmark_text: 'rgba(200, 200, 200, 1)',

      // popup
      popup: 'rgba(30, 31, 34, 1)',
      popup_text: 'rgba(200, 200, 200, 1)',
      popup_border: 'rgba(30, 31, 34, 1)',
      popup_highlight: 'rgba(50, 51, 54, 1)',
      popup_highlight_text: 'rgba(235, 235, 235, 1)',

      // new tab page
      ntp_background: 'rgba(50, 51, 54, 1)',
      ntp_text: 'rgba(240, 240, 240, 1)',

      // sidebar
      sidebar: 'rgba(53, 54, 58, 1)',
      sidebar_text: 'rgba(200, 200, 200, 1)',
      sidebar_border: 'rgba(41, 42, 45, 1)',
      sidebar_highlight: 'rgba(41, 42, 45, 1)',
      sidebar_highlight_text: 'rgba(200, 200, 200, 1)'
    }
  },
  'light': {
    colors: {
      frame: '#fff',
      tab_background_text: '#000',
    }
  },
};

function setTheme(theme) {
  if (currentTheme !== theme) {
    currentTheme = theme;
    browser.theme.update(themes[theme]);
  }
}

function checkSystemTheme() {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
      if (event.matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    });
}

checkSystemTheme();
