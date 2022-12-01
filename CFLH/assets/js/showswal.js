let usernameValue = $('#userNameEle').val();
let phoneValue = $('#userPhoneEle').val();
let contentValue = $('#userContentEle').val();

$('#btn-send-lh').click(function(){
    if(usernameValue == '' || phoneValue =='' || contentValue =='')
    {
        Swal.fire({
            text: 'VUI LÒNG ĐIỀN ĐẦY ĐỦ THÔNG TIN',
            icon: 'error',
            timer: 1700
        })
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

