/* Beginner Challenge */

/* Do all of these using proper ES6 syntax
Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList
(2) Write an arrow function that removes a specific book from the bookList
(3) Write an arrow function that lists out all the books or all the authors in the book list */

const bookList = [
    { title: "Don Quixote", author: "Miguel de Cervantes" },
    { title: "Ulysses", author: "James Joyce" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby Dick", author: "Herman Melville" },
  ];

let add = (title1, author1) => {
    var dict = {};
    dict["title"] = title1;
    dict["author"] = author1;
    bookList.push(dict);
}

let remove = title1 => {
    for (let i = 0; i < bookList.length; i++){
      if (bookList[i].title === title1) {
          bookList.splice(i,1);
      }
    }
  }
/* the input will either be 1 for print titles or 0 for print authors */

let printBooksOrAuthors = num => {
    if (num) {
      for (let i = 0; i < bookList.length; i++) {
        console.log(Object.values(bookList[i])[0])
      }
    }
    else {
      for (let i = 0; i < bookList.length; i++) {
        console.log(Object.values(bookList[i])[1])
      }
    }
}


  /* Intermediate Challenge */
  
  /* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
    number is positive or negative using a ternary operator (assume the number will never be zero) */

let isPositive = num => num > 0 ? 1 : 0
  
  /* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
    the week it is
    i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

let dayOfTheWeek = day => {
  switch(day) {
    case "Monday":
    console.log("good luck!")
    break

    case "Tuesday":
    console.log("it's almost hump day!")
    break

    case "Wednesday":
    console.log("happy hump day!")
    break

    case "Thursday":
    console.log("it's almost friday!")
    break

    case "Friday":
    console.log("time to party!")
    break

    default:
    console.log("please enter a weekday.")

  }
}
  
  /* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
    number from 1 up to that number
    ex. sumUp(7) = 28 */
let sumOfNumbers = num => {
  var sum = 0
  for (let i = 0; i <= num; i++) {
    sum += i
  }
  return sum
}
 
  
  /* Harder Challenge */

  /* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
    me what I should wear accordingly */
let celsiusToFahrenheit = temperature => {
  temperature = (temperature * 9/5) + 32
  if (temperature < 50) {
    console.log("It is ", temperature ," degrees outside. You need to wear a jacket.")
  }
  else {
    console.log("It is ", temperature ," degrees outside. You do not need to wear a jacket.")
  }
}
  
  /* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
    using .forEach() */

let isTruthy = tempArray => {
   num = 0
   tempArray.forEach(element => {
        if (element) {
           num++
        }
   })
  return num  
}
  
  const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];
  
  /* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
    and an averageGrade field representing the letter grade that corresponds to their GPA */
  
  const attendance = [
    { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
    { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
    { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
    { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
    { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
    { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
    { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
  ];

  /* Hardest Challenge (Don't do this without completing harder challenges) */

  /* Write a function that solves the "every number eventually equals 4" puzzle. The output should be
    an array of the path you took to make it equal four
    ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
    For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */
