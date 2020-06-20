fetch("https://hotels4.p.rapidapi.com/get-meta-data", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "hotels4.p.rapidapi.com",
    "x-rapidapi-key": "5c18953847mshd964d2d89082277p1b81bfjsn54c2059916a0",
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
