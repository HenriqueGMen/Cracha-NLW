const LinksSocialMedia = {
  github: 'HenriqueGMen',
  youtube: 'UCSev9DSgeJ7sqhx47gyWQ8w',
  facebook: 'henrique.mendonca.18',
  instagram: 'henrique.mendonnca',
  twitter: 'henriquegmen'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userNick.textContent = data.login
    })
}

getGitHubProfileInfos()