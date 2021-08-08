import Cookies from 'js-cookie';

class Cookie {
  static DEFAULT_OPTIONS = {
    path: '/',
    secure: window.location.protocol === 'https:',
    domain: window.location.hostname || '',
    expires: 365,
  };

  static set(key: string, value: string, options = {}) {
    return Cookies.set(key, value, {
      ...Cookie.DEFAULT_OPTIONS,
      ...options,
    });
  }

  static append<T>(key: string, value: T, options = {}) {
    const cookieValue = Cookie.get(key, '');

    if (cookieValue) {
      const cookieValueArray: T[] = JSON.parse(cookieValue);

      const cookieExist = cookieValueArray.some((cookie) => {
        return JSON.stringify(cookie) === JSON.stringify(value);
      });

      const mergeCookieValue = [...cookieValueArray, value];

      !cookieExist &&
        Cookie.set(key, JSON.stringify(mergeCookieValue), options);
    } else {
      Cookie.set(key, JSON.stringify([value]));
    }
  }

  static get<T>(key: string, defaultValue: T) {
    return Cookies.get(key) || defaultValue;
  }

  static getAll() {
    return Cookies.get();
  }

  static remove(key: string, options = {}) {
    return Cookies.remove(key, { ...Cookie.DEFAULT_OPTIONS, ...options });
  }
}

export default Cookie;
