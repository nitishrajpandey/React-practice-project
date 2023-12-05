import dashboard from "../Assets/dashboard.png";
import { checkbox, img1, img10, img2, img3, img4, img5, img6, img7, img8, img9, standardicon } from "../Assets";

export const navlinks = [
    {
        id: "home",
        link: "Home"
    },
    {
        id: "about",
        link: "About"
    },
    {
        id: "explore",
        link: "Explore"
    },
    {
        id: "pricing",
        link: "Pricing"
    },
    {
        id: "contact",
        link: "Contact"
    }
]


export const hero = {
    "title1": "Its a Gig World Out",
    "title2": "Then, Go Explore",
    "description": "We provide you always your dream places. We always make our customer happy by proving many choices.",
    "btn1": "Get Started",
    "btn2": "Get Demo",
    "img": dashboard
}

export const exploredata = [
    {
        id: 1,
        img: img1,
        city: "Mumbai",
        time: "3.0 hour dirve"

    },
    {
        id: 2,
        img: img2,
        city: "Hyderabad",
        time: "2.5 hour dirve"

    },
    {
        id: 3,
        img: img3,
        city: "Pune",
        time: "3.0 hour dirve"

    },
    {
        id: 4,
        img: img4,
        city: "Chennai",
        time: "5.0 hour dirve"

    },
    {
        id: 5,
        img: img5,
        city: "Patna",
        time: "3.2 hour dirve"

    },
    {
        id: 6,
        img: img6,
        city: "Bengaluru",
        time: "7.2 hour dirve"

    },
    {
        id: 7,
        img: img7,
        city: "Agra",
        time: "2.5 hour dirve"

    },
    {
        id: 8,
        img: img8,
        city: "Kochi",
        time: "3.1 hour dirve"

    },
    {
        id: 9,
        img: img9,
        city: "Kolkata",
        time: "6.3 hour dirve"

    },
    {
        id: 10,
        img: img10,
        city: "Ahmedabad",
        time: "1.3 hour dirve"

    },
]


export const memberShipPlanDetails = {
    title: "Choose The Plan That Suits You",
    subtitle: "Many attractive offers by becomming a premium member",
    btn1: "Monthly",
    btn2: "Yearly",
    plan: [
        {
            planIcon: standardicon,
            cardTitle: "Standard Membership",
            cardSubtitle: "Suitable for all users",
            cardType: "Free / Year",
            planContent: [
                { iconbox: checkbox, Text: "Find Popular Destination" },
                { iconbox: checkbox, Text: "Priority Booking Schedule" },
                { iconbox: checkbox, Text: "Find Popular Destination" },
            ]
        }
    ]
}