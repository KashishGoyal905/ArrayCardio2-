    // ## Array Cardio Day 2

const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
    ];
  
const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
    ];
  
      // Some and Every Checks
      console.log("Array.prototype.some() // is at least one person 19 or older?")
      const some = people.some(function(person){
          const date = (new Date()).getFullYear();
          return date - person.year>=19;
      });
      console.table(some);
      console.log("// Array.prototype.every() // is everyone 19 or older?");
      const every = people.every(function(person){
          const date = (new Date().getFullYear());
          return date - person.year>=19;
      });
      console.table(every);
  
    console.log("Array.prototype.find()")
  const find = comments.find(function(person){
        return person.id==823423;
  })
  console.table(find);
      // Array.prototype.findIndex()
      // Find the comment with this ID
      // delete the comment with the ID of 823423

      const findIndex = comments.findIndex(function(person){
          return person.id==823423;
      });
    console.table(comments);
      comments.splice(findIndex,1);
      console.table(comments);

