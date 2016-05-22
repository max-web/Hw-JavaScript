/*******************************************************************************************
1. Массив скиллов (поле skills) всех людей, не должно быть повторяющихся скиллов, так же они должны быть отсортированы по алфавиту
********************************************************************************************/


var arraySkills = _.flatten(_.map(data, 'skills'));
var arraySkills = _.sortBy(arraySkills, function (arrayItem) {
	return arrayItem.toLowerCase();
});
var arraySkills = _.uniq(arraySkills);

console.log('1. Массив скиллов (поле skills) всех людей, без дубликатов, сортировка по алфавиту:');
console.log(arraySkills);
console.log('');


/*******************************************************************************************
2. Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (friends);
********************************************************************************************/


var arrayNames = _.map(_.sortBy(data, function(item){
    return item.friends.length;
}), 'name');
var arrayNames = _.reverse(arrayNames);


console.log('2. Массив имен (name) людей, сортировка по количеству их друзей (friends)(по убыванию)');
console.log(arrayNames);
console.log('');



/*******************************************************************************************
3. Массив всех друзей всех пользователей, не должно быть повторяющихся людей.
********************************************************************************************/

var arrayFriends = _.map(data, 'friends');
var arrayFriends = _.flatten(arrayFriends);
var arrayFriends = _.unionBy(arrayFriends, 'name');
var arrayFriends = _.map(arrayFriends, 'name');
var arrayFriends = _.sortBy(arrayFriends); //сортировка для проверки наличия повторов

console.log('3. Массив всех друзей всех пользователей, без повторов.');
console.log(arrayFriends);
console.log('');