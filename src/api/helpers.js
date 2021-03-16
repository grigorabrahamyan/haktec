export function sendRequest(url, abort, dataType) {
  return fetch(`${process.env.REACT_APP_BASE_URL}${url}`, 
  { abort: abort ? abort : null }).then((data) => !dataType ? data.text() : data.json());
};
