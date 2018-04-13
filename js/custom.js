function vans(){
    var size=prompt("enter your shoe size");
    if(size==6){
        document.write(" if its " + size + ",it cost 800 ");
    }
    else if(size==7){
        document.write(" if its " + size + ", it cost 1500 ");
    }
    else if(size==8){
        document.write(" if its " + size + ", it cost 2000 ");
    }
        else{
       document.write( size + " it will cost 2400 ");
        }
}
vans();