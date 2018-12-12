/* 

fetch the html index.html
grab the article 
display the content
add an internal timer

*/

const file = 'projects.json'

var myHeaders = new Headers();
myHeaders.append('pragma', 'no-cache');
myHeaders.append('cache-control', 'no-cache');

var myInit = {
    method: 'GET',
    headers: myHeaders,
};

function fetchProjects() {
    fetch(file, myInit)
        .then(res => res.json())
        .then(data => {
            let str = JSON.stringify(data);
            document.getElementById('output').textContent = str;
        })
        .catch(err => {
            let nm = err.name;
            let msg = err.message;
            alert(`CATCH: ${nm} ${msg}`);
        });
}


setInterval(fetchProjects, 5000);