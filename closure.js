// *************************************************************************
// **************************** Lexical Scope ******************************
// *************************************************************************
var g = 1;
function sum() {
    var l = 2;
    return g + l;
}


// *************************************************************************
// **************************** Scope Chain ********************************
// *************************************************************************
var grandFatherName = "John";
function father() {
    var fatherName = "Devis";

    function child() {
        var childName = "Tom";
        var description = "My name is" + childName + " ,my grandfather is " + grandfatherName + " and my father is " + fatherName;
        return description;
    }

    return child();
}
console.log(father());


// *************************************************************************
// **************************** Closure ************************************
// *************************************************************************
var a = 2;
var f = function (param1) {
    var b = param1;
    var n = function () {
        var c = 10;
        var d = a + b + c;
        return d;
    };
    return n;
};
var k = f(20);
var m = f(30);
console.log(k());
console.log(m());


// *************************************************************************
// ************************** Closure Snapshot *****************************
// *************************************************************************
var name;
function person(x, y) {
    var age = x;
    name = y;
    return function () {
        console.log(age, name)
    };
}
var amit = person(25, 'Amit');
var namita = person(23, 'Namita');
console.log(amit()); // 25 Namita
console.log(namita()); // 23 Namita