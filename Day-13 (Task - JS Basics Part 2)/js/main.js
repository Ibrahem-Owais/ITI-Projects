// 1. تحديد العناصر باستخدام querySelector
let fullNameInput = document.querySelector("#full-name");
let ageInput = document.querySelector("#age");
let jobInput = document.querySelector("#subject");
let submitBtn = document.querySelector("#send-data");

// 2. إضافة حدث الضغط على الزرار
submitBtn.addEventListener("click", function (e) {
    // chek if input empty or no 
    let nameValue = fullNameInput.value.trim();
    let ageValue = ageInput.value.trim();
    let jobValue = jobInput.value.trim();
    
    if (nameValue === "" || ageValue === "" || jobValue === "") {
        alert("Please fill all fields");
        return;
    }

    console.log(`Name: ${nameValue}`);
    console.log(`Age: ${ageValue}`);
    console.log(`Job: ${jobValue}`);

    let ageNumber = Number(ageValue);

    if (ageNumber < 18) {
        alert("You are under age");
    } else {
        alert("Registration Completed");
    }
});