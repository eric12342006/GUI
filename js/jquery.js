/**
 * Created by tmnb02 on 2/12/2016.
 */
$(document).ready(function(){
    $(".catbtn").click(function(){
        $("#img1").attr("src","Novels/bk1.jpg");
        $("#img2").attr("src","Novels/bk2.jpg");
        $("#img3").attr("src","Novels/bk3.jpg");
        $("#img4").attr("src","Novels/bk4.jpg");
        $("#img5").attr("src","Novels/bk5.jpg");
        $("#img6").attr("src","Novels/bk6.jpg");
        $("#img7").attr("src","Novels/bk7.jpg");
        $("#img8").attr("src","Novels/bk8.jpg");

        $("#bk1").attr("href","detail.html?bk=Novels/bk1.jpg&BT=N1");
        $("#bk2").attr("href","detail.html?bk=Novels/bk2.jpg&BT=N2");
        $("#bk3").attr("href","detail.html?bk=Novels/bk3.jpg&BT=N3");
        $("#bk4").attr("href","detail.html?bk=Novels/bk4.jpg&BT=N4");
        $("#bk5").attr("href","detail.html?bk=Novels/bk5.jpg&BT=N5");
        $("#bk6").attr("href","detail.html?bk=Novels/bk6.jpg&BT=N6");
        $("#bk7").attr("href","detail.html?bk=Novels/bk7.jpg&BT=N7");
        $("#bk8").attr("href","detail.html?bk=Novels/bk8.jpg&BT=N8");
    });
});

$(document).ready(function(){
    $(".catbtn1").click(function(){
        $("#img1").attr("src","textbook/textbook1.jpg");
        $("#img2").attr("src","textbook/textbook2.jpg");
        $("#img3").attr("src","textbook/textbook3.jpg");
        $("#img4").attr("src","textbook/textbook4.jpg");
        $("#img5").attr("src","textbook/textbook5.jpg");
        $("#img6").attr("src","textbook/textbook6.jpg");
        $("#img7").attr("src","textbook/textbook7.jpg");
        $("#img8").attr("src","textbook/textbook8.jpg");

        $("#bk1").attr("href","detail.html?bk=textbook/textbook1.jpg&BT=TB1");
        $("#bk2").attr("href","detail.html?bk=textbook/textbook2.jpg&BT=TB2");
        $("#bk3").attr("href","detail.html?bk=textbook/textbook3.jpg&BT=TB3");
        $("#bk4").attr("href","detail.html?bk=textbook/textbook4.jpg&BT=TB4");
        $("#bk5").attr("href","detail.html?bk=textbook/textbook5.jpg&BT=TB5");
        $("#bk6").attr("href","detail.html?bk=textbook/textbook6.jpg&BT=TB6");
        $("#bk7").attr("href","detail.html?bk=textbook/textbook7.jpg&BT=TB7");
        $("#bk8").attr("href","detail.html?bk=textbook/textbook8.jpg&BT=TB8");
    });
});

$(document).ready(function(){
    $(".catbtn2").click(function(){
        $("#img1").attr("src","Travels/bk1.jpg");
        $("#img2").attr("src","Travels/bk2.jpg");
        $("#img3").attr("src","Travels/bk3.jpg");
        $("#img4").attr("src","Travels/bk4.jpg");
        $("#img5").attr("src","Travels/bk5.jpg");
        $("#img6").attr("src","Travels/bk6.jpg");
        $("#img7").attr("src","Travels/bk7.jpg");
        $("#img8").attr("src","Travels/bk8.jpg");

        $("#bk1").attr("href","detail.html?bk=Travels/bk1.jpg&BT=Tr1");
        $("#bk2").attr("href","detail.html?bk=Travels/bk2.jpg&BT=Tr2");
        $("#bk3").attr("href","detail.html?bk=Travels/bk3.jpg&BT=Tr3");
        $("#bk4").attr("href","detail.html?bk=Travels/bk4.jpg&BT=Tr4");
        $("#bk5").attr("href","detail.html?bk=Travels/bk5.jpg&BT=Tr5");
        $("#bk6").attr("href","detail.html?bk=Travels/bk6.jpg&BT=Tr6");
        $("#bk7").attr("href","detail.html?bk=Travels/bk7.jpg&BT=Tr7");
        $("#bk8").attr("href","detail.html?bk=Travels/bk8.jpg&BT=Tr8");
    });
});



