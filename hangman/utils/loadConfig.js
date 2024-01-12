export const state = {};

export const loadConfig = async (path) => {
  try {
    const response = await fetch(path);
    const cfg = await response.json();
    Object.assign(state, cfg);
  } catch (error) {
    console.error('loadConfig:', error);
    console.error('error load config from', path);
  }
};
