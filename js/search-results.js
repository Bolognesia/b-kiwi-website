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
        multiple_images: {
            img1: './images/accomoation-1/2f30f91f-0a8a-4796-89ae-483eb4180321.webp',
            img2: './images/accomodation-1/42a4e0d8-1013-4d28-a9dc-e5a47dfe4d0d.webp',
            img3: './images/accomodation-1/b49580d0-7fa1-4edf-8958-bb8c00592a32.webp',
            img4: './images/accomodation-1/da26af0d-80f9-4757-93aa-66690061564c.webp',
            img5: './images/accomodation-1/9a613a5c-d82b-47a8-936d-efafe2273d90.webp',
            img6: './images/accomodation-1/2f9e75cb-f710-4c77-8469-fee17a00a3ed.webp',
            img7: './images/accomodation-1/d5ddad73-55ee-4b83-a5a3-ba8f2beaeb8a.webp',
            img8:'./images/accomodation-1/f7eac9cc-bb05-4759-840d-509decc32420.webp',
        },

        meal_name: {
            meal1:'Fish & Chips',
            meal2:'Steak pie',
        },

        meals:[
            {   
                id: 'm1',
                name:'Fish & Chips',
                price: 25,
                type: 'breakfast',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem fugiat nesciunt consectetur numquam facere omnis incidunt eius alias, ipsa dicta quidem itaque porro quas hic! Sed aut ullam dolorum.'
            },
            {   
                id: 'm2',
                name:'Fish & Chips',
                price: 25,
                type: 'breakfast',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem fugiat nesciunt consectetur numquam facere omnis incidunt eius alias, ipsa dicta quidem itaque porro quas hic! Sed aut ullam dolorum.'
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
        multiple_images: {
            img1: './images/accomoation-1/2f30f91f-0a8a-4796-89ae-483eb4180321.webp',
            img2: './images/accomodation-1/42a4e0d8-1013-4d28-a9dc-e5a47dfe4d0d.webp',
            img3: './images/accomodation-1/b49580d0-7fa1-4edf-8958-bb8c00592a32.webp',
            img4: './images/accomodation-1/da26af0d-80f9-4757-93aa-66690061564c.webp',
            img5: './images/accomodation-1/9a613a5c-d82b-47a8-936d-efafe2273d90.webp',
            img6: './images/accomodation-1/2f9e75cb-f710-4c77-8469-fee17a00a3ed.webp',
            img7: './images/accomodation-1/d5ddad73-55ee-4b83-a5a3-ba8f2beaeb8a.webp',
            img8:'./images/accomodation-1/f7eac9cc-bb05-4759-840d-509decc32420.webp',
        },
        meal_name: {
            meal1:'meal 1',
            meal2:'meal 2',
        },

        meals:[
            {
                name:'Fish & Chips',
                price: 25,
                type: 'breakfast',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem fugiat nesciunt consectetur numquam facere omnis incidunt eius alias, ipsa dicta quidem itaque porro quas hic! Sed aut ullam dolorum.'
            },
            {
                name:'Fish & Chips',
                price: 25,
                type: 'breakfast',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem fugiat nesciunt consectetur numquam facere omnis incidunt eius alias, ipsa dicta quidem itaque porro quas hic! Sed aut ullam dolorum.'
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
            free_wifi: true, 
            heating: true,
            tv: true,
            washing_machine: true,
            smoke_alarm: true,
            smoking_allowed: true, 
        },
        location: 'Lake Tekapo, Canterbury',
        multiple_images: {
            img1: './images/accomoation-1/2f30f91f-0a8a-4796-89ae-483eb4180321.webp',
            img2: './images/accomodation-1/42a4e0d8-1013-4d28-a9dc-e5a47dfe4d0d.webp',
            img3: './images/accomodation-1/b49580d0-7fa1-4edf-8958-bb8c00592a32.webp',
            img4: './images/accomodation-1/da26af0d-80f9-4757-93aa-66690061564c.webp',
            img5: './images/accomodation-1/9a613a5c-d82b-47a8-936d-efafe2273d90.webp',
            img6: './images/accomodation-1/2f9e75cb-f710-4c77-8469-fee17a00a3ed.webp',
            img7: './images/accomodation-1/d5ddad73-55ee-4b83-a5a3-ba8f2beaeb8a.webp',
            img8:'./images/accomodation-1/f7eac9cc-bb05-4759-840d-509decc32420.webp',
        },
        meal_name: {
            meal1:'meal 1',
            meal2:'meal 2',
        },

        meals:[
            {
                name:'Fish & Chips',
                price: 25,
                type: 'breakfast',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem fugiat nesciunt consectetur numquam facere omnis incidunt eius alias, ipsa dicta quidem itaque porro quas hic! Sed aut ullam dolorum.'
            },
            {
                name:'Fish & Chips',
                price: 25,
                type: 'breakfast',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem fugiat nesciunt consectetur numquam facere omnis incidunt eius alias, ipsa dicta quidem itaque porro quas hic! Sed aut ullam dolorum.'
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
            smoking_allowed: true, 
        },
        location: 'Lake Tekapo, Canterbury',
        multiple_images: {
            img1: './images/accomoation-1/2f30f91f-0a8a-4796-89ae-483eb4180321.webp',
            img2: './images/accomodation-1/42a4e0d8-1013-4d28-a9dc-e5a47dfe4d0d.webp',
            img3: './images/accomodation-1/b49580d0-7fa1-4edf-8958-bb8c00592a32.webp',
            img4: './images/accomodation-1/da26af0d-80f9-4757-93aa-66690061564c.webp',
            img5: './images/accomodation-1/9a613a5c-d82b-47a8-936d-efafe2273d90.webp',
            img6: './images/accomodation-1/2f9e75cb-f710-4c77-8469-fee17a00a3ed.webp',
            img7: './images/accomodation-1/d5ddad73-55ee-4b83-a5a3-ba8f2beaeb8a.webp',
            img8:'./images/accomodation-1/f7eac9cc-bb05-4759-840d-509decc32420.webp',
        },
        meal_name: {
            meal1:'meal 1',
            meal2:'meal 2',
        },

        meals:[
            {
                id: 'm1',
                name:'Fish & Chips',
                price: 25,
                type: 'breakfast',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem fugiat nesciunt consectetur numquam facere omnis incidunt eius alias, ipsa dicta quidem itaque porro quas hic! Sed aut ullam dolorum.'
            },
            {   
                id: 'm2',
                name:'Fish & Chips',
                price: 25,
                type: 'breakfast',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem fugiat nesciunt consectetur numquam facere omnis incidunt eius alias, ipsa dicta quidem itaque porro quas hic! Sed aut ullam dolorum.'
            },
        ]
            
        
    },
]

let received_current_accommodation = localStorage.getItem('selected_accommodation');
// console.log(received_current_accommodation);

let current_accommodation = accommodation_db.filter(
    function(accObj){
        return accObj.acc_type == received_current_accommodation;
    }
)[0];

// console.log(current_accommodation.acc_name);
// console.log(current_accommodation.amenities['linen']);

function populate_accommodation_page(){

    document.getElementsByClassName('current-accomodation-name')[0].innerHTML = current_accommodation.acc_name;
    document.getElementsByClassName('current-accommodation-location')[0].innerHTML = current_accommodation.location;
    document.getElementsByClassName('current-accommodation-description')[0].innerHTML = current_accommodation.acc_description;


    //MEAL LEGACY CODE
    // let meal_names_array = current_accommodation.meal_name;
    //     console.log(meal_names_array);
    // let meal_names_keys = Object.keys(current_accommodation.meal_name);

    // for(let i =0; i < meal_names_keys.length ; i++){
        
    //     let meal_key = meal_names_keys[i];
    //     // console.log(meal_key);
    //     // console.log(current_accommodation.meal_name[meal_key] );
    //     let meal_value = current_accommodation.meal_name[meal_key];
    //     let id_meal_name_div = document.getElementById(meal_key);
    //     console.log(id_meal_name_div);
    //     id_meal_name_div.innerHTML = meal_value;
    // }
    //MEAL LEGACY CODE ENDS

    //MEAL LEGACY CODE WITH ARRAY APPROACH STARTS

    //reach my meals key inside of my db object
    let meals_key = current_accommodation.meals;
    console.log(meals_key);
    console.log(meals_key[0].id);

    let meal_name_container = document.getElementsByClassName('meal-name')[0];
    let meal_price_container = document.getElementsByClassName('meal-price')[0];
    let meal_type_container = document.getElementsByClassName('meal-type')[0];
    let meal_description_container = document.getElementsByClassName('meal-description')[0];
    let current_meal_card = document.getElementById(meals_key[0].id)


    for (meal in meals_key){
        let meal_available = meals_key[meal];
        // console.log(meal_available.name);
        let meal_name = meal_available.name;
        console.log(meal_name);
        let meal_price = meal_available.price;
        console.log(meal_price);
        let meal_type = meal_available.type;
        console.log(meal_type);
        let meal_description = meal_available.description;
        console.log(meal_description);
        
        // let current_meal = document.getElementById(meal_available)
        // console.log(current_meal);
        
        // meal_name_container.innerHTML = meal_name;
        // console.log(document.getElementsByClassName('meal-name')[0]);

        meal_name_container.innerHTML = meal_name;
        
    }

    

    
    

    //MEAL LEGACY CODE WITH ARRAY APPROACH ENDS


    //AMENITIES CONDITIONAL STATEMENT
    //OBJECT KEYS APPROACH
    
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




populate_accommodation_page();