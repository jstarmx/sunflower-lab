type UserData = {
  name?: string;
};

type UserModel = {
  _data: UserData;
  loading: boolean;
  error: string;
};

class User implements UserModel {
  _data = {};
  loading = true;
  error = '';

  constructor() {
    if (typeof localStorage !== 'undefined') {
      const data = localStorage.getItem('user');

      if (data) {
        try {
          this._data = JSON.parse(data);
          this.loading = false;
        } catch (error) {
          this.error = error.message;
        }
      }
    }
  }

  set(data: UserData) {
    this._data = { ...this._data, ...data };
    return this;
  }

  get(key: string) {
    return this._data[key];
  }

  get attributes(): UserData {
    return this._data;
  }

  save() {
    localStorage.setItem('user', JSON.stringify(this._data));
    return this;
  }
}

export default new User();
