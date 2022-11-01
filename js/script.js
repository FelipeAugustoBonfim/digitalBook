var livro1 = document.getElementById("livro1");
var livro2 = document.getElementById("livro2");
var livro3 = document.getElementById("livro3");
var livro4 = document.getElementById("livro4");
var livro5 = document.getElementById("livro5");

livro1.addEventListener("click", function(){

    var book1 = document.getElementById("book1");

    if(book1.style.display === "none"){
        book1.style.display = "block"
    } else {
        book1.style.display = "none"
    }
});

livro2.addEventListener("click", function(){

    var book2 = document.getElementById("book2");

    if(book2.style.display === "none"){
        book2.style.display = "block"
    } else {
        book2.style.display = "none"
    }
});


if(book1.style.display === "none"){
    
    switch (livros) {
        case livro1:
            book2.style.display === "block"
            book3.style.display === "block"
            book4.style.display === "block"
            book5.style.display === "block"
            break;
        case livro2:
            book1.style.display === "block"
            book3.style.display === "block"
            book4.style.display === "block"
            book5.style.display === "block"
            break;
        case livro3:
            book1.style.display === "block"
            book2.style.display === "block"
            book4.style.display === "block"
            book5.style.display === "block"
            break;
            
        default:
            break;
    }
}