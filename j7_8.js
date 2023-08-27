console.log("dont lose the track stay focused");
// ask about throw error
// dom are read only
// alert(document.documentElement.parentNode);
// console.log(typeof document);
// console.log(typeof window);
// Element.matches(CSS);

//document.getElementById("1").style.background="green";
// console.log(document.getElementsByClassName(".navbar-brand"));
// document.getElementById("123").firstElementChild.style.background = "pink";
// document.getElementById("123").lastElementChild.style.background = "yellow";
// document.querySelector(".navbar").style.background = "blue";
// document.querySelector(".navbar-brand").style.background = "red";
// console.log(document.getElementsByTagName("li"));
// // document.getElementsByTagName("li").style.background = "red";
// // document.getElementsByTagName("th").style.background = "blue";
// console.dir(document.getElementById("123"));
// // document.getElementById("123").hidden =true;
// console.log(document.getElementById("1").Attribute);
// Array.from(document.querySelectorAll("td")).map((i) =>
//   i.setAttribute("style", "color: blue")
// );

// const value = document.getElementsByTagName("td");

// console.log({ value });

// document.getElementById("123").outerHTML =
//   "<p>i have successfully removed the 3 h elements and inserted these</p>";
// document.getElementById("345").style = "background-color:blue";
// document.getElementById("b1").onclick = () => alert("i am click1");
// document.getElementById("b2").onclick = () => alert("i am click2");
// document.getElementById("b3").onclick = () => alert("i am click3 ");
// setInterval(() => {
//   document.getElementById("li1").classList.toggle("r1");
// }, 1000);
// console.log(document.getElementsByTagName("button"));
// console.log(typeof document.getElementsByTagName("button"));
// console.log(document.getElementsByTagName("button")[2]);
// document.getElementsByTagName("button")[6].style = "color:red";
// document.getElementsByTagName("button")[6].addEventListener("click", () => {
//   let url = "https://www.google.com/";
//   window.location = url;
// });
// let a = [];
// console.log(typeof a);
// Array.from(document.getElementsByTagName("button")).map((a) => {
//   a.addEventListener("click", () => {
//     let i = a.innerHTML;
//     let url = `https://www.${i}.com/`;
//     window.location = url;
//   });
// });
// const hh = async (url) => {
//   let b = await fetch(url);
//   let c = await b.json();
//   return c;
// };
// setInterval(async () => {
//   let url = "https://jsonplaceholder.typicode.com/todos/";
//   console.log(await hh(url));
// }, 1000);
// let p =new Promise((resolve,reject)=>{
//     console.log("i am good");
//     resolve("i am haapu")
// }).then((v)=>{
//     console.log(v);
// })



// (()=>{
//     console.log("it is invocked immeditately");
// })();

// let [a1,b1]=[100,200];
// console.log(a1,"\\",b1)
// let [a,b,c,d,e,f,...r]=[1,2,3,4,5,6,7,8,9,0,10,1,11,12,13,14,15,16,17,18];
// console.log(r);


// let a="thhh",b="kjjjj";
// let obj ={a,b};
// console.log(obj);
// let onj={f12:1,r12:3};
// const {f12,r12} =onj;
// console.log(onj);

// function job() {
//     return new Promise(function(resolve, reject) {
//         resolve();
//     });
// }

// let promise = job();
// let r =
// promise.then(function() {
//     console.log('Success 1');
// })
// // console.log(typeof r);
// async function fetchUsers() {
//     const resp = await fetch('<https://jsonplaceholder.typicode.com/users>');
//     const users = await resp.json();
//     const names = users.map(({ login }) => login);
//     console.log(names);
//   }
// fetchUsers();