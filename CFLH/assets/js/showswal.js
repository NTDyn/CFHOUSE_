
function checkValue(){
    let usernameValue = $('#userNameEle').val();
    let phoneValue = $('#userPhoneEle').val();
    let contentValue = $('#comment').val();

    let isCheck = true;
    if(usernameValue == '' || phoneValue =='' || contentValue ==''  )
    {
        isCheck = false
    }
    return isCheck;
}


$('#btn-send-lh').click(function(){
    let value = checkValue();

   if(!value)
    {
        Swal.fire({
            text: 'VUI LÒNG ĐIỀN ĐẦY ĐỦ THÔNG TIN',
            icon: 'error',
            timer: 1700
        })
    }else
    {
        Swal.fire({
            text: 'ĐÃ GỬI THÀNH CÔNG',
            icon: 'success',
            timer: 1700
        })
    }
})

