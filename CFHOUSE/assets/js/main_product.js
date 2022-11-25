let dataCart = [];

// data of product
let dataProduct = [
    {
        "ID": 1,
        "CategoryID": [1,2,3,4],
        "Name": "CÀ PHÊ TRỨNG",
        "Image": "./assets/img/cftrung.jpg",
        "Content": "Cà phê Trứng được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột; sau đó trải qua quá trình sàng lọc, rang xay dưới sự kiểm soát nghiêm ngặt về nhiệt độ và thời gian để đạt đến đỉnh cao của mùi thơm, độ nở và hương vị riêng biệt. Sự hài hòa trong tỷ lệ pha trộn giữa hạt cà phê Robusta và Arabica mang đến cho khách hàng những ly cà phê pha máy – kiểu Ý nhưng vẫn đậm đà bản sắc và đặc trưng của văn hóa nước Việt Nam.",
        "Price": 50000
    },
    {
        "ID": 2,
        "CategoryID": [1,4],
        "Name": "CÀ PHÊ THE CAIPIRINHA",
        "Image": "./assets/img/caipirinha.jpg",
        "Content": "Cà phê The Caipirinha được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột; sau đó trải qua quá trình sàng lọc, rang xay dưới sự kiểm soát nghiêm ngặt về nhiệt độ và thời gian để đạt đến đỉnh cao của mùi thơm, độ nở và hương vị riêng biệt. Sự hài hòa trong tỷ lệ pha trộn giữa hạt cà phê Robusta và Arabica mang đến cho khách hàng những ly cà phê pha máy – kiểu Ý nhưng vẫn đậm đà bản sắc và đặc trưng của văn hóa nước Việt Nam.",
        "Price": 50000
    },
    {
        "ID": 3,
        "CategoryID": [1],
        "Name": "CÀ PHÊ MOCHA",
        "Image": "./assets/img/mocha.jpg",
        "Content": "Cà phê Mocha được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột; sau đó trải qua quá trình sàng lọc, rang xay dưới sự kiểm soát nghiêm ngặt về nhiệt độ và thời gian để đạt đến đỉnh cao của mùi thơm, độ nở và hương vị riêng biệt. Sự hài hòa trong tỷ lệ pha trộn giữa hạt cà phê Robusta và Arabica mang đến cho khách hàng những ly cà phê pha máy – kiểu Ý nhưng vẫn đậm đà bản sắc và đặc trưng của văn hóa nước Việt Nam.",
        "Price": 66000
    },
    {
        "ID": 4,
        "CategoryID": [1],
        "Name": "CÀ PHÊ LATTE",
        "Image": "./assets/img/latte.jpg",
        "Content": "Cà phê Latte được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột; sau đó trải qua quá trình sàng lọc, rang xay dưới sự kiểm soát nghiêm ngặt về nhiệt độ và thời gian để đạt đến đỉnh cao của mùi thơm, độ nở và hương vị riêng biệt. Sự hài hòa trong tỷ lệ pha trộn giữa hạt cà phê Robusta và Arabica mang đến cho khách hàng những ly cà phê pha máy – kiểu Ý nhưng vẫn đậm đà bản sắc và đặc trưng của văn hóa nước Việt Nam.",
        "Price": 130000
    },
    {
        "ID": 5,
        "CategoryID": [1,2,3,4],
        "Name": "CÀ PHÊ CAPUCHINO",
        "Image": "./assets/img/capuchino.jpg",
        "Content": "Cà phê MCapuchino được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột; sau đó trải qua quá trình sàng lọc, rang xay dưới sự kiểm soát nghiêm ngặt về nhiệt độ và thời gian để đạt đến đỉnh cao của mùi thơm, độ nở và hương vị riêng biệt. Sự hài hòa trong tỷ lệ pha trộn giữa hạt cà phê Robusta và Arabica mang đến cho khách hàng những ly cà phê pha máy – kiểu Ý nhưng vẫn đậm đà bản sắc và đặc trưng của văn hóa nước Việt Nam.",
        "Price": 300000
    },
    {
        "ID": 6,
        "CategoryID": [1,3,4],
        "Name": "CÀ PHÊ EPRESSO CON PANDA",
        "Image": "./assets/img/espressopanda.jpg",
        "Content": "Cà phê Epresso con Panda được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột; sau đó trải qua quá trình sàng lọc, rang xay dưới sự kiểm soát nghiêm ngặt về nhiệt độ và thời gian để đạt đến đỉnh cao của mùi thơm, độ nở và hương vị riêng biệt. Sự hài hòa trong tỷ lệ pha trộn giữa hạt cà phê Robusta và Arabica mang đến cho khách hàng những ly cà phê pha máy – kiểu Ý nhưng vẫn đậm đà bản sắc và đặc trưng của văn hóa nước Việt Nam.",
        "Price": 120000
    },
    {
        "ID": 7,
        "CategoryID": [1,2,3],
        "Name": "CÀ PHÊ EPRESSO ",
        "Image": "./assets/img/espresso.jpg",
        "Content": "Cà phê Epresso được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột; sau đó trải qua quá trình sàng lọc, rang xay dưới sự kiểm soát nghiêm ngặt về nhiệt độ và thời gian để đạt đến đỉnh cao của mùi thơm, độ nở và hương vị riêng biệt. Sự hài hòa trong tỷ lệ pha trộn giữa hạt cà phê Robusta và Arabica mang đến cho khách hàng những ly cà phê pha máy – kiểu Ý nhưng vẫn đậm đà bản sắc và đặc trưng của văn hóa nước Việt Nam.",
        "Price": 200000
    },
    {
        "ID": 8,
        "CategoryID": [1,2,3],
        "Name": "CÀ PHÊ AMERICANO",
        "Image": "./assets/img/americano.jpg",
        "Content": "Cà phê Americano được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột; sau đó trải qua quá trình sàng lọc, rang xay dưới sự kiểm soát nghiêm ngặt về nhiệt độ và thời gian để đạt đến đỉnh cao của mùi thơm, độ nở và hương vị riêng biệt. Sự hài hòa trong tỷ lệ pha trộn giữa hạt cà phê Robusta và Arabica mang đến cho khách hàng những ly cà phê pha máy – kiểu Ý nhưng vẫn đậm đà bản sắc và đặc trưng của văn hóa nước Việt Nam.",
        "Price": 150000
    },
    {
        "ID": 9,
        "CategoryID": [1,2,3,4],
        "Name": "CÀ PHÊ SỮA",
        "Image": "./assets/img/cfsua.jpg",
        "Content": "Cà phê sữa được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột; sau đó trải qua quá trình sàng lọc, rang xay dưới sự kiểm soát nghiêm ngặt về nhiệt độ và thời gian để đạt đến đỉnh cao của mùi thơm, độ nở và hương vị riêng biệt. Sự hài hòa trong tỷ lệ pha trộn giữa hạt cà phê Robusta và Arabica mang đến cho khách hàng những ly cà phê pha máy – kiểu Ý nhưng vẫn đậm đà bản sắc và đặc trưng của văn hóa nước Việt Nam.",
        "Price": 100000
    },
    {
        "ID": 10,
        "CategoryID": [2,4],
        "Name": "CÀ PHÊ COCOAPRESSO",
        "Image": "./assets/img/cocoapresso.jpg",
        "Content": "Cà phê Cocoapresso được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột; sau đó trải qua quá trình sàng lọc, rang xay dưới sự kiểm soát nghiêm ngặt về nhiệt độ và thời gian để đạt đến đỉnh cao của mùi thơm, độ nở và hương vị riêng biệt. Sự hài hòa trong tỷ lệ pha trộn giữa hạt cà phê Robusta và Arabica mang đến cho khách hàng những ly cà phê pha máy – kiểu Ý nhưng vẫn đậm đà bản sắc và đặc trưng của văn hóa nước Việt Nam.",
        "Price": 79000,
    },
    {
        "ID": 11,
        "CategoryID": [2],
        "Name": "CÀ PHÊ MATCHAPRESSO",
        "Image": "./assets/img/matcha.jpg",
        "Content": "Cà phê Matchapresso được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột; sau đó trải qua quá trình sàng lọc, rang xay dưới sự kiểm soát nghiêm ngặt về nhiệt độ và thời gian để đạt đến đỉnh cao của mùi thơm, độ nở và hương vị riêng biệt. Sự hài hòa trong tỷ lệ pha trộn giữa hạt cà phê Robusta và Arabica mang đến cho khách hàng những ly cà phê pha máy – kiểu Ý nhưng vẫn đậm đà bản sắc và đặc trưng của văn hóa nước Việt Nam.",
        "Price": 89000,
    },
    {
        "ID": 12,
        "CategoryID": [2,3],
        "Name": "CÀ PHÊ THE METRO",
        "Image": "./assets/img/metro.jpg",
        "Content": "Cà phê The Metro được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột; sau đó trải qua quá trình sàng lọc, rang xay dưới sự kiểm soát nghiêm ngặt về nhiệt độ và thời gian để đạt đến đỉnh cao của mùi thơm, độ nở và hương vị riêng biệt. Sự hài hòa trong tỷ lệ pha trộn giữa hạt cà phê Robusta và Arabica mang đến cho khách hàng những ly cà phê pha máy – kiểu Ý nhưng vẫn đậm đà bản sắc và đặc trưng của văn hóa nước Việt Nam.",
        "Price": 50000,
    },
    {
        "ID": 13,
        "CategoryID": [2],
        "Name": "BẠC XỈU ",
        "Image": "./assets/img/bacxiu.jpg",
        "Content": "Bạc xỉu được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột; sau đó trải qua quá trình sàng lọc, rang xay dưới sự kiểm soát nghiêm ngặt về nhiệt độ và thời gian để đạt đến đỉnh cao của mùi thơm, độ nở và hương vị riêng biệt. Sự hài hòa trong tỷ lệ pha trộn giữa hạt cà phê Robusta và Arabica mang đến cho khách hàng những ly cà phê pha máy – kiểu Ý nhưng vẫn đậm đà bản sắc và đặc trưng của văn hóa nước Việt Nam.",
        "Price": 50000,
    },
    {
        "ID": 14,
        "CategoryID": [3,4],
        "Name": "CÀ PHÊ MOJITO PRESSO ",
        "Image": "./assets/img/mojitoespresso.jpg",
        "Content": "Cà phê Mojito Epresso được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột; sau đó trải qua quá trình sàng lọc, rang xay dưới sự kiểm soát nghiêm ngặt về nhiệt độ và thời gian để đạt đến đỉnh cao của mùi thơm, độ nở và hương vị riêng biệt. Sự hài hòa trong tỷ lệ pha trộn giữa hạt cà phê Robusta và Arabica mang đến cho khách hàng những ly cà phê pha máy – kiểu Ý nhưng vẫn đậm đà bản sắc và đặc trưng của văn hóa nước Việt Nam.",
        "Price": 130000,
    },
    {
        "ID": 15,
        "CategoryID": [3],
        "Name": "CÀ PHÊ THE RAINBOW",
        "Image": "./assets/img/rainbow.jpg",
        "Content": "Cà phê The Rainbow được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột; sau đó trải qua quá trình sàng lọc, rang xay dưới sự kiểm soát nghiêm ngặt về nhiệt độ và thời gian để đạt đến đỉnh cao của mùi thơm, độ nở và hương vị riêng biệt. Sự hài hòa trong tỷ lệ pha trộn giữa hạt cà phê Robusta và Arabica mang đến cho khách hàng những ly cà phê pha máy – kiểu Ý nhưng vẫn đậm đà bản sắc và đặc trưng của văn hóa nước Việt Nam.",
        "Price": 90000,
    },
    {
        "ID": 16,
        "CategoryID": [4],
        "Name": "CÀ PHÊ COCOACINO LATTE",
        "Image": "./assets/img/cococino.jpg",
        "Content": "Cà phê Cocoacino Latte được chọn lọc kỹ lưỡng từ vùng đất đỏ bazan Buôn Mê Thuột; sau đó trải qua quá trình sàng lọc, rang xay dưới sự kiểm soát nghiêm ngặt về nhiệt độ và thời gian để đạt đến đỉnh cao của mùi thơm, độ nở và hương vị riêng biệt. Sự hài hòa trong tỷ lệ pha trộn giữa hạt cà phê Robusta và Arabica mang đến cho khách hàng những ly cà phê pha máy – kiểu Ý nhưng vẫn đậm đà bản sắc và đặc trưng của văn hóa nước Việt Nam.",
        "Price": 86000,
    }
]
//Save data during pages
$(document).ready(function(){
    let strSession = localStorage.getItem('sessionDataCart');
    dataCart = JSON.parse(strSession);
    appendHtmlCart();
    totalPrice();
    getNumberItems(); 
})


