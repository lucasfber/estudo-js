  const login = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('login promise');
    }, 1200);
  });

  const getDados = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('getDados promise');
    }, 1000);
  });

  const promises = Promise.race([login, getDados]);
  promises.then((result) => {
    console.log('Primeira promise a ser resolvida: ', result);
  })