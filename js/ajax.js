var userkey = "2";
var base = "http://demo.softlink.xyz/photoapp";
//var base="http://localhost/ooms";

// To Store


function pagechange(value) {
    if(value == "EMPLOYEE"){
    	window.location.href = "employee.html";
    }
    if (value == "RETAILER") {
        window.location.href = "index.html";
    } 
    if (value == "SUPPLIER") {
        window.location.href = "index2.html";
    }
   // alert(value);
}

function backvalue(){ 
var backfunction=$("#backfunction").val();
var backvalue=$("#backvalue").val();
var productcategory=$("#productcategory").val();
//alert(backfunction);
//alert(backvalue);
if((backfunction=='home')){
homeload();
}
if((backfunction=='loadcatagory')){
loadcatagory(backvalue);
}
if((backfunction=='loadproduct')){
loadproduct(productcategory);
}


}


$(document).ready(function(e) {
	
    $("#userkey").val(1);
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();

    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/username/" + userkey + "/" + usertype + "/",
            data: {}
        })
        .done(function(msg) {
            //alert(msg);
            $("#username").html(msg);
        });

		if(usertype=="EMPLOYEE"){
			$.ajax({
				type: "POST",
				url: "" + base + "/ajax/homemenu/" + userkey + "/" + usertype + "/",
				data: {}
			})
			.done(function(msg) {
				//alert(msg);
				//$("#usertype").html(msg);
			});

			return;
		}

		
		$.ajax({
            type: "POST",
            url: "" + base + "/ajax/usertype/" + userkey + "/" + usertype + "/",
            data: {}
        })
        .done(function(msg) {
            //alert(msg);
            //$("#usertype").html(msg);
        });



    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/loadgroup/" + userkey + "/" + usertype + "/",
            data: {},
            beforeSend: function() {}
        })
        .done(function(msg) {
            $('#productlist').html(msg);
        });


	
	/*
    $("#uploadimage").on('submit', (function(e) {
        e.preventDefault();		
	   $('#myModal4').modal('hide');
        //$("#message").empty();
        //$('#loading').show();
        $.ajax({
            url: "" + base + "/ajax/productupload/", // Url to which the request is send
            type: "POST", // Type of request to be send, called as method
            data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
            contentType: false, // The content type used when sending data to the server.
            cache: false, // To unable request pages to be cached
            processData: false,

            beforeSend: function() {
                openNav();
            },
            // To send DOMDocument or non processed data file it is set to false
            success: function(data) // A function to be called if request succeeds
            {
                //$('#loading').hide();
                //$("#message").html(data);
                closeNav();
                $('#myModal4').modal('hide');
            }
        });
		

    }));
	*/
});

function addmobilenumber(){
	
		$('#myModal4').modal('hide');
		 
	    var userkey = $("#userkey").val();
        var usertype = $("#usertype").val();
        var mobile = $("#mb").val();
	    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/addnegitivenumber/" + userkey + "/" + usertype + "/",
            data: {mobile:mobile},
            beforeSend: function() {}
        })
        .done(function(msg) {
				//alert(msg);
                 closeNav();
                $('#myModal4').modal('hide');
        });
	
}

function loadgroup(){
	
	    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
	
	    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/loadgroup/" + userkey + "/" + usertype + "/",
            data: {},
            beforeSend: function() {}
        })
        .done(function(msg) {
            $('#productlist').html(msg);
        });

	
}


function leftmenuopen() {
    document.getElementById("leftmenu").style.width = "80%";
}

function leftmenuclose() {
    document.getElementById("leftmenu").style.width = "0%";
}


function logincheck() {
    var username = $('#code').val();
    $('#userkey').val(username);
	
	var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
	
    localStorage.setItem("username", username);
    $('#login1').modal('hide');
	if(usertype=="EMPLOYEE"){ menuload(); }
	else{ homeload(); }
    
}

