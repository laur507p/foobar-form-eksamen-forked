export function get(callback) {
  fetch("https://beers-37c9.restdb.io/rest/beers", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5fd544afff9d6706381404f5",
      "cache-control": "no-cache",
    },
  })
    .then((e) => e.json())
    .then((data) => callback(data));
}

export function getHerokuData(callback) {
  fetch("https://foobar-eksamen.herokuapp.com", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((e) => e.json())

    .then((data) => callback(data.taps));
}

// export function get(callback) {
//   fetch("https://beers-37c9.restdb.io/rest/beers", {
//     method: "get",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//       "x-apikey": "5fd544afff9d6706381404f5",
//       "cache-control": "no-cache",
//     },
//   })
//     .then((e) => e.json())
//     .then((data) => callback(data));
// }
export function post(payload) {
  fetch("https://foobar-eksamen.herokuapp.com/order", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  console.log("payload", payload);
}
