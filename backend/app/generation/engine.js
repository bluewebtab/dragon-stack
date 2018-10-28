const Generation = require('./index');
const GenerationTable = require('./table');

class GenerationEngine {
  constructor(){
      this.generation = null;
      this.timer = null;
  }

  start(){
      this.buildNewGeneration();
  }

  stop(){
    //this stops the this.timer from repeating itself
    clearTimeout(this.timer);
  }

  buildNewGeneration(){
     //performs a new instance
     const generation = new Generation();

      GenerationTable.storeGeneration(generation)
      .then(({generationId})=> {
        this.generation = generation;
        this.generation.generationId = generationId;
        
        console.log('new generation', this.generation);
     
        this.timer = setTimeout(() => this.buildNewGeneration(), 
        this.generation.expiration.getTime() - Date.now()
       
       )
      
      })
      .catch(error => console.error(error));

    //console.logs//instance
    
     //setTimeouts a new instance by the amount of time that is subtracted
    //  by this.gen... - date.now()
     
    
  }
}

module.exports = GenerationEngine;
