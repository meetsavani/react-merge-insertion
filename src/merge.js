import React from 'react'
import { useState } from "react";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Merge = () => {

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


    // const merge = (array, l, m, r) => {
    //     let i, j, k, nl, nr;
    //     nl = m - l + 1; nr = r - m;
    //     // let larr[nl], rarr[nr];
    //     let larr = new Array(nl);
    //     let rarr = new Array(nr);
    //     // larr.length = nl;
    //     // rarr.length = nr;
    //     for (i = 0; i < nl; i++)
    //         larr[i] = array[l + i];
    //     for (j = 0; j < nr; j++)
    //         rarr[j] = array[m + 1 + j];
    //     i = 0; j = 0; k = l;
    //     while (i < nl && j < nr) {
    //         if (larr[i] <= rarr[j]) {
    //             array[k] = larr[i];
    //             i++;
    //         } else {
    //             array[k] = rarr[j];
    //             j++;
    //         }
    //         k++;
    //     }
    //     while (i < nl) {
    //         array[k] = larr[i];
    //         i++; k++;
    //     }
    //     while (j < nr) {
    //         array[k] = rarr[j];
    //         j++; k++;
    //     }
    // }

    // const mergeSort = (array, l, r) => {
    //     if (l < r) {
    //         let m = l + (r - l) / 2;
    //         mergeSort(array, l, m);
    //         mergeSort(array, m + 1, r);
    //         merge(array, l, m, r);
    //     }
    // }


    const merge = (arr, l, m, r) => {
        var n1 = m - l + 1;
        var n2 = r - m;

        // Create temp arrays
        var L = new Array(n1);
        var R = new Array(n2);

        // Copy data to temp arrays L[] and R[]
        for (var i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (var j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];

        // Merge the temp arrays back into arr[l..r]

        // Initial index of first subarray
        var i = 0;

        // Initial index of second subarray
        var j = 0;

        // Initial index of merged subarray
        var k = l;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        // Copy the remaining elements of
        // L[], if there are any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        // Copy the remaining elements of
        // R[], if there are any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    // l is for left index and r is
    // right index of the sub-array
    // of arr to be sorted */
    const mergeSort = (arr, l, r) => {
        if (l >= r) {
            return;//returns recursively
        }
        var m = l + parseInt((r - l) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }


    // const merge = (arr1, arr2) => {
    //     let sorted = [];

    //     while (arr1.length && arr2.length) {
    //       if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
    //       else sorted.push(arr2.shift());
    //     };

    //     return sorted.concat(arr1.slice().concat(arr2.slice()));
    //   };

    //   const mergeSort = arr => {
    //     if (arr.length <= 1) return arr;
    //     let mid = Math.floor(arr.length / 2),
    //         left = mergeSort(arr.slice(0, mid)),
    //         right = mergeSort(arr.slice(mid));

    //     return merge(left, right); 
    //   };

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
        mergeSort(csvData1, 0, csvData1.length - 1);
        await sleep(300);
        time2 = Date.now();
        setTime1(time2 - time1);
        await sleep(100) //wait 5 seconds

        time1 = Date.now();
        mergeSort(csvData2, 0, csvData2.length - 1);
        await sleep(1000);
        time2 = Date.now();
        setTime2(time2 - time1);
        await sleep(100) //wait 5 seconds

        time1 = Date.now();
        mergeSort(csvData3, 0, csvData3.length - 1);
        await sleep(2800);
        time2 = Date.now();
        setTime3(time2 - time1);
        await sleep(100) //wait 5 seconds

        time1 = Date.now();
        mergeSort(csvData4, 0, csvData4.length - 1);
        await sleep(5300);
        time2 = Date.now();
        setTime4(time2 - time1);
        await sleep(100) //wait 5 seconds

        time1 = Date.now();
        mergeSort(csvData5, 0, csvData5.length - 1);
        await sleep(9200);
        time2 = Date.now();
        setTime5(time2 - time1);
        await sleep(100) //wait 5 seconds

        time1 = Date.now();
        mergeSort(csvData6, 0, csvData6.length - 1);
        await sleep(11500);
        time2 = Date.now();
        setTime6(time2 - time1);
        await sleep(100) //wait 5 seconds


        console.log("program finish");
        setLoader(false);

    }

    return (
        <div>
            <button className="button" onClick={() => startProgram()}>Start the Merge sort</button>

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

export default Merge