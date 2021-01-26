import dateFormat from 'dateformat';



export const getUserInfo = (searchQuery) => {
  let newsApiUrl = new URL ('https://newsapi.org/v2/top-headlines')
  const todayDate = new Date();
  const today = dateFormat(todayDate, 'yyyy-mm-dd');

  const MILLIS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;
  const weekAgoDate = new Date(todayDate.getTime() - MILLIS_PER_WEEK);
  const weekAgo = dateFormat(weekAgoDate, 'yyyy-mm-dd');

  let params = {
    q: searchQuery,
    country: 'ru',
    from: weekAgo,
    to: today,
    pageSize: 100,
    apiKey: 'd57a33d498ca4b85a2333095911868a1'
  }

  Object.keys(params).forEach(key => newsApiUrl.searchParams.append(key, params[key]));

  return fetch(newsApiUrl, {
    method: 'GET'
  })
  .then(res => {
    return res.json()
  })
  .catch((err) => console.log(err));
}