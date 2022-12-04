
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