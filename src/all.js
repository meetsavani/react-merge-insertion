import { useState } from "react";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

import './App.css';

const All = () => {

    const [loader, setLoader] = useState(false);

    const [time1, setTime1] = useState(0);
    const [time2, setTime2] = useState(0);
    const [time3, setTime3] = useState(0);
    const [time4, setTime4] = useState(0);
    const [time5, setTime5] = useState(0);
    const [time6, setTime6] = useState(0);

    const size1 = 10000;
    const size2 = 30000;
    const size3 = 50000;
    const size4 = 70000;
    const size5 = 90000;
    const size6 = 100000;

    const options = {
        scales: {
            y: [{
                title: {
                    display: true,
                    text: 'Your Title'
                }
            }]
        }
    }

    const insertionSort = (arr, first, least) => {
        let counter, j;
        for (let i = first + 1; i <= least; i++) {
            counter = arr[i];
            j = i - 1;
            while (j > first - 1 && arr[j] > counter) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = counter;
        }
    }
    const merge = (arr, start, middle, end) => {
        let k1, k2, index;
        let temp = [];
        index = k1 = start;
        k2 = middle + 1;
        while (k1 <= middle && k2 <= end) {
            if (arr[k1] > arr[k2]) {
                temp[index] = arr[k2];
                index++;
                k2++;
            }
            else {
                temp[index] = arr[k1];
                index++;
                k1++;
            }
        }
        if (k1 <= middle) {
            for (; k1 <= middle; k1++, index++)
                temp[index] = arr[k1];
        }
        else {
            for (; k2 <= end; k2++, index++)
                temp[index] = arr[k2];
        }

        for (let i = start; i <= end; i++)
            arr[i] = temp[i];
    }
    const split = (arr, first, last) => {
        if (last - first < last + 1)
            insertionSort(arr, first, last);
        else if (first < last) {
            let middle = (first + last) / 2;
            split(arr, first, middle);
            split(arr, middle + 1, last);
            merge(arr, first, middle, last);
        }
    }
    const mergeSort = (arr, lastelement) => {
        split(arr, 0, lastelement - 1);
    }

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const startLoader = async () => {
        setLoader(true);
        await sleep(100) //wait 5 seconds
    }

    const startProgram = async () => {
        await startLoader();

        console.log("program started")

        let csvData1 = [];
        let csvData2 = [];
        let csvData3 = [];
        let csvData4 = [];
        let csvData5 = [];
        let csvData6 = [];


        for (let i = 1; i <= size1; i++) {
            let k = Math.floor(Math.random() * size1);
            csvData1.push(k);
        }
        for (let i = 1; i <= size2; i++) {
            let k = Math.floor(Math.random() * size2);
            csvData2.push(k);
        }
        for (let i = 1; i <= size3; i++) {
            let k = Math.floor(Math.random() * size3);
            csvData3.push(k);
        }
        for (let i = 1; i <= size4; i++) {
            let k = Math.floor(Math.random() * size4);
            csvData4.push(k);
        }
        for (let i = 1; i <= size5; i++) {
            let k = Math.floor(Math.random() * size5);
            csvData5.push(k);
        }
        for (let i = 1; i <= size6; i++) {
            let k = Math.floor(Math.random() * size6);
            csvData6.push(k);
        }

        let time1;
        let time2;


        time1 = Date.now();
        mergeSort(csvData1, csvData1.length);
        time2 = Date.now();
        setTime1(time2 - time1);
        await sleep(100) //wait 5 seconds

        time1 = Date.now();
        mergeSort(csvData2, csvData2.length);
        time2 = Date.now();
        setTime2(time2 - time1);
        await sleep(100) //wait 5 seconds

        time1 = Date.now();
        mergeSort(csvData3, csvData3.length);
        time2 = Date.now();
        setTime3(time2 - time1);
        await sleep(100) //wait 5 seconds

        time1 = Date.now();
        mergeSort(csvData4, csvData4.length);
        time2 = Date.now();
        setTime4(time2 - time1);
        await sleep(100) //wait 5 seconds

        time1 = Date.now();
        mergeSort(csvData5, csvData5.length);
        time2 = Date.now();
        setTime5(time2 - time1);
        await sleep(100) //wait 5 seconds

        time1 = Date.now();
        mergeSort(csvData6, csvData6.length);
        time2 = Date.now();
        setTime6(time2 - time1);
        await sleep(100) //wait 5 seconds


        console.log("program finish");
        setLoader(false);

    }


    return (
        <div className="App">

            <button className="button" onClick={() => startProgram()}>Start the Mix sort</button>

            {loader ? "program is running" : ""}

            <h2>The time for the data set of size {size1} is {time1} ms</h2>
            <h2>The time for the data set of size {size2} is {time2} ms</h2>
            <h2>The time for the data set of size {size3} is {time3} ms</h2>
            <h2>The time for the data set of size {size4} is {time4} ms</h2>
            <h2>The time for the data set of size {size5} is {time5} ms</h2>
            <h2>The time for the data set of size {size6} is {time6} ms</h2>

            <div className="chart-layout">
                <Line
                    options={options}
                    datasetIdKey='1233'
                    data={{
                        labels: [0, size1, size2, size3, size4, size5, size6],
                        datasets: [
                            {
                                id: 1,
                                label: 'For the size ' + size1,
                                data: [0, time1],
                                borderColor: 'rgb(208, 229, 17)',
                                backgroundColor: 'rgb(208, 229, 17, 0.5)',
                            },
                            {
                                id: 2,
                                label: 'For the size ' + size2,
                                data: [0, , time2],
                                spanGaps: true,
                                borderColor: 'rgb(17, 230, 223)',
                                backgroundColor: 'rgb(17, 230, 223, 0.5)',

                            },
                            {
                                id: 3,
                                label: 'For the size ' + size3,
                                data: [0, , , time3],
                                spanGaps: true,
                                borderColor: 'rgb(230, 81, 17)',
                                backgroundColor: 'rgb(230, 81, 17, 0.5)',
                            },
                            {
                                id: 4,
                                label: 'For the size ' + size4,
                                data: [0, , , , time4],
                                spanGaps: true,
                                borderColor: 'rgb(223, 17, 230)',
                                backgroundColor: 'rgb(223, 17, 230, 0.5)',
                            },
                            {
                                id: 5,
                                label: 'For the size ' + size5,
                                data: [0, , , , , time5],
                                spanGaps: true,
                                borderColor: 'rgb(135, 12, 229)',
                                backgroundColor: 'rgb(135, 12, 229, 0.5)',
                            },
                            {
                                id: 6,
                                label: 'For the size ' + size6,
                                data: [0, , , , , , time6],
                                spanGaps: true,
                                borderColor: 'rgb(240, 169, 5)',
                                backgroundColor: 'rgb(240, 169, 5, 0.5)',
                            },
                        ],
                    }}
                />
            </div>

        </div>
    );
}

export default All;
