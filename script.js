document.getElementById('bouton').addEventListener('click', async function () {

    try {
        let reponse = await fetch('https://thatsthespir.it/api');

        let data = await reponse.json();

        let div = document.getElementById('div');

        div.innerHTML = '';

        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let img = document.createElement('img');

        p1.textContent = `${data.quote}`;
        p2.textContent = `${data.author}`;
        img.src = `${data.photo}`;


        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(img)

    } catch (error) {
        alert('erreur')
    }


});
