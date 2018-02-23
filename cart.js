console.log(JSON.parse(localStorage.getItem('orders')));
var orders=JSON.parse(localStorage.getItem('orders'));
var table=document.getElementById('orderList');
var ZIPInput=document.getElementById('zipCode');
var Address=document.getElementById('address');
var city=document.getElementById('city');
var state=document.getElementById('state');
var finalTable=document.getElementById('finalTable');
var quantities=new Array;
var products=new Array;
var newOrder;
for(var z=0;z<orders.length;z++){
  var newTr=document.createElement('tr');
  var newTd=document.createElement('td');
  newTd.textContent=orders[z].product;
  newTr.appendChild(newTd);
  newTd=document.createElement('td');
  newTd.textContent=orders[z].quantity;
  newTr.appendChild(newTd);
  table.appendChild(newTr);
}
document.getElementById('submitOrder').addEventListener('click', function(){  
  for(z=0;z<orders.length;z++)
  {
    quantities[z]=orders[z].quantity;
    products[z]=orders[z].product;
    newOrder=new CompleteOrder(products[z],quantities[z]);
    rowMaker(newOrder.shippingInformation,newOrder.items,newOrder.quantity,newOrder.zip);    
  }
});
function rowMaker(shipping,product,quantity,zip)
{
  var newTr=document.createElement('tr');
  var newTd=document.createElement('td');
  newTd.textContent=product;
  newTr.appendChild(newTd);
  newTd=document.createElement('td');
  newTd.textContent=quantity;
  newTr.appendChild(newTd);
  newTd=document.createElement('td');
  newTd.textContent=zip;
  newTr.appendChild(newTd);
  newTd=document.createElement('td');
  newTd.textContent=shipping;
  newTr.appendChild(newTd);

  finalTable.appendChild(newTr);
}
function CompleteOrder(items,quantity)
{
  this.items=items;
  this.quantity=quantity;
  this.shippingInformation=Address.value+', '+city.value+', '+state.value;
  this.zip=ZIPInput.value;
}
