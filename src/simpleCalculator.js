class Calculator{
    constructor() {
        this.slot = [];
        this.last_value =0;
    }
     add(...nums){
        var add=0;
        for (var i=0;i < nums.length;i++){
            if (nums.length[i]=='LAST'){
                nums[i]=this.last_value;
            }
            add += nums[i];
            
            this.last_value =add;
       
        } return add;
       
        }
        
     multiply(...nums){
         var multiply=1;
         for (var i=0;i < nums.length;i++){
             if (nums.length[i] == 'Last'){
                 nums[i]= this.last_value;
             }
                multiply *= nums[i];
                this.last_value=multiply;
        } return multiply;
           
           }

    last(){
        return this.last_value;
    }
    set_slot(){
        this.slot.push(this.last_value);
       
    }  
    get_slot(i){
        return this.slot[i-1]
    }
   
    
}

let calculator_inst = new Calculator();
console.log(calculator_inst.add(5,5));
calculator_inst.set_slot(1);
console.log(calculator_inst.get_slot(1));

console.log(calculator_inst.add(10,42));
calculator_inst.set_slot(2);
console.log(calculator_inst.get_slot(2));

calculator_inst.add(100,200);
calculator_inst.get_slot(1);
calculator_inst.get_slot(2);
console.log(calculator_inst.last());

console.log(calculator_inst.multiply(3,3));
calculator_inst.set_slot(3);
console.log(calculator_inst.get_slot(3));
