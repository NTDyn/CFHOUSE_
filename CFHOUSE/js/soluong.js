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
    let name = $(this).text(); // this=plus-inus-qty
    let el = $(this).closest("div").find(".input-qty");
    if(name=='+')
        plus(el);
    else
        minus(el);

})

$(document).on('click','.btn-x',function(){
   $(this).closest('tr').remove();
});

let dataCart = [];

$('#btn-add-cart').click(function(){
let productName = $(this).closest('.modal-content').find('.col-sm-8').find('h2').text(); // dò để phân biệt tên từng ản phẩm
let quantity = $(this).closest('.modal-content').find('.col-sm-8').find('.input-qty').val(); // so luong dat hang
let price = 50000;
let maProduct ;
let objProduct = {
    "Name":productName,
    "Quantity":quantity,
    "Price":price,
    "ID": maProduct
}
dataCart.push(objProduct);
let lengthCart = $("#tbody-cart-cfthegioi").find('tr').length;
let strTrBody = "";
strTrBody += "<tr>";
strTrBody += '<td class="td-cart ">'+(lengthCart + 1)+'</td>';
strTrBody += '<td class="td-cart cart-items">'+(objProduct.Name)+'</td>';
strTrBody += '<td class="td-cart">'+(objProduct.Price)+'</td>';
strTrBody += '<td class="td-cart">'+(objProduct.Quantity)+'</td>';
strTrBody += '<td class="td-cart " ><i class="fa fa-close btn-x"></i></td>';
strTrBody += "</tr>";
$("#tbody-cart-cfthegioi").append(strTrBody); // de them strTrBody vao trong bang san pham
totalPrice();
 // push vao array 
});

function totalPrice(){
    let total = 0;
    $.each(dataCart,function(i, el){
        total += (el.Quantity * el.Price);
    })
    $('#total-cart').text('Tong tien:           ' + total);

}