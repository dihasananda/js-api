const content = document.getElementById("content");

!async function() {
    await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                // json.map((item, index) => {
                //     content.innerHTML=`<p>${item.title}</p>`;
                //     console.log(item.title)
                // })
                // json.forEach(item => {
                //     content.innerHTML=`<p>${item.title}</p>`;
                //     console.log(item.title);
                // });
                for(let i = 0; i<json.length; i++){
                    content.innerHTML=`<p>${json[i].title}</p>`;
                    console.log(json[i].title);
                }
            })
        }();