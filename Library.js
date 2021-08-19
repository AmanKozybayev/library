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
  myLib.addBook("Harry Potter","Joeanne Rowling",1997);
  myLib.addBook("LOTR","Tolkien",1953);
  myLib.getBooks();
  myLib.removeBook("Harry Potter");
  myLib.getBooks();
  myLib.removeBook("LOTR");
  myLib.getBooks();
  myLib.getBooksCount();
  myLib.addBook('LOTR','Tolkien',1954);
  myLib.addBook('Nomad','Yesenberlin',1969);
  myLib.getBooksCount();
  






  

  