function menuload(){
		var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
	
			
			$.ajax({
				type: "POST",
				url: "" + base + "/ajax/homemenu/" + userkey + "/" + usertype + "/",
				data: {}
			})
			.done(function(msg) {
				//alert(msg);
				//$("#usertype").html(msg);
				 $("#productlist").html(msg);
				
			});

}


function logout() {
    localStorage.clear();
    $('#userkey').val('');
    defaulthome();
}

function defaulthome() {
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/loadgroup/",
            data: {}
        })
        .done(function(msg) {
            $("#productlist").html(msg);
        });
}

function register() {
    var name = $('#name').val();
    var organization = $('#organization').val();
    var nid = $('#nid').val();
    var address_current = $('#address_current').val();
    var address_permanent = $('#address_permanent').val();
    var mobile = $('#mobile').val();
    var email = $('#email').val();
    var user_type = $('#user_type').val();
    var district = $('#district').val();
    var upazila = $('#upazila').val();
    var union = $('#union').val();
    var word = $('#word').val();
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/register/",
            data: {
                name: name,
                organization: organization,
                nid: nid,
                address_current: address_current,
                address_permanent: address_permanent,
                mobile: mobile,
                email: email,
                user_type: user_type,
                district: district,
                upazila: upazila,
                union: union,
                word: word

            }
        })
        .done(function(msg) {
            $('#myModal3').modal('hide');
            $("#productlist").html(msg);
        });
}

function addproduct() {
    $('#myModal4').modal('show');
}

function loadupazila(districtid) {
    //alert(districtid);
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/upazila/",
            data: {}
        })
        .done(function(msg) {
            $('#upazila').html(msg);

        });
}

function loadunion(upazillaid) {
    //alert(upazillaid);
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/loadunion/",
            data: {}
        })
        .done(function(msg) {
            $('#union').html(msg);

        });
}

function startup() {
    document.getElementById("startup").style.width = "100%";
}

function startupclose() {
    document.getElementById("startup").style.width = "0%";
}

function loadcatagory(groupid) {
    $('#backfunction').val('home');
    $('#backvalue').val(groupid);
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/loadcatagory/",
            data: {
                groupid: groupid
            },
            beforeSend: function() {
                //startup();
            }
        })
        .done(function(msg) {
            $('#productlist').html(msg);
            //startupclose();

        });

}



function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
            vars[key] = value;
        });
    return vars;
}


var userkey = $('#userkey').val();

//var userkey = getUrlVars()["userkey"];

//alert(userkey);


$(document).ready(function() {
    /*
    var userkey =localStorage.getItem("username");
    var userkey = $('#userkey').val();
    //alert(userkey);
    if(userkey!=""){

    	$.ajax({
    	type: "POST",
    	url: ""+base+"/ajax/username/"+userkey+"/",
    	data: {}
    	})
    	.done(function( msg ) {
    		//alert(msg);
    	$("#username").html(msg);
    	});	

	
    	$.ajax({
    	type: "POST",
    	url: ""+base+"/ajax/homemenu/"+userkey+"/",
    	data: {}
    	})
    	.done(function( msg ) {
    	$("#productlist").html(msg);
    	}); 

    		
    } */

});

function homeload() {
   
    $('#backfunction').val('home');
    $('#backvalue').val(0);
   
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();

    if (userkey == '') {
        defaulthome();
    }
	else {

        $.ajax({
                type: "POST",
                url: "" + base + "/ajax/username/" + userkey + "/" + usertype + "/",
                data: {}
            })
            .done(function(msg) {
                //alert(msg);
                $("#username").html(msg);
            });

        $.ajax({
                type: "POST",
                url: "" + base + "/ajax/loadgroup/" + userkey + "/" + usertype + "/",
                data: {}
            })
            .done(function(msg) {
                $("#productlist").html(msg);
            });

    }
}

function login() {
    $('#login1').modal('show');
}

