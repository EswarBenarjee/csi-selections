// Code for validations and selections
let name = document.getElementById('floatingInput name');
let jntuno = document.getElementById('floatingInput jntuno');
let email = document.getElementById('floatingInput email');
let dept = document.getElementById('floatingSelect dept');
let year = document.getElementById('floatingInput year');
let section = document.getElementById('floatingSelect section');
let phone = document.getElementById('floatingInput phone');
let domain = document.getElementById('floatingSelect domain');
let main = document.getElementById('floatingSelect main');
let sub = document.getElementById('floatingSelect sub');
let residence = document.getElementById('floatingSelect residence');
let why = document.getElementById('floatingTextarea why');
let contribute = document.getElementById('floatingTextarea contribute');
let promote = document.getElementById('floatingTextarea promote');
let form = document.getElementsByClassName('form')[0];

function validate() {
    console.log('Validating...');
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
    
    if (main.value == sub.value) {
        Swal.fire(
            'Interested fields',
            'Main Interest and Sub Interest cannot be same',
            'error'
        );
        main.focus();
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
        main: main.value,
        residence: residence.value,
        sub: sub.value,
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

    form.reset();

    return false;
}

function selectDomain() {
    if(domain.value == 'technical') {
        form.style.backgroundImage = "url('assets/videos/tech.gif')";
        main.innerHTML = `
        <option value="cp" selected>Competitive Programming</option>
            <option value="web">Web Development</option>
            <option value="ml">Machine Learning</option>
            <option value="cyber">Cyber Security</option>
            <option value="Others">Others</option>
        `;
        sub.innerHTML = `
        <option value="cp">Competitive Programming</option>
            <option value="web" selected>Web Development</option>
            <option value="ml">Machine Learning</option>
            <option value="cyber">Cyber Security</option>
            <option value="Others">Others</option>
        `;
    } else if(domain.value == 'nontechnical') {
        form.style.backgroundImage = "url('assets/videos/speaking.webp')";
        main.innerHTML = `
        <option value="promotion" selected>Promotions</option>
            <option value="anchor">Anchoring</option>
            <option value="cms">Content Writing</option>
            <option value="social">Social Media</option>
        `;
        sub.innerHTML = `
        <option value="promotion">Promotions</option>
            <option value="anchor" selected>Anchoring</option>
            <option value="cms">Content Writing</option>
            <option value="social">Social Media</option>
        `;
    } else if(domain.value == 'designing') {
        form.style.backgroundImage = "url('assets/videos/design.webp')";
        main.innerHTML = `
        <option value="poster" selected>Poster Designing</option>
            <option value="video">Video Designing</option>
            <option value="editing">Editing</option>
        `;
        sub.innerHTML = `
        <option value="poster">Poster Designing</option>
            <option value="video" selected>Video Designing</option>
            <option value="editing">Editing</option>
        `;
    }
}
domain.addEventListener('change', selectDomain);

function sectionValidate() {
    if(dept.value == 'aiml' || dept.value == 'aids') {
        section.disabled = true;
    } else {
        section.disabled = false;
    }
}
dept.addEventListener('change', sectionValidate);