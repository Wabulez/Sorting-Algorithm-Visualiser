# Sorting Algorithm Visualiser

An interactive web-based **Sorting Algorithm Visualiser** built with vanilla HTML, CSS, and JavaScript. This application helps users understand how classic sorting algorithms work under the hood by animating array comparisons and swaps in real time, alongside detailed time and space complexity breakdowns.

## Features

- **Interactive Controls:**
  - **Array Size Slider:** Dynamically adjust the number of elements from `20` to `150` (default: `80`).
  - **Speed Slider:** Control the animation speed across `5` distinct levels (default: `4`).
  - **Array Generator:** Instantly generate a new randomized dataset at any time.
- **6 Sorting Algorithms:** Visualise and compare both elementary and efficient sorting techniques:
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
  - Heap Sort
- **Algorithm Insights & Complexity Analysis:**
  - Quick-reference categorization (Efficient vs. Simple/Slow, Space Usage, and Stability).
  - Dynamic display of **Best**, **Average**, and **Worst** case Time Complexities with explanations.
  - Overall **Space Complexity** breakdown for each selected algorithm.

## Algorithms Overview

| Algorithm | Best Time | Average Time | Worst Time | Worst Space | Stable |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Bubble Sort** | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | Yes |
| **Selection Sort** | $O(n^2)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | No |
| **Insertion Sort** | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | Yes |
| **Merge Sort** | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(n)$ | Yes |
| **Quick Sort** | $O(n \log n)$ | $O(n \log n)$ | $O(n^2)$ | $O(\log n)$ | No |
| **Heap Sort** | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(1)$ | No |

## Project Structure

```text
sorting-visualiser/
├── Images/
│   └── abstract blue and purple bg.jpg
├── scripts/
│   ├── main.js
│   ├── visualisations.js
│   ├── bubbleSort.js
│   ├── heapSort.js
│   ├── insertionSort.js
│   ├── mergeSort.js
│   ├── quickSort.js
│   └── selectionSort.js
├── index.html
├── style.css
├── index.js
├── .gitignore
└── README.md
```

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Wabulez/Sorting-Algorithm-Visualiser.git
   cd Sorting-Algorithm-Visualiser
   ```

2. **Run the application:**
   - Because `style.css` references background assets using a root-relative path (`/Images/...`), it is recommended to serve the project using a local development server (such as the **Live Server** extension in VS Code) rather than opening the file directly via `file://`.
   - Alternatively, you can run a quick local server using Python or Node:
     ```bash
     # Using Python 3
     python -m http.server 8000
     ```
   - Open your browser and navigate to `http://localhost:8000`.

## Technologies Used

- **HTML5:** Semantic structure and range/button UI controls.
- **CSS3:** Responsive Flexbox layout, custom animations, and Google Fonts (`Poppins`).
- **JavaScript (ES6+):** DOM manipulation, asynchronous animation timing, and sorting algorithm implementations.
