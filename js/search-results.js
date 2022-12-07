// //ACCOMMODATION ARRAY
let accommodation_db =[
    {
        acc_image: './images/accomodation-1/accomoda.webp',
        acc_name: 'Starlight Garden Studio in Lake Tekapo',
        acc_type: 'House',
        acc_guest_number: '1-4 max.',
        acc_nights_number: '2-15 nights max.',
        acc_description: 'Relax in the beautiful cottage garden during the day and into the evening be captivated by the breathtaking night sky. Just 5 minutes walk to stunning Lake Tekapo and the Church of the Good Shepherd. The studio is spacious, warm and light and has a separate entrance and garden access. Super King size bed. An ideal space for couples. Not suitable for children or infants. ',
        acc_price_per_night: 240,
        id: '1',
        amenities:{
            linen: false,
            free_parking:false,
            free_wifi: true, 
            heating: true,
            tv: true,
            washing_machine: true,
            smoke_alarm: true,
            smoking_allowed: true, 
        },
        location: 'Lake Tekapo, Canterbury',

        acc_gallery: [
            './images/accomodation-1/accomoda.webp',
            './images/accomodation-1/top-image.webp',
            './images/accomodation-1/bottom-image.webp',
            './images/accomodation-1/img1.webp',
            './images/accomodation-1/img2.webp',
            './images/accomodation-1/img3.webp',
            './images/accomodation-1/img4.webp',
            './images/accomodation-1/img5.webp',

        ],

        meals:[
            {   
                id: 'm1',
                name:'Fish & Chips',
                price: 25,
                type: 'lunch',
                description: 'You know us for our fish and chips, but have you tasted some of the other yummy kai on offer? From fresh kaimoana to crispy fried chicken (with our famous chilli maple sauce) and mouth watering burgers, there is something for everyone at Fush!',
                img: './images/accomodation-1/food/fish-chips.jpeg'
            },
            {   
                id: 'm2',
                name:'Jumbo Blueberry Muffin',
                price: 10,
                type: 'breakfast',
                description: 'These jumbo blueberry muffins are massive in both flavor and size. These extra large muffins are bursting with plenty of blueberries, have soft and moist centers, and big muffin tops. You can use a jumbo muffin pan or a regular 12-count muffin pan',
                img: './images/accomodation-1/food/blueberries-muffin.jpeg'
            },
            {   
                id: 'm3',
                name:'Fish & Chips',
                price: 25,
                type: 'lunch',
                description: 'You know us for our fish and chips, but have you tasted some of the other yummy kai on offer? From fresh kaimoana to crispy fried chicken (with our famous chilli maple sauce) and mouth watering burgers, there is something for everyone at Fush!',
                img: './images/accomodation-1/food/fish-chips.jpeg'
            },
            {   
                id: 'm4',
                name:'Jumbo Blueberry Muffin',
                price: 10,
                type: 'breakfast',
                description: 'These jumbo blueberry muffins are massive in both flavor and size. These extra large muffins are bursting with plenty of blueberries, have soft and moist centers, and big muffin tops. You can use a jumbo muffin pan or a regular 12-count muffin pan',
                img: './images/accomodation-1/food/blueberries-muffin.jpeg'
            },
        ]
            
    },

    {   
        acc_image: './images/accommodation-2-hotel/main-picture.jpeg',
        acc_name: 'Peppers Bluewater Resort',
        acc_type: 'Hotel',
        acc_guest_number: '1-2 max.',
        acc_nights_number: '1-5 nights max.',
        acc_description: 'Peppers Bluewater Resort is a 4.5-star hotel close to the shores of Lake Tekapo. This resort offers luxury accommodation, great views and is ideally positioned for exploring the Mackenzie Basin and Southern Alps. It is a 10-minute walk from the Church of the Good Shepherd. The air-conditioned accommodation has a private bathroom and tea and coffee making facilities. Most feature a balcony, fully equipped kitchen and mountain or lake views. WiFi access is available for an additional charge.',
        acc_price_per_night: 157,
        id: '2',
        amenities:{
            linen: true,
            free_parking:true,
            free_wifi: true, 
            heating: true,
            tv: true,
            washing_machine: true,
            smoke_alarm: true,
            smoking_allowed: true, 
        },
        location: 'Lake Tekapo, Canterbury',
        acc_gallery: [
            './images/accommodation-2-hotel/main-picture.jpeg',
            './images/accommodation-2-hotel/top-image.jpeg',
            './images/accommodation-2-hotel/bottom-image.jpeg',
            './images/accommodation-2-hotel/img1.jpeg',
            './images/accommodation-2-hotel/img2.jpeg',
            './images/accommodation-2-hotel/img3.jpeg',
            './images/accommodation-2-hotel/img4.jpeg',
            './images/accommodation-2-hotel/img5.jpeg',
        ],

        meals:[
            {   
                id: 'm1',
                name:'Family Steak & Cheese Pie',
                price: 15,
                type: 'lunch',
                description: 'Get a delicious steak and cheese family size pie. All pies are freshly made using the best of meat combined with a perfect pastry.',
                img: './images/accommodation-2-hotel/food/pie.jpeg'
                
            },
            {   
                id: 'm2',
                name:'Sirloin on The Bone',
                price: 50,
                type: 'Dinner',
                description: 'Dry aged in house for a unique richer flavour and texture, served sliced off the bone, with your choice of any side and two sauces. All our prime cuts are served with delicious garlic & rosemary hassleback potatoes and a fresh salad garnish, along with your choice of sauce; creamy peppercorn, portobello mushroom, chimichurri or red wine jus.',
                img: './images/accommodation-2-hotel/food/rump-steak.jpeg'
            },
            {   
                id: 'm3',
                name:'Fish & Chips',
                price: 25,
                type: 'lunch',
                description: 'You know us for our fish and chips, but have you tasted some of the other yummy kai on offer? From fresh kaimoana to crispy fried chicken (with our famous chilli maple sauce) and mouth watering burgers, there is something for everyone at Fush!',
                img: './images/accomodation-1/food/fish-chips.jpeg'
            },
            {   
                id: 'm4',
                name:'Jumbo Blueberry Muffin',
                price: 10,
                type: 'breakfast',
                description: 'These jumbo blueberry muffins are massive in both flavor and size. These extra large muffins are bursting with plenty of blueberries, have soft and moist centers, and big muffin tops. You can use a jumbo muffin pan or a regular 12-count muffin pan',
                img: './images/accomodation-1/food/blueberries-muffin.jpeg'
            },
        ]
    },

    {   
        acc_image: './images/accommodation-3-hostel/main-picture-hostel.jpeg',
        acc_name: 'Tailor Made Tekapo Accommodation-Guesthouse & Hostel',
        acc_type: 'Hostel',
        acc_guest_number: '1 max.',
        acc_nights_number: '1-10 nights max.',
        acc_description: 'Offering a childrens playground, a guest lounge and budget accommodation options, Tailor Made Tekapo Accommodation - Guesthouse & Hostel is located in Lake Tekapo. Guests enjoy free on-site parking. Guests enjoy unlimited WiFi per day. Tailor Made Tekapo Accommodation - Guesthouse & Hostel is 5 minutes walk from the Cairns Golf Course. It is 5 minutes drive from Tekapo Springs and the Church of the Good Shepherd. The independent Tailor Made Tekapo Accommodation - Guesthouse & Hostel offers a garden, a shared kitchen and a ski storage room.',
        acc_price_per_night: 30,
        acc_price_total: '',
        id: '3',
        amenities:{
            linen: true,
            free_parking:true,
            free_wifi: false, 
            heating: true,
            tv: true,
            washing_machine: false,
            smoke_alarm: true,
            smoking_allowed: false, 
        },
        location: 'Lake Tekapo, Canterbury',
        acc_gallery: [
            './images/accommodation-3-hostel/main-picture-hostel.jpeg',
            './images/accommodation-3-hostel/top-image.jpeg',
            './images/accommodation-3-hostel/bottom-image.jpeg',
            './images/accommodation-3-hostel/img1.jpeg',
            './images/accommodation-3-hostel/img2.jpeg',
            './images/accommodation-3-hostel/img3.jpeg',
            './images/accommodation-3-hostel/img4.jpeg',
            './images/accommodation-3-hostel/img5.jpeg',
        ],
        
        meals:[
            {   
                id: 'm1',
                name:'Loaded Wedges',
                price: 19,
                type: 'lunch',
                description: 'Slow-cooked pulled pork, whiskey maple BBQ sauce, roasted capsicum, jalapeño and grilled mozzarella on top of Coco fries and drizzled with chipotle aioli.',
                img: './images/accommodation-3-hostel/food/wedges.jpeg'
            },
            {   
                id: 'm2',
                name:'Eggs and Avo on Toast',
                price: 15,
                type: 'breakfast',
                description: 'Scrambled, fried or poached, on toasted sourdough with house tomato relish, avocado and your choice of sauces. Perfect for the vegetarian eater and the backpacker in the budget!',
                img: './images/accommodation-3-hostel/food/eggs-avo-toast.jpeg'
            },
            {   
                id: 'm3',
                name:'Fish & Chips',
                price: 25,
                type: 'lunch',
                description: 'You know us for our fish and chips, but have you tasted some of the other yummy kai on offer? From fresh kaimoana to crispy fried chicken (with our famous chilli maple sauce) and mouth watering burgers, there is something for everyone at Fush!',
                img: './images/accomodation-1/food/fish-chips.jpeg'
            },
            {   
                id: 'm4',
                name:'Jumbo Blueberry Muffin',
                price: 10,
                type: 'breakfast',
                description: 'These jumbo blueberry muffins are massive in both flavor and size. These extra large muffins are bursting with plenty of blueberries, have soft and moist centers, and big muffin tops. You can use a jumbo muffin pan or a regular 12-count muffin pan',
                img: './images/accomodation-1/food/blueberries-muffin.jpeg'
            },
        ]
    },

    {   
        acc_image: './images/accommodation-4-motel/main-picture-motel.jpeg',
        acc_name: 'Lake Tekapo Village Motel',
        acc_type: 'Motel',
        acc_guest_number: '2-4 max.',
        acc_nights_number: '3-10 nights max.',
        acc_description: 'Situated in the centre of the village, Lake Tekapo Village Motel offers rooms with lake views. Free WiFi and free private parking is available. Twizel is a 40-minute drive from the property. Guests can choose from Studios, Two-Bedroom Apartments and a Penthouse Suite that accommodates the top floor of the motel. All rooms at Lake Tekapo Village Motel feature a flat-screen TV, private bathroom with hairdryer, heating and ironing facilities.',
        acc_price_per_night: 90,
        id: '4',
        amenities:{
            linen: true,
            free_parking:true,
            free_wifi: true, 
            heating: true,
            tv: true,
            washing_machine: true,
            smoke_alarm: true,
            smoking_allowed: false, 
        },
        location: 'Lake Tekapo, Canterbury',
        acc_gallery: [
            './images/accommodation-4-motel/main-picture-motel.jpeg',
            './images/accommodation-4-motel/top-image.jpeg',
            './images/accommodation-4-motel/bottom-image.jpeg',
            './images/accommodation-4-motel/img1.jpeg',
            './images/accommodation-4-motel/img2.jpeg',
            './images/accommodation-4-motel/img3.jpeg',
            './images/accommodation-4-motel/img4.jpeg',
            './images/accommodation-4-motel/img5.jpeg',
        ],
        meals:[
            {
                id: 'm1',
                name:'Pepperoni Pizza',
                price: 25,
                type: 'Dinner',
                description: 'A mouth-watering medley of seasoned topside beef, bacon, pepperoni and cabbanosy with Spags own BBQ. Our signature slow risen dough is made using genuine New York Milled Hard Spring Wheat Flour for that authentic New York base you can fold. Crispy on the outside, but light, tender and airy on the inside.',
                img: './images/accommodation-4-motel/food/pizza.jpeg'
            },
            {   
                id: 'm2',
                name:'Vegetarian Pasta',
                price: 23,
                type: 'dinner',
                description: 'A selection of fresh vegetables layered between pasta sheets, served with Napoletana sauce and a sprinkle of cheese. A delicious vegetarian option.',
                img: './images/accommodation-4-motel/food/pasta-alfredo.jpeg'
            },
            {   
                id: 'm3',
                name:'Fish & Chips',
                price: 25,
                type: 'lunch',
                description: 'You know us for our fish and chips, but have you tasted some of the other yummy kai on offer? From fresh kaimoana to crispy fried chicken (with our famous chilli maple sauce) and mouth watering burgers, there is something for everyone at Fush!',
                img: './images/accomodation-1/food/fish-chips.jpeg'
            },
            {   
                id: 'm4',
                name:'Jumbo Blueberry Muffin',
                price: 10,
                type: 'breakfast',
                description: 'These jumbo blueberry muffins are massive in both flavor and size. These extra large muffins are bursting with plenty of blueberries, have soft and moist centers, and big muffin tops. You can use a jumbo muffin pan or a regular 12-count muffin pan',
                img: './images/accomodation-1/food/blueberries-muffin.jpeg'
            },
        ]
            
        
    },
]

