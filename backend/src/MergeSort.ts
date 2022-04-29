export default class Merge {
    matrix: number[][] = [];

    merge(array: number[], left: number, mid: number, right: number) {    
        let i: number;
        let j: number;
        let k: number;  
        
        const n1 = mid - left + 1;
        const n2 = right - mid;
        
        const LeftArray: number[] = [];
        const RightArray: number[] = [];
        
        for(let i = 0; i < n1; i++) {
            LeftArray.push(-1);
        }
        for(let i = 0; i < n2; i++) {
            RightArray.push(-1);
        }

        for(let i = 0; i < n1; i++) {
            LeftArray[i] = array[left + i];
        }     
        for(let j = 0; j < n2; j++) {
            RightArray[j] = array[mid + 1 + j];
        }
        
        i = 0;
        j = 0;
        k = left;
        
        while(i < n1 && j < n2) {    
            if(LeftArray[i] <= RightArray[j]) {    
                array[k] = LeftArray[i];    
                i++;    
            } else {    
                array[k] = RightArray[j];    
                j++;    
            }    
            k++;   
        }    
        while(i<n1) {    
            array[k] = LeftArray[i];    
            i++;    
            k++;     
        }    
        
        while(j<n2) {    
            array[k] = RightArray[j];    
            j++;    
            k++;     
        }    
    }    
    
    sort(array: number[], left: number, right: number) {
        if(left < right) {  
            const mid = Math.floor((left + right) / 2);
            this.sort(array, left, mid);    
            this.sort(array, mid + 1, right);  
            this.merge(array, left, mid, right);

            this.matrix.push([...array]);  
        }  
    }
}