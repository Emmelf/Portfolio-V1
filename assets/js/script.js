console.log("hello world");

let copyright = document.querySelector(".copyright");

let currdate = new Date();

let yyyy = currdate.getFullYear();

copyright.innerText = `${yyyy} | Dylan Lakhdari`;
