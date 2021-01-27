const BASE_URL = 'https://api.diploma-rama.students.nomoredomains.monster';

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password, name})
  })
  .catch((err) => console.log(err));
}

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .catch((err) => console.log(err));
}

export const logout = (email, password) => {
  return fetch(`${BASE_URL}/logout`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .catch((err) => console.log(err));
}

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  })
  .catch((err) => console.log(err));
}

export const saveArticle = (article) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(article)
  })
  .then(res => res.json())
  .catch((err) => console.log(err));
}

export const getArticles = () => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'GET',
    credentials: 'include'
  })
  .then(res => res.json())
  .catch((err) => console.log(err));
}

export const deleteArticles = (articleID) => {
  return fetch(`${BASE_URL}/articles/${articleID}`, {
    method: 'DELETE',
    credentials: 'include'
  })
  .then(res => res.json())
  .catch((err) => console.log(err));
}

