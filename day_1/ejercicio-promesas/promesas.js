const https = require('https');

//-----------------------PROMESAS ASINCRONAS ------------------------------

function promesaCodigoBanderas(){
  return new Promise((resolve, reject) => {
    setTimeout(resolve,1000, 'PRIMERA PROMESA')
      https.get('https://flagcdn.com/es/codes.json', (resp) => {
          let data = '';
          resp.on('data', (chunk) => {
              data += chunk;
          });
          resp.on('end', () => {
              resolve(JSON.parse(data));
          });
      }).on('error', (error) => {
          reject(error);
      });
  });
} 

function promesaTodosPost(){
  return new Promise((resolve, reject) => {
    setTimeout(resolve,3000, 'SEGUNDA PROMESA')
      https.get('https://jsonplaceholder.typicode.com/posts', (resp) => {
          let data = ''
          resp.on('data', (chunk) => {
              data += chunk;
          });
          resp.on('end', () => {
              resolve(JSON.parse(data));
          });
      }).on('error', (error) => {
          reject(error);
      });
  });
  
} 


function promesaObtenerPost(){
  return new Promise((resolve, reject) => {
    setTimeout(resolve,5000, 'TERCERA PROMESA')
      https.get('https://jsonplaceholder.typicode.com/posts/2', (resp) => {
          let data = '';
          resp.on('data', (chunk) => {
              data += chunk;
          });
          resp.on('end', () => {
              resolve(JSON.parse(data));
          });
      }).on('error', (error) => {
          reject(error);
      });
  });
} 

async function llamarProcesos(){
  let resultado1 = await promesaCodigoBanderas();
  let resultado2 = await promesaTodosPost();
  let resultado3 = await promesaObtenerPost();

  console.log(resultado1)
  console.log(resultado2)
  console.log(resultado3)
}

llamarProcesos();


/*--------------------------------FIN FUNCIONES ASINCRONAS --------------------------------------*/




/*----------------------------------PROMISE ALL ------------------------------------------------*/


/*
let promesaCodigoBanderas = new Promise((resolve, reject) => {
  setTimeout(resolve,1000, 'PRIMERA PROMESA')
    https.get('https://flagcdn.com/es/codes.json', (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            resolve(JSON.parse(data));
        });
    }).on('error', (error) => {
        reject(error);
    });
});
/*

/*
promesaCodigoBanderas.then(res =>{
    console.table(res);
}).catch (error =>{
    console.log('Error: ' + error)
})
*/

/*
let promesaTodosPost = new Promise((resolve, reject) => {
  setTimeout(resolve,3000, 'SEGUNDA PROMESA')
    https.get('https://jsonplaceholder.typicode.com/posts', (resp) => {
        let data = ''
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            resolve(JSON.parse(data));
        });
    }).on('error', (error) => {
        reject(error);
    });
});
/*

/*
promesaTodosPost.then(res =>{
    console.table(res);
}).catch (error =>{
    console.log('Error: ' + error)
})
*/

/*
let promesaObtenerPost = new Promise((resolve, reject) => {
  setTimeout(resolve,5000, 'TERCERA PROMESA')
    https.get('https://jsonplaceholder.typicode.com/posts/2', (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            resolve(JSON.parse(data));
        });
    }).on('error', (error) => {
        reject(error);
    });
});
*/

/*
promesaObtenerPost.then(res =>{
    console.table(res);
}).catch (error =>{
    console.log('Error: ' + error)
})
*/

//PROMISE ALL

//let promesas =  [promesaCodigoBanderas,promesaTodosPost,promesaObtenerPost]

/*
Promise.all(promesas).then(valores => {
  console.log(valores)
}, error => {
  console.log(error);
})
*/
/*
Promise.race(promesas).then(valor=>{
  console.log(valor)
},error=>{
  console.log(error)
})
*/



