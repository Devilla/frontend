export function validatewebsite(website){
  /* eslint-disable */
  var re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  /* eslint-disable */
  return re.test(website);
}

export function validatePath(path){
  var re = /\//;
  return re.test(path);
}

export function validphone(phone){
  var re = /^(\+[\d]{1,5}|0)?[7-9]\d{9}$/;
  return re.test(phone);
}

export function validateemail(email){
  /* eslint-disable */
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  /* eslint-disable */
  return re.test(email);
}
export function getCookie(cname) {
  const cookie = localStorage.getItem(cname);
  const authToken = cookie?JSON.parse(cookie):null;
  return authToken.token;
}
