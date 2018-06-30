export const base =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PRODUCTION_URL
    : process.env.NODE_ENV === 'staging'
      ? process.env.REACT_APP_STAGING_URL
      : process.env.REACT_APP_DEVELOPMENT_URL; // eslint-disable-line

const unAuthorizedUrl = ['plan', 'auth/forgot-password', 'auth/google/callback', 'auth/facebook/callback'];
// const getToken = state => state.getIn(['auth', 'token']);//state.auth.token;

// const base = `${base}`;

export const GET = (url) => {
  const authToken = JSON.parse(localStorage.getItem('authToken'));
  const token = authToken?authToken.token:null;
  let headers;
  if(unAuthorizedUrl.indexOf(url.split('?')[0]) >= 0)
    headers = {};
  else
    headers = {
      Authorization: `Bearer ${token}`
    };

  return fetch(base + url, {
    method: 'GET',
    headers: headers,
  })
    .then(res => res.json())
    .then(res => res);
};

export const GETAUTH = (url) => {
  return fetch(base + url, {
    method: 'GET',
    headers: {}
  })
    .then(res => res.json())
    .then(res => res);
};


export const GETFILE = (url) => {
  const authToken = JSON.parse(localStorage.getItem('authToken'));
  const token = authToken?authToken.token:null;
  return fetch(base + url, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })
    .then(res => res);
};

export const POST = (url, body) => {
  const authToken = JSON.parse(localStorage.getItem('authToken'));
  const token = authToken?authToken.token:null;
  let headers;

  if(unAuthorizedUrl.indexOf(url) >= 0)
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
  else
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

  return fetch(base + url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .then(res => res);
};

export const PUT = (url, body) => {
  const authToken = JSON.parse(localStorage.getItem('authToken'));
  const token = authToken?authToken.token:null;

  return fetch(base + url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .then(res => res);
};

export const DELETE = (url) => {
  const authToken = JSON.parse(localStorage.getItem('authToken'));
  const token = authToken?authToken.token:null;

  return fetch(base + url, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => res);
};

// TODO refactor
export const POSTFILE = (url, body) => {
  const authToken = JSON.parse(localStorage.getItem('authToken'));
  const token = authToken?authToken.token:null;

  return fetch(base + url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body,
  })
    .then(res => res.json())
    .then(res => res);
};
