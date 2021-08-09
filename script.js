// family meme
const audio = new Audio;
audio.src = "Audio/family.mp3";

// Scrolling down function(s)
window.addEventListener('scroll',function() {
    let navbar = document.querySelector('.navbar');
    let home = document.querySelector('.home');

    navbar.classList.toggle('scrolled-nav', window.scrollY > 20);
    home.classList.toggle('scrolled-home', window.scrollY > 1800);

});

// Projects
function ParsedData(project) {
    
    return `
    <div id = info>
        <img src ="${project.image}"id ="img">
        <div id = "text">
            <div id = "name">${project.name}</div>
            <div id = "description_title">Description</div>
            <div id = "description_text">${project.description}</div>
            <div id = "experience_title">Experience Gained?</div>
            <div id = "experience_text">${project.experience}</div>
        </div>
        
    </div>
    `
}

document.querySelector("#project_containers").innerHTML = `
 ${projects.results.map(ParsedData).join(" ")}
`