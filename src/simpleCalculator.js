module.exports =class Calculator{
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
       
        }
        this.last_value =add;
        return add;
       
        }
        
     multiply(...nums){
         var multiply=1;
         for (var i=0;i < nums.length;i++){
             if (nums.length[i] == 'Last'){
                 nums[i]= this.last_value;
             }
                multiply *= nums[i];
        } 
        this.last_value=multiply;
        return multiply;
           
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

