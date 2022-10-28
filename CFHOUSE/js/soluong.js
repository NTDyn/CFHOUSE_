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