export const StorageService = {
  setSession: (key: string, data: unknown) => {
    sessionStorage.setItem(key, JSON.stringify(data));
  },

  getSession: (key: string): unknown | null => {
    const data = sessionStorage.getItem(key);

    if (data && data !== 'undefined') {
      return JSON.parse(data);
    }

    return null;
  }
};

export default StorageService;
