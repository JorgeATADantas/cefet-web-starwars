export async function friendlyFetch(url) {

  let cache = localStorage.getItem(url);
  if (cache !== null) {
    return JSON.parse(cache);
  }
  let resposta = await fetch(url);
  let json = await resposta.json();
  localStorage.setItem(url,JSON.stringify(json)  );

  return json;
}