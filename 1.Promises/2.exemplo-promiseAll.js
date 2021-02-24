  const login = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('login promise');
    }, 1200);
  });

  const getDados = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('getDados promise');
    }, 1500);
  });

  const promises = Promise.all([login, getDados]);
  promises.then((result) => {
    console.log('PromiseResult', result);
  });