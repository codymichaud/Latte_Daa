const nameArr = [];
const emailArr = [];
const reviewArr = [];

document.getElementById('submitBtn').addEventListener('click', reviewSubmission)

function reviewSubmission(emailArr) {
    const email = document.getElementById('inputEmail').value;
    //const name = document.getElementById('#inputName').value;
    //const review = document.getElementById('#reviewStr').value;

    //nameArr.push(name);
    emailArr.push(email);
    //reviewArr.push(review);

    return false;
    console.log(emailArr)
};

console.log(nameArr);

console.log(reviewArr);