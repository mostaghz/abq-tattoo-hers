// EMPTY OBJECT TEMPLATE FOR WHEN NEW ARTISTS ARE ADDED

/*{
    img: '',
    name: '',
    instagram: '@',
    shop: 'Shop: <a href="">/a>',
    booking: 'Booking: <a href=""></a>',
    specialtiesTitle: 'Specialties:',
    specialtiesOne: '',
    specialtiesTwo: '',
    specialtiesThree: '',
    specialtiesFour: '',
},*/


// ARTISTS ARRAY

let artists = [
    {
        img: 'images/chelsey-moore.jpg',
        alt: 'Chelsey sitting in her tattooing space',
        name: 'Chelsey Moore',
        instagram: '@cmoore04',
        shop: 'Shop: <a href="http://archetypetattoo.com/">Archetype Tattoo Studio</a>',
        booking: 'Booking: <a href="https://chelseymooretattoo.wordpress.com/">chelseymooretattoo.com</a>',
        specialtiesTitle: 'Specialties:',
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
        shop: 'Shop: Coven Studio',
        booking: 'Booking: <a href="https://www.foxrichards.com/">foxrichards.com</a>',
        specialtiesTitle: 'Specialties:',
        specialtiesOne: 'Black and Gray Realism mixed with Geometric and Blackwork',
        specialtiesTwo: '',
        specialtiesThree: '',
        specialtiesFour: '',
    },
    {
        img: '',
        name: 'Arianna Shelton',
        instagram: '@weirdmullet',
        shop: 'Shop: <a href="https://www.milagrotattoo.com/">Milagro Tattoo</a>',
        booking: 'Booking: <a href="https://www.milagrotattoo.com/ariannashelton">milagrotattoo.com/ariannashelton</a>',
        specialtiesTitle: 'Specialties:',
        specialtiesOne: '',
        specialtiesTwo: '',
        specialtiesThree: '',
        specialtiesFour: '',
    },
    {
        img: '',
        name: 'Maggie Elena',
        instagram: '@maggie.elena',
        shop: 'Shop: <a href="https://blackalchemystudio.com/">Black Alchemy</a>',
        booking: 'Booking: <a href="mailto:maggieelenatattoo@gmail.com">maggieelenatattoo@gmail.com</a>',
        specialtiesTitle: 'Specialties:',
        specialtiesOne: 'Heavy Blackwork',
        specialtiesTwo: 'Neo-Tribal',
        specialtiesThree: '',
        specialtiesFour: '',
    },
    {
        img: '',
        name: 'Gina Marie Medlock',
        instagram: '@ginamarietattoo',
        shop: 'Shop: <a href="https://www.highhandstattoo.com/">High Hands Tattoo</a>',
        booking: 'Booking: <a href="https://www.ginamarietattoo.com/">ginamarietattoo.com</a>',
        specialtiesTitle: 'Specialties:',
        specialtiesOne: '',
        specialtiesTwo: '',
        specialtiesThree: '',
        specialtiesFour: '',
    },
    {
        img: '',
        name: 'Kori',
        instagram: '@korixmarie',
        shop: 'Shop: <a href="https://www.instagram.com/cellardoorabq/?hl=en">Cellardoor Collective</a>',
        booking: 'Booking: <a href="mailto:korimarietattoo@gmail.com">korimarietattoo@gmail.com</a>',
        specialtiesTitle: 'Specialties:',
        specialtiesOne: '',
        specialtiesTwo: '',
        specialtiesThree: '',
        specialtiesFour: '',
    },
    {
        img: '',
        name: 'Isha Luz',
        instagram: 'ishaluz.tattoos',
        shop: 'Shop: <a href="https://www.cheekymonkeyabq.com/">Cheeky Monkey Tattoo</a>',
        booking: 'Booking: <a href ="form.jotform.com/222216047476050">form.jotform.com/222216047476050</a>',
        specialtiesTitle: 'Specialties:',
        specialtiesOne: 'Anime',
        specialtiesTwo: 'Fine Line',
        specialtiesThree: 'Illustrative',
        specialtiesFour: 'Traditional',
    },
    {
        img: '',
        name: 'Sydney Settecerri',
        instagram: '@squidartificial',
        shop: 'Shop: <a href="https://www.cheekymonkeyabq.com/">Cheeky Monkey Tattoo</a>',
        booking: 'Booking: <a href="mailto:shop@cheekymonkeyabq.com">shop@cheekymonkeyabq.com</a>',
        specialtiesTitle: 'Specialties:',
        specialtiesOne: '*Apprentice',
        specialtiesTwo: '',
        specialtiesThree: '',
        specialtiesFour: '',
    },
    {
        img: '',
        name: 'Reina Plant',
        instagram: '@reina.plant',
        shop: 'Shop: <a href="https://www.allisonetattoo.com/">All is One Tattoo</a>',
        booking: 'Booking: <a href="mailto:korimarietattoo@gmail.com">allisonetattoo@gmail.com</a>',
        specialtiesTitle: 'Specialties:',
        specialtiesOne: 'American Traditional',
        specialtiesTwo: '',
        specialtiesThree: '',
        specialtiesFour: '',
    },
]

// SORTS ARTISTS BY NAME
function compare( a, b ) {
    if (a.name < b.name){
        return -1;
    }
    if (a.name > b.name){
        return 1;
    }
    return 0;
}

artists.sort(compare);


// LOOPING T0 THE DOM
function handleLoadEvent () {
    document.getElementById('target').innerHTML = artists.reduce(
        // WHATEVER THE FUNCTION RETURNS WILL BE PUT INTO artistDirectory
        (artistDirectory, currentDataElement) => {
            return (
                `${artistDirectory}
                    <div class="card border border-light mt-5 p-5">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="${currentDataElement.img}" alt="${currentDataElement.img}" class="img-fluid border border-light">
                            </div>    
                            <div class="col-md-6">
                                <h5 class="card-title">${currentDataElement.name}</h5>
                                 <p class="card-text">${currentDataElement.instagram}</p>
                                 <p class="card-text">${currentDataElement.shop}</p>
                                 <p class="card-text">${currentDataElement.booking}</p>
                                 <p class="card-text">${currentDataElement.specialtiesTitle}</p>
                                 <p class="card-text">${currentDataElement.specialtiesOne}</p>
                                 <p class="card-text">${currentDataElement.specialtiesTwo}</p>
                                 <p class="card-text">${currentDataElement.specialtiesThree}</p>
                                 <p class="card-text">${currentDataElement.specialtiesFour}</p>
                            </div>
                        </div>
                    </div>`
            )
            // KEEP EMPTY '' OR THINGS FALL APART
        }, ''
    )
}