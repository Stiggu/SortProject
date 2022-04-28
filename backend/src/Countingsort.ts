export default class Countingsort {
    matrix: number[][] = [];

    sort(array: number[], size: number) {
        const output: number[] = [];

        let max: number = array[0];
        
        for(let i = 1; i < size; i++) {
            if(array[i] > max) {
                max = array[i];
            }
        }
        
        const count: number[] = [];
        
        for(let i = 0; i <= max; ++i) {
            count.push(0);
            output.push(0);
        }
        
        for(let i = 0; i < size; i++) {
            count[array[i]]++;
        }
        
        for(let i = 1; i <= max; i++) {
            count[i] += count[i - 1];
        }
        
        for(let i = size - 1; i >= 0; i--) {
            output[count[array[i]] - 1] = array[i];
            count[array[i]]--;

            const copy = [...output];

            this.matrix.push(copy);
        }
        
        for(let i = 0; i < size; i++) {
            array[i] = output[i];
        }
    }
}