let ageInput, dayInput, monthInput, yearInput;
let resultP;

function setup() {
    createCanvas(400, 300);

    createSpan('Age: ').position(20, 20);
    ageInput = createInput('50');
    ageInput.position(150, 20);

    createSpan('Day: ').position(20, 50);
    dayInput = createInput('15');
    dayInput.position(150, 50);

    createSpan('Month: ').position(20, 80);
    monthInput = createInput('6');
    monthInput.position(150, 80);

    createSpan('Year: ').position(20, 110);
    yearInput = createInput('2070');
    yearInput.position(150, 110);

    resultP = createP('');
    resultP.position(20, 140);

    let calculateButton = createButton('Calculate');
    calculateButton.position(20, 180);
    calculateButton.mousePressed(calculateHaiku);
}

function calculateHaiku() {
    let age = parseFloat(ageInput.value());
    let day = parseFloat(dayInput.value());
    let month = parseFloat(monthInput.value());
    let year = parseFloat(yearInput.value());

    // Parameters
    let spike_scale = 400;
    let age_spike_center = 30, age_spike_width = 10, max_age_spike = 100;
    let day_spike_center = 15, day_spike_width = 5, max_day_spike = 50;
    let month_spike_center = 6, month_spike_width = 2, max_month_spike = 60;
    let year_spike_center = 2023, year_spike_width = 5, max_year_spike = 30;
    let amplitude_sine_wave = 30;

    // Spike calculations
    let age_spike = max_age_spike * Math.exp(-0.5 * ((age - age_spike_center) / age_spike_width)**2);
    let day_spike = max_day_spike * Math.exp(-0.5 * ((day - day_spike_center) / day_spike_width)**2);
    let month_spike = max_month_spike * Math.exp(-0.5 * ((month - month_spike_center) / month_spike_width)**2);
    let year_spike = max_year_spike * Math.exp(-0.5 * ((year - year_spike_center) / year_spike_width)**2);
    let sine_wave = amplitude_sine_wave * Math.sin(2 * Math.PI * (day + month) / 13);  

    // Haiku Function value
    let result = (1 + spike_scale * (age_spike + day_spike + month_spike + year_spike + sine_wave)) / (spike_scale + 1);
    
    resultP.html(`Haiku Function Result: ${result.toFixed(2)}`);
}

function draw() {
    background(220);
}
