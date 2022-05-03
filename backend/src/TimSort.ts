export default class TimSort {
    static MIN_MERGE = 1;
    matrix: number[][]= [];
 
    minRunLength(n: number)
    {
         
        let r = 0;
        while (n >= TimSort.MIN_MERGE)
        {
            r |= (n & 1);
            n >>= 1;
        }
        return n + r;
    }
     
    insertionSort(arr: number[],left: number,right: number)
    {
        for(let i = left + 1; i <= right; i++)
        {
            const temp = arr[i];
            let j = i - 1;
             
            while (j >= left && arr[j] > temp)
            {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = temp;
        }
    }
     
    merge(arr: number[], l: number, m: number, r: number)
    {     
        const len1 = m - l + 1, len2 = r - m;
        const left = new Array(len1);
        const right = new Array(len2);
        for(let x = 0; x < len1; x++)
        {
            left[x] = arr[l + x];
        }
        for(let x = 0; x < len2; x++)
        {
            right[x] = arr[m + 1 + x];
        }
     
        let i = 0;
        let j = 0;
        let k = l;
     
        while (i < len1 && j < len2)
        {
            if (left[i] <= right[j])
            {
                arr[k] = left[i];
                i++;
            }
            else
            {
                arr[k] = right[j];
                j++;
            }
            k++;
        }
     
        while (i < len1)
        {
            arr[k] = left[i];
            k++;
            i++;
        }
     
        while (j < len2)
        {
            arr[k] = right[j];
            k++;
            j++;
        }
        this.matrix.push([...arr]);
    }
     
    sort(arr: number[], n: number)
    {
        const minRun = this.minRunLength(TimSort.MIN_MERGE);
            
        for(let i = 0; i < n; i += minRun)
        {
            this.insertionSort(arr, i, Math.min(
                (i + TimSort.MIN_MERGE - 1), (n - 1)));
            
        }
    
        for(let size = minRun; size < n; size = 2 * size)
        {
            for(let left = 0; left < n; left += 2 * size)
            {
                const mid = left + size - 1;
                const right = Math.min((left + 2 * size - 1), (n - 1));
     
                if(mid < right)
                    this.merge(arr, left, mid, right);
                    
            }
        }
    }
}