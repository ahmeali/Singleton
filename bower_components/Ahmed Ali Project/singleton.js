"use strict";

var BookSingleton = function(){
    var book = this ;
    book.name = "the way to work";
    book.author = "Ahmed Ali";
    book.borrowed = false ;

    console.log(this.name);
    var borrowBook = function(){
        console.log("here");
        if(book.borrowed == true){
            return false ;
        }else{
            book.borrowed = true ;
            return true ;
        }

    }

    book.returnBook = function(){
        book.borrowed = false ;
        console.log("thanks for returning book");
    }

    book.getauthor = function(){return book.author;};
    book.gettitle = function(){return book.title};
    book.gettitleandauthor = function(){return book.title+" by "+book.author};

    return {
        borrowBook : borrowBook
    }
};


var bookBrower = function(){
    var havebook = false ;

    var borrowbook = function(){
        if(BookSingleton.borrowBook() == true){
            console.log("okay take the book");
        }else{
            console.log("this book is already borrowed");
        }
    }

    var returnBook = function(){
        if(BookSingleton.borrowed == true){
            console.log("book returned");
            BookSingleton.returnBook();
        }else{
            console.log("book already in it's place");
        }
    }

    return{
        borrowbook:borrowbook,
        returnBook:returnBook,
        havebook:havebook
    }
}

var person1 = new bookBrower();
var person2 = new bookBrower();

person1.borrowbook();