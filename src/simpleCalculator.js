class Calculator{
    
     add(...nums){
        var add=0;
        for (var i=0;i < nums.length;i++){
            add += nums[i];
            this.last_value =add;
       
        } return add;
       
        }
        
     multiply(...nums){
         var multiply=1;
         for (var i=0;i < nums.length;i++){
                multiply *= nums[i];
                thid.last_value=multiply;
        } return multiply;
           
           }

    last(){
        return this.last_value;
    }
    set_slot(i){
        this.set_slot.push(this.last_value);
        return this.slot[i-1]
    }  
    get_slot(i){
        return this.slot[i-1]
    }
    
}

let calculator_inst = new Calculator();
console.log(calculator_inst.add(2,5));
console.log(calculator_inst.last("last",5));