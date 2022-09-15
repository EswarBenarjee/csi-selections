// Code for validations and selections
let name = document.getElementById('floatingInput name');
let jntuno = document.getElementById('floatingInput jntuno');
let email = document.getElementById('floatingInput email');
let dept = document.getElementById('floatingSelect dept');
let year = document.getElementById('floatingInput year');
let section = document.getElementById('floatingSelect section');
let phone = document.getElementById('floatingInput phone');
let domain = document.getElementById('floatingSelect domain');
let why = document.getElementById('floatingTextarea why');
let contribute = document.getElementById('floatingTextarea contribute');
let promote = document.getElementById('floatingTextarea promote');

function validate() {
    if (name.value.trim() == "") {
        Swal.fire(
            'Name',
            'Please enter your name',
            'error'
        );
        name.focus();
        return false;
    }
    if (jntuno.value.trim() == "" || jntuno.value.length != 10) {
        Swal.fire(
            'JNTU Number',
            'Please enter your JNTU Roll Number',
            'error'
        );
        jntuno.focus();
        return false;
    }

    if (email.value.trim() == "") {
        Swal.fire(
            'Email',
            'Please enter your email',
            'error'
        );
        email.focus();
        return false;
    }
    
    if (phone.value.trim() == "" || phone.value.length != 10) {
        Swal.fire(
            'Phone',
            'Please enter your phone number',
            'error'
        );
        phone.focus();
        return false;
    }
    
    if (why.value.trim() == "") {
        Swal.fire(
            'Why CSI?',
            'Please enter why you want to be a CSI Coordinator',
            'error'
        );
        why.focus();
        return false;
    }

    if (contribute.value.trim() == "") {
        Swal.fire(
            'Contribution',
            'Please enter how you can contribute to CSI',
            'error'
        );
        contribute.focus();
        return false;
    }

    if (promote.value.trim() == "") {
        Swal.fire(
            'Promotions',
            'Please enter how you can promote CSI in your class',
            'error'
        );
        promote.focus();
        return false;
    }

    const data = {
        name: name.value,
        jntuno: jntuno.value,
        email: email.value,
        dept: dept.value,
        year: year.value,
        section: section.value,
        phone: phone.value,
        domain: domain.value,
        why: why.value,
        contribute: contribute.value,
        promote: promote.value
    }
    
    fetch(
        'https://coordinator-selections-b4e93-default-rtdb.firebaseio.com/selections.json',
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    
    Swal.fire(
        'Success',
        'Your response has been recorded',
        'success'
    );



    return false;
}