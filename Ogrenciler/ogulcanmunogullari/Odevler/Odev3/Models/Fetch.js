class Fetch {
 constructor(url) {
  this.url = url;
 }
 async get(param, id = '') {
  const fullUrl = `${this.url}/${param}/${id}`;
  const RESPONSE = await fetch(fullUrl);
  const DATA = await RESPONSE.json();
  return DATA;
 }
 async post(param, data) {
  const fullUrl = `${this.url}/${param}`;
  const RESPONSE = await fetch(fullUrl, {
   method: 'POST',
   headers: {
    'Content-type': 'application/json',
   },
   body: JSON.stringify(data),
  });
  if (RESPONSE.status === 201) {
   return true;
  }
  return false;
 }
 // async put(param, id, data) {
 //  const fullUrl = `${this.url}/${param}/${id}`;
 //  const RESPONSE = await fetch(fullUrl, {
 //   method: 'PUT',
 //   headers: {
 //    'Content-type': 'application/json',
 //   },
 //   body: JSON.stringify(data),
 //  });
 //  if (RESPONSE.status === 200) {
 //   return true;
 //  }
 //  return false;
 // }
 async patch(param, id, data) {
  const fullUrl = `${this.url}/${param}/${id}`;
  const RESPONSE = await fetch(fullUrl, {
   method: 'PATCH',
   headers: {
    'Content-type': 'application/json',
   },
   body: JSON.stringify(data),
  });
 }

 async delete(param, id) {
  const fullUrl = `${this.url}/${param}/${id}`;
  const RESPONSE = await fetch(fullUrl, {
   method: 'DELETE',
   headers: {
    'Content-type': 'application/json',
   },
  });
  if (RESPONSE.status === 200) {
   return true;
  }
  return false;
 }
}

export default Fetch;
