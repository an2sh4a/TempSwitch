function convertTemperature() {
    const temp = parseFloat(document.getElementById('inputT').value);
    const unit = document.getElementById ('unit').value;
    let cel,fah,kel;
    if (unit === 'celsius') {
        cel = temp;
        fah = (temp * 1.8) + 32;
        kel = temp + 273.15;
    }
    else if(unit === 'fahrenheit') {
        cel = (temp - 32) / 1.8;
        fah = temp;
        kel = cel + 273.15;
    }
    else if(unit === 'kelvin') {
        cel = temp - 273.15;
        fah = (cel * 1.8) + 32;
        kel = temp;
    }
    document.getElementById('outputC').textContent = `Celsius: ${cel.toFixed(3)}`;
    document.getElementById('outputF').textContent = `Fahrenheit: ${fah.toFixed(3)}`;
    document.getElementById('outputK').textContent = `Kelvin: ${kel.toFixed(3)}`;
    const results = document.querySelectorAll('.result p');
    results.forEach (p => p.classList.remove('show'));
    setTimeout(() => {
        results.forEach (p => p.classList.add('show'));
    }, 10);
}