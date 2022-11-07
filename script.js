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
    // instagram, shopIcon, and booking are all hyperlinked icons
    {
        img: 'images/chelsey-moore-square-400.jpg',
        alt: 'Chelsey sitting in her tattooing space',
        name: 'CHELSEY MOORE',
        instagram: '<a href="https://www.instagram.com/cmoore04/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Chelseys account"/></a>',
        shop: '<a href="http://archetypetattoo.com/" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to Archetype Tattoos shop site"/></a>',
        shopName: 'Archetype Tattoo Studio',
        booking: '<a href="https://chelseymooretattoo.wordpress.com/" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Chelseys booking site"/></a>',
        specialties: ['Color Illustrative', 'Color Realism'],
    },
    {
        img: 'images/fox-richards-square-400.jpg',
        alt: 'rainbow logo of a fox head',
        name: 'FOX RICHARDS',
        instagram: '<a href="https://www.instagram.com/fox_richards/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Foxs account"/></a>',
        shop: '',
        shopName: 'Coven Studio',
        booking: '<a href="https://www.foxrichards.com/" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Foxs booking site"/></a>',
        specialties: ['Black and Gray Realism mixed with Blackwork and Geometric'],
    },
    {
        img: 'images/arianna-shelton-square-400.jpg',
        alt: 'close up of Ariannas face',
        name: 'ARIANNA SHELTON',
        instagram: '<a href="https://www.instagram.com/weirdmullet/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Ariannas account"/></a>',
        shop: '<a href="https://www.milagrotattoo.com/" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to Milagro Tattoos shop site"/></a>',
        shopName: 'Milagro Tattoo',
        booking: '<a href="https://www.milagrotattoo.com/ariannashelton" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Ariannas booking site"/></a>',
        specialties: ['Black and Gray/Color', 'Classical Art', 'Flora and Fauna', 'Illustrative Fine Line'],
    },
    {
        img: 'images/maggie-elena-square-400.jpg',
        alt: 'Maggie Elena',
        name: 'MAGGIE ELENA',
        instagram: '<a href"https://www.instagram.com/maggie.elena/?hl=en"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Maggies account"/></a>',
        shop: '<a href="https://blackalchemystudio.com/" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to Black Alchemy shop site"/></a>',
        shopName: 'Black Alchemy',
        booking: '<a href="mailto:maggieelenatattoo@gmail.com" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Maggies email"/></a>',
        specialties: ['Heavy Blackwork'],
    },
    {
        img: 'images/gina-marie-400-square.jpg',
        name: 'GINA MARIE',
        instagram: '<a href="https://www.instagram.com/ginamarietattoo/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Ginas account"/></a>',
        shop: '<a href="https://www.highhandstattoo.com/" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to High Hands Tattoo shop site"/></a>',
        shopName: 'High Hands Tattoo',
        booking: '<a href="https://www.ginamarietattoo.com/" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Ginas booking site"/></a>',
        specialties: ['Illustrative Folk Art with Traditional roots'],
    },
    {
        img: 'images/kori-marie-square-400.jpg',
        alt: 'Kori Marie sitting outside',
        name: 'KORI MARIE',
        instagram: '<a href="https://www.instagram.com/korixmarie/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Koris account"/></a>',
        shop: '<a href="https://www.instagram.com/cellardoorabq/?hl=en" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to Cellardoor Collectives shop site"/></a>',
        shopName: 'Cellardoor Collective',
        booking: '<a href="mailto:korimarietattoo@gmail.com" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Koris email"/></a>',
        specialties: ['American Traditional'],
    },
    {
        img: 'images/image-coming-soon-square-400.jpg',
        name: 'ISHA LUZ',
        instagram: '<a href="https://www.instagram.com/ishaluz.tattoos/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Ishas account"/></a>',
        shop: '<a href="https://www.cheekymonkeyabq.com/" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to Cheeky Monkey Tattoos shop site"/></a>',
        shopName: 'Cheeky Monkey Tattoo',
        booking: '<a href ="form.jotform.com/222216047476050" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Ishas booking form"/></a>',
        specialties: ['Anime', 'Black and Gray/Color Illustrative', 'Fine Line', 'Neotraditional'],
    },
    {
        img: 'images/syd-square-400.jpg',
        name: 'SYD',
        instagram: '<a href="https://www.instagram.com/squidartificial/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Syds account"/></a>',
        shop: '<a href="https://www.cheekymonkeyabq.com/" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to Cheeky Monkey Tattoos shop site"/></a>',
        shopName: 'Cheeky Monkey Tattoo',
        booking: '<a href="https://www.instagram.com/squidartificial/?hl=en" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Syds Instagram account"/></a>',
        specialties: ['*Apprentice with interests in Black and Gray', 'Neotraditional', 'Traditional'],
    },
    {
        img: 'images/image-coming-soon-square-400.jpg',
        name: 'REINA PLANT',
        instagram: '<a href="https://www.instagram.com/reina.plant/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Reinas account"/></a>',
        shop: '<a href="https://www.allisonetattoo.com/" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to All is One Tattoos shop site"/></a>',
        shopName: 'All is One Tattoo',
        booking: '<a href="mailto:korimarietattoo@gmail.com" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to All is One Tattoos shop email"/></a>',
        specialties: ['American Traditional'],
    },
    {
        img: 'images/nicole-square-400.jpg',
        name: 'NICOLE',
        instagram: '<a href="https://www.instagram.com/romatra_/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Nicoles account"/></a>',
        shop: '<a href="https://blackalchemystudio.com/" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to Black Alchemys shop site"/></a>',
        shopName: 'Black Alchemy',
        booking: '<a href="mailto:romatratattoo@gmail.com" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Nicoles email"/></a>',
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
                        <div class="row row-cols-1 row-cols-md-2">
<!--                            <div class="col-md-3">-->
<!--                            -->
<!--                            </div>-->
                            <div class="col-md-3 text-center">
                                <img src="${currentDataElement.img}" alt="${currentDataElement.img}" class="img-fluid border border-light">
                            </div>
                            <div class="col-md-3 card-alignment">
                                <p class="card-text mt-2" id="name">${currentDataElement.name}</p>
                                <p class="card-text" id="shop">${currentDataElement.shopName}</p>
                                <!-- joins values as string separated by comma and space -->
                                <p class="card-text" id="specialties">${currentDataElement.specialties.join(', ')}
                                <!-- putting section titles here (Instagram:) to keep array values as data only -->
                                <p class="card-text">${currentDataElement.instagram} <span id="iconPadding">${currentDataElement.shop}</span> ${currentDataElement.booking}</p>
                            </div>
<!--                            <div class="col-md-3">-->
<!--                            -->
<!--                            </div>-->
                        </div>
                    </div>`
            )
            // KEEP EMPTY '' OR THINGS FALL APART
        }, ''
    )
}