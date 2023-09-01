import image3 from "../assets/amanda-dalbjorn-UbJMy92p8wk-unsplash.webp";
import image2 from "../assets/jainath-ponnala-BIHgNEaM394-unsplash.webp";
import image4 from "../assets/martin-sanchez-JQ0YVavMKLo-unsplash.webp";
import image1 from "../assets/nicolas-gonzalez-183F_vNaN8A-unsplash.webp";

interface NewsArticle {
    id: number;
    title: string;
    image: string;
    date: string; // You can use a string for simplicity, or a Date object
    content: string; // The article content
}

export const newsArticles: NewsArticle[] = [
    {
        id: 1,
        title: "360hz OLED monitors starting production Q2 2024",
        image: image1,
        date: "September 5, 2023",
        content:
            "In a significant development for the display industry, manufacturers are gearing up for the production of 360Hz OLED monitors, slated to commence in the second quarter of 2024. These high-refresh-rate displays are poised to make a substantial impact in the world of gaming and content creation. With OLED technology at their core, users can anticipate an unprecedented level of visual fidelity, featuring impeccable color accuracy, deep blacks, and lightning-fast response times. This innovation promises to redefine the gaming experience and push the boundaries of display technology.",
    },
    {
        id: 2,
        title: "Raspberry pi 5 CPU set to rival Apple Silicon",
        image: image2,
        date: "September 5, 2023",
        content:
            "The upcoming Raspberry Pi 5 is generating significant buzz in the tech community. With a powerful CPU that aims to rival Apple's M1 chip, it's expected to open up new possibilities for DIY projects and low-cost computing. Enthusiasts can't wait to see how this tiny yet mighty single-board computer performs against the big players in the industry.",
    },
    {
        id: 3,
        title: "Contact lenses with built in display, running on teardrops",
        image: image3,
        date: "September 4, 2023",
        content:
            "Imagine a world where your contact lenses not only correct your vision but also serve as a high-tech display. That vision is getting closer to reality with contact lenses embedded with tiny displays powered by teardrops. This groundbreaking technology has the potential to revolutionize augmented reality and personal computing, making sci-fi dreams come true.",
    },
    {
        id: 4,
        title: "Meta Quest 3 confirmed to have support for Wifi 7",
        image: image4,
        date: "September 4, 2023",
        content:
            "Meta's latest virtual reality headset, the Quest 3, is making waves with its announcement of support for Wifi 7. With faster and more reliable wireless connectivity, users can expect a seamless VR experience like never before. Get ready to immerse yourself in the metaverse with lightning-fast internet speeds and minimal lag.",
    },
];
