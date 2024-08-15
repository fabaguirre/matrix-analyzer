const API_URL = import.meta.env.VITE_API_URL;

export const buildPath = (path: string) => `${API_URL}/${path}`;
