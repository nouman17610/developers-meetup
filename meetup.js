const hamIcon = document.querySelector('.ham-icon');
const navItems = document.querySelector('.nav-links');
hamIcon.addEventListener('click', () => {
  hamIcon.classList.toggle('active');
  navItems.classList.toggle('active');
});
document.querySelectorAll('.nav-item a').forEach((n) => n.addEventListener('click', () => {
  hamIcon.classList.remove('active');
  navItems.classList.remove('active');
})
);
const closebutton = document.querySelector('.cross');
closebutton.addEventListener('click', () => {
  hamIcon.classList.remove('active');
  navItems.classList.remove('active');
});
const featuredSpeakers = [
  {
    id: 1,
    mg: './images/speaker01.png',
    name: 'Nouman Wali',
    title: 'Fullstack Developer',
    desc: 'Nouman wali handles a team of 50 developers and designers, he has an experience of around 10 years in programming.',
  },
  {
    id: 2,
    img: './images/speaker02.png',
    name: 'Nouman Wali',
    title: 'Fullstack Developer',
    desc: 'Nouman wali handles a team of 50 developers and designers, he has an experience of around 10 years in programming.',
  },
  {
    id: 3,
    img: './images/speaker03.png',
    name: 'Nouman Wali',
    title: 'Fullstack Developer',
    desc: 'Nouman wali handles a team of 50 developers and designers, he has an experience of around 10 years in programming.',
  },
  {
    id: 4,
    img: './images/speaker04.png',
    name: 'Nouman Wali',
    title: 'Fullstack Developer',
    desc: 'Nouman wali handles a team of 50 developers and designers, he has an experience of around 10 years in programming.',
  },
  {
    id: 5,
    img: './images/speaker05.png',
    name: 'Nouman Wali',
    title: 'Fullstack Developer',
    desc: 'Nouman wali handles a team of 50 developers and designers, he has an experience of around 10 years in programming.',
  },
  {
    id: 6,
    img: './images/speaker06.png',
    name: 'Nouman Wali',
    title: 'Fullstack Developer',
    desc: 'Nouman wali handles a team of 50 developers and designers, he has an experience of around 10 years in programming.',
  },
];
function addSpeakersToContainer(speakersData) {
  const container = document.getElementById('speakers-container');
  speakersData.forEach((speaker) => {
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('speaker-card');
    const speakerImage = document.createElement('div');
    speakerImage.classList.add('speaker-image');
    const img = document.createElement('img');
    img.src = speaker.img;
    img.alt = speaker.name;
    speakerImage.appendChild(img);

    // Separate div for the content
    const speakerContent = document.createElement('div');
    speakerContent.classList.add('speaker-content');

    const speakerName = document.createElement('h2');
    speakerName.textContent = speaker.name;

    const speakerTitle = document.createElement('p');
    speakerTitle.textContent = speaker.title;
    speakerTitle.classList.add('speaker-title');

    const speakerDesc = document.createElement('p');
    speakerDesc.textContent = speaker.desc;

    speakerContent.appendChild(speakerName);
    speakerContent.appendChild(speakerTitle);
    speakerContent.appendChild(speakerDesc);

    speakerCard.appendChild(speakerImage);
    speakerCard.appendChild(speakerContent);

    container.appendChild(speakerCard);
  });
}

// Call the function to add speakers to the container
addSpeakersToContainer(featuredSpeakers);
