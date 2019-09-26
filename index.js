function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText);
  const src = document.getElementById('handle')
  document.getElementById('repositories').innerHTML = repoList;
}

function getRepositories(){
  const req = new XMLHttpRequest();
  req.addEventListener('load',showRepositories);
  req.open('GET','https://api.github.com/users/octocat/repos');
  req.send();
}