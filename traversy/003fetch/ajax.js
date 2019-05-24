document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getApiData').addEventListener('click', getApiData);
document.getElementById('addPost').addEventListener('submit', addPost);


function getText(){
	// console.log('get text')
	// w parametrze podajemy adres lub też plik z którego będziemy pobierali dane
	fetch('sample.txt')
		// parameter funkcji zawierający odpowiedź "response"
		.then(function(response){
			// wyświetl odpowiedź response
			// wyświetla status odpowiedzi z pliku
			// console.log(response);

			// wyświetla text z zapytania do pliku, ale tylko jako promis
			// console.log(response.text());

			// aby zwrócić czysty tekst należy
			return response.text();
		})
		//aby wyświetlić sam tekst z pobieranych danych należy dodać kolejne than z funkcją oraz parametrem data zawierającym pobierany tekst
		.then(function(data){
			console.log(data);
			document.getElementById('output').innerHTML = data;
		})
		// ŁAPANIE błędów
		.catch(function(error){
			console.log(error);
		})
  		// .catch((err) => console.log('err'))

		// wersja z fat arrow

		// .then((response) => response.text())
		// .then((data) => console.log(data))
		// .catch((err) => console.log('err'))
}

function getUsers(){
	fetch('users.json')
		.then((response) => response.json())
		.then((data) => {
			let output = '<h2>Users</h2>';
			console.log(data);
			//forEach wykonuje pętle po elementach tablicy, users umownie nazywana jest wartość przypisana do danego elementu
			data.forEach(function(user){
				output += `
					<ul>
					// zmienne w takim zapisie definujemy 
						<li>Id: ${user.id}</li>
						<li>Name: ${user.name}</li>
						<li>User: ${user.email}</li>
					</ul>
				`;
			});
			document.getElementById('output').innerHTML = output;
		})
}

function getApiData(){
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response)=> response.json())
		.then((data) => {
			let output = '<h2>Posts</h2>';
			console.log(data);
			//forEach wykonuje pętle po elementach tablicy, users umownie nazywana jest wartość przypisana do danego elementu
			data.forEach(function(posts){
				output += `
					<div>
						<h3>${posts.title}</h3>
						<p>${posts.body}</p>

					</div>
				`;
			});
			document.getElementById('output').innerHTML = output;
		})
}

function addPost(e){
	e.preventDefault();
	
	let title = document.getElementById("title").value;
	let body = document.getElementById("body").value;
	// a)pierwszy parameter adres, drugi obiekt
	fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
		// metoda
		method:'POST',
		headers:{
			'Accept':'application/json, text/plain, */*',
			'Content-type':'application/json'
		},
		body:JSON.stringify({title:title, body:body})

		})
	.then((result) => result.json())
	.then((data) => console.log(data))
}

// function getText(){
//   console.log('ready');
//   // fetch zwraca obietnicę
//   fetch('sample.txt')
//   .then(function(res){
//     //odpowiedz z funckją i tesktem/ewnetualnie json itd.
//    return res.text();
//   })
//   //kolejny then z parametrem
//   .then(function(data){
//     console.log(data);
//     document.getElementById('output').innerHTML = data;
//   })
//   // ŁAPANIE błędów
//   .catch((err) => console.log('err'))
  
  /*wersja fat arrow
  
  fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => res.data())
   */
  
//  function getUsers(){
//    fetch('users.json')
//    .then((res) => res.json())
//    .then((data) => {
//      let output = '<h2>Users</h2>';
//      data.forEach(function(user){
//         output += `
//           <ul>
//             <li>ID: ${user.id}</li>
//             <li>ID: ${user.name}</li>
//             <li>ID: ${user.email}</li>
 
//           </ul>
//                 `;
//      })
//      document.getElementById('output').innerHTML = output;
//    })
 
// }
  
  
//  function getPost(){
//    fetch('users.json')
//    .then((res) => res.json())
//    .then((data) => {
//      let output = '<h2>Users</h2>';
//      data.forEach(function(post){
//         output += `
//           <div>
//             <h2>ID: ${post.title}</h2>
//             <p>ID: ${post.body}</p> 
//           </div>
//           `;
//      })
//      document.getElementById('output').innerHTML = output;
//    })
 
// }
  
  
// }