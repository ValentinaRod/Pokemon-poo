function Pokemon(nombre,color,poderDeAtaque){
	this.nombre = nombre;
	this.color = color;
	this.nivelDeAmistad = 0;
	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;
	this.mostrarPokemon = function(){
		return("Hola, soy: " + this.nombre + " y soy de color: " + this.color);
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}
	this.atacar = function(pokemon) {
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}
}
const Pikachu = new Pokemon("Pikachu","amarillo",100);
const Charmander = new Pokemon("Charmander", "rojo",20);

Pikachu.atacar(Charmander);
console.log(Charmander.vida)
console.log(Pikachu.nombre + Pikachu.color + Pikachu.vida)
document.write("<h2><b>" + Charmander.nombre + " </b>" + Charmander.color + " " + Charmander.vida + "</h2>")
document.write("<h2><b>" + Pikachu.nombre + " </b>" + Pikachu.color + " " + Pikachu.vida + "</h2>")


function pelear(){
	
	var poke1 = document.getElementById("poke1").value;
	var poke2 = document.getElementById("poke2").value;
	var pokemon1= new Pokemon(poke1,"amarillo",math.floor(math.random(0,100)*101));
	var pokemon2= new Pokemon(poke2,"rojo",20);

	document.write(pokemon1.atacar(pokemon2));

	var resultado= document.getElementById("verPokemon");
	resultado.innerHTML = Alert(pokemon1.nombre + "ataco a" + pokemon2.nombre );
}

	
