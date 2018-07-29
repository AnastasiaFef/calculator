let result = 0;
let num = 0;
let operand;

function number(element){
    numberClicked = element.innerHTML;
    if(num === 0){
        num = numberClicked
    }
    else{
        num += numberClicked;
    }
    updateOutputWithNum();
}

function updateOutputWithNum(){
    document.getElementById('output').innerHTML = num;
    console.log('updated output with NUM = ', num, ', result = ', result);
}

function updateOutputWithResult(){
    document.getElementById('output').innerHTML = result;
    num = 0;
    console.log('updated output with result: result = ', result, ', num = ', num);
}

function calculateResult() {
    switch (operand){
        case 'division':
            result = result / num;
            updateOutputWithResult();
            break;
        case 'multiplication':
            result = result * num;
            updateOutputWithResult();
            break;
        case 'substraction':
            result = Number(result) - Number(num);
            updateOutputWithResult();
            break;
        case 'addition':
            console.log('calculating result = ', result, ' + ', num)
            result = Number(result) + Number(num);
            console.log('result = ', result)

            updateOutputWithResult();
            break;
        default:
            console.log('no /, *, -, +')
    }
    console.log('calculated result: result = ', result, ', num = ', num);


}

function operation(operation_element){
    if(operation_element.id == 'equals') {
        calculateResult();
        return;
    }
1    // if((operand == 'division') || (operand == 'multiplication') || (operand == 'substraction') || (operand == 'addition')){
    if(operand){
        console.log('operadn = ', operand)
        calculateResult();
    }
    operand = operation_element.id;
    switch (operand){
        case 'clear':
            //...
            num = 0;
            updateOutputWithNum();
            break;
        case 'positive-negative':
            num = -num;
            updateOutputWithNum();
            break;
        case 'percent':
            result = num / 100;
            updateOutputWithResult();
            break;
        case 'dec-point':
            if(num.indexOf('.') != -1) break;
            num = num + '.';
            updateOutputWithNum();
            break;
        case 'division':
            cleanUpOutput();
            break;
        case 'multiplication':
            cleanUpOutput();
            break;
        case 'substraction':
            cleanUpOutput();
            break;
        case 'addition':
            cleanUpOutput();
            break;
        default:
            console.log('the operand is not found');
    }
}

function cleanUpOutput() {
    if(num != 0) result = num;
    num = 0;
    console.log('cleaning up an output: result = ', result, ', num = ', num);
    updateOutputWithResult();
}
