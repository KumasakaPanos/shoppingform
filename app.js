'usestrict';
var pictureFileName=[];
//Creation of Image Array
pictureFileName = new Array();
pictureFileName[0]='img/bag.jpg';
pictureFileName[1]='img/banana.jpg';
pictureFileName[2]='img/bathroom.jpg';
pictureFileName[3]='img/boots.jpg';
pictureFileName[4]='img/breakfast.jpg';
pictureFileName[5]='img/bubblegum.jpg';
pictureFileName[6]='img/chair.jpg';
pictureFileName[7]='img/cthulhu.jpg';
pictureFileName[8]='img/dog-duck.jpg';
pictureFileName[9]='img/dragon.jpg';
pictureFileName[10]='img/pen.jpg';
pictureFileName[11]='img/pet-sweep.jpg';
pictureFileName[12]='img/scissors.jpg';
pictureFileName[13]='img/shark.jpg';
pictureFileName[14]='img/sweep.png';
pictureFileName[15]='img/tauntaun.jpg';
pictureFileName[16]='img/unicorn.jpg';
pictureFileName[17]='img/usb.gif';
pictureFileName[18]='img/water-can.jpg';
pictureFileName[19]='img/wine-glass.jpg';
var displayButton=document.getElementById('cartDisplay');
var submitButton=document.getElementById('orderSubmit');
var streetAddressInput=document.getElementById('address');
var cityAddressInput=document.getElementById('city');
var zipCodeInput=document.getElementById('zipCode');
var phoneNumberInput=document.getElementById('phoneNumber');
var products=new Array;
var orders=new Array;
var select=document.getElementById('dropdown');

document.getElementById('orderSubmit').addEventListener('click', function(){  
  var quantity=document.getElementById('quantityList').value;
  var dropdown=document.getElementById('dropdown');
  var product=dropdown.options[dropdown.selectedIndex].value;
  console.log(quantity);
  console.log(product);
  var newOrder=new OrderObject(product,quantity);
  orders.push(newOrder);
});
document.getElementById('link').addEventListener('click', function(){
  localStorage.setItem('orders',JSON.stringify(orders));
});
(function arrayCreation() {
  for(var z=0;z<pictureFileName.length;z++){
    var url=pictureFileName[z];
    var title=pictureFileName[z].substring(0,pictureFileName[z].length-4);
    title=title.substring(4,title.length);
    var object=new ProductObject(title,url,z);
    products.push(object);
    console.log(z);
    newElement('option',products[z].name,select,z);
  }})();
function ProductObject(title,url,index){
  this.name=title;
  this.alt=title;
  this.id=title;
  this.url=url;
  this.index=index;
}
function newElement(elementType,content,parent,z){
  var newEl=document.createElement(elementType);
  newEl.textContent=content;
  newEl.option=content;
  newEl.index=z;
  parent.appendChild(newEl);
}

function OrderObject(product,quantity){
  this.product=product;
  this.quantity=quantity;
}
function FullOrder(orders){
  this.orders=orders;
  this.address=document.getElementById('address').value+", "+document.getElementById('city').value+", "+document.getElementById('state').value;
  this.zipCode=document.getElementById('zipCode').value;
}