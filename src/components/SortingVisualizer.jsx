import {Component} from 'react';
import './SortingVisualizer.css'
import {mergeSortalgo, bubbleSortAlgo, heapSortAlgo, quickSortAlgo} from './sortingAlgo'

export default class SortingVisualizer extends Component {
    // constructor defined in class component
    constructor(props){
        super(props);

        this.state = {
            array: [],
            arrayBarColor: 'red',
        };
    }

    // invoked immediately after a component is mounted abd that will reset the array
    componentDidMount() {
        this.resetArray();
    }

    // method (function defined that operates on instances of that class). This is to fill the reset array with the data
    resetArray() {
        const array = [];
        // 1080p 150 or 190
        for (let i = 0; i < 180; i++) {
            array.push(randomIntFromInterval(5,700)); // putting 1000 on screen is not possible
        }
        this.setState({ arrayBarColor: 'red' });
        this.setState({array});
    }

    mergeSort() {
        //const Sorted_Array = this.state.array.slice().sort((a, b) => a - b); // sort(a, b) => a - b is to make sure 100 wont come before 5 becoz it has 1 in front. Some JS things >_<

        const sortedArray = mergeSortalgo(this.state.array);

        this.setState({ arrayBarColor: 'black' });
        this.setState({array: sortedArray});
    }

    bubbleSort() {

        const sortedArray = bubbleSortAlgo(this.state.array);
        
        this.setState({ arrayBarColor: 'green' });
        this.setState({array: sortedArray});
    }

    quickSort() {

        const sortedArray = quickSortAlgo(this.state.array);

        this.setState({ arrayBarColor: 'yellow' });
        this.setState({array: sortedArray});
    }

    heapSort() {

        const sortedArray = heapSortAlgo(this.state.array);

        this.setState({ arrayBarColor: 'blue' });
        this.setState({array: sortedArray});
    }

    render() {
        // Destructuring the component
        const {array, arrayBarColor} = this.state;

        return(
            <div className='array-container'>
            {array.map(
                (value, index) => (
                    <div className='array-bar' key={index} style={{height: `${value}px`, backgroundColor: arrayBarColor}}>
                      
                    </div>
                    // style={{height: `${value}px`}}
                    // insead of giving the value, we can include in the style to display the height on the bar
                )
            )}
            <br/>
            <button className="Gen" onClick={()=> this.resetArray()}>Generate New Array</button>

            <button onClick={()=> this.mergeSort()}>Merge Sort</button>
            <button onClick={()=> this.quickSort()}>Quick Sort</button>
            <button onClick={()=> this.heapSort()}>Heap Sort</button>
            <button onClick={()=> this.bubbleSort()}>Bubble Sort</button>
            </div>
        )
    }
}

// how to randomise number in JS
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Math.random() method to generate a random decimal number between 0 (inclusive) and 1 (exclusive).