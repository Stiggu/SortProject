import Quicksort from "./Quicksort";

export function bubble(inputs: number[]): number[][] {
    const matrix: number[][] = [];

    for(let x = 0; x < inputs.length; x++){
        for(let y = 0; y < inputs.length; y++){
            if(y == inputs.length - 1){
                continue;
            }
            if(inputs[y] > inputs[y + 1]){
                const fix:number = inputs[y];
                inputs[y] = inputs[y + 1];
                inputs[y + 1] = fix;
            }
            matrix.push(inputs.slice());
        }
    }
    return matrix;
}

export function quick(input: number[]): number[][] {
    Quicksort.sort(input, 0, input.length);

    return Quicksort.matrix;
}