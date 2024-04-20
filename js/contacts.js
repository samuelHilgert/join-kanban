let contacts = [
    {
        name: "Anna Müller",
        mail: "anna.mueller@strive.com",
        phone: "+43 789 878 566",
        color: ""
    },
    {
        name: "Bernd Hofmann",
        mail: "hofmann@ib-bank.com",
        phone: "+49 647 289 145",
        color: ""
    },
    {
        name: "Eva Grace",
        mail: "eg@marinaclub.com",
        phone: "+25 493448951",
        color: ""
    },
    {
        name: "Frank Groß",
        mail: "groß@frank.de",
        phone: "+49 668463546",
        color: ""
    },
    {
        name: "James Walker",
        mail: "jw@dreamlogistics.com",
        phone: "+49 64865155",
        color: ""
    },
    {
        name: "Leonie Maier",
        mail: "leonie.maier@abc-construct.com",
        phone: "+49 596 487 12",
        color: ""
    },
    {
        name: "Max Baumgart",
        mail: "max@baumgart.de",
        phone: "+49 12 123 456",
        color: ""
    },
    {
        name: "Olivia Shaun",
        mail: "os@health-co.com",
        phone: "+25 1648689446",
        color: ""
    },
    {
        name: "Paul Lee",
        mail: "lee@lee-enterprises.com",
        phone: "+97 947621654",
        color: ""
    },
    {
        name: "Volker Richter",
        mail: "richter@cv-systems.com",
        phone: "+63 349 555 479",
        color: ""
    }
];


let profileCircleColors = ['teal', 'paleturquoise', 'violet', 'slategrey', 'darksalmon', 'orange', 'navy', 'indigo', 'lightpink', 'skyblue', 'forestgreen', 'tan', 'darkkhaki'];


function setRandomColor() {
    let contactCircles = document.querySelectorAll('.contact-circle');
    contactCircles.forEach(circle => {
        let randomColor = getRandomColor();
        circle.style.backgroundColor = randomColor;
    });
}


function getRandomColor() {
    let randomColor = Math.floor(Math.random() * profileCircleColors.length);
    return profileCircleColors[randomColor];
}



