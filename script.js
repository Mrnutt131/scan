function verifyPassword() {
    var password = document.getElementById("password").value;
    var correctPassword = "1234"; // ใส่รหัสผ่านที่ต้องการให้ตรง

    if (password === correctPassword) {
        // ซ่อนฟอร์มกรอกรหัสผ่าน
        var formContainer = document.getElementById("form-container");
        formContainer.style.opacity = 0;
        formContainer.style.transform = "scale(0)"; // สเกลเล็กลงหายไป

        // แสดงกล่องจดหมาย
        setTimeout(function() {
            var mailbox = document.getElementById("mailbox");
            mailbox.classList.add("show"); // เพิ่มคลาส show เพื่อให้กล่องจดหมายเลื่อนขึ้นมา
        }, 1000); // ตั้งเวลารอหลังจากฟอร์มหายไป 1 วินาที
    } else {
        alert("รหัสผ่านไม่ถูกต้อง!");
    }
}
