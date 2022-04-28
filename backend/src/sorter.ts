import Quicksort from "./Quicksort";
import Countingsort from "./Countingsort";
import bubbleSort from "./BubbleSort";

export function bubble(inputs: number[]): number[][] {
    return bubbleSort(inputs);
}

export function quick(input: number[]): number[][] {
    Quicksort.sort(input, 0, input.length);
    
    Quicksort.matrix.shift();
    
    return Quicksort.matrix;
}

export function counting(input: number[]): number[][] {
    const countingAlgorithm = new Countingsort();

    countingAlgorithm.sort(input, input.length);

    return countingAlgorithm.matrix;
}