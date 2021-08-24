'use strict';
(async () => {
    let url = 'https://603e38c548171b0017b2ecf7.mockapi.io/homes';
    let response = await fetch(url);
    
    const data = await response.json();
    
     const randomColor = () => { return Math.random().toString(16).slice(2,8) }
     const type = (houseType) => { return houseType==='IndependentLiving' ? 'living' : 'otherLiving'}
    data.forEach( house => {
      if( house.title.includes('')){
      var newDiv = document.createElement("div");
      newDiv.innerHTML = `
      <a href="card.html">
      <img src="https://via.placeholder.com/379x175/${randomColor()}/000000?text=${house.title}">
      <div class="${type(house.type)}">${house.type}</div>
      <h3>${house.title}</h3>
      <p>${house.address}</p>
      <p>New properties for sale from ${house.price}</p></a>`;
      my_div = document.getElementById("cards");
      newDiv.className="card";
      my_div.append(newDiv);}
      });
  })()
