let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('buttons'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case 'del':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!';
                }
                break;
            default: 
                display.innerText += e.target.innerText;
        }
    })
})






// let btnNumber = Array.from(document.getElementsByClassName('btn-number'));
// let btnOperator = Array.from(document.getElementsByClassName('btn-operator'));
// let btnEqual = Array.from(document.getElementsByClassName('btn-equal'))


// btnOperator.map(button => {
//     button.addEventListener('click', (e) => {
//         switch (e.target.innerText) {
//             case 'C':
//                 display.innerText = '';
//                 break;
//             case 'del':
//                 if (display.innerText) {
//                     display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     })
// })

// btnNumber.map(button => {
//     button.addEventListener('click', (e) => {
//         display.innerText += e.target.innerText;
//     })
// })

// btnEqual.map(button => {
//     button.addEventListener('click', (e) => {
//         try{
//             display.innerText = eval(display.innerText);
//         } catch {
//             display.innerText = 'ERROR!';
//         }
//     })
// })