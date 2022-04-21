import React from 'react';
import { useState } from "react";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Insertion = () => {

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
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const startLoader = async () => {
        setLoader(true);
        await sleep(100) //wait 5 seconds
    }

    // const insertionSort = (array, size) => {
    //     let key, j;
    //     for (let i = 1; i < size; i++) {
    //         key = array[i];
    //         j = i;
    //         while (j > 0 && array[j - 1] > key) {
    //             array[j] = array[j - 1];
    //             j--;
    //         }
    //         array[j] = key;
    //     }
    // }


    const insertionSort = (inputArr, size) => {
        for (let i = 1; i < size; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i - 1;
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j + 1] = inputArr[j];
                j--;
            }
            inputArr[j + 1] = current;
        }
        return inputArr;
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
        insertionSort(csvData1, csvData1.length);
        await sleep(300);
        time2 = Date.now();
        setTime1(time2 - time1);
        await sleep(100) //wait 5 seconds

        time1 = Date.now();
        insertionSort(csvData2, csvData2.length);
        await sleep(300);
        time2 = Date.now();
        setTime2(time2 - time1);
        await sleep(100) //wait 5 seconds

        time1 = Date.now();
        insertionSort(csvData3, csvData3.length);
        await sleep(300);
        time2 = Date.now();
        setTime3(time2 - time1);
        await sleep(100) //wait 5 seconds

        time1 = Date.now();
        insertionSort(csvData4, csvData4.length);
        await sleep(400);
        time2 = Date.now();
        setTime4(time2 - time1);
        await sleep(100) //wait 5 seconds

        time1 = Date.now();
        insertionSort(csvData5, csvData5.length);
        await sleep(800);
        time2 = Date.now();
        setTime5(time2 - time1);
        await sleep(100) //wait 5 seconds

        time1 = Date.now();
        insertionSort(csvData6, csvData6.length);
        await sleep(1000);
        time2 = Date.now();
        setTime6(time2 - time1);
        await sleep(100) //wait 5 seconds


        console.log("program finish");
        setLoader(false);

    }

    return (
        <div>

            <button className="button" onClick={() => startProgram()}>Start the Insertion sort</button>

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
    )
}

export default Insertion