/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.post('/login', 'LoginController.login')
  Route.post('/logout', 'LoginController.logout')
  Route.post('/register', 'UsersController.store')
  Route.get('/register', 'UsersController.index')
  Route.get('/register/:email', 'UsersController.show')
  Route.get('/store2', 'UsersController.store2')
  Route.post('/join', 'UsersController.joinGame')

  
})



// Importa las dependencias necesarias

// Importa las dependencias necesarias

// const sleep = require('util').promisify(setTimeout)

// // Define las constantes del juego
// const NUM_PLAYERS = 2

// // Crea una lista de espera para los jugadores
// //let waitingPlayers = [] de tipo string
// let waitingPlayers: (string | number)[] = [];


// let games = {};

// Route.post('/game/wait', async ({ request, response }) => {
//   const playerName = request.input('playerName');
//   waitingPlayers.push(playerName);
//   response.status(200).send(`Jugador ${playerName} agregado a la cola de espera.`);

//   const waitForGameStart = async () => {
//     return new Promise(resolve => {
//       const checkForGameStart = async () => {
//         if (waitingPlayers.length >= 2) {
//           const player1 = waitingPlayers.shift();
//           const player2 = waitingPlayers.shift();
//           const gameId = Math.floor(Math.random() * 1000);  // Genera un ID único para el juego
//           games[gameId] = { player1, player2 }; // Asigna los jugadores al juego correspondiente
//           resolve(gameId); // Devuelve el ID del juego a los jugadores
//         } else {
//           setTimeout(checkForGameStart, 1000);
//         }
//       };
//       checkForGameStart();
//     });
//   };

//   const gameId = await waitForGameStart();

//   response.status(200).send(`¡Juego iniciado! ID del juego: ${gameId}`);
// });

// Route.post('/game/play', async ({ request, response }) => {
//   const gameId = request.input('gameId');
//   const playerName = request.input('playerName');
  
//   const game = games[gameId];
//   if (!game) {
//     response.status(404).send('El juego no existe.');
//     return;
//   }
//   const { player1, player2 } = game;
//   if (playerName !== player1 && playerName !== player2) {
//     response.status(403).send('No estás en este juego.');
//     return;
//   }
//   // Realiza la jugada en el tablero correspondiente al juego
//   // Devuelve el estado del tablero a los dos jugadores
// });


