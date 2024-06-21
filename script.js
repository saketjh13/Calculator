let buttons = document.querySelectorAll(".button");
let input=document.querySelector('input');
let ans = "";
for (let button of buttons) {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            ans = eval(ans);
            input.value = ans;
        }
        else if(e.target.innerHTML== 'Clr'){
            ans="";
            input.value=ans;
        }
        else {
            ans = ans + e.target.innerHTML;
            input.value = ans;
        }
    });
}




