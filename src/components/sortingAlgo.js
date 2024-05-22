export const mergeSortalgo =  array => {
    if (array.length === 1) return array;

    const midIdx = Math.floor(array.length / 2);
    const Fsthalf = mergeSortalgo(array.slice(0, midIdx));
    const Sndhalf = mergeSortalgo(array.slice(midIdx));

    const sortedArray = [];

    let i=0, j=0;

    while (i < Fsthalf.length && j < Sndhalf.length) {
        if (Fsthalf[i] < Sndhalf[j]) {
            sortedArray.push(Fsthalf[i++]);
        } else {
            sortedArray.push(Sndhalf[j++]);
        }
    }

    while (i < Fsthalf.length) sortedArray.push(Fsthalf[i++]);
    while (j < Sndhalf.length) sortedArray.push(Sndhalf[j++]);
    return sortedArray;
}

export const bubbleSortAlgo = array => {
    let n = array.length;
    for (let i = 0; i < n; i++) {
      let swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          // Swap the elements
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      }
      // If no elements were swapped, the array is already sorted
      if (!swapped) break;
    }
    return array;
}

export const heapSortAlgo = array => {
    const heapify = (heapSize, index) => {
        let largest = index,
            left = 2 * index + 1,
            right = 2 * index + 2;

        if (left < heapSize && array[left] > array[largest])
            largest = left;
        if (right < heapSize && array[right] > array[largest])
            largest = right;

        if (largest !== index) {
            [array[index], array[largest]] = [array[largest], array[index]];
            heapify(heapSize, largest);
        }
    };

    const n = array.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(n, i);

    for (let i = n - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        heapify(i, 0);
    }

    return array;
};


export const quickSortAlgo = array => {
    const quickSort = (arr, low = 0, high = arr.length - 1) => {
        if (low < high) {
            let i = low - 1;
            for (let j = low; j < high; j++) {
                if (arr[j] < arr[high]) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
            i++;
            [arr[i], arr[high]] = [arr[high], arr[i]];

            quickSort(arr, low, i - 1);
            quickSort(arr, i + 1, high);
        }
    };

    quickSort(array);
    return array;
};
