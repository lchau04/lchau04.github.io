//nav toggle function
const toggButton = document.getElementById('toggButton');
const navLinks = document.getElementById('navLinks');

toggButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// creates boxes
function createBox(title, content) {
    // Create the main container
    var boxCon = document.createElement('div');
    boxCon.className = 'box-con';

    // Create and fill the header
    var conHead = document.createElement('div');
    conHead.className = 'con-head';
    boxCon.appendChild(conHead);

    var titleText = document.createElement('div');
    titleText.className = 'title-text';
    titleText.textContent = title;
    conHead.appendChild(titleText);

    var iconsDiv = document.createElement('div');
    iconsDiv.className = 'icons';
    conHead.appendChild(iconsDiv);

    var iconSources = ['assets/minus.png', 'assets/window.png', 'assets/exit.png'];
    iconSources.forEach(function(src) {
        var img = document.createElement('img');
        img.className = 'icon';
        img.src = src;
        iconsDiv.appendChild(img);
    });

    // Create and fill the content container
    var contentCon = document.createElement('div');
    contentCon.className = 'content-con';
    boxCon.appendChild(contentCon);

    var contTextCon = document.createElement('p');
    contTextCon.className = 'cont-text-con';
    contTextCon.textContent = content;
    contentCon.appendChild(contTextCon);

    return boxCon;
}

// creates div of boxes for projects, etc
function divBoxes(divOrId, boxInfo) {
    var container = (typeof divOrId === 'string') ? document.getElementById(divOrId) : divOrId;

    boxInfo.forEach(function(info) {
        // Use the createBox function to create a box with the specified title and content
        var box = createBox(info.title, info.content);
        // Append the created box to the container
        container.appendChild(box);
    });
}

var info = [
    { title: 'INVESTENSE', content: 'img' },
    { title: 'Project 2', content: 'Description of Project 2' },
    { title: 'Project 2', content: 'Description of Project 2' },
];

window.onload = function() {
    // to display main hero box
    var welc = document.getElementById('welcome');
    welc.appendChild(createBox('Welcome to my Portfolio', 'See more content'));
    // to display current box
    var curr = document.getElementById('curr-info');
    curr.appendChild(createBox('Current.exe', 'Seeking a Summer 2024 Internship/Co-op'));

    // internship box
    divBoxes('project-box', info);
};

