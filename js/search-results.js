// let received_check_in_value = localStorage.getItem('check_in_value');
// $('#check-in-date').html(received_check_in_value)
// console.log(received_check_in_value);

function populate_cards_new_page(){
        let new_card_acc_name = localStorage.getItem('accomodation_name');
        console.log(new_card_acc_name);
        document.getElementsByClassName('accomodation-name')[0].innerHTML = new_card_acc_name;

        console.log(document.getElementsByClassName('accomodation-name')[0]);
    }