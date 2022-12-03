
 $('#btn-order').click(function(){

    let name = $('#nameCus').val();
    let phone = $('#phoneCus').val();
    let day =$('#dayCus').val();
    let time =$('#timeCus').val();

    if(name == '' || phone == '' || day=='' ||time == '')
    {
        Swal.fire('Vui lòng điền đầy đủ thông tin!')
        return;
    }

    var test_phone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if(test_phone.test(phone) == false){
        Swal.fire({
           title: 'Định dạng số điện thoại không hợp lệ!',
           customClass: 'swal-wide',
        })
    }
    else{
            Swal.fire({ 
                icon: 'success',
                title: 'Đặt bàn thành công!',
                showConfirmButton: false,
                timer: 1500,
                customClass: 'swal-wide'
            })
        }
 })


