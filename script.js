// ARTISTS ARRAY

let artists = [
    // also need to determine if a second array needs to be created for subjects, like "Tattooing at: ", "Booking: ", etc.
    {
        img: 'images/chelsey-moore.jpg',
        alt: 'Chelsey sitting in her tattooing space',
        name: 'Chelsey Moore',
        instagram: '@cmoore04',
        shop: '<a href="http://archetypetattoo.com/">Archetype Tattoo Studio</a>',
        booking: '<a href="https://chelseymooretattoo.wordpress.com/">chelseymooretattoo.com</a>',
        specialtiesOne: 'Color Illustrative',
        specialtiesTwo: 'Color Realism',
        specialtiesThree: '',
        specialtiesFour: '',
    },
    {
        img: 'images/fox-richards.jpeg',
        alt: 'rainbow logo of a fox head',
        name: 'Fox Richards',
        instagram: '@fox_richards',
        shop: 'Coven Studio',
        booking: '<a href="https://www.foxrichards.com/">foxrichards.com</a>',
        specialtiesOne: 'Black and Gray Realism mixed with Geometric and Blackwork',
        specialtiesTwo: '',
        specialtiesThree: '',
        specialtiesFour: '',
    },
    {
        img: '',
        name: 'Arianna Shelton',
        instagram: '@weirdmullet',
        shop: '<a href="https://www.milagrotattoo.com/">Milagro Tattoo</a>',
        booking: '<a href="https://www.milagrotattoo.com/ariannashelton">milagrotattoo.com/ariannashelton</a>',
        specialtiesOne: '',
        specialtiesTwo: '',
        specialtiesThree: '',
        specialtiesFour: '',
    },
    {
        img: '',
        name: 'Maggie Elena',
        instagram: '@maggie.elena',
        shop: '<a href="https://blackalchemystudio.com/">Black Alchemy</a>',
        booking: '<a href="mailto:maggieelenatattoo@gmail.com">maggieelenatattoo@gmail.com</a>',
        specialtiesOne: 'Heavy Blackwork',
        specialtiesTwo: 'Neo-Tribal',
        specialtiesThree: '',
        specialtiesFour: '',
    },
    {
        img: '',
        name: 'Gina Marie Medlock',
        instagram: '@ginamarietattoo',
        shop: '<a href="https://www.highhandstattoo.com/">High Hands Tattoo</a>',
        booking: '<a href="https://www.ginamarietattoo.com/">ginamarietattoo.com</a>',
        specialtiesOne: '',
        specialtiesTwo: '',
        specialtiesThree: '',
        specialtiesFour: '',
    },
    {
        img: '',
        name: 'Kori',
        instagram: '@korixmarie',
        shop: '<a href="https://www.instagram.com/cellardoorabq/?hl=en">Cellardoor Collective</a>',
        booking: '<a href="mailto:korimarietattoo@gmail.com">korimarietattoo@gmail.com</a>',
        specialtiesOne: '',
        specialtiesTwo: '',
        specialtiesThree: '',
        specialtiesFour: '',
    },
    {
        img: '',
        name: 'Isha Luz',
        instagram: 'ishaluz.tattoos',
        shop: '<a href="https://www.cheekymonkeyabq.com/">Cheeky Monkey Tattoo</a>',
        booking: '<a href ="form.jotform.com/222216047476050">form.jotform.com/222216047476050</a>',
        specialtiesOne: 'Anime',
        specialtiesTwo: 'Fine Line',
        specialtiesThree: 'Illustrative',
        specialtiesFour: 'Traditional',
    },
    {
        img: '',
        name: 'Sydney Settecerri',
        instagram: '@squidartificial',
        shop: '<a href="https://www.cheekymonkeyabq.com/">Cheeky Monkey Tattoo</a>',
        booking: '<a href="mailto:shop@cheekymonkeyabq.com">shop@cheekymonkeyabq.com</a>',
        specialtiesOne: '*Apprentice',
        specialtiesTwo: '',
        specialtiesThree: '',
        specialtiesFour: '',
    },
    {
        img: '',
        name: 'Reina Plant',
        instagram: '@reina.plant',
        shop: '<a href="https://www.allisonetattoo.com/">All is One Tattoo</a>',
        booking: '<a href="mailto:korimarietattoo@gmail.com">allisonetattoo@gmail.com</a>',
        specialtiesOne: 'American Traditional',
        specialtiesTwo: '',
        specialtiesThree: '',
        specialtiesFour: '',
    },
]

console.log(artists)

// LOOPING THROUGH THE DOM

function handleLoadEvent () {
    document.getElementById('target').innerHTML = artists.reduce(
        // whatever function returns will be put into accumulatedCards
        (artistDirectory, currentDataElement) => {
            return (
                `${artistDirectory}
                    <div class="col">
                        <div class="card">
                            <img src="${currentDataElement.img}" alt="${currentDataElement.img}" class="card-img-top">
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