// document.body.classList.add('loader_bg');

// window.addEventListener("load", mostrarWeb, false);

// function mostrarWeb() {
//     document.body.classList.remove('loader_bg');
// }


// Función navbar transparente
$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 75);
});


// Control de tiempo para cambiar testimonials
const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        name: 'Karen Jones',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure obcaecati iusto excepturi, labore vero aliquam laudantium illum facilis veniam, nisi error ab commodi recusandae sunt similique laborum nemo pariatur.",
    },
    {
        name: 'Knives Reh',
        position: 'Software Engineer',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure obcaecati iusto excepturi, labore vero aliquam laudantium illum facilis veniam, nisi error ab.",
    },
    {
        name: 'Christina Wells',
        position: 'Backend Dev',
        photo: 'https://randomuser.me/api/portraits/women/27.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure obcaecati iusto excepturi, labore vero aliquam laudantium illum facilis veniam, nisi error ab commodi recusandae.",
    },
    {
        name: 'Pharrel Jones',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/men/27.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure obcaecati iusto excepturi, labore vero aliquam laudantium illum facilis veniam, nisi error ab commodi recusandae sunt similique laborum nemo.",
    },
    {
        name: 'Karen Jones',
        position: 'Frontend Dev',
        photo: 'https://randomuser.me/api/portraits/men/44.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure obcaecati iusto excepturi, labore vero aliquam laudantium illum facilis veniam, nisi error ab commodi.",
    },
    {
        name: 'Philip Miles',
        position: 'RRHH',
        photo: 'https://randomuser.me/api/portraits/men/46.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iure obcaecati iusto excepturi, labore vero aliquam laudantium illum facilis veniam, nisi error ab commodi recusandae sunt similique.",
    },
]

let idx = 1;

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position
    
    
    idx++;

    if(idx > testimonials.length - 1) {
        idx = 0;
    }
}

setInterval(updateTestimonial, 10000)