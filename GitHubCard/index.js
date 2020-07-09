import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the followersArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
const entryPoint = document.querySelector('.cards')

const followersArray = [
  'Nova-Blackstock',
  'AustinKelsay',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd'
];

function gitHubMates(dataObj){
  const card = document.createElement('div')
    const cardImage = document.createElement('img')

  const cardInfo = document.createElement('div')
    const cardName = document.createElement('h3')
    const cardUserName = document.createElement('p')
    const cardLocation = document.createElement('p')
    const cardProfile = document.createElement('p')
      const cardAddress = document.createElement('a')

    const cardFollowers = document.createElement('p')
    const cardFollowing = document.createElement('p')
    const cardBio = document.createElement('p')

    card.className = 'card'
    cardInfo.className = 'card-info'
    cardName.className = 'name'
    cardUserName.className = 'username'

    cardImage.setAttribute('src', dataObj.avatar_url)
    cardName.textContent= dataObj.name
    cardUserName.textContent= `Handle: ${dataObj.login}`
    cardLocation.textContent= dataObj.location
    cardProfile.textContent= 'Profile: '
    cardProfile.style.fontWeight = 'bold'
    cardAddress.href = dataObj.html_url
    cardAddress.textContent= dataObj.html_url
    cardFollowers.textContent= `Followers:  ${dataObj.followers}`
    cardFollowers.style.fontWeight = 'bold'
    cardFollowing.textContent= `Following: ${dataObj.following}`
    cardFollowing.style.fontWeight = 'bold'
    cardBio.textContent= `Bio: ${dataObj.bio}`
    cardBio.style.fontWeight = 'bold'

    entryPoint.appendChild(card)
      card.appendChild(cardImage)
      card.appendChild(cardInfo)
        cardInfo.appendChild(cardName)
        cardInfo.appendChild(cardUserName)
        cardInfo.appendChild(cardLocation)
        cardInfo.appendChild(cardProfile)
          cardProfile.appendChild(cardAddress)
        cardInfo.appendChild(cardFollowers)
        cardInfo.appendChild(cardFollowing)
        cardInfo.appendChild(cardBio)

    return card

}

function gitIt(name){
  const gitMate = `https://api.github.com/users/${name}`

  axios.get(gitMate)
  .then(function (value) {
      const gitMates = value.data
      gitHubMates(gitMates)
      })
      .catch(function (error) {
        debugger
        console.log('ERROR')
      })  

}
followersArray.forEach(pal =>{
  gitIt(pal)
})
console.log(entryPoint)


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
