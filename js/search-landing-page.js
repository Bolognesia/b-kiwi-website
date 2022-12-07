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
            linen: true,
            free_parking:true,
            free_wifi: true, 
            heating: true,
            tv: true,
            washing_machine: true,
            smoke_alarm: true,
            smoking_allowed: true, 
        },
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
    },
]


// console.log(accommodation_db);

// POPULATE CARD

// utku code

let current_card = document.getElementById(accommodation_db[0].acc_type);
console.log(current_card);
current_card.getElementsByClassName('accomodation-name')[0].innerHTML = accommodation_db[0].acc_name;
console.log(current_card.getElementsByClassName('accomodation-name')[0]);

function populate_acc_cards(accObj){
    // console.log(accObj);
    // console.log(accommodation_db[0].acc_type);
    // console.log(accObj.acc_type);

    let current_card = document.getElementById(accObj.acc_type);

    // console.log(current_card);

    current_card.getElementsByClassName('card-img')[0].src = accObj.acc_image;
    current_card.getElementsByClassName('accomodation-name')[0].innerHTML = accObj.acc_name;
    current_card.getElementsByClassName('type-accommodation')[0].innerHTML = accObj.acc_type;
    current_card.getElementsByClassName('guest-number')[0].innerHTML = accObj.acc_guest_number;
    current_card.getElementsByClassName('acc-nights')[0].innerHTML = accObj.acc_nights_number;
    current_card.getElementsByClassName('accommodation-description-paragraph')[0].innerHTML = accObj.acc_description;
    current_card.getElementsByClassName('price')[0].innerHTML = '$' + accObj.acc_price_per_night;
}

for (let i = 0; i < accommodation_db.length; i++)
populate_acc_cards(accommodation_db[i]);


// document.getElementById('myID');

// let id_var = 'myID';
// document.getElementById(id_var);






//ON CLICK SEARCH FILTER FUNCTION STARTS
$('#search-btn').click(function filter_accommodation(){
        // console.log($('#check-in-date').val());

        //DECLARE VARIABLES
        let check_in_value = $('#check-in-date').val();
        // console.log(check_in_value);
        let check_out_value = $('#check-out-date').val();
        let guests_input = $('#guests-input').val();
        // console.log(guests_input);
        let difference = calculate_day_difference(check_in_value,check_out_value);
        console.log(difference);

        
        //HOUSE CONDITION
        if (guests_input <= 4 && difference >= 2 && difference <= 15){
            $('#House').removeClass('no-display');
            // console.log('test');
        }

        else
            $('#House').addClass('no-display');

        //HOTEL CONDITION
        if (guests_input <= 2 && difference >= 1 && difference <=5){
            $('#Hotel').removeClass('no-display');
            // console.log('test');
        }

        else
            $('#Hotel').addClass('no-display');
        
        //HOSTEL CONDITION
        if (guests_input == 1 && difference >= 1 && difference <= 10){
            $('#Hostel').removeClass('no-display');
            // console.log('test');
        }

        else
            $('#Hostel').addClass('no-display');
        //MOTEL CONDITION

        if (guests_input >= 2 && guests_input <=4 && difference >= 3 && difference <= 10){
            $('#Motel').removeClass('no-display');
            
        }

        else
            $('#Motel').addClass('no-display');

        //ALERT
        if (guests_input > 4 || difference > 15){
            $('#no-availability-alert').removeClass('no-display');
            
        }

        

        else
            $('#no-availability-alert').addClass('no-display');

        //GET ITEM LOCAL STORAGE
        localStorage.setItem('guests_input',guests_input);
        localStorage.setItem('check_in_value', check_in_value);
        localStorage.setItem('check_out_value',check_out_value);
        localStorage.setItem('number_of_nights', difference);

        // //DECLARE VARIABLES FROM CARD ACCCOMODATION
        // // let accommodation_name = document.getElementsByClassName('accomodation-name').innerHTML;

        // for (i=0; i < accommodation_db.length; i++){
        //     if()
        //     let accommodation_name = document.getElementsByClassName('accomodation-name')[i].innerHTML;
        //     console.log(accommodation_name);
        //     localStorage.setItem('accomodation_name', accommodation_name);
        // }
        
        //REACHING SEARCH RESULTS PAGE WITH JS
        document.getElementById('jump-to-results').scrollIntoView(); 

        let total_price_displays = document.getElementsByClassName('total-price')
        for(i=0; i < accommodation_db.length; i++){
        total_price_displays[i].innerHTML = '$' + difference * accommodation_db[i].acc_price_per_night;
        
        }
    }
);

//ON CLICK SEARCH FILTER FUNCTION ENDS


//SELECT ACCOMMODATION ON CLICK FUNCTION
$('.select-btn').click(function select_accommodation(){
    //using parentNode I'm reaching different levels of my code
    // console.log(this.parentNode.parentNode.parentNode.id);
    let selected_accommodation = this.parentNode.parentNode.parentNode.id;
    console.log(selected_accommodation);
    localStorage.setItem('selected_accommodation',selected_accommodation);
    window.location = '../search-results.html';
    }
);

