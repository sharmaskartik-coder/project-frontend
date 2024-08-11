import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

// Define the image URLs for the scrolling images
const images = [
    '/images/one.jpg',
    '/images/twoo.jpg',
    '/images/three.jpg',
    // Add more image paths here
];
const truckImage = '/images/tru.png'; // Direct path to the truck image

// Define the image URLs and corresponding links for the link boxes
const BoxesImages = [
    '/images/firebrigade.jpg',
    '/images/police.jpg',
    '/images/hospital.jpg',
    '/images/library.jpg',
    '/images/electricity.avif',
    '/images/school.avif',
    '/images/park.avif',
    '/images/transit.jpg'
];

const BoxesLinks = [
    { links: 'https://firebrigade.example.com', para: 'Fire Brigade' },
    { links: 'https://police.example.com', para: 'Police' },
    { links: 'https://hospital.example.com', para: 'Hospital' },
    { links: 'https://library.example.com', para: 'Library' },
    { links: 'https://municipal.example.com', para: 'Electricity' },
    { links: 'https://school.example.com', para: 'School' },
    { links: 'https://park.example.com', para: 'Park' },
    { links: 'https://transit.example.com', para: 'Transit' }
];

export default function About() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { t } = useTranslation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    // Handle click event to open the link in a new tab
    const handleBoxClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="about-container">
            <div className="truck-about">
                <div className="truck">
                    <img src={truckImage} alt="Truck" />
                </div>
                <div className="truck-det">
                    <div className="tagline-highlight-one">
                        <span className="tagline-highlight">{t('taglineOne')}</span>
                    </div>
                    <div className="tagline-highlight-two">
                        <span className="tagline-main">
                        {t('taglineTwo')}
                        </span>
                    </div>
                </div>
            </div>

            <div className="img-scroller-wrapper">
                <div
                    className="img-scroller"
                    style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
                >
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Images ${index + 1}`} />
                    ))}
                </div>
            </div>

            <div className="about-part">
                <h1>{t('welcome')}</h1>
                <h2>{t('title')}</h2>
                
                    <p>{t('aboutUs.p1')}</p>
                    <p>{t('aboutUs.p2')}</p>
                    <p>{t('aboutUs.p3')}</p>
                    <p>{t('aboutUs.p4')}</p>

            </div>

            <div className="link-boxes">
                <div className="box-heading">{t('quickLinks')}</div>
                <div className="boxes-container">
                    {BoxesImages.map((src, index) => (
                        <div
                            className="box"
                            key={index}
                            onClick={() => handleBoxClick(BoxesLinks[index].links)}
                        >
                            <img src={src} alt={`Box ${index + 1}`} />
                            <p>{BoxesLinks[index].para}</p>
                        </div>
                    ))}
                </div>
            </div>

  
        </div>
    );
}
