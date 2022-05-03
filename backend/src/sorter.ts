import Quicksort from "./Quicksort";
import Countingsort from "./Countingsort";
import bubbleSort from "./BubbleSort";
import MergeSort from "./MergeSort";
import TimSort from "./TimSort";
import BogSort from "./BogusSort";

export function bubble(inputs: number[]): number[][] {
    return bubbleSort(inputs);
}

export function bogo(inputs: number[]): number[][] {
    const bogoA = new BogSort(inputs);
    return bogoA.BogoSort();
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

export function merge(input: number[]): number[][] {
    const mergeAlgorithm = new MergeSort();

    mergeAlgorithm.sort(input, 0, input.length-1);

    return mergeAlgorithm.matrix;
}

export function tim(input: number[]): number[][] {
    const timAlgorithm = new TimSort();

    timAlgorithm.sort(input, input.length);

    return timAlgorithm.matrix;
}