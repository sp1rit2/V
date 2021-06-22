import React, { Component } from 'react'
import './sorting_algo.css'
import * as bs from './sorting_algos/bs'
import * as ins from './sorting_algos/in'
import * as sel from './sorting_algos/sel'
import * as hp from './sorting_algos/hp'
import * as mg from './sorting_algos/mg'
import * as qs from './sorting_algos/qs'
import { Range } from 'react-range'


class Sorting extends Component {
    constructor() {
        super();
        this.state = {
            flag: 0,
            array: [315, 92, 483, 173, 200, 134, 373, 173, 448, 110, 428, 254, 446, 478, 203, 125, 374, 437, 80, 31, 450, 342, 51, 467, 500, 90, 74, 62, 309, 149, 178, 441, 145, 455, 19, 247, 184, 60, 315],// 342, 190, 145, 341, 376, 40, 108, 67, 389, 127, 27, 420, 341, 135, 293, 315, 92, 483, 173, 200, 134, 173, 200, 134,200, 134, 173, 200, 134, 373, 173, 448, 110, 428, 254, 446, 478, 203, 125, 374,293, 187, 70, 375, 205, 95, 120, 310, 73, 105, 218, 499, 184, 332, 172, 397, 59, 484, 464, 339, 121, 128, 288, 125, 46, 215, 56, 51, 56, 372, 354, 310, 406, 280, 316, 63, 12, 306, 265, 79, 133, 173, 489, 166, 456, 301],
            value: 500,
            size: 25,
            pStateA: [],
            values: [120]

        }
    }
    async resetArray() {
        const a = [];

        for (var i = 0; i < 40; i++) {
            // a[i]=Math.round(Math.random()*(1000-500)+500);
            a[i] = Math.round(Math.random() * 500);
        }
        this.setState({
            array: a,
        })
        console.log(a)
    }

