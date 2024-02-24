
function isValidate(input) {
    if (!input.value) {
        alert('Enter the amount')
        input.focus()
        return false;
    }
    return true;
}


export{isValidate}