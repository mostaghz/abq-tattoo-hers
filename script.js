// EMPTY OBJECT TEMPLATE FOR WHEN NEW ARTISTS ARE ADDED

/*{
    img: '',
    name: '',
    instagram: 'Instagram: <a href="">@</a>',
    shop: 'Shop: <a href="">/a>',
    booking: 'Booking: <a href=""></a>',
    specialtiesTitle: 'Specialties:',
    specialties: [],
},*/


// ARTISTS ARRAY

let artists = [
    {
        img: 'images/chelsey-moore-square-400.jpg',
        alt: 'Chelsey sitting in her tattooing space',
        name: 'Chelsey Moore',
        instagram: '<a href="https://www.instagram.com/cmoore04/?hl=en"><!--<img src="images/white-insta-icon.png"/> -->@cmoore04</a>',
        shop: 'Shop: <a href="http://archetypetattoo.com/">Archetype Tattoo Studio</a>',
        booking: 'Booking: <a href="https://chelseymooretattoo.wordpress.com/">chelseymooretattoo.com</a>',
        specialtiesTitle: 'Specialties:',
        specialties: ['Color Illustrative,', 'Color Realism'],
    },
    {
        img: 'images/fox-richards-square-400.jpg',
        alt: 'rainbow logo of a fox head',
        name: 'Fox Richards',
        instagram: 'Instagram: <a href="https://www.instagram.com/fox_richards/?hl=en">@fox_richards</a>',
        shop: 'Shop: Coven Studio',
        booking: 'Booking: <a href="https://www.foxrichards.com/">foxrichards.com</a>',
        specialtiesTitle: 'Specialties:',
        specialties: ['Black and Gray Realism mixed with Geometric and Blackwork'],
    },
    {
        img: 'images/arianna-shelton-square-400.jpg',
        name: 'Arianna Shelton',
        instagram: 'Instagram: <a href="https://www.instagram.com/weirdmullet/?hl=en">@weirdmullet</a>',
        shop: 'Shop: <a href="https://www.milagrotattoo.com/">Milagro Tattoo</a>',
        booking: 'Booking: <a href="https://www.milagrotattoo.com/ariannashelton">milagrotattoo.com/ariannashelton</a>',
        specialtiesTitle: 'Specialties:',
        specialties: ['Black and Gray/Color', 'Illustrative Fine Line', 'Flora and Fauna', 'Classical Art'],
    },
    {
        img: 'images/maggie-elena-square-400.jpg',
        name: 'Maggie Elena',
        instagram: 'Instagram: <a href"https://www.instagram.com/maggie.elena/?hl=en">@maggie.elena</a>',
        shop: 'Shop: <a href="https://blackalchemystudio.com/">Black Alchemy</a>',
        booking: 'Booking: <a href="mailto:maggieelenatattoo@gmail.com">maggieelenatattoo@gmail.com</a>',
        specialtiesTitle: 'Specialties:',
        specialties: ['Heavy Blackwork'],
    },
    {
        img: 'images/image-coming-soon-square-400.jpg',
        name: 'Gina Marie Medlock',
        instagram: 'Instagram: <a href="https://www.instagram.com/ginamarietattoo/?hl=en">@ginamarietattoo</a>',
        shop: 'Shop: <a href="https://www.highhandstattoo.com/">High Hands Tattoo</a>',
        booking: 'Booking: <a href="https://www.ginamarietattoo.com/">ginamarietattoo.com</a>',
        specialtiesTitle: 'Specialties:',
        specialties: [],
    },
    {
        img: 'images/image-coming-soon-square-400.jpg',
        name: 'Kori',
        instagram: 'Instagram: <a href="https://www.instagram.com/korixmarie/?hl=en">@korixmarie</a>',
        shop: 'Shop: <a href="https://www.instagram.com/cellardoorabq/?hl=en">Cellardoor Collective</a>',
        booking: 'Booking: <a href="mailto:korimarietattoo@gmail.com">korimarietattoo@gmail.com</a>',
        specialtiesTitle: 'Specialties:',
        specialties: [],
    },
    {
        img: 'images/image-coming-soon-square-400.jpg',
        name: 'Isha Luz',
        instagram: 'Instagram: <a href="https://www.instagram.com/ishaluz.tattoos/?hl=en">@ishaluz.tattoos</a>',
        shop: 'Shop: <a href="https://www.cheekymonkeyabq.com/">Cheeky Monkey Tattoo</a>',
        booking: 'Booking: <a href ="form.jotform.com/222216047476050">form.jotform.com/222216047476050</a>',
        specialtiesTitle: 'Specialties:',
        specialties: ['Anime,', 'Fine Line,', 'Illustrative,', 'Traditional'],
    },
    {
        img: 'images/image-coming-soon-square-400.jpg',
        name: 'Sydney Settecerri',
        instagram: 'Instagram: <a href="https://www.instagram.com/squidartificial/?hl=en">@squidartificial</a>',
        shop: 'Shop: <a href="https://www.cheekymonkeyabq.com/">Cheeky Monkey Tattoo</a>',
        booking: 'Booking: <a href="mailto:shop@cheekymonkeyabq.com">shop@cheekymonkeyabq.com</a>',
        specialtiesTitle: 'Specialties:',
        specialties: ['*Apprentice'],
    },
    {
        img: 'images/image-coming-soon-square-400.jpg',
        name: 'Reina Plant',
        instagram: 'Instagram: <a href="https://www.instagram.com/reina.plant/?hl=en">@reina.plant</a>',
        shop: 'Shop: <a href="https://www.allisonetattoo.com/">All is One Tattoo</a>',
        booking: 'Booking: <a href="mailto:korimarietattoo@gmail.com">allisonetattoo@gmail.com</a>',
        specialtiesTitle: 'Specialties:',
        specialties: ['American Traditional'],
    },
    {
        img: 'images/nicole-square-400.jpg',
        name: 'Nicole',
        instagram: 'Instagram: <a href="https://www.instagram.com/romatra_/?hl=en">@romatra_</a>',
        shop: 'Shop: <a href="https://blackalchemystudio.com/">Black Alchemy</a>',
        booking: 'Booking: <a href="mailto:romatratattoo@gmail.com">romatratattoo@gmail.com</a>',
        specialtiesTitle: 'Specialties: ',
        specialties: ['Blackwork,', 'Illustrative,', 'Geometric,', 'Dotwork']
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
                    <div class="card mt-5 p-5">
                        <div class="row">
                            <div class="col-md-7 mx-auto text-center">
                                <img src="${currentDataElement.img}" alt="${currentDataElement.img}" class="img-fluid border border-light rounded-circle">
                            </div>
                            <div class="col-md-5 my-auto" id="card-alignment">
                                <h5 class="card-title display-4 mt-2">${currentDataElement.name}</h5>
                                 <p class="card-text">${currentDataElement.instagram}</p>
                                 <p class="card-text">${currentDataElement.shop}</p>
                                 <p class="card-text">${currentDataElement.booking}</p>
                                 <!-- wrapping specialties p in div and making them inline to make them land on same line as title -->
                                 <div class="d-flex">
                                    <p class="inline card-text">${currentDataElement.specialtiesTitle}</p>
                                    <!-- looping through specialties -->
                                    ${currentDataElement.specialties.reduce((accumulator, specialty) => {
                                        return `${accumulator}<p class="card-text">${specialty}</p>`
                },'')}
                                 </div>
                            </div>
                        </div>
                    </div>`
            )
            // KEEP EMPTY '' OR THINGS FALL APART
        }, ''
    )
}