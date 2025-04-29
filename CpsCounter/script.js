let clickCount = 0;
let cpsDisplay = document.getElementById('cps');

function updateCPS() {
    cpsDisplay.textContent = `CPS: ${clickCount}`;
    clickCount = 0;
}

function startTracking() {
    setInterval(updateCPS, 1000);
}

document.addEventListener('click', () => {
    clickCount++;
})
startTracking();
console.log("Subscribe To Mamuk13 On Youtube FR FR");
console.log("Subscribe To Mamuk13 On Youtube FR FR");