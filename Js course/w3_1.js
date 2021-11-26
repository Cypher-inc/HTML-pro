
function doChange(){
    alert('Clicked button');
    }

    
function doChange1(){
    var choice= confirm('Comfirm text');
    
    if (choice ==1) {
        msg = "You pressed OK"
        
    }
    else{
        msg = "Are you sure you want to exit?"
    }
    
    document.getElementById("demo").innerHTML = msg;
}


function changeColor(){
    var cc1 = document.getElementById('d1')
    var cc2 = document.getElementById('d2')

    var cc3 = document.getElementById('d1')
    var cc4 = document.getElementById('d2')

    cc1.className = 'salmonback';
    cc2.className = 'blueback';

    cc1.innerHTML = 'salmonback';
    cc2.innerHTML = 'blueback';
}


