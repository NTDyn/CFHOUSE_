function send(){
    var arr=document.getElementsByTagName('input');
    var name=arr[0].value;
    var cccd=arr[1].value;
    var age=arr[2].value;
    var sdt=arr[3].value;
    var email=arr[4].value;
    var gender="";
    var vt=arr[7].value;
    if (arr[5].checked){
        gender=arr[5].value;
    }else{
        gender=arr[6].value;
    }

    if (name == "" || cccd == "" || age == "" || sdt == "" || email == "" || vt==""){
        alert("Vui lòng điền thông tin vào form");
        return;
    }

    if (isNaN(age)){ //Kiem tra xem age co phai la so hay khong
        alert("Vui lòng nhập tuổi cần phải là số");
        return;
    }

    var choice = confirm("Thông tin của bạn vừa nhập là\n" + "Tên của bạn: " + name
    + "\n" + "Số CCCD/CMND: " + cccd + "\n" + "Tuổi của bạn: " + age +"\n"
    + "Số điện thoại của bạn: " + sdt +"\n" + "Email của bạn: " + email + "\n"
    + "Giới tính: " + gender)

    if (choice==1){
        alert("Thông tin đã được gửi đi!");
    }

    console.log(arr);
}

    function resetForm(){
        document.getElementsByTagName('form')[0].reset();
    }

    
   