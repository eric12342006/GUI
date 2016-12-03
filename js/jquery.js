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

var Item = function(name, price, count){
    this.name = name;
    this.price = price;
    this.count = count;
};

function addItemToCart(name,price,count){
    var item = new Item(name,price,count);
    cart.push(item);
    console.log(cart);
    console.log(cart.length);

    saveCart();
}

function saveCart(){
    localStorage.setItem("shoppingCart",JSON.stringify(cart));
}

function display(){
    var cartCopy = [];
    for (var i in cart){
        var item = cart[i];
        var itemCopy = {};
        for (var p in item) {
            itemCopy[p] = item[p];
        }
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}

function listCart() {
    cart =  JSON.parse(localStorage.getItem("shoppingCart"));
    console.log(cart);
}

