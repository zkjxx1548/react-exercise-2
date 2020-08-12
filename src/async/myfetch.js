async function fetchData() {
  const url = 'http://localhost:3004/products';
  const xhr = await fetch(url, { method: 'GET' });
  const xhrJsonArray = await xhr.json();
  return xhrJsonArray;
  // document.write(xhrJson[0].price);
}

// fetchData();
export default fetchData;
