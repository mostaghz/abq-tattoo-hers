// EMPTY OBJECT TEMPLATE (for when new artists are added)

/*{
    img: '',
    alt: '',
    name: '',
    instagram: '<a href="">@</a>',
    shop: '<a href="">/a>',
    shopName: '',
    booking: '<a href=""></a>',
    specialties: [],
}*/


// ARTISTS ARRAY

let artists = [
    // instagram, shop, and booking are all hyperlinked icons - target="_blank" makes them open in new tab
    {
        img: 'images/artists/chelsey-moore.jpg',
        alt: 'Chelsey sitting in her tattooing space',
        name: 'CHELSEY MOORE',
        instagram: '<a href="https://www.instagram.com/cmoore04/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Chelseys account"/></a>',
        // archetype's site is unsecure, so link won't work if it's https - will update if things change
        shop: '<a href="http://archetypetattoo.com/" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to Archetype Tattoos shop site"/></a>',
        shopName: 'Archetype Tattoo Studio',
        booking: '<a href="https://chelseymooretattoo.wordpress.com/" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Chelseys booking site"/></a>',
        specialties: ['Color Illustrative', 'Color Realism'],
    },
    {
        img: 'images/artists/fox-richards.jpg',
        alt: 'rainbow logo of a fox head',
        name: 'FOX RICHARDS',
        instagram: '<a href="https://www.instagram.com/fox_richards/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Foxs account"/></a>',
        // coven doesn't have its own site, so linking to fox's site instead
        shop: '<a href="https://www.foxrichards.com/" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to Foxs personal site"/></a>',
        shopName: 'Coven Studio',
        booking: '<a href="https://www.foxrichards.com/booking" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Foxs booking site"/></a>',
        specialties: ['Black and Gray Realism mixed with Blackwork and Geometric'],
    },
    {
        img: 'images/artists/arianna-shelton.jpg',
        alt: 'close up of Ariannas face',
        name: 'ARI SHELTON',
        instagram: '<a href="https://www.instagram.com/weirdmullet/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Ariannas account"/></a>',
        shop: '<a href="https://www.milagrotattoo.com/" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to Milagro Tattoos shop site"/></a>',
        shopName: 'Milagro Tattoo',
        booking: '<a href="https://www.milagrotattoo.com/ariannashelton" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Ariannas booking site"/></a>',
        specialties: ['Black and Gray/Color', 'Classical Art', 'Flora and Fauna', 'Illustrative Fine Line'],
    },
    {
        img: 'images/artists/maggie-elena.jpg',
        alt: 'Maggie Elena',
        name: 'MAGGIE ELENA',
        instagram: '<a href"https://www.instagram.com/maggie.elena/?hl=en"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Maggies account"/></a>',
        shop: '<a href="https://blackalchemystudio.com/" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to Black Alchemy shop site"/></a>',
        shopName: 'Black Alchemy',
        booking: '<a href="mailto:maggieelenatattoo@gmail.com" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Maggies email"/></a>',
        specialties: ['Heavy Blackwork'],
    },
    {
        img: 'images/artists/gina-marie.jpeg',
        name: 'GINA MARIE',
        instagram: '<a href="https://www.instagram.com/ginamarietattoo/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Ginas account"/></a>',
        shop: '<a href="https://www.highhandstattoo.com/" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to High Hands Tattoo shop site"/></a>',
        shopName: 'High Hands Tattoo',
        booking: '<a href="https://www.ginamarietattoo.com/" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Ginas booking site"/></a>',
        specialties: ['Illustrative Folk Art with Traditional roots'],
    },
    {
        img: 'images/artists/kori-marie.jpg',
        alt: 'Kori Marie sitting outside',
        name: 'KORI MARIE',
        instagram: '<a href="https://www.instagram.com/korixmarie/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Koris account"/></a>',
        shop: '<a href="https://www.instagram.com/cellardoorabq/?hl=en" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to Cellardoor Collectives shop site"/></a>',
        shopName: 'Cellardoor Collective',
        booking: '<a href="mailto:korimarietattoo@gmail.com" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Koris email"/></a>',
        specialties: ['American Traditional'],
    },
    {
        img: 'images/artists/isha-luz.jpg',
        name: 'ISHA LUZ',
        instagram: '<a href="https://www.instagram.com/ishaluz.tattoos/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Ishas account"/></a>',
        shop: '<a href="https://www.cheekymonkeyabq.com/" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to Cheeky Monkey Tattoos shop site"/></a>',
        shopName: 'Cheeky Monkey Tattoo',
        booking: '<a href ="form.jotform.com/222216047476050" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Ishas booking form"/></a>',
        specialties: ['Anime', 'Black and Gray/Color Illustrative', 'Fine Line', 'Neotraditional'],
    },
    {
        img: 'images/artists/syd.jpg',
        name: 'SYD',
        instagram: '<a href="https://www.instagram.com/squidartificial/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Syds account"/></a>',
        shop: '<a href="https://www.cheekymonkeyabq.com/" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to Cheeky Monkey Tattoos shop site"/></a>',
        shopName: 'Cheeky Monkey Tattoo',
        booking: '<a href="https://www.instagram.com/squidartificial/?hl=en" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Syds Instagram account"/></a>',
        specialties: ['*Apprentice with interests in Black and Gray', 'Neotraditional', 'Traditional'],
    },
    {
        img: 'images/artists/image-coming-soon.png',
        name: 'REINA PLANT',
        instagram: '<a href="https://www.instagram.com/reina.plant/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Reinas account"/></a>',
        shop: '<a href="https://www.allisonetattoo.com/" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to All is One Tattoos shop site"/></a>',
        shopName: 'All is One Tattoo',
        booking: '<a href="mailto:korimarietattoo@gmail.com" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to All is One Tattoos shop email"/></a>',
        specialties: ['American Traditional'],
    },
    {
        img: 'images/artists/nicole.jpg',
        name: 'NICOLE',
        instagram: '<a href="https://www.instagram.com/romatra_/?hl=en" target="_blank"><img src="images/icons/instagram-icon.png" class="icons" alt="white instagram icon linking to Nicoles account"/></a>',
        shop: '<a href="https://blackalchemystudio.com/" target="_blank"><img src="images/icons/tattoo-machine-icon.png" class="icons" alt="white tattoo machine icon linking to Black Alchemys shop site"/></a>',
        shopName: 'Black Alchemy',
        booking: '<a href="mailto:romatratattoo@gmail.com" target="_blank"><img src="images/icons/booking-icon.png" class="icons" alt="white calendar icon linking to Nicoles email"/></a>',
        specialties: ['Blackwork', 'Illustrative', 'Geometric', 'Dotwork']
    },
]


