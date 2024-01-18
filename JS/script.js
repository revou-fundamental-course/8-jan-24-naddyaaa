function calculate() {
    var sideLength = parseFloat(document.getElementById('sideLength').value);
    
    if (!isNaN(sideLength)) {
        var area = sideLength * sideLength;
        var perimeter = 4 * sideLength;

        document.getElementById('areaResult').innerHTML = "Luas: " + sideLength + " x " + sideLength + " = " + area;
        document.getElementById('perimeterResult').innerHTML = "Keliling: 4 x " + sideLength + " = " + perimeter;
    } else {
        document.getElementById('areaResult').innerHTML = "Masukkan panjang sisi yang valid.";
        document.getElementById('perimeterResult').innerHTML = "";
        
    }
}
