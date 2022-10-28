// ARTISTS ARRAY

let artists = [
    // also need to determine if a second array needs to be created for subjects, like "Tattooing at: ", "Booking: ", etc.
    {
        img: 'images/chelsey-moore.jpg',
        name: 'Chelsey Moore',
        instagram: "@cmoore04",
        shop: '<a href="http://archetypetattoo.com/">Archetype Tattoo Studio</a>',
        booking: '<a href="https://chelseymooretattoo.wordpress.com/">chelseymooretattoo.com</a>',
        specialtiesOne: 'Color Illustrative',
        specialtiesTwo: 'Color Realism',
    },
    {
        img: 'images/fox-richards.jpeg',
        name: 'Fox Richards',
        instagram: '@fox_richards',
        shop: 'Coven Studio',
        booking: 'foxrichards.com',
        specialtiesOne: 'Black and Gray Realism mixed with Geometric and Blackwork',
    },
    {
        img: '',
        name: 'Arianna Shelton',
        instagram: '@weirdmullet',
        shop: 'Milagro Tattoo',
        booking: 'milagrotattoo.com/ariannashelton',
        specialtiesOne: '',
    },
    {
        img: '',
        name: 'Maggie Elena',
        instagram: '@maggie.elena',
        shop: 'Black Alchemy',
        booking: 'maggieelenatattoo@gmail.com',
        specialtiesOne: 'Heavy Blackwork',
        specialtiesTwo: 'Neo-Tribal',
    },
    {
        img: '',
        name: 'Gina Marie Medlock',
        instagram: '@ginamarietattoo',
        shop: 'High Hands Tattoo',
        booking: 'ginamarietattoo.com',
        specialtiesOne: '',
    },
    {
        img: '',
        name: 'Kori',
        instagram: '@korixmarie',
        shop: 'Cellardoor Collective',
        booking: 'korimarietattoo@gmail.com',
        specialtiesOne: '',
    },
    {
        img: '',
        name: 'Isha Luz',
        instagram: 'ishaluz.tattoos',
        shop: 'Cheeky Monkey Tattoo',
        booking: 'form.jotform.com/222216047476050',
        specialtiesOne: 'Anime',
        specialtiesTwo: 'Fine Line',
        specialtiesThree: 'Illustrative',
        specialtiesFour: 'Traditional',
    },
    {
        img: '',
        name: 'Sydney Settecerri',
        instagram: '@squidartificial',
        shop: 'Cheeky Monkey Tattoo',
        booking: 'shop@cheekymonkeyabq.com',
        specialtiesOne: '',
    },

]

console.log(artists)

// LOOPING THROUGH THE DOM -- A TAGS WORK AND LINES 86-90 WORK!

let targetDiv = document.getElementById('target')
console.log(targetDiv)
artists.forEach(

    (artist) => {
        targetDiv.innerHTML = `${targetDiv.innerHTML} <h2> ${artist.name} </h2> <p> ${artist.booking} </p>`
        /* targetDiv.innerHTML = targetDiv.innerHTML + '<h2>' + person + '</h2>'*/ //the same as line 14
        console.log(artist) //running once for each person in the array
    }
)

function handleLoadEvent () {
    document.getElementById('target').innerHTML = artists.reduce(
        // whatever function returns will be put into accumulatedCards
        (artistDirectory, currentDataElement) => {
            return (
                `${artistDirectory}
                    <div class="col">
                        <div class="card">
                            <img src="${currentDataElement.img}" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">${currentDataElement.name}</h5>
                                 <p class="card-text">${currentDataElement.instagram}</p>
                                 <p class="card-text">${currentDataElement.shop}</p>
                                 <p class="card-text">${currentDataElement.booking}</p>
                                 <p class="card-text">${currentDataElement.specialtiesOne}</p>
                                 <p class="card-text">${currentDataElement.specialtiesTwo}</p>
                                 <p class="card-text">${currentDataElement.specialtiesThree}</p>
                                 <p class="card-text">${currentDataElement.specialtiesFour}</p>
                            </div>
                        </div>
                    </div>`
            )
            //    the empty '' takes care of the first empty string of [object, object]
        }, ''
    )
}