// SORT ARTISTS BY NAME

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


// LOOPING CARDS T0 THE DOM

function handleLoadEvent () {
    document.getElementById('target').innerHTML = artists.reduce(
        // whatever the function returns will be put into artistDirectory and looped through via currentDataElement
        (artistDirectory, currentDataElement) => {
            return (
                `${artistDirectory}
                    <!-- .name.replace is for nav bar to internally link to artist directory -->
                    <!-- class artributes are bootsrap styles -->
                    <div class="card col-lg-6 py-5 gx-5" id="${currentDataElement.name.replace(/\s/g, '')}">
                        <div class="row">
                            <div class="col-lg-6 text-center">
                                <img src="${currentDataElement.img}" alt="${currentDataElement.img}" class="img-fluid">
                            </div>
                            <div class="col-lg-6 card-alignment">
                                <!-- ids are for css styles -->
                                <p class="card-text" id="name">${currentDataElement.name}</p>
                                <p class="card-text" id="shop">${currentDataElement.shopName}</p>
                                <!-- joins values as string separated by comma and space -->
                                <p class="card-text" id="specialties">${currentDataElement.specialties.join(', ')}</p>
                                <p class="card-text">${currentDataElement.instagram} <span id="iconPadding">${currentDataElement.shop}</span> ${currentDataElement.booking}</p>
                            </div>
                        </div>
                    </div>`
            )
            // keep '' or function falls apart
        }, ''
    )
}