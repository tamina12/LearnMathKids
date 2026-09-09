const registerForm = document.querySelector("#registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const username = document.querySelector("#username").value.trim();
        const grade = document.querySelector("#grade").value;
        const password = document.querySelector("#password").value;
        const confirmPassword =
            document.querySelector("#confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const student = {
            name: name,
            username: username,
            grade: grade,
            xp: 0,
            streak: 0,
            achievements: []
        };

        localStorage.setItem(
            "learnMathStudent",
            JSON.stringify(student)
        );

        alert("Account created! 🎉");

        window.location.href = "dashboard.html";
    });
}
