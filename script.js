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

// LOOPING THROUGH THE DOM -- TEST FOR NOW TO SEE IF MY OBJECT A TAGS WORKED

let targetDiv = document.getElementById('target')
console.log(targetDiv)
artists.forEach(

    (artist) => {
        targetDiv.innerHTML = `${targetDiv.innerHTML} <h2> ${artist.booking} </h2>` //`${ escapes the string
        /* targetDiv.innerHTML = targetDiv.innerHTML + '<h2>' + person + '</h2>'*/ //the same as line 14
        console.log(artist) //running once for each person in the array
    }
)