function signup() {
    $('#myModal3').modal('show');
}

function fullview(id) {

    $('#backfunction').val('loadproduct');
   
    	
    var userkey = localStorage.getItem("username");
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
    if (userkey != null) {

        $.ajax({
                type: "POST",
                url: "" + base + "/ajax/singleproductview/" + userkey + "/" + usertype + "/" + id + "/",
                data: {}
            })
            .done(function(msg) {
                $("#productlist").html(msg);
            });


        $("#slider4").responsiveSlides({
            auto: true,
            pager: true,
            nav: false,
            speed: 500,
            namespace: "callbacks",
            before: function() {
                $('.events').append("<li>before event fired.</li>");
            },
            after: function() {
                $('.events').append("<li>after event fired.</li>");
            }
        });

    }
}

function loadproduct(catid) {
    /*
    var userkey = $('#userkey').val();
    	if(userkey==''){
    	alert("Please Login !");
    	return;
    } */
    $('#backfunction').val("loadcatagory");	
    $('#productcategory').val(catid);
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
	//alert(usertype);
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/productload/" + userkey + "/" + usertype + "/",
            data: {
                catid: catid
            }
        })
        .done(function(msg) {
            $("#productlist").html(msg);
        });
}

function loadcart() {
    var userkey = $('#userkey').val();
	 var usertype = $('#usertype').val();
    if (userkey == '') {
        alert("Please Login !");
        return;
    }
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/cart/" + userkey + "/" + usertype + "/",
            data: {}
        })
        .done(function(msg) {
            $("#productlist").html(msg);
            leftmenuclose();
        });
}

function orderloadsupplier() {
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/orderloadsupplier/" + userkey + "/" + usertype + "/",
            data: {}
        })
        .done(function(msg) {
            $("#productlist").html(msg);
            leftmenuclose();
        });
}

function orderloademployee() {
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/orderloademployee/" + userkey + "/" + usertype + "/",
            data: {}
        })
        .done(function(msg) {
            $("#productlist").html(msg);
        });
}

function orderloademployeecomplete() {
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/orderloademployeecomplete/" + userkey + "/" + usertype + "/",
            data: {}
        })
        .done(function(msg) {
            $("#productlist").html(msg);
        });
}

function employee_received(osid) {
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
    //alert(osid);

    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/employee_received/" + userkey + "/" + usertype + "/",
            data: {
                osid: osid
            }
        })
        .done(function(msg) {
            orderloademployeecomplete();
        });
}


function invoiceloadsupplier() {
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/invoiceloadsupplier/" + userkey + "/" + usertype + "/",
            data: {}
        })
        .done(function(msg) {
            $("#productlist").html(msg);
        });
}

function accountloadsupplier() {
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();

    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/accountloadsupplier/" + userkey + "/" + usertype + "/",
            data: {}
        })
        .done(function(msg) {
            $("#productlist").html(msg);
            leftmenuclose();
        });
}

function accountloadretailer() {
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/accountloadretailer/" + userkey + "/" + usertype + "/",
            data: {}
        })
        .done(function(msg) {
            $("#productlist").html(msg);
        });
}


function modalshow(pid) {
    var productname = $('#pname' + pid).html();
    $('#productname').html(productname);
    var pprice = $('#pprice' + pid).html();
    $('#price').val(pprice);
    var qty = $('#pquantity' + pid).html();
    $('#qty').val(qty);
    var qty = $('#minqty' + pid).html();
    $('#minqty').val(qty);
    $('#productid' + pid).val(pid);
   
    $('#productid').val(pid);
    $('#priceqtyupdate').modal('show');
}

