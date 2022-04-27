import Quicksort from "./Quicksort";
import bubbleSort from "./BubbleSort";

export function bubble(inputs: number[]): number[][] {
    return bubbleSort(inputs);
}

export function quick(input: number[]): number[][] {
    Quicksort.sort(input, 0, input.length);

    return Quicksort.matrix;
}