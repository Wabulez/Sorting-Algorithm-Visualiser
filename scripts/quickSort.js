function quick(){
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(n²) - Quadratic Time";
    document.getElementById("Time_Average").innerText="O(n log n) - Linearithmic Time";
    document.getElementById("Time_Best").innerText="O(n log n) - Linearithmic Time";

    document.getElementById("TW_Explanation").innerHTML = `<p>
    Happens when the pivot is always the smallest or largest element 
    (e.g., sorted or reverse-sorted array without randomization). One 
    side of the partition is empty, leading to n recursive calls and n 
    comparisons per level.<br><br>
    👉 <i>Using a random pivot or median-of-three reduces the likelihood of the worst case.</i></p>`;

    document.getElementById("TA_Explanation").innerHTML = `<p>
    For a randomly ordered array, the pivot generally splits the array reasonably evenly. 
    The number of comparisons and recursive calls averages to n × log n.</p>`;

    document.getElementById("TB_Explanation").innerHTML = `<p>
    Occurs when the pivot divides the array into two nearly equal halves at each step. 
    Each level processes n elements, and there are log n levels, giving n × log n total operations.</p>`;

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(log n) - Logarithmic Space";

    document.getElementById("SW_Explanation").innerHTML = `<p>
    Quick sort uses recursion, adding frames to the call stack. Average recursion depth is log n. 
    Extra space is only for recursion, as the array is sorted in place.</p>
    
    <div class="Pair_Definitions" style="text-align: center;">
        <p class="Sub_Heading">Worst Case Space Complexity:</p>
        <p class="Notation_Type">O(n)</p>
    </div>

    <p id="SW_Explanation">In the worst case (unbalanced partitions), recursion depth can reach n, using linear extra space.</p>`;


    c_delay=0;

    quickSort(0,array_size-1);

    enable_buttons()
}

function quick_partition (start, end){
    var i = start + 1;
    var piv = div_sizes[start]; //make the first element the pivot element.
    div_update(divs[start], div_sizes[start], "yellow");//Color update

        for(var j = start + 1; j <= end; j++){
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[j] < piv){
                div_update(divs[j], div_sizes[j], "yellow");//Color update

                div_update(divs[i], div_sizes[i], "red");//Color update
                div_update(divs[j], div_sizes[j], "red");//Color update

                var temp = div_sizes[i];
                div_sizes[i] = div_sizes[j];
                div_sizes[j] = temp;

                div_update(divs[i], div_sizes[i], "red");//Height update
                div_update(divs[j], div_sizes[j], "red");//Height update

                div_update(divs[i], div_sizes[i], "white");//Height update
                div_update(divs[j], div_sizes[j], "white");//Height update

                i += 1;
            }
    }
    div_update(divs[start], div_sizes[start], "red");//Color update
    div_update(divs[i - 1], div_sizes[i - 1], "red");//Color update
    
    var temp = div_sizes[start];//put the pivot element in its proper place.
    div_sizes[start] = div_sizes[i - 1];
    div_sizes[i - 1] = temp;

    div_update(divs[start], div_sizes[start], "red");//Height update
    div_update(divs[i - 1], div_sizes[i - 1], "red");//Height update

    for(var t = start; t <= i; t++){
        div_update(divs[t], div_sizes[t], "green");//Color update
    }

    return i - 1; //return the position of the pivot
}

function quickSort(start, end){
    if( start < end ){
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end) ;     
        quickSort (start, piv_pos - 1);//sorts the left side of pivot.
        quickSort (piv_pos + 1, end) ;//sorts the right side of pivot.
    }
}