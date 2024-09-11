function calculateTriangleArea() {
    const base = document.getElementById('base').value;
    const height = document.getElementById('height').value;
    const area = 0.5 * base * height;
    const resultElement = document.getElementById('triangle-area-result');
    if (resultElement) {
        resultElement.innerText = `Luas Segitiga: ${area} cm² (Rumus: 0.5 x ${base} x ${height})`;
    } else {
        console.error('Element with ID "triangle-area-result" not found.');
    }
}

function calculateTrianglePerimeter() {
    const side1 = document.getElementById('side1').value;
    const side2 = document.getElementById('side2').value;
    const side3 = document.getElementById('side3').value;
    const perimeter = parseFloat(side1) + parseFloat(side2) + parseFloat(side3);
    const resultElement = document.getElementById('triangle-perimeter-result');
    if (resultElement) {
        resultElement.innerText = `Keliling Segitiga: ${perimeter} cm (Rumus: ${side1} + ${side2} + ${side3})`;
    } else {
        console.error('Element with ID "triangle-perimeter-result" not found.');
    }
}

function calculateParallelogramArea() {
    const base = document.getElementById('base-parallelogram').value;
    const height = document.getElementById('height-parallelogram').value;
    const area = base * height;
    const resultElement = document.getElementById('parallelogram-area-result');
    if (resultElement) {
        resultElement.innerText = `Luas Jajargenjang: ${area} cm² (Rumus: ${base} x ${height})`;
    } else {
        console.error('Element with ID "parallelogram-area-result" not found.');
    }
}

function calculateParallelogramPerimeter() {
    const base = document.getElementById('base-parallelogram').value;
    const side = document.getElementById('side-parallelogram').value;
    const perimeter = 2 * (parseFloat(base) + parseFloat(side));
    const resultElement = document.getElementById('parallelogram-perimeter-result');
    if (resultElement) {
        resultElement.innerText = `Keliling Jajargenjang: ${perimeter} cm (Rumus: 2 x (${base} + ${side}))`;
    } else {
        console.error('Element with ID "parallelogram-perimeter-result" not found.');
    }
}
