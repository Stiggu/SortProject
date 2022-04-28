export default class Countingsort {
    matrix: number[][] = [];

    sort(array: number[], size: number) {
        const max = array.reduce((carry = array[0], ai) => {
            return (ai > carry) ? ai : carry;
        });

        const count: number[] = [];
        for(let i = 0; i <= max; i++) {
            count.push(0);
        }

        const output: number[] = [];
        for(let i = 0; i < size; i++) {
            output.push(-1);
        }

        array.forEach((ai) => {
            count[ai]++;
        });

        for(let i = 2; i <= max; i++) {
            count[i] += count[i - 1];
        }

        for(let i = 0; i < size; i++) {
            output[count[array[i]] - 1] = array[i];
            count[array[i]]--;

            const aux1 = output.filter(oi => oi > -1);
            const aux2 = [...array];
            for(let j = 0; j < aux1.length; j++) {
                for(let k = 0; k < aux2.length; k++) {
                    if(aux2[k] === aux1[j]) {
                        aux2.splice(k,1);
                        break;
                    }   
                }
            }

            this.matrix.push([...aux1,...aux2]);
        }
    }
}