function Pokemon(nombre,color,poderDeAtaque){
	this.nombre = nombre
	this.color = color

	this.nivelDeAmistad = 0

	this.vida = 100
	this.poderDeAtaque = poderDeAtaque

	this.mostrarPokemon = function(){
		return('Hola, soy '+ this.nombre + ' y soy de color: ' + this.color)
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad  = this.nivelDeAmistad + valor
		return this.nivelDeAmistad
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque
		return pokemon.vida
	}
}

const Pikachu = new Pokemon('Pikachu','amarillo',100)
const Charmander = new Pokemon('Charmander','rojo',20)
const Metapod = new Pokemon('Metapod','Verde',100)
const Psyduck = new Pokemon('Psyduck','Azul',20)


function luchar(nombre,color,poderDeAtaque){

	var pokemoncillos = document.getElementById("pokemoncillos");
	var poke1 = document.getElementById("poke1").value;
	var poke2 = document.getElementById("poke2").value;

	if(poke1 == poke2){
		alert("Los Pokemones no pueden ser los mismos")
	}else{ 

		var ataque = prompt("Cual es el nivel de ataque del Pokemon?");
		var lucha1 = new Pokemon(poke1,+ color , + ataque);
		var lucha2 = new Pokemon(poke2, + color, + poderDeAtaque);	
		lucha1.atacar(lucha2);
	}
	pokemoncillos.innerHTML = "<br>" + lucha1.nombre + " atacó a "+ 
								lucha2.nombre + " y " + lucha2.nombre +
								" tiene una vida de: " + lucha2.vida

}