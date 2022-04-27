export default class Quicksort {
    static matrix: number[][] = [];

    static partition(array: number[], low: number, high: number): number {
        const pivot = array[high];

        let i = low - 1;

        for(let j = low; j < high; j++) {
            if(array[j] <= pivot) {
                i++;

                const aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }

        const aux = array[i + 1];
        array[i + 1] = array[high];
        array[high] = aux;

        return i + 1;
    }

    static sort(array: number[], low: number, high: number) {
        const copy = [...array];

        if(copy[0] == null) { copy.shift(); }

        Quicksort.matrix.push(copy);

        if(low < high) {
            const pi = Quicksort.partition(array, low, high);

            Quicksort.sort(array, low, pi - 1);

            Quicksort.sort(array, pi + 1, high);
        }
    }
}