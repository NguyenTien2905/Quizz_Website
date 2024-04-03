


function togglePassword() {
  var passwordInput = document.getElementById("password");
  var toggleButton = document.getElementById("toggleButton");
  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.textContent = "Ẩn";
  } else {
    passwordInput.type = "password";
    toggleButton.textContent = "Hiện";
  }
}
function toggleRepassword() {
  var passwordInput = document.getElementById("repassword");
  var toggleButton = document.getElementById("toggleButtonRepass");
  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.textContent = "Ẩn";
  } else {
    passwordInput.type = "password";
    toggleButton.textContent = "Hiện";
  }
}

function notiSuccess() {
  event.preventDefault();
  var password = document.getElementById('password').value;
  var repassword = document.getElementById('repassword').value;

  if (password == "" || repassword == ""){
    return alert('Không bỏ trống');
  } else if ( password != repassword){
    return alert('Mật khẩu nhập lại không khớp');
  } else {
    return alert('Tạo mật khẩu thành công');
  }
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Thực hiện xác thực tài khoản ở đây. Đây chỉ là ví dụ đơn giản.
    if (username === "js" && password === "123") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("user-container").style.display = "block";
        document.getElementById("user-avatar").innerText = username;
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng");
    }
}
