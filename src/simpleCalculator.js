module.exports = {

    sum,
    product
}


function sum(...nums){
    var sum=0;
    for (var i=0;i < nums.length;i++){
        sum += nums[i];
    } return sum;
   
    }
    
function product(...nums){
     var product=1;
     for (var i=0;i < nums.length;i++){
            product *= nums[i];
    } return product;
       
       }
   