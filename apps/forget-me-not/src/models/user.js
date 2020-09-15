class User {
  constructor() {
    this._data = {};

    if (typeof localStorage !== 'undefined') {
      const data = localStorage.getItem('user');
      if (data) {
        try {
          this._data = JSON.parse(data);
        } catch (error) {} // eslint-disable-line no-empty
      }
    }
  }

  set(data) {
    this._data = { ...this._data, ...data };
    return this;
  }

  get(key) {
    return this._data[key];
  }

  save() {
    localStorage.setItem('user', JSON.stringify(this._data));
  }
}

export default new User();