// function about the number of product ordered
function plus(_el)
{
    let num = parseInt(_el.val());
    num += 1;
    _el.val(num);
}
function minus(_el)
{
    let num=parseInt(_el.val());
    num --;
    if(num<1)
    num=1;
    _el.val(num);
}
$(".plus-minus-qty").click(function(){
    let name = $(this).text(); 
    let el = $(this).closest("div").find(".input-qty");
    if(name=='+')
        plus(el);
    else
        minus(el);

})

// function about remove ordered product 
$(document).on('click','.btn-x',function(){
    let id = $(this).closest('tr').attr('id');
    dataCart = $.grep(dataCart,function(el){
        return el.ID != parseInt(id);
    });
    localStorage.setItem("sessionDataCart", JSON.stringify(dataCart));
    getNumberItems();
    totalPrice();
   $(this).closest('tr').remove();
});


// function about add information of ordered product to modal-cart
$('#btn-add-cart').click(function(){
    let quantity = $(this).closest('.modal-content').find('.col-sm-8').find('.input-qty').val(); // so luong dat hang
    let strData = $(this).attr('data');
    let data = JSON.parse(strData);
    let lengthCart = $("#tbody-cart").find('tr').length;
    let objProduct = {
        "Name":data.Name,
        "Quantity":quantity,
        "Price":data.Price,
        "ID": lengthCart
    }
    dataCart.push(objProduct);
    localStorage.setItem("sessionDataCart", JSON.stringify(dataCart));
    appendHtmlCart();
    totalPrice();
    $('#modal-detail').modal('hide');
    getNumberItems(); 
    Swal.fire({
        icon: 'success',
        title: 'Đã thêm thành công',
        showConfirmButton: false,
        timer: 1500
      })
});

