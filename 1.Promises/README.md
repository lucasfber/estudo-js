# Promises

 1. O construtor de uma Promise recebe uma `function callback`

 2. Funções/Métodos retornam promises. Ex:  metódos `mongoose: create, find, update` etc.

 3. Metódos/funções de bibliotecas para requisição http (**fetch, axios**), disparam a resolve(resultado) quando a requisição retorna status code `200` ou lançam a reject quando ocorre algum erro (`404, 500, 400`).
 4. os usuários de tais libs (**fetch(url)**,  **axios.get()**) que retornam Promises, só vão se preocupar com o que deve acontecer no `then()` ou tratar algum erro no `catch()`
 5. **LEMBRAR QUE**: quando a função `resolve()` é chamada, o `then()` é executado.
 6. **LEMBRAR QUE**: apenas o `resolve()` ou o `reject()` será executado.
 7. O parâmetro passado pra função `resolve(algumDado)` e `reject(Erro("Um erro ocorreu"))` é o que vai ser disponível no `then` (result) e no `catch` (err)
 8. `PromiseStatus` = `pending, resolved, fulfilled`
9. `PromiseValue` = o valor passado pro `then`  
10. O que você retornar no then() é passado como parâmetro pro segundo, terceiro, etc. [Ver exemplo](https://github.com/lucasfber/estudo-js/blob/master/1.Promises/3.exemplo-multiple-then.js)
11. O `finally` sempre será executado independente da promise ter caído no `then` ou no `catch`
```javascript
	.finally(() => {
		//faz algo
	 })
```
12. O then aceita tanto a função pra tratar o resutado, como a `reject` pra lidar com o erro:
```javascript
	then(() => {
		// faz algo
	},(err) => {
		// trata erro
	})// then
```

## Exemplo Simulando operações de um DB usando Promises:
[exemplo-db-promises.js](https://github.com/lucasfber/estudo-js/blob/master/1.Promises/1.exemplo-db-promises.js "Exemplo Database using Promises")

## LEMBRAR QUE: só faz sentido vc usar Promise se o código for assíncrono

```javascript 
const getRandomNumber = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const n = Math.ceil(Math.random() * 100);
			if (n % 2 === 0) resolve(n);
			else reject(Error('Não foi possível executar a operação!'));
		}, 2500);
	});
};

const promise = getRandomNumber();
promise
	.then((result) => console.log(result))//an odd number
	.catch((err) => {
		if (err) console.log('Um erro ocorreu!');
	});
```

## Promise.all([promise1, promise2])
Recebe como parâmetro um `array de promises`, retorna uma `promise` que tem no `PromiseResult` *um array com o que é passado no resolve() de cada promise.* Só retorna a promise de retorno quando todas as promises são **resolvidas** ou alguma é **rejeitada**

```javascript
const login = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('login promise');
	}, 1200);
});

const getData = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('getData promise');
	}, 1500);
});

const promises = Promise.all([login, getDados]);
promises.then((result) => {
	//PromiseResult (2) ["login promise", "getDados promise"]
	console.log('PromiseResult', result);
});
```

## Promise.race([promise1, promise2])
Recebe como parâmetro um `array de promises`, retorna a primeira `promise` que for 
```javascript
const login = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('login promise');
	}, 1500);
});

const getData = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('getData promise');
	}, 1200);
});

const promises = Promise.race([login, getDados]);
promises.then((result) => {
	//Primeira promise a ser resolvida: getData promise
	console.log('Primeira promise a ser resolvida: ', result);
});
```
