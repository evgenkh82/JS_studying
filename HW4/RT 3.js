/* task 1
function hello1() {
    alert( 'Привет, JavaScript' );
}
hello1();
*/

/* task 2
function hello2() {
    let name = prompt('имя', 'Василий');
    switch(name) {
        case 'Василий':
            alert( "Привет, Василий");
        break;
        default:
        alert( "Привет, гость");
    }
}
hello2();
*/

/* function hello2() {
    let name = prompt('имя', 'Василий');
    if (name == 'Василий') {
        alert( "Привет, Василий");}
    else {
        alert( "Привет, гость");}
    }
hello2();
*/

/*
function mu1 (n, m) {
return n * m;
}
let result = mu1(9, 3);
alert(result);
mu1();
*/

function repeat(str, n) {
return str + n;
}
let result = repeat("   ", 3);
alert(result);
repeat(str, n);