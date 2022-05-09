class HLOCache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage;
  }

  setItem(key, value) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value));
    }
  }

  getItem(key) {
    let value = this.storage.getItem(key);
    if (value) {
      value = JSON.parse(value);
      return value;
    }
  }

  removeItem(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

const localCache = new HLOCache();
const sessionCache = new HLOCache(false);

export { localCache, sessionCache };
