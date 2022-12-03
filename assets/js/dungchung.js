function addHeader() {
    document.write(`
    <header> 
    <div class="topbar">
        <div class="container">
            <div class="topbar-row">
                <div class="topbar-left">
                    <ul>
                        <li> 
                            <span class="welcome-text">Chào mừng bạn đến với Coffee House</span>
                        </li>
                    </ul>
                </div>
                <div class="topbar-right">
                    <div class="f-right">
                        <ul class="ul-account">
                            <li>
                                <a href="./register.html" title="Đăng ký">Đăng ký</a>
                            </li>
                            <li class="line">/</li>
                            <li>
                                <a href="./log-in.html" title="Đăng nhập">Đăng nhập</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mid-header">
        <div class="container">
            <div class="mid-header-row">
                <div class="header-nav">
                    <ul class="nav-left">
                        <li class="nav-item ">
                            <a class="a-img active" href="./index.html">
                                Trang chủ
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="a-img " href="./GT.html">
                                Giới thiệu
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="a-img ">
                                Sản phẩm
                                <i class="fa-solid fa-caret-down"></i>
                            </a>
                            <ul class="subnav">
                                <li class="subnav-item" onclick="location.href='./CFHOUSE/caphethegioi.html' ;">Cà phê thế giới</li>
                                <li class="subnav-item"  onclick="location.href='./CFHOUSE/caphephaviet.html' ;">Cà phê pha Việt</li>
                                <li class="subnav-item"  onclick="location.href='./CFHOUSE/caphecamhung.html' ;">Cà phê cảm hứng</li>
                                <li class="subnav-item"  onclick="location.href='./CFHOUSE/douong.html' ;">Đồ uống</li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="logo_center">
                        <li class="logo">
                            <a href="../index.html" class="logo-wrapper">
                                <img src="./assets/img/logo/logo-img.webp" alt="" class="logo-img">
                            </a>
                        </li>
                    </ul>
                    <ul class="nav-right">
                        <li class="nav-item">
                            <a class="a-img " href="./TD1.html">
                                Tuyển Dụng
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="a-img " href="./News/tintuccf.html">
                                Tin tức
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="a-img " href="./CFLH/lienhe.html">
                                Liên hệ
                            </a>
                        </li>
                    </ul>
                    <div class="cart f-right">
                        <div class="cart-contain">
                            <a  style="text-decoration: none;">
                                <div class="visible-index">
                                    <i class="fa-solid fa-bag-shopping active" id="btn-cart-icon" style="font-size: 25px;"></i>
                                    <span class="count-item">0</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </d>
            </div>
        </div>
    </div>
</header>  
    `)
}

function addFooter() {
    document.write(`
    <div class="footer">
        <div class="container">
            <div class="box-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.669726937899!2d106.68006961471826!3d10.759917092332728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b7c3ed289%3A0xa06651894598e488!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTw6BpIEfDsm4!5e0!3m2!1svi!2s!4v1665803105945!5m2!1svi!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="footer-contact">

                <div class="infor">
                    <ul class="contact">
                        <span>CHÚNG TÔI LÀ COFFEE HOUSE</span>
                        <li>
                            <i class="fa-solid fa-location-dot"></i>
                            <a>Trụ sở chính: Tầng 6 toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Hà Nội</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-phone"></i>
                            <a href="tel:19006750">19006750</a>
                        </li>
                        <li>
                            <i class="fa-regular fa-envelope"></i>
                            <a href="mailto:sapo.theme@gmail.com">sapo.theme@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div class="follow-option">
                    <ul>
                        <li>
                            <a href="">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="customer-care">
                    <ul class="list-menu">
                        <span>CHĂM SÓC KHÁCH HÀNG</span>
                        <li><a href="">Trang chủ</a></li>
                        <li><a href="">Giới thiệu</a></li>
                        <li><a href="">Sản phẩm</a></li>
                        <li><a href="">Dịch vụ</a></li>
                        <li><a href="">Tin tức</a></li>
                        <li><a href="">Liên hệ</a></li>
                    </ul>
                </div>
                <div class="contact-us">
                    <ul class="title-menu">
                        <span>LIÊN HỆ VỚI CHÚNG TÔI</span>
                        <li><a href="">Trang chủ</a></li>
                        <li><a href="">Giới thiệu</a></li>
                        <li><a href="">Sản phẩm</a></li>
                        <li><a href="">Dịch vụ</a></li>
                        <li><a href="">Tin tức</a></li>
                        <li><a href="">Liên hệ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `)
}

function User(name,password, email, phone) {
	this.name = name || '';
	this.email = email || '';
	this.password = password || '';
	this.phone = phone || '';
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('CurrentUser'));
}
function setCurrentUser(u) {
    localStorage.setItem('CurrentUser', JSON.stringify(u));
}

function getListUser() {
    var data = JSON.parse(localStorage.getItem('ListUser')) || []
    var l = [];
    for (var d of data) {
        l.push(d);
    }
    return l;
}

function setListUser(l) {
    localStorage.setItem('ListUser', JSON.stringify(l));
}

function updateListUser(u, newData) {
    var list = getListUser();
    for (var i = 0; i < list.length; i++) {
        if (equalUser(u, list[i])) {
            list[i] = (newData ? newData : u);
        }
    }
    setListUser(list);
}

function equalUser(u1, u2) {
	return (u1.username == u2.username && u1.pass == u2.pass);
}

function logIn(e) {
    // event.preventDefault();
    var name = document.querySelector("#name").value;
    var password = document.querySelector("#password").value;
    // var newUser = new User(name, password);
    // var listUser = getListUser();
    // for(var u of listUser) {
    //     if(u.name == newUser.name && u.password == newUser.password) {
    //         alert("Đăng nhập thành công");
    //         location.href = "index.html";
    //     } else if(u.name != newUser.name && u.password == newUser.password || u.name == newUser.name && u.password != newUser.password) {
    //         alert("username hoặc password sai!!");
    //     } else {
    //         alert("Tài khoản chưa được đăng kí!!");
    //     }
    // }
    for (var u of listUser) {
        if (equalUser(newUser, u)) {
            alert("Đăng nhập thành công!!");
            setCurrentUser(u);

            // Reload lại trang -> sau khi reload sẽ cập nhật luôn giỏ hàng khi hàm setupEventTaiKhoan chạy
            location.reload();
            return false;
        }
    }
   
}



function signUp(e) {
    event.preventDefault();
    var topBarRight = document.querySelector(".topbar-right")
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var phone = document.querySelector("#phone").value;
    var newUser = new User(name, password, email, phone);
    // var user = {
    //     username : name,
    //     email : email,
    //     password : password,
    //     phone : phone
    // }

    // Lấy dữ liệu các khách hàng hiện có
    var listUser = getListUser();
    
    // Kiểm tra xem dữ liệu form có trùng với khách hàng đã có không
    for (var u of listUser) {
        if (newUser.name == u.name) {
            alert('Tên đăng nhập đã có người sử dụng !!');
            return false;
        }
    }
    
    // // Lưu người mới vào localstorage
    listUser.push(newUser);
    localStorage.setItem('ListUser', JSON.stringify(listUser));
    
    // // Đăng nhập vào tài khoản mới tạo
    localStorage.setItem('CurrentUser', JSON.stringify(newUser));
    // alert('Đăng kí thành công, Bạn sẽ được tự động đăng nhập!');
    alert('Đăng kí thành công, Bạn sẽ được tự động đăng nhập!');
    window.location.href = "index.html";
    return false;
}

function logOut() {
    localStorage.removeItem('CurrentUser');
    location.reload();
}


