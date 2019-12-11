module.exports = class Calculator{
    constructor() {
        this.arr = [];
        this.slot = [];
        this.last_value = '';
    }
     add(...nums){
        var add=0;
        for (var i=0;i < nums.length;i++){
            if (typeof nums[i] == 'string'){
            if (nums[i]=='LAST'){
                add +=this.last_value();
            }else { 
                let str =/\d/g;
                let numSlot = str.exec(nums[i]);
                add += this.get_slot(parseInt(numSlot[0]));
            }
            }
            else{
                add += nums[i];
            }

        } 
        this.last_value = add;
        return add;
       
        }
        
     multiply(...nums){
         var multiply=1;
         for (var i=0;i < nums.length;i++){
            if (typeof nums[i] == 'string'){
                if (nums[i]=='LAST'){
                    multiply *= this.last_value;
                }else { 
                    let str =/\d/g;
                    let numSlot = str.exec(nums[i]);
                    multiply *= this.get_slot(parseInt(numSlot[0]));
                }
                }
                else{
                    multiply *= nums[i];
                }
        }
        this.last_value = multiply;
        return multiply;
           
    }

    last(){
        return this.last_value;
    }
    set_slot(){
        this.slot.push(this.last_value);
    }  
    get_slot(i){
        return this.slot[i-1];
    }
}