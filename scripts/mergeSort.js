function merge(){
    //Setting Time Complexities
    document.getElementById("Time_Worst").innerText="O(n log n) - Linearithmic Time";
    document.getElementById("Time_Average").innerText="O(n log n) - Linearithmic Time";
    document.getElementById("Time_Best").innerText="O(n log n) - Linearithmic Time";

    document.getElementById("TW_Explanation").innerHTML=`<p>
    Even in the most unfavorable arrangement (e.g., elements in reverse order), merge sort:<br>
        ✅ <i>Still divides the array the same way</i><br>
        ✅ <i>Still compares and merges all elements</i><br>
    The number of comparisons may be slightly higher, but the overall growth does not change.<br><br>
    👉 <i>The worst case is no slower than the best case.</i></p>`;

    document.getElementById("TA_Explanation").innerHTML=`<p>
    For a typical (randomly ordered) array, merge sort:<br>
        ✅ <i>Splits the array into halves (log n levels)</i><br>
        ✅ <i>Merges all elements at each level (n operations per level)</i><br><br>
    The total work remains n × log n.</p>`;

    document.getElementById("TB_Explanation").innerHTML=`<p>
    Even when the array is already sorted, merge sort still divides the array into 
    smaller halves and then merges them back together. The algorithm does not skip any steps, so it 
    still performs the same number of operations.<br><br>👉 
    <i>Being already sorted does not make merge sort faster.</i></p>`;

    //Setting Space Complexities
    document.getElementById("Space_Worst").innerText="O(n) - Linear Space";

    document.getElementById("SW_Explanation").innerHTML=`<p>
    During merging, merge sort creates temporary arrays to hold elements from the left and right halves.
    The total extra space used is proportional to the number of elements being sorted (n).<br><br>
    👉 <i>Even though the array is split into many parts, only O(n) extra space is needed at any one time.</i></p>`;

    c_delay=0;

    merge_partition(0,array_size-1);

    enable_buttons();
}

function mergeSort(start, mid, end){
    var p = start, q = mid + 1;

    var Arr = [], k = 0;

    for(var i = start; i <= end; i++){
        if(p > mid){
            Arr[k++] = div_sizes[q++];
            div_update(divs[q - 1], div_sizes[q - 1], "red");//Color update
        }
        else if(q > end){
            Arr[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], "red");//Color update
        }
        else if(div_sizes[p] < div_sizes[q]){
            Arr[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], "red");//Color update
        } else {
            Arr[k++] = div_sizes[q++];
            div_update(divs[q - 1], div_sizes[q - 1], "red");//Color update
        }
    }

    for(var t = 0; t < k; t++){
        div_sizes[start++] = Arr[t];
        div_update(divs[start - 1], div_sizes[start - 1], "green");//Color update
    }
}

function merge_partition(start, end){
    if(start < end){
        var mid = Math.floor((start + end) / 2);
        div_update(divs[mid], div_sizes[mid], "yellow");//Color update

        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        mergeSort(start, mid, end);
    }
}