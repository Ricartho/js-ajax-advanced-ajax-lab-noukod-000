function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText);
  const src = document.getElementById('repository-template').innerHTML;
  document.getElementById('repositories').innerHTML = repoList;
  const template = 
}

function getRepositories(){
  const req = new XMLHttpRequest();
  req.addEventListener('load',showRepositories);
  req.open('GET','https://api.github.com/users/octocat/repos');
  req.send();
}