let clock = (pLand, pOrt, pID) => {
    var d = new Date();
    var datem = d.toLocaleTimeString(pLand, {
        timeZone: pOrt
    })
    let time = `${datem}`;
    document.getElementById(`clock${pID}`).innerText = time;
};

let start = () => {
    setInterval(function () {
        clock('en-US', 'America/New_York', 0)
    }, 1000);

    setInterval(function () {
        clock('en-NZ', 'Pacific/Chatham', 1)
    }, 1000);

    setInterval(function () {
        clock('en-GB', 'Europe/London', 2)
    }, 1000);
}