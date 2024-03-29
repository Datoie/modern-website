import { fb, github, gmail, linkedin } from "../assets"

export const navLinks = [
    {
        id: '/',
        content: 'Home'
    },
    {
        id: 'about',
        content: 'About'
    },
    {
        id: 'contact',
        content: 'Contact'
    },
    {
        id: 'message',
        content: 'Join'
    }
]

export const aboutText = [
    {
        color:'text--secondary',
        lang: 'reenie-beanie',
        content: `I'm Davit Grdzelishvili, a dedicated web developer with a passion for creating responsive and user-friendly websites. With extensive experience in HTML, CSS, and JavaScript, I specialize in crafting dynamic web experiences that meet and exceed client expectations.
        Responsibilities
        In my role, I am responsible for:
        Developing and implementing web pages with a focus on responsiveness and user experience.
        Collaborating with design and development teams to ensure the successful execution of projects.
        Using my expertise in React.js to create interactive and engaging web applications.
        Staying up-to-date with the latest web development trends and technologies to deliver cutting-edge solutions.`
    },
    {
        color:'text-',
        lang:'unicode--font',
        content: `მე ვარ დავით გრძელიშვილი, ერთგული ვებ დეველოპერი, შემოქმედებით გატაცებული...
        გამოცდილება მაქვს HTML, CSS , js and React, მე სპეციალიზირებული ვარ დინამიური ვებ გამოცდილების შემუშავებაში, რომელიც აკმაყოფილებს და აღემატება კლიენტის მოლოდინს.ჩემს როლში მე ვარ პასუხისმგებელი:
        ვებ გვერდების შემუშავებასა და დანერგვაზე, მომხმარებლის გამოცდილებაზე ორიენტირებული.
        პროექტების წარმატებით შესრულების უზრუნველსაყოფად დიზაინისა და განვითარების გუნდებთან თანამშრომლობა.
        ჩემი გამოცდილების გამოყენება React.js-ში ინტერაქტიული და მიმზიდველი ვებ აპლიკაციების შესაქმნელად.
        იყავით განახლებული ვებ განვითარების უახლესი ტენდენციებითა და ტექნოლოგიების შესახებ, უახლესი გადაწყვეტილებების მიწოდებისთ.`
    }
]

export const socialLinks = [
    {
        id:'gmail',
        img: gmail,
        link: 'grdzelishvilidaviti@gmail.com',
    },
    {
        id: 'linkedin',
        img: linkedin,
        link: 'https://www.linkedin.com/in/davit-grdzelishvili-7b1292142/'
    },
    {
        id: 'github',
        img: github,
        link: 'https://github.com/Datoie'
    },
    {
        id: 'facebook',
        img: fb,
        link: 'https://www.facebook.com/profile.php?id=100007557528695'
    }
]
export const footerText = [
    {
        font: ' reenie-beanie ',
        content: `Tanks for reading!
        Do you Searching squad?
        join Grdzelo-Squad`
    },
    {
        font: 'unicode--font',
        content: `მადლობა წაკითხვისთვის!
        კიდევ ეძებ რაზმს?
        შემოუერთდი გრძელოს-რაზმს`
    }
]
