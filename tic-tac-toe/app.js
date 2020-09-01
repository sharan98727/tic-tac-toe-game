var identifier = '';

//boxArr contains all the array of elements which are the  possbilities to win the game
var boxArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]
//this function is used to validate and function the tic tac toe game
function fnBoxValChange(eve) {
    var _eleRef = eve.target;
    var _value = _eleRef.innerText;
    var _id = _eleRef.id;

    console.log(_eleRef);
    console.log(_value);
    console.log(_id);

    // if condition check wheather the entered value by player is empty or not
    if (_value == '') {
        return;
    }
    // here if condition check wheather the player enter "x" or "o", if he enter other character apart from x and o..it
    //gives the alert messsage
    if (_value != 'x' && _value !== 'o') {
        console.log(_value);
        alert('please enter correct identifier eaither "x" or "o"');
        eve.target.innerText = '';
        return;
    }

    //this condition allow player not to enter same input consecutively,if he enter then it alerts with the message
    if (identifier == _value) {
        console.log(_value);
        console.log(identifier);
        alert('wrong entry');
        eve.target.innerText = '';
        return;
    }
    identifier = _value;
    //console.log(_value);
    //  console.log(identifier);

    //here we are removing the attribute "contenteditable" and filtering rhe array
    _eleRef.removeAttribute('contenteditable');
    var _filterArr = boxArr.filter(function (arr) {
        return arr.includes(Number(_id));
    })
    // this loops checks all the possiblities of "for" loop , and declares the winner
    for (var i = 0; i < _filterArr.length; i++) {
        var _innerArr = _filterArr[i];
        var _value1 = document.getElementById(_innerArr[0]).innerText;
        var _value2 = document.getElementById(_innerArr[1]).innerText;
        var _value3 = document.getElementById(_innerArr[2]).innerText;
        //the variables below takes the value present in each and every cell
        var value1 = document.getElementById("1").innerText;
        var value2 = document.getElementById("2").innerText;
        var value3 = document.getElementById("3").innerText;
        var value4 = document.getElementById("4").innerText;
        var value5 = document.getElementById("5").innerText;
        var value6 = document.getElementById("6").innerText;
        var value7 = document.getElementById("7").innerText;
        var value8 = document.getElementById("8").innerText;
        var value9 = document.getElementById("9").innerText;
        //condition for player to win  
        if (_value1 == _value && _value2 == _value && _value3 == _value) {
            alert(identifier + "  is the winner");
            return window.location.reload();
        }
            if (value1 != "" && value2 != "" && value3 != "" && value4 != "" && value5 != "" && value6 != "" &&
            value7 != "" && value8 != "" && value9 != "") 
            {

            alert("game draw");
            return window.location.reload();
        }


        }
    }

    

    

