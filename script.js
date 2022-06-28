function like(element) {
    element.innerText++;
}

function changeText(element) {
    if (element.innerText == 'Login') {
        element.innerText = 'Logout';
    }
    else {
        element.innerText = 'Login';
    }
}

function hide(element) {
    element.remove();
}

