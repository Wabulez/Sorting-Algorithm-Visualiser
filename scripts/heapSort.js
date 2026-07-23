function heap(){
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(n log n) - Linearithmic Time";
    document.getElementById("Time_Average").innerText="O(n log n) - Linearithmic Time";
    document.getElementById("Time_Best").innerText="O(n log n) - Linearithmic Time";

    document.getElementById("TW_Explanation").innerHTML = `<p>
    Even in the most unfavorable arrangement, heap sort must:<br>
    ✅ Maintain the heap property<br>
    ✅ Perform heapify for each removal<br><br>
    👉 <i>Thus, the running time does not exceed O(n log n).</i></p>`;

    document.getElementById("TA_Explanation").innerHTML = `<p>
    For a randomly ordered array, heap sort still performs:<br>
    ✅ Heap construction<br>
    ✅ Repeated heapify operations<br><br>
    👉 <i>The total time remains n × log n.</i></p>`;

    document.getElementById("TB_Explanation").innerHTML = `<p>
    Building the heap takes O(n) time, and removing each element from the heap takes O(log n).<br><br>
    👉 <i>This process happens for all n elements, regardless of their initial order.</i></p>`;

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1) - Constant Space";

    document.getElementById("SW_Explanation").innerHTML = `<p>
    Heap sort sorts the array in place using the same array to represent the heap.
    Only a few temporary variables are used during swapping.</p>`


    c_delay=0;

    heapSort();
    
    enable_buttons();
}

function swap(i,j){
    div_update(divs[i], div_sizes[i], "red");//Color update
    div_update(divs[j], div_sizes[j], "red");//Color update

    var temp = div_sizes[i];
    div_sizes[i] = div_sizes[j];
    div_sizes[j] = temp;

    div_update(divs[i], div_sizes[i], "red");//Height update
    div_update(divs[j], div_sizes[j], "red");//Height update

    div_update(divs[i], div_sizes[i], "white");//Color update
    div_update(divs[j], div_sizes[j], "white");//Color update
}

function max_heapify(n,i){
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    if(l < n && div_sizes[l] > div_sizes[largest]){
        if(largest != i){
            div_update(divs[largest], div_sizes[largest], "white");//Color update
        }

        largest = l;

        div_update(divs[largest],div_sizes[largest],"red");//Color update
    }

    if(r < n && div_sizes[r] > div_sizes[largest]){
        if(largest != i){
            div_update(divs[largest], div_sizes[largest], "white");//Color update
        }

        largest = r;

        div_update(divs[largest], div_sizes[largest], "white");//Color update
    }

    if(largest != i){
        swap(i, largest);

        max_heapify(n, largest);
    }
}

function heapSort(){
    for(var i = Math.floor(array_size / 2) - 1; i >= 0; i--){
        max_heapify(array_size,i);
    }

    for(var i = array_size - 1; i > 0; i--){
        swap(0,i);
        div_update(divs[i],div_sizes[i],"green");//Color update
        div_update(divs[i],div_sizes[i],"yellow");//Color update

        max_heapify(i,0);

        div_update(divs[i],div_sizes[i],"blue");//Color update
        div_update(divs[i],div_sizes[i],"green");//Color update
    }
    div_update(divs[i],div_sizes[i],"green");//Color update
}