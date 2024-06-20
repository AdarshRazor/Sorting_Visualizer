import { Component } from 'react';
import './SortingVisualizer.css';
import { mergeSortalgo, bubbleSortAlgo, heapSortAlgo, quickSortAlgo } from './sortingAlgo';

export default class SortingVisualizer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            arrayBarColor: 'red',
            sortTimes: {
                mergeSort: null,
                bubbleSort: null,
                quickSort: null,
                heapSort: null,
            },
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 180; i++) {
            array.push(randomIntFromInterval(5, 700));
        }
        this.setState({
            array,
            arrayBarColor: 'red',
            sortTimes: { mergeSort: null, bubbleSort: null, quickSort: null, heapSort: null }
        });
    }

    measureSortTime(sortAlgo, algoName) {
        const arrayCopy = [...this.state.array];
        const start = performance.now();
        const sortedArray = sortAlgo(arrayCopy);
        const end = performance.now();
        const time = (end - start).toFixed(2);
        this.setState({
            array: sortedArray,
            arrayBarColor: 'black',
            sortTimes: { ...this.state.sortTimes, [algoName]: time },
        });
    }

    mergeSort() {
        this.measureSortTime(mergeSortalgo, 'mergeSort');
    }

    bubbleSort() {
        this.measureSortTime(bubbleSortAlgo, 'bubbleSort');
    }

    quickSort() {
        this.measureSortTime(quickSortAlgo, 'quickSort');
    }

    heapSort() {
        this.measureSortTime(heapSortAlgo, 'heapSort');
    }

    render() {
        const { array, arrayBarColor, sortTimes } = this.state;

        return (
            <div className='array-container'>
                {array.map((value, index) => (
                    <div
                        className='array-bar'
                        key={index}
                        style={{ height: `${value}px`, backgroundColor: arrayBarColor }}
                    ></div>
                ))}
                <br />
                <button className="Gen" onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>

                <div className="sort-times">
                    <p>Merge Sort Time: {sortTimes.mergeSort ? `${sortTimes.mergeSort} ms` : 'N/A'}</p>
                    <p>Quick Sort Time: {sortTimes.quickSort ? `${sortTimes.quickSort} ms` : 'N/A'}</p>
                    <p>Heap Sort Time: {sortTimes.heapSort ? `${sortTimes.heapSort} ms` : 'N/A'}</p>
                    <p>Bubble Sort Time: {sortTimes.bubbleSort ? `${sortTimes.bubbleSort} ms` : 'N/A'}</p>
                </div>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