//LOCAL STORAGE RECEIVED CODE STARTS
let received_current_accommodation = localStorage.getItem('selected_accommodation');
// console.log(received_current_accommodation);
let received_total_price = localStorage.getItem('total_price');
let received_check_in_value = localStorage.getItem('check_in_value');
let received_check_out_value = localStorage.getItem('check_out_value');
let received_guests_input = localStorage.getItem('guests_input');
let received_number_of_nights = localStorage.getItem('number_of_nights');
console.log(received_total_price);
console.log(received_check_in_value);
console.log(received_check_out_value);

//LOCAL STORAGE RECEIVED CODE ENDS

let current_accommodation = accommodation_db.filter(
    function(accObj){
        return accObj.acc_type == received_current_accommodation;
    }
)[0];

// console.log(current_accommodation.acc_name);
// console.log(current_accommodation.amenities['linen']);

//FUNCTION TO POPULATE ACCOMMODATION PAGE STARTS

function populate_accommodation_page(){

    document.getElementsByClassName('current-accomodation-name')[0].innerHTML = current_accommodation.acc_name;
    document.getElementsByClassName('current-accommodation-location')[0].innerHTML = current_accommodation.location;
    document.getElementsByClassName('current-accommodation-description')[0].innerHTML = current_accommodation.acc_description;
    document.getElementsByClassName('current-accommodation-guest-number')[0].innerHTML = 'Number of guests:' + ' ' +received_guests_input;
    document.getElementsByClassName('current-accommodation-nights')[0].innerHTML = 'Number of nights:' + ' ' + received_number_of_nights;
    document.getElementsByClassName('current-accommodation-total-price')[0].innerHTML = 'total price:' + ' ' + '$' + received_total_price;

    //IMAGE GALLERY LEGACY CODE STARTS

    let main_image = document.getElementById('main-image');
    let top_image = document.getElementById('top-image');
    let bottom_image = document.getElementById('bottom-image');
    let image_1 = document.getElementById('img1');
    let image_2 = document.getElementById('img2');
    let image_3 = document.getElementById('img3');
    let image_4 = document.getElementById('img4');
    let image_5 = document.getElementById('img5');

    // console.log(main_image);
    // console.log(current_accommodation.acc_gallery);

    main_image.src = current_accommodation.acc_gallery[0];
    top_image.src = current_accommodation.acc_gallery[1];
    bottom_image.src = current_accommodation.acc_gallery[2];
    image_1.src = current_accommodation.acc_gallery[3];
    image_2.src = current_accommodation.acc_gallery[4];
    image_3.src = current_accommodation.acc_gallery[5];
    image_4.src = current_accommodation.acc_gallery[6];
    image_5.src = current_accommodation.acc_gallery[7];



    //IMAGE GALLERY LEGACY CODE ENDS


    //MEAL LEGACY CODE WITH ARRAY APPROACH STARTS

    //reach my meals key inside of my db object
    // let meals_key = current_accommodation.meals;
    let current_meal = document.getElementById(current_accommodation.meals[0].id);
    console.log(current_meal);
    // console.log(meals_key[0].id);

    
    current_meal.getElementsByClassName('meal-name')[0].innerHTML = current_accommodation.meals[0].name;
    console.log( current_meal.getElementsByClassName('meal-name')[0]);

    function populate_meals_card(mealObj){
        
        let current_meal = document.getElementById(mealObj.id);
        console.log(current_meal);

        current_meal.getElementsByClassName('meal-image')[0].src = mealObj.img;
        current_meal.getElementsByClassName('meal-name')[0].innerHTML = mealObj.name;
        current_meal.getElementsByClassName('meal-price')[0].innerHTML = '$' + mealObj.price;
        current_meal.getElementsByClassName('meal-type')[0].innerHTML = mealObj.type;
        current_meal.getElementsByClassName('meal-description')[0].innerHTML = mealObj.description;
        
        console.log(mealObj.price);

    }

    
    for (let i = 0; i < current_accommodation.meals.length; i++)
    populate_meals_card(current_accommodation.meals[i])

    

    // console.log(meals_key.getElementsByClassName('meal-name')[0].innerHTML = meals_key[0].name);


    // for (meal in meals_key){
    //     let meal_available = meals_key[meal];
    //     // console.log(meal_available.name);
    //     let meal_name = meal_available.name;
    //     console.log(meal_name);
    //     let meal_price = meal_available.price;
    //     console.log(meal_price);
    //     let meal_type = meal_available.type;
    //     console.log(meal_type);
    //     let meal_description = meal_available.description;
    //     console.log(meal_description);
        
        // let current_meal = document.getElementById(meal_available)
        // console.log(current_meal);
        
        // meal_name_container.innerHTML = meal_name;
        // console.log(document.getElementsByClassName('meal-name')[0]);

    //     meal_name_container.innerHTML = meal_name;
        
    // }

    //MEAL LEGACY CODE WITH ARRAY APPROACH ENDS


    //AMENITIES CONDITIONAL STATEMENT STARTS

    //reach the keys in my amenities object
    let amenities_available = Object.keys(current_accommodation.amenities);
    // console.log(amenities_available);
    // console.log( current_accommodation.amenities['tv'] );
    
    //Iterate through my amenities
    for(let i =0; i < amenities_available.length ; i++){
        
        // console.log( amenities_available[i] );

        //declare amenity variable from my objects
        let amenity = amenities_available[i];
        

        //if statement to add class no-available when value is false
        if(current_accommodation.amenities[amenity] == false){

            //reach my amenity ID in my HTML
           let id_amenity = document.getElementById(amenity);
           id_amenity.classList.add('no-available');
        }
        // console.log( current_accommodation.amenities[amenity] );
    }
}

//FUNCTION TO POPULATE ACCOMMODATION PAGE ENDS


//CALL FUNCTION TO POPULATE ACCOMMODATION PAGE
populate_accommodation_page();

//LOAD MORE LEGACY CODE STARTS
$('.show-more-btn').click(function load_more_meals(){
    // console.log(this);
    
    $('#hidden-meals').removeClass('no-display');
    $('#show-more-btn').addClass('no-display');
    }
)
//LOAD MORE LEGACY CODE ENDS

//MODAL LEGACY CODE STARTS
$('.add-btn').click(function modal_pop_up(){
        $('.modal').removeClass('no-display');
    }
)

$('close-btn').click(function close_modal(){
        $('.modal').addClass('no-display');
    }
)


//MODAL LEGACY CODE STARTS