    async navigate() {
        // this.setState({flag:ele})
        console.log("navigate : " + this.state.flag + " " + this.state.values)
        var sorting_keys = document.getElementsByClassName('sorting_keys')
        for (var i = 0; i < sorting_keys.length; i++)
            sorting_keys[i].style.cursor = 'not-allowed'

        var t = this.state.array;
        if (this.state.flag == 1) {
            await bs.bubbleS(this.state.array, 501 - this.state.values)
        }
        else if (this.state.flag == 2) {
            await ins.insertionSort(this.state.array, 501 - this.state.values)
        }
        else if (this.state.flag == 3) {
            await sel.selectionSort(this.state.array, 501 - this.state.values)
        }
        else if (this.state.flag == 4) {
            await hp.heapSort(this.state.array, 501 - this.state.values)
        }
        else if (this.state.flag == 5) {
            const disp = document.getElementsByClassName('array-bar-pos')
            var a = this.state.array;
            var anime = await mg.mergeSort(a);
            var x = 0;
            const value = 501 - this.state.values
            console.log(value)
            console.log(anime.length)
            for (var i = 0; i < anime.length;) {
                console.log("befire")
                await new Promise(resolve => setTimeout(resolve, value));
                console.log("after")
                if (anime[i] == anime[i + 1]) {
                    console.log(i + " " + "==> " + anime[i] + " " + anime[i + 1]);
                    disp[anime[i]].style.backgroundColor = '#008b8b';
                    // await new Promise(resolve => (resolve,i*10+1));
                    disp[anime[i]].style.backgroundColor = 'lightskyblue';
                    i += 2;
                    continue;
                }

                x = 0;
                // await new Promise(resolve => (resolve,i*10+1));
                // await new Promise(resolve => (resolve,100));
                await new Promise(resolve => setTimeout(resolve, value));
                for (var j = 0; j < i; j++) {
                    // console.log("herer "+i+" "+j)
                    if (anime[i] == anime[j] && anime[i + 1] == anime[j + 1]) {
                        x = 1;
                        break;
                    }
                }
                if (x == 0) {
                    console.log(i + " " + "--> " + anime[i] + " " + anime[i + 1]);
                    if (i < anime.length)
                        disp[anime[i]].style.backgroundColor = 'red';
                    if (i + 1 < anime.length)
                        disp[anime[i + 1]].style.backgroundColor = 'red';
                    // await new Promise(resolve => setTimeout(resolve,value));
                    // disp[anime[i]].style.backgroundColor='lightskyblue';
                    // disp[anime[i+1]].style.backgroundColor='lightskyblue';
                    i += 2;
                }
                else {
                    i = i + 2;
                    console.log(i + " " + "++> " + anime[i - 2] + " " + anime[i - 1]);
                    var str = anime[i - 2];
                    var end = anime[i - 1];
                    // disp[anime[str]].style.backgroundColor='#008b8b';
                    // disp[anime[end]].style.backgroundColor='#008b8b';

                    for (var j = str; j <= end; j++) {
                        await new Promise(resolve => setTimeout(resolve, value));
                        disp[j].style.backgroundColor = '#008b8b';
                    }
                    await new Promise(resolve => setTimeout(resolve, value));
                    for (var j = str; j <= end; j++) {
                        // disp[j].style.backgroundColor='#008b8b';
                        console.log("j: " + j + " " + anime[i - 1]);

                        // console.log(i+" inside for "+"++> "+anime[j]+" "+j);
                        console.log(str + " " + end);

                        disp[j].style.height = `${anime[i]}px`;
                        await new Promise(resolve => setTimeout(resolve, value));
                        disp[j].style.backgroundColor = 'lightskyblue';
                        i++;
                    }
                    await new Promise(resolve => setTimeout(resolve, value));
                    // disp[anime[str]].style.backgroundColor='red';
                    // disp[anime[end]].style.backgroundColor='red';

                    // console.log(i);
                }
            }
        }
        else if (this.state.flag == 6) {
            await qs.quickSort(this.state.array, 501 - this.state.values)
        }
        for (var i = 0; i < sorting_keys.length; i++)
            sorting_keys[i].style.cursor = 'pointer'
        this.setState({ flag: 0 })
    }
    render() {

        var array = this.state.array;
        console.log(this.state.flag);
        console.log(this.state.values[0])
        if (this.state.flag == 0) {
            return (
                <div className="sorting_main">
                    <center>
                        <div className="sorting_nav">
                            <label className="sorting_keys" onClick={() => this.resetArray()}>Set Array</label>
                            <label className="sorting_keys" onClick={() => this.setState({ flag: 1 })}>Bubble Sort</label>
                            <label className="sorting_keys" onClick={() => this.setState({ flag: 2 })}>Insertion Sort</label>
                            <label className="sorting_keys" onClick={() => this.setState({ flag: 3 })}>Selection Sort</label>
                            <label className="sorting_keys" onClick={() => this.setState({ flag: 4 })}>Heap Sort</label>
                            <label className="sorting_keys" onClick={() => this.setState({ flag: 5 })}>Merge Sort</label>
                            <label className="sorting_keys" onClick={() => this.setState({ flag: 6 })}>Quick Sort</label>
                        </div>
                        <div className="container">
                            {array.map((val) =>
                                <div className="array-bar-pos" style={{ width: `${20}px`, height: `${val}px` }}></div>)}
                        </div>
                        <div>
                            <div className="rangeBar">
                                <Range
                                    step={25}
                                    min={1}
                                    max={500}
                                    values={this.state.values}
                                    onChange={(values) => this.setState({ values })}
                                    renderTrack={({ props, children }) => (
                                        <div
                                            {...props}
                                            style={{
                                                ...props.style,
                                                height: '6px',
                                                width: '300px',
                                                backgroundColor: 'black'
                                            }}
                                        >
                                            {children}
                                        </div>
                                    )}
                                    renderThumb={({ props }) => (
                                        <div
                                            {...props}
                                            style={{
                                                ...props.style,
                                                height: '20px',
                                                width: '20px',
                                                backgroundColor: 'white',
                                                border: '1px solid black'
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            <div className="rangeBar">
                                <Range
                                    step={25}
                                    min={1}
                                    max={500}
                                    values={this.state.values}
                                    onChange={(values) => this.setState({ values })}
                                    renderTrack={({ props, children }) => (
                                        <div
                                            {...props}
                                            style={{
                                                ...props.style,
                                                height: '6px',
                                                width: '300px',
                                                backgroundColor: 'black'
                                            }}
                                        >
                                            {children}
                                        </div>
                                    )}
                                    renderThumb={({ props }) => (
                                        <div
                                            {...props}
                                            style={{
                                                ...props.style,
                                                height: '20px',
                                                width: '20px',
                                                backgroundColor: 'white',
                                                border: '1px solid black'
                                            }}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </center>
                </div>

            )
        }
        else {
            var t = this.state.array
            this.navigate();
            console.log(this.state.array)
            return (
                <div className="sorting_main">
                    <center>
                        <div className="sorting_nav">
                            <label className="sorting_keys">Set Array</label>
                            <label className="sorting_keys">Bubble Sort</label>
                            <label className="sorting_keys">Insertion Sort</label>
                            <label className="sorting_keys">Selection Sort</label>
                            <label className="sorting_keys">Heap Sort</label>
                            <label className="sorting_keys">Merge Sort</label>
                            <label className="sorting_keys">Quick Sort</label>
                        </div>
                        <div className="container">
                            {array.map((val) =>
                                <div className="array-bar-pos" style={{ width: `${20}px`, height: `${val}px` }}></div>)}
                        </div>
                    </center>

                </div>
            );
        }
    }
}

export default Sorting