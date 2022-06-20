const content = document.getElementById("content");

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        json.map((item, index) => {
            content.innerHTML += `
            <img src="${item.image}"/>
            <h3>${item.title}</h3>
            <p>${item.price}</p>
            `;
            // console.log(item.title)
        })
    })
