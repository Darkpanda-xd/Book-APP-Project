/*//define UI element
let form = document.querySelector('#book-form');
let remove = document.querySelector('#book-list');
//define class
class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}
class UI{
  
    static addToBookList(e){
        let tr = document.createElement('tr');
        let list = document.querySelector('#book-list');
        tr.innerHTML=`
        <td>${e.title}</td>
        <td>${e.author}</td>
        <td>${e.isbn}</td>
        <td><a href='#'>X</a></td>
        `
        list.appendChild(tr);


    }
    static clearFields(){
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('isbn').value='';

    }
    static showAlert(massage,className){
        let div = document.createElement('div');
        div.className= `alert ${className}`;
        div.appendChild(document.createTextNode(massage))
        let container = document.querySelector('.container');
        let list = document.querySelector('#book-form');
        container.insertBefore(div,list)

        setTimeout(()=>{
            document.querySelector('.alert').remove()
        },2000)
    }
    static delBook(target){
        if(target.hasAttribute('href')){
            confirm('Are you sure?')
            target.parentElement.parentElement.remove();
           Local.removeBook(target.parentElement.previousElementSibling.textContent.trim())
           UI.showAlert('Remove successful','success')
           
        }
    }
   
    
}

//store in ls
class Local {
    static getData(){
        let books;
        if(localStorage.getItem('books')===null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static storeData(book){
        let books = Local.getData();
        books.push(book);

        localStorage.setItem('books',JSON.stringify(books));
    }
    static output(){
        let book = Local.getData();
     book.forEach(book=>{
       UI.addToBookList(book);
     })
    }

    static removeBook(isbn){
        let books = Local.getData();
        books.forEach((a,b)=>{
            if(a.isbn===isbn){
                books.splice(b,1)
            }
        })
        localStorage.setItem('books',JSON.stringify(books))

    }

}

//define event listener
form.addEventListener('submit',newBook);
remove.addEventListener('click',removeBook);
document.addEventListener('DOMContentLoaded',Local.output());

//define function
function newBook(e){
let title = document.getElementById('title').value,author=document.getElementById('author').value,isbn=document.getElementById('isbn').value;
let book = new Book(title,author,isbn);
if(title===''||author===''||isbn===''){
    UI.showAlert('"Empty Fields!"','error');

}else{
    UI.addToBookList(book)
    UI.clearFields()
    UI.showAlert('"Book registered successfully!"','success');

    Local.storeData(book); 
}


e.preventDefault()
}
//remove
function removeBook(e){

UI.delBook(e.target)


e.preventDefault()
}*/