function updatepriceqty() {

    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
    var qty = $('#qty').val();
    var minqty = $('#minqty').val();
    var price = $('#price').val();
    var productid = $('#productid').val();
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/supplierpriceupdate/" + userkey + "/" + usertype + "/",
            data: {
                quanitiy: qty,
                minqty: minqty,
                price: price,
                product_id: productid
            }
        })
        .done(function(msg) {
        	alert(msg);
            //$("#msg").html(msg);
            $('#priceqtyupdate').modal('hide');
            $('#pprice'+productid).html(price);
             $('#pquantity'+productid).html(qty);
              $('#minqty'+productid).html(minqty);
           // loadproduct();
        });

}

function removecartproduct(productid) {
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/removecartproduct/" + userkey + "/" + usertype + "/",
            data: {
                product_id: productid
            }
        })
        .done(function(msg) {
            loadcart();
            //alert(msg);
            // $("#msg").html(msg);
            //$('#priceqtyupdate').modal('hide'); 
            //loadproduct();
        });
}


function modalshowqty(pid, supid, price, sprice, min, max) {
    $("#msg1").html("");
    var productname = $('#pname' + pid).html();
    $('#productname1').html(productname);
    var pprice = $('#pprice' + pid).html();
    $('#price1').val(price);
    $('#productprice').html(price);
    var qty = $('#pquantity' + pid).html();
    $('#qty1').val(qty);


    var pid = $('#productid' + pid).val();
    $('#productid1').val(pid);
    $('#supplierid').val(supid);
    $('#sprice').val(sprice);
    $('#max1').val(max);
    $('#min1').val(min);
    $('#addquantity').modal('show');


}

function updatecart() {
    $("#msg1").html("");
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
    var qty = $('#qty1').val();
    var price = $('#price1').val();
    var sprice = $('#sprice').val();
    var min = $('#min1').val();
    var max = $('#max1').val();
	//alert("Min: "+min);
	//alert("Max: "+max);
	//alert("Qty: "+qty);
    if (qty < min) {

        $("#msg1").html("invalid input");
        $('#qty1').val(0);
        return;
    }
	else if(qty > max){
	    $("#msg1").html("invalid input");
        $('#qty1').val(0);
        return;	
	}else{

    var productid = $('#productid1').val();
    var supplierid = $('#supplierid').val();
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/customercart/" + userkey + "/" + usertype + "/",
            data: {
                quanitiy: qty,
                price: price,
                sprice: sprice,
                productid: productid,
                supplierid: supplierid
            }
        })
        .done(function(msg) {
            //$("#msg1").html(msg);
            if (qty != 0) {
                $("#btn" + productid).css("background-color", 'red');
            }
            $('#addquantity').modal('hide');
        });
    //loadcart();
	}
}

function orderfinal() {
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
    var bankid = $('#bankid').val();
    var transectionid = $('#transectionid').val();
    var amount = $('#payamount').val();
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/finalorder/" + userkey + "/" + usertype + "/",
            data: {
                bankid: bankid,
                transectionid: amount,
                amount
            }
        })
        .done(function(msg) {
            //$("#msg1").html(msg);
            orderlist();
        });

}

function orderlist() {
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/orderlist/" + userkey + "/" + usertype + "/",
            data: {}
        })
        .done(function(msg) {
            $("#productlist").html(msg);
            leftmenuclose();
        });
}

function orderlistcomplete() {
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/orderlistcomplete/" + userkey + "/" + usertype + "/",
            data: {}
        })
        .done(function(msg) {
            $("#productlist").html(msg);
        });
}




function acceptorder(osid) {
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
    alert(osid);

    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/acceptorder/" + userkey + "/",
            data: {
                osid: osid
            }
        })
        .done(function(msg) {
            orderloadsupplier();
        });
}

function receivedorderbyretailer(orderid) {
    var userkey = $("#userkey").val();
    var usertype = $("#usertype").val();
    $.ajax({
            type: "POST",
            url: "" + base + "/ajax/receivedorderbyretailer/" + userkey + "/",
            data: {
                orderid: orderid
            }
        })
        .done(function(msg) {
            orderlistcomplete();
        });
    orderlistcomplete();
}