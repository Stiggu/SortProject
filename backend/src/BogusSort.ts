export default class BogSort{
    
    private outputs: number[][];
    constructor(private inputs: number[]) {
        this.outputs = [];
    }
    
    isSorted(): boolean {
        for(let x = 0; x < this.inputs.length; x++){
            if(this.inputs[x] > this.inputs[x + 1]){
                return false;
            }
        }
        return true;
    }
    
    BogoSort(): number[][]{
        while(this.isSorted() == false){
            for(let j, x, i = this.inputs.length; i;){
                j = Math.floor(Math.random() * i); 
                x = this.inputs[--i];
                this.inputs[i] = this.inputs[j];
                this.inputs[j] = x;
                this.outputs.push([...this.inputs]);
            }
        }
        return this.outputs;
    }
}