const content = document.getElementById("content");

fetch('https://fakestoreapi.com/products')
            .then(res=>{
                return res.json();
            })
            .then(json=>{
                json.map((item, index) => {
                    content.innerHTML += `<p>${item.title}</p>`;
                    console.log(item.title)
                })
                // json.forEach(item => {
                //     content.innerHTML=`<p>${item.title}</p>`;
                //     console.log(item.title);
                // });
            })

! function() {
    console.log("hello");
}
