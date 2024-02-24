let a = 36260130;
let b = 40117096;
let c = 46044703;
let tasaCrecimiento1 = 10.66;
let tasaCrecimiento2 = 14.77;
let tasaCrecimiento3 = 26.98;

let periodo1 = prompt("Indica un periodo entre los últimos 3 censos de Argentina: a, b, o c");
let periodo2 = prompt("Indica un segundo periodo entre los restantes");

if ((periodo1 === 'a' && periodo2 === 'b') || (periodo1 === 'b' && periodo2 === 'a')) {
    alert(`La tasa de crecimiento entre los periodos ${periodo1} y ${periodo2} es: ${tasaCrecimiento1}%`);
} else if ((periodo1 === 'b' && periodo2 === 'c') || (periodo1 === 'c' && periodo2 === 'b')) {
    alert(`La tasa de crecimiento entre los periodos ${periodo1} y ${periodo2} es: ${tasaCrecimiento2}%`);
} else if ((periodo1 === 'a' && periodo2 === 'c') || (periodo1 === 'c' && periodo2 === 'a')) {
    alert(`La tasa de crecimiento entre los periodos ${periodo1} y ${periodo2} es: ${tasaCrecimiento3}%`);
} else {
    alert('Los periodos ingresados no son válidos');
}

