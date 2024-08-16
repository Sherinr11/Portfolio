function validateUser(event) {
    event.preventDefault(); 
   
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

  
    const smsg = document.getElementById("smsg");
    const sname = document.getElementById("sname");
    const semail = document.getElementById("semail");
    const ssub = document.getElementById("sph");
    const ssubmit = document.getElementById("ssubmit");

    let hasError = false;

   
    sname.textContent = "";
    semail.textContent = "";
    ssub.textContent = "";
    smsg.textContent = "";
    ssubmit.textContent = "";

  
    if (name === '') {
        sname.style.color = 'white';
        sname.textContent = "Name is required.";
        hasError = true;
    }
    if (email === '' || !email.includes('@')) {
        semail.style.color = 'white';
        semail.textContent = "Email is not proper.";
        hasError = true;
    }
    if (subject === '') {
        ssub.style.color = 'white';
        ssub.textContent = "Phone Number is required.";
        hasError = true;
    }
    if (message === '') {
        smsg.style.color = 'white';
        smsg.textContent = "Please enter a message.";
        hasError = true;
    }

  
    if (!hasError) {
        ssubmit.style.color = 'white'; 
        ssubmit.textContent = 'Message Submitted Successfully. Thank you for contacting!';

        
        setTimeout(() => {
            ssubmit.textContent = '';
        }, 2000);
    } else {
        ssubmit.textContent = ''; 
    }
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', validateUser);
});
