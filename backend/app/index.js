const express = require('express');

const GenerationEngine = require('./generation/engine');

const dragonRouter = require('./api/dragon')
const generationRouter = require('./api/generation');



//This calls the express function
const app = express();

//New instance called engine
const engine = new GenerationEngine();


//using app.locals binds the object with the express framework
app.locals.engine = engine;

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

engine.start();





module.exports = app;
//This setTimeout stops once it reaches 20 seconds
// setTimeout(() => {

//   engine.stop();
// },20000)


// const Generation = require('./generation');

// const generation = new Generation();

// console.log('generation', generation);

// const gooby = generation.newDragon();

// console.log('gooby', gooby);

// setTimeout(() => {
//   const mimar = generation.newDragon();
//   console.log('mimar', mimar)
// }, 15000);

// const Dragon = require('./dragon');


// const fooey = new Dragon({
// birthdate: new Date(),
// nickname: 'fooey'
// });

// const baloo = new Dragon({
// birthdate: new Date(),
// nickname: 'baloo',
// traits: [{traitType: 'backgroundColor', traitValue: 'green'}]
// });

// const mimar = new Dragon();

// setTimeout(() => {
//   const gooby = new Dragon();
//   console.log('gooby', gooby);

// },3000);


// console.log('fooey', fooey);
// console.log('baloo', baloo);
// console.log('mimar', mimar);

