$('#search-btn').click(function(){
        // console.log($('#check-in-date').val());

        let check_in_value = $('#check-in-date').val();
        // console.log(check_in_value);
        let check_out_value = $('#check-out-date').val();
        let guests_input = $('#guests-input').val();
        // console.log(guests_input);

        let difference = calculate_day_difference(check_in_value,check_out_value);
        // console.log(difference);


        // Hotel 1-2 people – $157/night – min 1 night, max 5 nights
        // Hostel 1 person – $30/night – min 1 night, max 10 nights
        // Motel 2-4 people $90/night – min 3 nights, max 10 nights
        // House 1-4 people $240/night – min 2 nights, max 15 nights

        //HOTEL CONDITION
        if (guests_input <= 2)
            $('#hotel').removeClass('.no-display');
        
        else
            $$('#hotel').addClass('.no-display');

        //HOSTEL CONDITION
        
        //MOTEL CONDITION

        //HOUSE CONDITION
    }

    
);

