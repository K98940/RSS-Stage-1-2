export const state = {};

export const loadConfig = async (path) => {
  try {
    const response = await fetch(path);
    const cfg = await response.json();

    state.errorLimit = cfg.errorLimit;
    state.questions = cfg.questions;
  } catch (error) {
    console.error('loadConfig:', error);
  }
};
