//Validate email
function validateEmail(email){
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
//Validate Pass
function validatePassword(password){
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
}
document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if(!validateEmail(email)) return alert("Invalid email");
    if(!validatePassword(password)) return alert("Weak password");
    if(password !== confirmPassword) return alert("Passwords do not match");

    alert("Form submitted successfully!");
});