function appendHtmlCart(){
    $("#tbody-cart").empty();
    if(dataCart.length != 0){
        $.each(dataCart,function(k,v){
            let strTrBody = "";
            strTrBody += "<tr id="+(v.ID)+">";
            strTrBody += '<td class="td-cart ">'+(k + 1)+'</td>';
            strTrBody += '<td class="td-cart cart-items">'+(v.Name)+'</td>';
            strTrBody += '<td class="td-cart">'+(v.Price)+'</td>';
            strTrBody += '<td class="td-cart">'+(v.Quantity)+'</td>';
            strTrBody += '<td class="td-cart " ><i class="fa fa-close btn-x"></i></td>';
            strTrBody += "</tr>";
            $("#tbody-cart").append(strTrBody); 
        })
    }
}
//function about total price of ordered product
function totalPrice(){
    let total = 0;
    $.each(dataCart,function(i, el){
        total += (el.Quantity * el.Price);
    })
    $('#total-cart').text('TỔNG TIỀN:           ' + total);

}

// function add the number of type of ordered product 
function getNumberItems(){
    let num = dataCart.length;
    $('.count-item').text(num);
}

// function open modal-cart
$('#btn-cart-icon').click(function(){
    $('#modal-cart').modal('show');
})

//function open information of product (modal-detail)
$('.show-detail').click(function(){
    $('.input-qty').val(1);
    let strData = $(this).attr('data');
    let data = JSON.parse(strData);
    valueDetail(data);
})

//fuction add information about modal-detail
function valueDetail(_data){
    let el = dataProduct.find(x=>x.ID == _data.ID);
    if(typeof el != 'undefined'){
        let indexCate = (el.CategoryID).findIndex(x=>x == _data.CategoryID);
        if(indexCate != -1){
            $('#img-detail').attr('src', el.Image);
            $('#name-detail').text(el.Name);
            $('#content-detail').text(el.Content);
            let strProduct = JSON.stringify(el);
            $('#btn-add-cart').attr('data',strProduct);
            $('#modal-detail').modal('show');
        }else{
            //loi
            console.log('error');
            Swal.fire({
                icon: 'error',
                title: 'Loại sản phẩm không tồn tại!',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Mã sản phẩm không tồn tại!',
            showConfirmButton: false,
            timer: 1500
          })

    }
}


$('.btn-pay-bill').click(function(){
    dataCart = [];
    localStorage.setItem("sessionDataCart", JSON.stringify(dataCart));
    getNumberItems();
    totalPrice();
    $('#tbody-cart').empty();
    $('#modal-cart').modal('hide');
    Swal.fire({ 
        icon: 'success',
        title: 'Thanh toán thành công',
        showConfirmButton: false,
        timer: 1500
      })
   
})
