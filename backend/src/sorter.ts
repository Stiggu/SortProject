import Quicksort from "./Quicksort";
import Countingsort from "./Countingsort";
import bubbleSort from "./BubbleSort";

export function bubble(inputs: number[]): number[][] {
    return bubbleSort(inputs);
}

export function quick(input: number[]): number[][] {
    const quickAlgorithm = new Quicksort();
    
    quickAlgorithm.sort(input, 0, input.length);
    
    quickAlgorithm.matrix.shift();
    
    return quickAlgorithm.matrix;
}

export function counting(input: number[]): number[][] {
    const countingAlgorithm = new Countingsort();

    countingAlgorithm.sort(input, input.length);

    return countingAlgorithm.matrix;
}