/*//define ui element
let form = document.querySelector(
  "#book-form"
);
let remove = document.querySelector(
  "#book-list"
);
//define class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
class UI {
  static addToBookList(book) {
    let row =
      document.createElement("tr");
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#'>X</a></td>
        `
    let bookList =
      document.querySelector(
        "#book-list"
      );
    bookList.appendChild(row);
  }
  static clearFields() {
    (document.querySelector(
      "#title"
    ).value = ""),
      (document.querySelector(
        "#author"
      ).value = ""),
      (document.querySelector(
        "#isbn"
      ).value = "");
  }
  static removeFields(target) {
    if (target.hasAttribute("href")) {
      confirm("Are you sure!");
      target.parentElement.parentElement.remove();
      Store.removeFromLs(target.parentElement.previousElementSibling.textContent.trim())
    }
  }
  static showAlert(massage, className) {
    let div =
      document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(
      document.createTextNode(massage)
    );
    let container =
      document.querySelector(
        ".container"
      );
    container.insertBefore(div, form);

    setTimeout(() => {
      document
        .querySelector(".alert")
        .remove();
    }, 2000);
  }
}
//store in ls
class Store{
    static storeData(){
        let books;
        if(localStorage.getItem('books')===null){
            books = []
        }else{
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books;
    }
    static addData(book){
        let books = Store.storeData();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books))
    }
    static output(){
        let book = Store.storeData();
        book.forEach(book =>{
            UI.addToBookList(book);
        })
    }
    static removeFromLs(isbn){
        let books = Store.storeData();
        books.forEach((a,b)=>{
            if(a.isbn === isbn){
               books.splice(b,1)
            }
        }) 
        localStorage.setItem('books',JSON.stringify(books))
    }
}

//define eventListener;
form.addEventListener(
  "submit",
  newBook
);
remove.addEventListener(
  "click",
  removeEle
);
document.addEventListener('DOMContentLoaded',Store.output())

//define function;
function newBook(e) {
  let title =
      document.querySelector(
        "#title"
      ).value,
    author =
      document.querySelector(
        "#author"
      ).value,
    isbn =
      document.querySelector(
        "#isbn"
      ).value;
  let book = new Book(
    title,
    author,
    isbn
  );
  if (
    title === "" ||
    author === "" ||
    isbn === ""
  ) {
    UI.showAlert(
      "*Empty fields!*",
      "error"
    );
  } else {
    UI.addToBookList(book);
    UI.showAlert(
      "*Registered Successful!*",
      "success"
    );
    UI.clearFields();
    Store.addData(book)
  }
  e.preventDefault();
}
//remove ele
function removeEle(e) {
  UI.removeFields(e.target);

  e.preventDefault();
}*/
/*//define ui element
let form = document.querySelector('#book-form');
let remove = document.querySelector('#book-list');
//define class
class Book{
  constructor(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
  }
} 
class UI{
  static createBook(e){
    let row=document.createElement('tr');
    row.innerHTML=`
    <td>${e.title}</td>
    <td>${e.author}</td>
    <td>${e.isbn}</td>
    <td><a href='#'>X</a></td>
    `
    let list = document.querySelector('#book-list');
    list.appendChild(row);
  }
  static clearFields(){
    document.querySelector('#title').value='',document.querySelector('#author').value='',document.querySelector('#isbn').value='';
  }
  static showAlert(massage,className){
    let div = document.createElement('div');
    div.className=`alert ${className}`
    div.appendChild(document.createTextNode(massage))
    let container = document.querySelector('.container');
    let form = document.querySelector('#book-form');
    container.insertBefore(div,form);
    setTimeout(()=>{
      document.querySelector('.alert').remove()
    },2000)
  }
  static removeField(target){
    if(target.hasAttribute('href')){
      target.parentElement.parentElement.remove()
      Store.removeFromLs(target.parentElement.previousElementSibling.textContent.trim())
      UI.showAlert('*Item Removed!*','success')
    }
  }
}
class Store{
  static getData(){
    let book;
    if(localStorage.getItem('book')===null){
      book=[]
    }else{
      book=JSON.parse(localStorage.getItem('book'))
    }
    return book
  }
  static addBook(books){
    let book = Store.getData()
    book.push(books)
    localStorage.setItem('book',JSON.stringify(book)) 
  }
  static output(){
    let book = Store.getData();
    book.forEach(book => {
      UI.createBook(book)
    });
  }
  static removeFromLs(isbn){
    let book = Store.getData()
    book.forEach((value,index)=>{
      if(value.isbn===isbn){
        book.splice(index, 1);
      }
    })
    localStorage.setItem('book',JSON.stringify(book))
  }
}
//define eventListener
form.addEventListener('submit',createNewBook)
remove.addEventListener('click',removeEle)
document.addEventListener('DOMContentLoaded', Store.output())
//define function
function createNewBook(e){
let title=document.querySelector('#title').value,author=document.querySelector('#author').value,isbn=document.querySelector('#isbn').value;
let book = new Book(title,author,isbn)
if(title===''||author===''||isbn===''){
  UI.showAlert('*WRONG input*','error')
}else{

  UI.createBook(book);
  UI.clearFields();
  UI.showAlert('*Registered Successfully!*','success')
  //store in Local storage
  Store.addBook(book)
}
e.preventDefault();


}
//remove 
function removeEle(e){
  UI.removeField(e.target)
  e.preventDefault();
}*/
//define element
let form=document.getElementById('book-form');
let remove=document.getElementById('book-list');
//define class
class Book{
  constructor(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
  }
}
class UI{
  static bookList(book){
    let row= document.createElement('tr');
    row.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#'>X</a></td>
    `
    document.querySelector('#book-list').appendChild(row);
  }
  static clearField(){
    document.querySelector('#title').value='',document.querySelector('#author').value='', document.querySelector('#isbn').value=''
  }
  static showAlert(massage,className){
    let div = document.createElement('div');
    div.className =`alert ${className}`
    div.appendChild(document.createTextNode(massage));
    let container=document.querySelector('.container')
    let list = document.querySelector('#book-form')
    container.insertBefore(div,list)
    setTimeout(()=>{
    document.querySelector('.alert').remove()
    },1000)
  }
  static removeBook(book){
    if(book.hasAttribute('href')){
      book.parentElement.parentElement.remove()
      StoreInLs.removeFromLs(book.parentElement.previousElementSibling.textContent.trim())
      UI.showAlert('*Removed Successfully!*','success')
    }
  }
}

class StoreInLs{
  static store(){
    let books;
    if(localStorage.getItem('books')===null){
      books=[]
    }else{
      books=JSON.parse(localStorage.getItem('books'))
    }
    return books;
  }
  static push(book){
    let books = StoreInLs.store()
    books.push(book);
    localStorage.setItem('books',JSON.stringify(books));
  }
  static showBook(){
    let books = StoreInLs.store();
    books.forEach((book)=>{
      UI.bookList(book)
    })
  }
  static removeFromLs(isbn){
    let books = StoreInLs.store();
    books.forEach((value,index)=>{
      if(value.isbn===isbn){
        books.splice(index,1)
      }
    })
    localStorage.setItem('books',JSON.stringify(books));
  }
}
//define event listener
form.addEventListener('submit',createBook)
remove.addEventListener('click',removeEle)
document.addEventListener('DOMContentLoaded',StoreInLs.showBook())
//define function
function createBook(e){
  let title=document.querySelector('#title').value,author=document.querySelector('#author').value,isbn=document.querySelector('#isbn').value
  let book = new Book(title,author,isbn);

 if(title===''||author===''||isbn===''){
  UI.showAlert('*Wrong Input!*','error')
 }else{
   UI.bookList(book);
   UI.clearField();
   UI.showAlert('*Registered Successfully!*','success')
   StoreInLs.push(book);
 }
  e.preventDefault()
}

function removeEle(e){
  UI.removeBook(e.target)
}