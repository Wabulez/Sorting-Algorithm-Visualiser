function bubbleSort(){
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(n²) - Quadratic Time";
    document.getElementById("Time_Average").innerText="O(n²) - Quadratic Time";
    document.getElementById("Time_Best").innerText="O(n) - Linear Time";

    document.getElementById("TW_Explanation").innerHTML=`<p>
    When the array is in reverse order, every comparison results in a swap.
    The algorithm performs the maximum number of passes and swaps.<br><br>
    👉 <i>This is the slowest scenario.</i></p>`;

    document.getElementById("TA_Explanation").innerHTML=`<p>
    For a randomly ordered array, bubble sort performs multiple passes, repeatedly comparing and swapping adjacent elements.
    The number of comparisons grows with the square of the input size.<br><br>
    👉 <i>Most inputs fall in this category.</i></p>`;

    document.getElementById("TB_Explanation").innerHTML=`<p>
    When the array is already sorted, bubble sort makes one full pass through the array and no swaps occur.
    With the usual optimized version (using a swap flag), the algorithm stops early.<br><br>
    👉 <i>Only one traversal is needed.</i></p>`;

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1) - Constant Space";

    document.getElementById("SW_Explanation").innerHTML=`<p>
    Bubble sort does not use extra memory proportional to the input size.
    It only uses a few temporary variables (for swapping elements).
    Sorting is done within the original array.<br><br>
    👉 <i>This makes bubble sort an in-place sorting algorithm.</i></p>`


    c_delay=0;

    for(var i=0;i<array_size-1;i++) {
        for(var j=0;j<array_size-i-1;j++){
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]>div_sizes[j+1]){
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[j+1],div_sizes[j+1], "red");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");//Height update
                div_update(divs[j+1],div_sizes[j+1], "red");//Height update
            }
            div_update(divs[j],div_sizes[j], "white");//Color update
        }
        div_update(divs[j],div_sizes[j], "green");//Color update
    }
    div_update(divs[0],div_sizes[0], "green");//Color update

    enable_buttons();
}