document.getElementById('bouton').addEventListener('click', async function () {

    try {
        //auteurs
        let reponse = await fetch('https://thatsthespir.it/api');
        let data = await reponse.json();
  

        //âge des auteurs
        let reponseAge = await fetch(`https://api.agify.io/?name=${data.author[0]}`);
        let dataAge = await reponseAge.json();

        //html
        let div = document.getElementById('div');

        div.innerHTML = '';

        let p1 = document.createElement('p');
        p1.className = 'p1';

        let p2 = document.createElement('p');
        p2.className = 'p2';

        let p3 = document.createElement('p');
        p3.className = 'p3';

        let img = document.createElement('img');

        p1.textContent = `${data.quote ?? 'citation inconnu'}`;
        p2.textContent = `${data.author ?? 'auteur inconnu'}`;
        p3.textContent = `${dataAge.age ?? 'âge inconnu'}`;

        if (data.photo != '') {
            img.src = data.photo 
        } else {
            img.src = `defaultimg.jpg`;
        }
        


        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        div.appendChild(img)

    //error
    } catch (error) {
        alert('erreur')
    }


});