/*********************************/
var cart = [];
var duplicate = false;
var tempName;

var Item = function(name, price, count){
    this.name = name;
    this.price = price;
    this.count = count;
};

function addItemToCart(name,price,count){
    if(cart.length == 0){
        var item = new Item(name, price, count);
        cart.push(item);
        console.log(cart);
    }else {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].name == name) {
                var tempCount = Number(cart[i].count) + count;
                cart[i].count = tempCount;
                console.log(cart);
                duplicate = true;
            }
        }
        if(!duplicate){
            var item = new Item(name, price, count);
            cart.push(item);
            console.log(cart);
        }
    }

    totalCart();
    saveCart();
}

function saveCart(){
    localStorage.setItem("shoppingCart",JSON.stringify(cart));
}

function removeItemFromCart(name){ //Remove one item
    for (var i in cart){
        if(cart[i].name === name){
            cart[i].count --;
            if(cart[i].count === 0){
                cart.splice(i, 1);
            }
            break;
        }
    }
    saveCart();
    location.reload();
}

function removeAllItemFromCart(name){ // removes all item with name
    console.log(name);
    for(var i in cart){
        if(cart[i].name === name){
            cart.splice(i, 1);
            break;
        }
    }
    saveCart();
    location.reload();
}

function displayCart(){
    var cartArray =  JSON.parse(localStorage.getItem("shoppingCart"));
    var totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    var output = "";
    for (var i in cartArray){
       tempName = cartArray[i].name;
       console.log(tempName);
       output += "<li>"+cartArray[i].name+" "+cartArray[i].price+" "+cartArray[i].count+"<input type='button' value='DELETE ONE' onclick='removeItemFromCart(tempName)'>"+"<input type='button' value='DELETE ALL' onclick='removeAllItemFromCart(tempName)'>"+"</li>";
    }
    $("#show-cart").html(output);
    $("#total-cart").html(totalPrice);
}

function totalCart(){
    var totalCost = 0;
    for (var i in cart){
            totalCost += cart[i].price * cart[i].count;
    }
    localStorage.setItem("totalPrice",JSON.stringify(totalCost));
    console.log(totalCost);
    return totalCost;
}

function loadCart(){
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
    console.log(cart);
    totalCart();
}

function saveAsOrder(){
    //var check = localStorage.getItem('Order');
   // if (typeof check !== 'undefined' && check !== null){
    //}
   // var abc = [];
    //localStorage.setItem("shoppingCart",JSON.stringify(abc));

    //var cartArray =  JSON.parse(localStorage.getItem("shoppingCart"));
   // console.log(cartArray);
    var oldOrder = JSON.parse(localStorage.getItem("order"));
    oldOrder.push(oldOrder);

    var cartArray =  JSON.parse(localStorage.getItem("shoppingCart"));
    localStorage.setItem("order",JSON.stringify(cartArray));
    var check = localStorage.getItem('order');
    oldOrder.push(cartArray);
    console.log(check);
    var totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    var bonusPoint = Number(totalPrice)/10;
    localStorage.setItem("bonusPoint",JSON.stringify(bonusPoint));

   var abc = [];
   localStorage.setItem("shoppingCart",JSON.stringify(abc));
}

function displayOrder(){
    var orderArray =  JSON.parse(localStorage.getItem("order"));
    var totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    var output = "";
    for (var i in orderArray){
        tempName = orderArray[i].name;
        console.log(tempName);
        output += "<li>"+orderArray[i].name+" "+orderArray[i].price+" "+orderArray[i].count+"</li>";
    }
    $("#show-cart").html(output);
    $("#total-cart").html(totalPrice);
}

function loadCart(){
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
    console.log(cart);
}

function loadBonusPoint(){
    var bonusPoint = JSON.parse(localStorage.getItem("bonusPoint"));
    localStorage.setItem("bonusPoint",JSON.stringify(bonusPoint));
    $("#BonusPoint").html(bonusPoint);
    console.log(bonusPoint);
}

function getGift(bonusPoint){
    var yourPoint = JSON.parse(localStorage.getItem("bonusPoint"));
    if(yourPoint < bonusPoint){
        alert("Your point is not enough");
    }else{
        yourPoint = Number(yourPoint)-Number(bonusPoint);
        localStorage.setItem("bonusPoint",JSON.stringify(yourPoint));
        alert("Changed Gift");
        location.reload();
    }
}

