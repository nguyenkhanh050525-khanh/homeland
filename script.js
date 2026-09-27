const form = document.getElementById("registerForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;

        let message = document.getElementById("message");

        if (name === "" || phone === "" || email === "") {

            message.textContent =
                "Vui lòng nhập đầy đủ thông tin!";

            message.style.color = "red";

        } else {

            message.textContent =
                "Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn.";

            message.style.color = "green";

            form.reset();
        }
    });
}


function sendMessage() {

    alert("Cảm ơn bạn! Tin nhắn đã được gửi.");

}