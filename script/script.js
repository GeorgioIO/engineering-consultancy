const form = document.querySelector("form");

form.addEventListener("submit" , (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value , key) => data[key] = value);

    // AI RECEIVE DATA + ANALYZE SITUATION AND THEN SEND EMAIL 
    fetch("https://hook.eu2.make.com/i6jkiqt1eymegal21iage8pr7behjt8r" , {
        method : "POST",
        headers : 
        {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Form is submitted successfully : " , data);
    })
    .catch(error => {
        console.log("Error submitting the form : " , error);
    })
})

