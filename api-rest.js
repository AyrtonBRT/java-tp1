const peticion = fetch(`https://tle.ivanstanojevic.me/api/tle/`);

peticion
  .then(resp => resp.json())
  .then(({ member }) => {
    const resultsDiv = document.getElementById('results');
    
    const satellite1 = member.find(obj => obj.satelliteId === 40075);
    const satellite1Element = createSatelliteElement(satellite1);
    resultsDiv.appendChild(satellite1Element);
    
    const satellite2 = member.find(obj => obj.satelliteId === 42017);
    const satellite2Element = createSatelliteElement(satellite2);
    resultsDiv.appendChild(satellite2Element);
    
    const satellite3 = member.find(obj => obj.satelliteId === 47924);
    const satellite3Element = createSatelliteElement(satellite3);
    resultsDiv.appendChild(satellite3Element);
  })
  .catch(console.warn);

function createSatelliteElement(satellite) {
  const satelliteDiv = document.createElement('div');
  satelliteDiv.innerHTML = `
    <h2>${satellite.name}</h2>
    <p>Id: ${satellite.satelliteId}</p>
    <p>Line 1: ${satellite.line1}</p>
    <p>Line 2: ${satellite.line2}</p>
  `;
  
  return satelliteDiv;
}


