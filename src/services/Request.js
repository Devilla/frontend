/**
 * A service to make REST API calls to server
 *
 */

const TOKEN_DEFAULT_EXPIRY_TIME = 24; // in hours

// Add the token to local storage
const storeToken = (token, expireInHours) => {
  // if token string is empty return false
  if (!token.trim()) return false;

  if (!expireInHours)
    expireInHours = TOKEN_DEFAULT_EXPIRY_TIME;

  // Current date plus given hours
  const expiresOn = Date.now() + (expireInHours + (60 * 60 * 1000));

  // else store token and expiry time in localstorage and return true
  localStorage.setItem('authToken', JSON.stringify({
    token,
    expiresOn
  }));

  return true;
};

// Check for Authentication (if noAuth is not set) and make Request using given method, url and body
const _makeRequest = (method = 'GET', url, body, noAuth = false) => {
  // Check for token unless noAuth is true
  return new Promise((resolve) => {
    resolve();
  }).then(token => {
    const headers = new Headers({ 'Content-Type': 'application/json' });

    if(body !== undefined)
      body = JSON.stringify(body);

    // Pass token in header if 'noAuth' is not true
    if (noAuth !== true)
      headers.Authorization = token;
    return fetch(url, {
      headers,
      body,
      method
    }).then(res =>
      res.json()    // return json response
    );
  });
};

// POST Request
const POST = (url, body, noAuth) => _makeRequest('POST', url, body, noAuth);

// Export the functions
export { POST, storeToken };
