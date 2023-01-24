let string ="";
let buttons= document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '=' ){
        try{
            string=eval(string);
            document.querySelector('input').value = string;
        }catch(e){
            string="Invalid Input || Retry";
            document.querySelector('input').value = string;
            // alert('Enter valid operator')
            setTimeout(() => {
                location.reload();
            }, 1500);
        }
        }
        else if(e.target.innerHTML == 'C' ){
            string=" ";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'off' ){
            string=" ";
            document.querySelector('input').value = "Turned off | C to Start";
        }
        else{
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})


