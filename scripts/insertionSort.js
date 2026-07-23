function insertionSort(){
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(n²) - Quadratic Time";
    document.getElementById("Time_Average").innerText="O(n²) - Quadratic Time";
    document.getElementById("Time_Best").innerText="O(n) - Linear Time";

    document.getElementById("TW_Explanation").innerHTML = `<p>
    Happens when the array is sorted in reverse order. Every new element 
    has to be compared and shifted past all previously sorted elements, 
    giving the maximum number of comparisons and shifts.</p>`;

    document.getElementById("TA_Explanation").innerHTML = `<p>
    For a randomly ordered array, each element may need to be compared 
    and shifted over about half of the already sorted elements. This leads to 
    roughly n² / 4 comparisons on average.</p>`;

    document.getElementById("TB_Explanation").innerHTML = `<p>
    Happens when the array is already sorted. The algorithm only compares 
    each element once and does not need to shift elements.<br><br>
    👉 <i>Minimal work is done.</i></p>`;

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1) - Constant Space";

    document.getElementById("SW_Explanation").innerHTML = `<p>
    Only a few temporary variables are used to hold 
    the current element during insertion.<br><br>
    👉 <i>Sorting is done in-place.</i></p>`;


    c_delay = 0;

    for(var j = 0; j < array_size; j++){
        div_update(divs[j], div_sizes[j], "yellow");//Color update

        var key = div_sizes[j];
        var i = j - 1;
        while(i >= 0 && div_sizes[i] > key){
            div_update(divs[i], div_sizes[i], "red");//Color update
            div_update(divs[i + 1], div_sizes[i + 1], "red");//Color update

            div_sizes[i + 1] = div_sizes[i];

            div_update(divs[i], div_sizes[i], "red");//Height update
            div_update(divs[i + 1], div_sizes[i + 1], "red");//Height update
    
            div_update(divs[i], div_sizes[i], "white");//Color update
            if(i == (j - 1)){
                div_update(divs[i + 1], div_sizes[i + 1], "yellow");//Color update
            } else {
                div_update(divs[i + 1], div_sizes[i + 1], "white");//Color update
            } 
            i -= 1;
        }
        div_sizes[i + 1] = key;

        for(var t = 0; t < j; t++){
            div_update(divs[t], div_sizes[t], "green");//Color update
        }
    }
    div_update(divs[j - 1], div_sizes[j - 1], "green");//Color update

    enable_buttons();
}
