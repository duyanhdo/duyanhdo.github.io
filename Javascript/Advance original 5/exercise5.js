// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let usernameArr = [];
array.forEach( function(element) {
    usernameArr.push(element.username + '!');
});

//Create an array using map that has all the usernames with a "?" to each of the usernames
let usernameArrMap = array.map(username => username.username + "?");

//Filter the array to only include users who are on team: red
let filterArr = array.filter(color => color.team === 'red');

//Find out the total score of all users using reduce
let reduceArr = array.reduce((acc, element) => {
  return acc + element.score;
},0);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i); //remove this part
	alert(num); //also remove this part to make pure function
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
