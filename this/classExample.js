class Usuario {
	constructor(name){
  	this.name = name
  }
  saludarWithTraditional(){
  	console.log(`hi ${this.name}`)
  }
  saludarWithArrow = () => {
  	console.log(`hi ${this.name}`)
  }
  saludarWithTraditionalAndCallback(){
  	setTimeout(function(){
			console.log(`hi ${this.name}`)
    }, 1000)
  }
  saludarWithTraditionalAndCallbackFixed(){
  	setTimeout(function(){
			console.log(`hi ${this.name}`)
    }.bind(this), 1000)
  }
  saludarWithArrowAndCallback(){
  	setTimeout(()=>{
			console.log(`hi ${this.name}`)
    }, 1000)
  }
}

const usuario = new Usuario("Alberto")
usuario.saludarWithTraditional()
usuario.saludarWithArrow()
usuario.saludarWithTraditionalAndCallback()
usuario.saludarWithTraditionalAndCallbackFixed()
usuario.saludarWithArrowAndCallback()