const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'Lucas'});
  }, 1200);
});

promise
  .then(result => {
    /* { name: 'Lucas' } */
    console.log(result)
    result.country = "Brazil"
    return result
  })
  .then(data => {
    /* { name: 'Lucas', country: 'Brazil' } */
    console.log(data)
  })


