let clock = (pLand, pOrt, pID) => {
    var d = new Date();
    var datem = d.toLocaleTimeString(pLand, {
        timeZone: pOrt
    })
    let time = `${datem}`;
    document.getElementById(`clock${pID}`).innerText = time;
};

