export const mainTheme = {
  body: '#070219',
  container: '#2b202f',
  footer: '#070315',
  preview: '#1d1520cc',
};

export const secondaryTheme = {
  body: '#432a9e',
  container: '#262a54',
  footer: '#132752',
  preview: '#493b4e40',
};

export const primaryTheme = {
  body: '#171d0c',
  container: '#06150a',
  footer: '#111d10',
  preview: '#16271440',
};

export const lightTheme = {
  body: 'rgb(90 88 85)',
  container: 'rgb(64 64 64)',
  footer: 'rgb(60 59 64)',
  preview: '#5a5a5a7a',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...action.theme,
      };

    default:
      return state;
  }
};

export default reducer;