
export async function getAnimalApi(name)
{
    const response = await fetch('https://api.api-ninjas.com/v1/animals?name=' + name, { headers: { 'X-API-Key': 'WpIFBIs/ZM6FvOzSu9rrwA==KLQWHR72J7MFC9Jh' } }); 
    const data = await response.json()
    return data[0];
}

export async function getData(url) {
    const response = await fetch(url);
    const data = await convertToJson(response);
    return data;
}

export function convertToJson(res) {
    const jsonResponse = res.json();
    if (res.ok) {
      return jsonResponse;
    } else {
      throw { name: "services error", message: jsonResponse };
    }
}

export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const animal = urlParams.get(param);
    return animal;
}

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
  
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}