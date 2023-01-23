var xhttp = new XMLHttpRequest();
let output = '';
const list_box = document.querySelector("#scanned")

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // runs only with live server
        // console.log(xhttp.responseText);

        // transfer to js oject
        var response = JSON.parse(xhttp.responseText);
        // console.log(response);

        var articles = response.articles;
        // console.log(articles);

        for (let i = 0; i < articles.length; i++) {
            // console.log(articles[i].article);

            // innerHTML method
            // output += "<li>" + "<p>" + articles[i].article + "</p>" + "<p>" + articles[i].price + "</p>" + "€" + "</li>";
            // document.getElementById("scanned").innerHTML = output;

            output = articles[i].article + articles[i].price + " €" ;

            const list_item = document.createElement('li');
            list_item.classList.add('article')
            list_item.innerText = output;
            list_box.appendChild(list_item)

            // setTimeout(() => {
            //     console.warn(i);
            // }, i*1000)
        }
    }
};
xhttp.open("GET", "./data.json", true);
xhttp.send()