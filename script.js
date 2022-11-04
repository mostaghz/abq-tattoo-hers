// EMPTY OBJECT TEMPLATE FOR WHEN NEW ARTISTS ARE ADDED

/*{
    img: '',
    name: '',
    instagram: 'Instagram: <a href="">@</a>',
    shop: 'Shop: <a href="">/a>',
    booking: 'Booking: <a href=""></a>',
    specialties: [],
},*/


// ARTISTS ARRAY

let artists = [
    {
        img: 'images/chelsey-moore-square-400.jpg',
        alt: 'Chelsey sitting in her tattooing space',
        name: 'Chelsey Moore',
        instagram: '<a href="https://www.instagram.com/cmoore04/?hl=en"><!--<img src="images/white-insta-icon.png"/> -->@cmoore04</a>',
        shop: '<a href="http://archetypetattoo.com/">Archetype Tattoo Studio</a>',
        booking: '<a href="https://chelseymooretattoo.wordpress.com/">chelseymooretattoo.com</a>',
        specialties: ['Color Illustrative', 'Color Realism'],
    },
    {
        img: 'images/fox-richards-square-400.jpg',
        alt: 'rainbow logo of a fox head',
        name: 'Fox Richards',
        instagram: '<a href="https://www.instagram.com/fox_richards/?hl=en">@fox_richards</a>',
        shop: 'Coven Studio',
        booking: '<a href="https://www.foxrichards.com/">foxrichards.com</a>',
        specialties: ['Black and Gray Realism mixed with Geometric and Blackwork'],
    },
    {
        img: 'images/arianna-shelton-square-400.jpg',
        alt: 'close up of Ariannas face',
        name: 'Arianna Shelton',
        instagram: '<a href="https://www.instagram.com/weirdmullet/?hl=en">@weirdmullet</a>',
        shop: '<a href="https://www.milagrotattoo.com/">Milagro Tattoo</a>',
        booking: '<a href="https://www.milagrotattoo.com/ariannashelton">milagrotattoo.com/ariannashelton</a>',
        specialties: ['Black and Gray/Color', 'Illustrative Fine Line', 'Flora and Fauna', 'Classical Art'],
    },
    {
        img: 'images/maggie-elena-square-400.jpg',
        alt: 'Maggie Elena',
        name: 'Maggie Elena',
        instagram: '<a href"https://www.instagram.com/maggie.elena/?hl=en">@maggie.elena</a>',
        shop: '<a href="https://blackalchemystudio.com/">Black Alchemy</a>',
        booking: '<a href="mailto:maggieelenatattoo@gmail.com">maggieelenatattoo@gmail.com</a>',
        specialties: ['Heavy Blackwork'],
    },
    {
        img: 'images/image-coming-soon-square-400.jpg',
        name: 'Gina Marie Medlock',
        instagram: '<a href="https://www.instagram.com/ginamarietattoo/?hl=en">@ginamarietattoo</a>',
        shop: '<a href="https://www.highhandstattoo.com/">High Hands Tattoo</a>',
        booking: '<a href="https://www.ginamarietattoo.com/">ginamarietattoo.com</a>',
        specialties: [],
    },
    {
        img: 'images/kori-marie-square-400.jpg',
        alt: 'Kori Marie sitting outside',
        name: 'Kori Marie',
        instagram: '<a href="https://www.instagram.com/korixmarie/?hl=en">@korixmarie</a>',
        shop: '<a href="https://www.instagram.com/cellardoorabq/?hl=en">Cellardoor Collective</a>',
        booking: '<a href="mailto:korimarietattoo@gmail.com">korimarietattoo@gmail.com</a>',
        specialties: ['American Traditional'],
    },
    {
        img: 'images/image-coming-soon-square-400.jpg',
        name: 'Isha Luz',
        instagram: '<a href="https://www.instagram.com/ishaluz.tattoos/?hl=en">@ishaluz.tattoos</a>',
        shop: '<a href="https://www.cheekymonkeyabq.com/">Cheeky Monkey Tattoo</a>',
        booking: '<a href ="form.jotform.com/222216047476050">form.jotform.com/222216047476050</a>',
        specialties: ['Anime', 'Fine Line', 'Illustrative', 'Traditional'],
    },
    {
        img: 'images/image-coming-soon-square-400.jpg',
        name: 'Sydney Settecerri',
        instagram: '<a href="https://www.instagram.com/squidartificial/?hl=en">@squidartificial</a>',
        shop: '<a href="https://www.cheekymonkeyabq.com/">Cheeky Monkey Tattoo</a>',
        booking: '<a href="mailto:shop@cheekymonkeyabq.com">shop@cheekymonkeyabq.com</a>',
        specialties: ['*Apprentice'],
    },
    {
        img: 'images/image-coming-soon-square-400.jpg',
        name: 'Reina Plant',
        instagram: '<a href="https://www.instagram.com/reina.plant/?hl=en">@reina.plant</a>',
        shop: '<a href="https://www.allisonetattoo.com/">All is One Tattoo</a>',
        booking: '<a href="mailto:korimarietattoo@gmail.com">allisonetattoo@gmail.com</a>',
        specialties: ['American Traditional'],
    },
    {
        img: 'images/nicole-square-400.jpg',
        name: 'Nicole',
        instagram: '<a href="https://www.instagram.com/romatra_/?hl=en">@romatra_</a>',
        shop: '<a href="https://blackalchemystudio.com/">Black Alchemy</a>',
        booking: '<a href="mailto:romatratattoo@gmail.com">romatratattoo@gmail.com</a>',
        specialties: ['Blackwork', 'Illustrative', 'Geometric', 'Dotwork']
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
                    <!-- .name.replace is for internal links to navigate artist directory -->
                    <div class="card mt-5 p-5" id="${currentDataElement.name.replace(/\s/g, '')}">
                        <div class="row">
                            <div class="col-md-7 mx-auto text-center">
                                <img src="${currentDataElement.img}" alt="${currentDataElement.img}" class="img-fluid border border-light rounded-circle">
                            </div>
                            <div class="col-md-5 my-auto card-alignment">
                                <h5 class="card-title display-4 mt-2">${currentDataElement.name}</h5>
                                <!-- putting section titles here (Instagram:) to keep array values as data only -->
                                <p class="card-text">Instagram: ${currentDataElement.instagram}</p>
                                <p class="card-text">Shop: ${currentDataElement.shop}</p>
                                <p class="card-text">Booking: ${currentDataElement.booking}</p>
                                <!-- joins values as string separated by comma and space --> 
                                <p class="card-text">Specialties: ${currentDataElement.specialties.join(', ')}</p>
                            </div>
                        </div>
                    </div>`
            )
            // KEEP EMPTY '' OR THINGS FALL APART
        }, ''
    )
}