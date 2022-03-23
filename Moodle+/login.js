document.querySelector('#username').value = ""
document.querySelector('#password').value = ""


let questionArray = document.querySelector('#login').innerText.split(" ")
if (questionArray[5] == 'subtract') {
    document.querySelector('#valuepkg3').value = questionArray[6] - questionArray[8]
}
else if (questionArray[5] == 'add') {
    document.querySelector('#valuepkg3').value = Number(questionArray[6]) + Number(questionArray[8])
}
else if (questionArray[5] == 'enter', questionArray[6] == 'second') {
    document.querySelector('#valuepkg3').value = questionArray[10]
}
else {
    document.querySelector('#valuepkg3').value = questionArray[8]
}
document.querySelector('#loginbtn').click()
