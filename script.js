// EMPTY OBJECT TEMPLATE FOR WHEN NEW ARTISTS ARE ADDED

/*{
    img: '',
    name: '',
    instagram: '<a href="">@</a>',
    shop: '<a href="">/a>',
    booking: '<a href=""></a>',
    specialties: [],
},*/


// ARTISTS ARRAY

let artists = [
    {
        img: 'images/chelsey-moore-square-400.jpg',
        alt: 'Chelsey sitting in her tattooing space',
        name: 'CHELSEY MOORE',
        instagram: '<a href="https://www.instagram.com/cmoore04/?hl=en" target="_blank"><img src="images/white-calendar-icon.jpg" class="icons" alt="white instagram icon linking to Chelseys account"/></a>',
        shopIcon: '<a href="http://archetypetattoo.com/" target="_blank"><img src="images/white-tattoo-icon.png" class="icons" alt="white tattoo machine icon linking to Archetype Tattoos shop site"/></a>',
        shop: 'Archetype Tattoo Studio',
        booking: '<a href="https://chelseymooretattoo.wordpress.com/" target="_blank"><img src="images/white-calendar-icon.jpg" class="icons" alt="white calendar icon linking to Chelseys booking site"/></a>',
        specialties: ['Color Illustrative', 'Color Realism'],
    },
    {
        img: 'images/fox-richards-square-400.jpg',
        alt: 'rainbow logo of a fox head',
        name: 'Fox Richards',
        instagram: '<a href="https://www.instagram.com/fox_richards/?hl=en" target="_blank">@fox_richards</a>',
        shop: 'Coven Studio',
        booking: '<a href="https://www.foxrichards.com/" target="_blank">foxrichards.com</a>',
        specialties: ['Black and Gray Realism mixed with Geometric and Blackwork'],
    },
    {
        img: 'images/arianna-shelton-square-400.jpg',
        alt: 'close up of Ariannas face',
        name: 'Arianna Shelton',
        instagram: '<a href="https://www.instagram.com/weirdmullet/?hl=en" target="_blank">@weirdmullet</a>',
        shop: '<a href="https://www.milagrotattoo.com/" target="_blank">Milagro Tattoo</a>',
        booking: '<a href="https://www.milagrotattoo.com/ariannashelton" target="_blank">milagrotattoo.com/ariannashelton</a>',
        specialties: ['Black and Gray/Color', 'Illustrative Fine Line', 'Flora and Fauna', 'Classical Art'],
    },
    {
        img: 'images/maggie-elena-square-400.jpg',
        alt: 'Maggie Elena',
        name: 'Maggie Elena',
        instagram: '<a href"https://www.instagram.com/maggie.elena/?hl=en">@maggie.elena</a>',
        shop: '<a href="https://blackalchemystudio.com/" target="_blank">Black Alchemy</a>',
        booking: '<a href="mailto:maggieelenatattoo@gmail.com" target="_blank">maggieelenatattoo@gmail.com</a>',
        specialties: ['Heavy Blackwork'],
    },
    {
        img: 'images/image-coming-soon-square-400.jpg',
        name: 'Gina Marie Medlock',
        instagram: '<a href="https://www.instagram.com/ginamarietattoo/?hl=en" target="_blank">@ginamarietattoo</a>',
        shop: '<a href="https://www.highhandstattoo.com/" target="_blank">High Hands Tattoo</a>',
        booking: '<a href="https://www.ginamarietattoo.com/" target="_blank">ginamarietattoo.com</a>',
        specialties: [],
    },
    {
        img: 'images/kori-marie-square-400.jpg',
        alt: 'Kori Marie sitting outside',
        name: 'Kori Marie',
        instagram: '<a href="https://www.instagram.com/korixmarie/?hl=en" target="_blank">@korixmarie</a>',
        shop: '<a href="https://www.instagram.com/cellardoorabq/?hl=en" target="_blank">Cellardoor Collective</a>',
        booking: '<a href="mailto:korimarietattoo@gmail.com" target="_blank">korimarietattoo@gmail.com</a>',
        specialties: ['American Traditional'],
    },
    {
        img: 'images/image-coming-soon-square-400.jpg',
        name: 'Isha Luz',
        instagram: '<a href="https://www.instagram.com/ishaluz.tattoos/?hl=en" target="_blank">@ishaluz.tattoos</a>',
        shop: '<a href="https://www.cheekymonkeyabq.com/" target="_blank">Cheeky Monkey Tattoo</a>',
        booking: '<a href ="form.jotform.com/222216047476050" target="_blank">form.jotform.com/222216047476050</a>',
        specialties: ['Anime', 'Fine Line', 'Illustrative', 'Traditional'],
    },
    {
        img: 'images/image-coming-soon-square-400.jpg',
        name: 'Sydney Settecerri',
        instagram: '<a href="https://www.instagram.com/squidartificial/?hl=en" target="_blank">@squidartificial</a>',
        shop: '<a href="https://www.cheekymonkeyabq.com/" target="_blank">Cheeky Monkey Tattoo</a>',
        booking: '<a href="mailto:shop@cheekymonkeyabq.com" target="_blank">shop@cheekymonkeyabq.com</a>',
        specialties: ['*Apprentice'],
    },
    {
        img: 'images/image-coming-soon-square-400.jpg',
        name: 'Reina Plant',
        instagram: '<a href="https://www.instagram.com/reina.plant/?hl=en" target="_blank">@reina.plant</a>',
        shop: '<a href="https://www.allisonetattoo.com/" target="_blank">All is One Tattoo</a>',
        booking: '<a href="mailto:korimarietattoo@gmail.com" target="_blank">allisonetattoo@gmail.com</a>',
        specialties: ['American Traditional'],
    },
    {
        img: 'images/nicole-square-400.jpg',
        name: 'Nicole',
        instagram: '<a href="https://www.instagram.com/romatra_/?hl=en" target="_blank">@romatra_</a>',
        shop: '<a href="https://blackalchemystudio.com/" target="_blank">Black Alchemy</a>',
        booking: '<a href="mailto:romatratattoo@gmail.com" target="_blank">romatratattoo@gmail.com</a>',
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
                    <div class="card mt-5 py-5" id="${currentDataElement.name.replace(/\s/g, '')}">
                        <div class="row">
                            <div class="col-md-3">
                            
                            </div>
                            <div class="col-md-3 text-center">
                                <img src="${currentDataElement.img}" alt="${currentDataElement.img}" class="img-fluid border border-light">
                            </div>
                            <div class="col-md-3 card-alignment">
                                <p class="card-text mt-2" id="name">${currentDataElement.name}</p>
                                <p class="card-text" id="shop">${currentDataElement.shop}</p>
                                <p class="card-text" id="specialties">${currentDataElement.specialties.join(', ')}
                                <!-- putting section titles here (Instagram:) to keep array values as data only -->
                                <p class="card-text">${currentDataElement.instagram} <span>${currentDataElement.shopIcon}</span> ${currentDataElement.booking}</p>
                                <!--<p class="card-text">${currentDataElement.shop}</p>
                                <p class="card-text">${currentDataElement.booking}</p>-->
                                <!-- joins values as string separated by comma and space --> 
                                <!--<p class="card-text">${currentDataElement.specialties.join(', ')}</p>-->
                            </div>
                            <div class="col-md-3">
                            
                            </div>
                        </div>
                    </div>`
            )
            // KEEP EMPTY '' OR THINGS FALL APART
        }, ''
    )
}