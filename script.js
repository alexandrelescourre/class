"use strict";

//D'abord, je crée une class "pokemon" avec les paramètres : name,attack,defense,hp,luck (une methode isLucky et une methode attckPokemon)
//Ensuite je crée deux instance de pokemon avec des stats differentes
//Tant que "l" un deux "n" est pas mort 
//Le premier attaque le second (isLucky + attackPokemon)
//Il faut afficher la vie et les dégâts du second
//Si le second est mort il faut arrêter la boucle 
//Le second attaque le premier (isLucky + attackPokemon)
//Afficher la vie et les dégâts du premier
//Si le premier est mort il faut arrêter la boucle
//Afficher un message de fin pour le pokemon perdant
//Dégâts =att de l'attaquant - def du defenseur
//La "luck" correspond a la probabilité de toucher l'adversaire (precision en pourcentage)
//Si le nombre est inferieur a luck du pokemon, alors le pokemon peut attaquer 

class Pokemon{
   constructor(name,attack,defense,hp,luck){
       this.name=name
       this.attack=attack
       this.defense=defense
       this.hp=hp
       this.luck=luck
   }
   attackPokemon(pokemon){
       if(this.isLucky()){
           let damage=this.attack-pokemon.defense
           pokemon.hp-=damage
           console.log(this.name+' a attqué '+pokemon.name+' pour '+damage+' de degat il lui reste '+pokemon.hp+" points de vie");
       }else {
           console.log(this.name+" a raté son attaque");
       }
   }
   isLucky(){
       return this.luck>Math.random()
   }
}
let dracofeu=new Pokemon('Dracofeu',14,8,100,0.5);
let boulbi=new Pokemon('Boulbi',18,4,70,0.8);

while(dracofeu.hp >0 && boulbi.hp>0){
   dracofeu.attackPokemon(boulbi)
   if(boulbi.hp<=0){
       console.log(boulbi.name+" is dead !");
       break;
   }
   boulbi.attackPokemon(dracofeu)
   if(dracofeu.hp<=0){
       console.log(dracofeu.name+" is Dead !");
       break
   }
}