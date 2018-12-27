function vans(){
    var name=prompt("Enter your full names");
    alert("Hi " + name);
    var size=prompt("enter your shoe size no.");
    if(size==6){
        alert(" if its " + size + ",it cost ksh.800 ");
    }
    else if(size==7){
        alert(" if its " + size + ", it cost ksh.1500 ");
    }
    else if(size==8){
        alert(" if its " + size + ", it cost ksh.2000 ");
    }
        else{
       alert( size + " it  cost ksh.2400 ");
        }
//    var Age=prompt("Enter your Age");
//    if(Age<18){
//        alert("please visit the cartoon network");
//    }
//    else{
//        alert("Welcome to the most amazing site");
//    }
}
vans();