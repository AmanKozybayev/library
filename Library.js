class Book {
    constructor(_title,_author,_publicationDate){
      this.title=_title;
      this.author=_author;
      this.pubDate=_publicationDate;
      }//an individual book that holds properties of single book.
    }
  class Library {
    constructor(){
      this.library=[];
      //create a list of books
      }
    //create a method that will help me to add a book
    addBook(_title,_author,_publicationDate){
      let a= new Book(_title, _author,_publicationDate);
      this.library.push(a);
      return a
      }
      //create a method that will remove certain book from list of books
    removeBook(_title){
      //v dushe ne ebu kak eto sdelat' za odin shag ** vrode prishla ideya, no postoyannaya putanica v golove
      let b=_title;
      for (let i=0; i<this.library.length;i++){
        if (this.library[i].title===b){
        this.library.splice(i,1);
        break
        }
        else if (i!=this.library.length-1 && b!=this.library[i].title){
          console.log('searching...');
          }
          else {
            console.log('Your book not found!');
            }
        }
      }
      
      //searching book by its title
    findBook(_title){
      //zdes' budet input, dopustim on budet nazivat'sya b
      let b=_title;
      for (let i=0; i<this.library.length;i++){
        if (this.library[i].title===b){
        console.log(this.library[i].title);
        break
        }
        else if (i!=this.library.length-1 && b!=this.library[i].title){
          console.log('searching...');
          }
          else {
            console.log('Your book not found!');
            }
        }
      
      }
     //zdes' budet tak: chelovek vvodit imya knigi i emy vydaetsya spisok knig kotorie est' v library 
    getBooks(){
      let c = [];
      if (this.library.length!=0){
        for (let i=0;i<this.library.length;i++){
          c.push(this.library[i].title);
        }
      console.log(c);
      }//ya ne ponyal kak etu fignyu sdelat' cherez map()
      else {
        console.log('There is no any book in this list yet')
      }
    }
    getBooksCount(){
      if (this.library.length!=0){
        console.log(this.library.length);
      }
      else {
        console.log('There is no books here yet')
      }
    }

  }//kak zhe dostali eti skobki ska

  let myLib = new Library();
  
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Which do you want to do next? => 1.add book , 2. remove book, 3. find Book 4.exit =>", function(a) {
   if (a==="1") {
     rl.question('Please enter name of the book: ', function(b){
       
       rl.question('Please enter author`s name: ', function(c){
         
         rl.question('Please enter publiced date: ', function(d){
          myLib.addBook(b,c,d);
          return;
         })
       })
     })
     
     console.log(myLib[0]);

    }
   else if (a==='2'){
     console.log('Ty vybral dvoiku');
   }
   else if (a==='3'){
     console.log('Ty vybral troiku');
   }
   else if (a==='4'){
     rl.close();
   }
  
  rl.question("vvedite vtoroe chislo ", function(b) { 
    
    rl.close();
  });
});

rl.on("close", function() {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});







  

  