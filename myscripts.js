var firstSchedule = 'Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo'
var firstPlace = 'Madrid.Sevilla.Barcelona.Valencia.Zaragoza.Bilbao.Donosti'

var firstPlaceDot = firstPlace.replace(/\./g,',');

var secondPlaceDot = firstPlaceDot.split(',')
var secondSchedule = firstSchedule.split(',')

var array = [];

for(i=0; i<secondSchedule.length; i++){
  array.push(secondSchedule[i]);
  array.push(secondPlaceDot[i]);
}

console.log(array)