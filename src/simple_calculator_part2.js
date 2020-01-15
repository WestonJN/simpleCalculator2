module.exports = class Calculator{
    constructor() {
        this.arr = [];
        this.slot = []; //values
        this.last_value = 0;
    }
     add(...nums){
        let sum=0;
        nums.forEach(num => {
			if (isNaN(num)) {
				num = this.string_slot(num);
			}
			sum += num;
		});

		this.slot.push(sum);
		this.last_value = sum;
		
		return sum;
       
        }
    
        string_slot (str) {
            if (str == 'LAST') {
                return this.last();
            } 
    
            if (str.includes('SLOT_')) {
                // Number points to slot which means it will return the last value
                let slot_number = str.match(/\d+/g);
                return this.arr[slot_number];
            }
    
            return 0;
        }
     multiply(...nums){
        let product = 1;

		nums.forEach(num => {
			if (isNaN(num)) {
				num = this.string_slot(num);
			}
			product *= num;
		});

		this.arr.push(product);
		this.last_value = product;
		
		return product;

           
    }
    set_slot(slot_number){
        this.arr[slot_number] = this.last_value;
    }  
    get_slot(slot_number){
        return this.arr[slot_number];
    }
    last(){
        return this.last_value;
    }
    
}