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
      let c = _title;
      for (let j=0;j<this.library.length;j++){
          if (this.library[j].title===c){

          }
      }
      }
      //searching book by its title
    findBook(_title){
      //zdes' budet input, dopustim on budet nazivat'sya b
      let b=_title;
      for (let i=0; i<this.library.length;i++){
        if (this.library[i].title===b){
        console.log(this.library[i]._title);
        break
        }
        else if (i!=this.library.length-1 && b!=this.library[i]._title){
          console.log('searching...');
          }
          else {
            console.log('Your book not found!');
            }
        }
      
      }
    }
  let myLib = new Library();
  myLib.addBook('Harry Potter','joeanne rowling',1997);
  