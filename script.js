function getInputValue() {

        var inputVal = document.getElementById("busq").value;
        var botonBuscar = document.getElementById("buscar");
        var resultadosBusqueda = document.getElementById("resultados");
        while(resultadosBusqueda.firstChild){
    		div.removeChild(div.firstChild);
			}
    	var word = inputVal;
    	var url = 'https://wordsapiv1.p.rapidapi.com/words/';

        var requestOptions = {
        "method": "GET",
		"headers": {
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
		"x-rapidapi-key": "4e61e33d53msh61ae79a6b483bc1p1e4899jsnfc43309615e3"

        }
    }

    fetch(url + word + '/synonyms' , requestOptions).then(response => response.json())
    .then(response => {
				const padre = document.getElementById('bodycollapseS');
				if(response.synonyms.length>0){
				document.getElementById('btnsin').style.display = "";
				for(sinonimos of response.synonyms){
					const modelo = document.createElement('li');
					modelo.classList.add("card-body")
					modelo.textContent = sinonimos
					padre.appendChild(modelo)
				}
			}
			})
	.catch(err => {
	console.error(err);
	});

	fetch(url + word + '/definitions' , requestOptions).then(response => response.json())
    .then(response => {
				const padre = document.getElementById('bodycollapseD');
				if(response.definitions.length>0){
				document.getElementById('btndef').style.display = "";
				const title = document.createElement('h6');
				title.textContent = "Definitions"
				padre.appendChild(title)
				console.log(response)
				for(definiciones of response.definitions){
					const modelo = document.createElement('li');
					modelo.classList.add("card-body")
					modelo.textContent = definiciones.definition
					padre.appendChild(modelo)
				}
			}
			})
	.catch(err => {
	console.error(err);
	})

	fetch(url + word + '/pronunciation' , requestOptions).then(response => response.json())
    .then(response => {
				const padre = document.getElementById('bodycollapseP');
				if(response.pronunciation){
				document.getElementById('btnprn').style.display = "";
				const title = document.createElement('h4');
				title.textContent = "Pronunciation"
				padre.appendChild(title)
				console.log(response)
				if(response.pronunciation.all){
				const prona = response.pronunciation.all
				const modeloa = document.createElement('h2');
				modeloa.classList.add("card-body")
				modeloa.textContent = prona
				padre.appendChild(modeloa)
				} else {
					const prona = response.pronunciation
					const modeloa = document.createElement('h2');
					modeloa.classList.add("card-body")
					modeloa.textContent = prona
					padre.appendChild(modeloa)
				}
				if(response.pronunciation.verb){
				const pronv = "verb: " + response.pronunciation.verb
				const modelo = document.createElement('h2');
				modelo.classList.add("card-body")
				modelo.textContent = pronv
				padre.appendChild(modelo)
				}
				if(response.pronunciation.noun){
				const pronn = "noun: " + response.pronunciation.noun
				const modelon = document.createElement('h2');
				modelon.classList.add("card-body")
				modelon.textContent = pronn
				padre.appendChild(modelon)
				}
				}
			})
	.catch(err => {
	console.error(err);
	})

	fetch(url + word + '/similarTo' , requestOptions).then(response => response.json())
    .then(response => {
				const padre = document.getElementById('bodycollapseSimilar');
				if(response.similarTo.length>0){
				document.getElementById('btnsimilar').style.display = "";
				const title = document.createElement('h6');
				title.textContent = "Similar To"
				padre.appendChild(title)
				console.log(response)
				for(similares of response.similarTo){
					const modelo = document.createElement('li');
					modelo.classList.add("card-body")
					modelo.textContent = similares
					padre.appendChild(modelo)
				}
			}
			})
	.catch(err => {
	console.error(err);
	})
	fetch(url + word + '/frequency' , requestOptions).then(response => response.json())
    .then(response => {
				const padre = document.getElementById('bodycollapseFrq');
				
				document.getElementById('btnfrq').style.display = "";
				const title = document.createElement('h6');
				title.textContent = "Frequency"
				padre.appendChild(title)
				console.log(response)
				if(response.frequency.zipf){
					const zipf = "zipf: " + response.frequency.zipf
					const modelo = document.createElement('a');
					modelo.classList.add("card-body")
					modelo.textContent = zipf
					modelo.setAttribute("data-bs-toggle","tooltip")
					modelo.setAttribute("data-bs-placement", "top")
					modelo.setAttribute("title", "A score indicating how common the word is in the English language, with a range of 1 to 7")
					padre.appendChild(modelo)
				}
				if(response.frequency.perMillion){
					const pM = "perMillion: " + response.frequency.perMillion
					const modelo = document.createElement('li');
					modelo.classList.add("card-body")
					modelo.textContent = pM
					padre.appendChild(modelo)
				}
				if(response.frequency.diversity){
					const div = "diversity: " + response.frequency.diversity
					const modelo = document.createElement('li');
					modelo.classList.add("card-body")
					modelo.textContent = div
					padre.appendChild(modelo)
				}

			})
	.catch(err => {
	console.error(err);
	})
}