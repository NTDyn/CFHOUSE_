


$('#btn-send-lh').click(function(){

    let usernameValue = $('#userNameEle').val();
    let phoneValue = $('#userPhoneEle').val();
    let contentValue = $('#comment').val();

    if(usernameValue == '' || phoneValue =='' || contentValue == ''){
       
        Swal.fire(' Vui lòng điền đầy đủ thông tin!');
        return;
    }
    
    var test_phone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if(test_phone.test(phoneValue) == false){
        Swal.fire('Định dạng số điện thoại không hợp lệ!')
    }
    
    else
    {
        Swal.fire({
            text: 'ĐÃ GỬI THÀNH CÔNG',
            icon: 'success',
            timer: 1700
        })
    }
})

