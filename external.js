function one() {
    var name = 'Groot',
        time = '13:25',
        place = 'Lviv',
        event = prompt('Input an event name');
    var result = 'At ' + time + ' in ' + place + ' ' + name + ' will be having fun on this event: ' + event +
        ".";
        document.getElementById('result').innerText = result;
}

function two() {
var EU_TO_UAH = 32.1;
var USD_TO_UAH = 27.05;
var euro = prompt('Input the amount in EURO');
var dollars = prompt('Input the amount in DOLLARS');
if (isNaN(euro, dollars)) {
    alert( "Вы не ввели число.\nПовторите попытку." );
  } else {
    alert(euro + ' EUR is/are equal to ' + euro * EU_TO_UAH + ' UAH, ' +
    dollars + ' USD is/are equal to ' + dollars * USD_TO_UAH + ' UAH, ' +
    'one euro is equal to ' + EU_TO_UAH / USD_TO_UAH + ' USD.');
  }

}
