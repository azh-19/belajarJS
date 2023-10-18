// console.log("Hello World")
// alert("Notifikasi")
// prompt("kantin ga?")

// var Promnet = "Coding is ezet"
// console.log(Promnet)
// var Promnet = "Coding not ezet"
// console.log(Promnet)

// let Promnet = "Coding ezet"
// console.log(Promnet)
// let Apa = "Coding hard"
// console.log(Apa)

// const Promnet = "Coding ezet"
// console.log(Promnet)
// const Naon = "Coding hard"
// console.log(Naon)

// let totalPoin = prompt("Masukkan poin anda")
//     if(totalPoin > 100) {
//         document.write("<h1>Congratulation</h1>");
//     }
//     else {
//         document.write("<h1>Thank you!</h1>");
//     }

// var x=6;
// var y=3;

// if (x<10 && y>1) {
//     console.log("a: True")
// }
// else {
//     console.log("a: False");
// }

// if (x<10 && y<1) {
//     console.log("b: True")
// }
// else {
//     console.log("b: False");
// }

// if (x==5||y==5) {
//     console.log("c: True")
// }
// else {
//     console.log("c: False");
// }

// if (x==6||y==5) {
//     console.log("d: True")
// }
// else {
//     console.log("d: False");
// }

// if (!(x==y)) {
//     console.log("e: True")
// }
// else {
//     console.log("e: False");
// }

// let x=6;
// let y=3;

// console.log(x<10 && y>1)
// console.log(x<10 && y<1)
// console.log(x==5||y==5)
// console.log(x==6||y==5)
// console.log(!(x==y))

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("kalimat-form");
    const input = document.getElementById("kalimat-input");
    const list = document.getElementById("kalimat-list");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const kalimatText = input.value.trim();
  
      if (kalimatText === "") {
        alert("Silakan masukkan kalimat terlebih dahulu.");
        return;
      }
  
      const listItem = document.createElement("li");
      const checkbox = document.createElement("input");
      const deleteButton = document.createElement("button");
  
      checkbox.type = "checkbox";
      checkbox.style.marginRight = "10px"
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          listItem.style.textDecoration = "line-through";
        } else {
          listItem.style.textDecoration = "none";
        }
      });
  
      deleteButton.innerText = "X";
      deleteButton.style.marginLeft = "10px"
      deleteButton.addEventListener("click", function () {
        listItem.remove();
      });
  
      listItem.appendChild(checkbox);
      listItem.appendChild(document.createTextNode(kalimatText));
      listItem.appendChild(deleteButton);
      list.appendChild(listItem);
  
      input.value = "";
    });
  });
  