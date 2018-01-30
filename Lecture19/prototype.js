//**  Prototypal inheritance
// var parent = {
//   value: "parentValue",
//   obj: {
//     objValue: "parentObjValue"
//   },
//   walk: function () {
//     console.log("walk!");
//   }
// };

// var child = Object.create(parent);

//child.walk("cool words");


// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value: ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("parent: ", parent);
// console.log("child: ", child);
// //
// child.value = "childValue";
// child.obj.objValue = "childObjValue";
// console.log("*** CHANGED: child.value = 'childValue'");
// console.log("*** CHANGED: child.obj.objValue = 'childObjValue'");
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value: ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("parent: ", parent);
// console.log("child: ", child);
// //
//  console.log("child.obj === parent.obj ? ", child.obj === parent.obj);
// //
// var grandChild = Object.create(child);
// grandChild.value = "grandChildValue";

// console.log("Grandchild: ", grandChild);
// grandChild.walk();

//** Function constructors
// See my other course: HTML, CSS, and Javascript for Web Developers
// Lecture #48
function Dog(name, color) {
  this.name = name;
  this.color = color;
  console.log("'this' is: ", this);
}

var myDog = new Dog("Max", "Black");
console.log("myDog: ", myDog);

// Not being used as a function constructor
var myDog2 = new Dog("Max2018", "blue");
console.log("myDog2: ", myDog2);
