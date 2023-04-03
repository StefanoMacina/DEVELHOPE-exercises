const order = {
  customer : {
    name : "stefano",
     address : { 
       /* city: "Bari"  */
    }
  }
}
;

/* if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}
 */


cityOrder = order.customer.address?.city
console.log(cityOrder ? cityOrder : "City is required") 