/* simulando o uso de um ODM, ex: mongoose (promises) */
const DATABASE = {
  db: [],

  save(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data._id = new Date().getMilliseconds();
        this.db.push(data);
        resolve(data);
      }, 1500);
    });
  },

  get() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.db);
      }, 1600);
    });
  },
};

let student = {};
DATABASE.save({ name: 'Joe', course: 'Science Computer' }).then((result) => {
  student = result;
  console.log('STUDENT NO THEN', student);
});

DATABASE.save({ name: 'Bill', course: 'Arts' }).then((result) => {
  console.log('STUDENT NO THEN', result);
});

/* SIMULANDO O USO DO METODO GET DE UM DATABASE */
let dataFromDb = [];
DATABASE.get().then((result) => {
  dataFromDb = result;
  console.log('dataFromDb', dataFromDb);
});
