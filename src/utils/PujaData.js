
import EKADASHI1 from "../assets/ekadashi1.webp"
import EKADASHI2 from "../assets/ekadashi2.webp"
import EKADASHI3 from "../assets/ekadashi3.webp"
import Venue from "../assets/puja_venue.svg"
import Date from "../assets/puja_date.svg"

const pujaData = [
    {
      id: 1,
      title: "DEVSHAYANI EKADASHI SPECIAL",
      description: "16,000 Brihaspati Graha Mool Mantra jaap & Sudarshan Havan",
      purpose: "To find an Ideal Partner and Relationship Bliss",
      venue: "Shri Navagrah Shani Temple, Ujjain, Madhya Pradesh",
      date: "30 July, Wednesday, Ashadha Shukla Saptami",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date 
    },
    {
      id: 2,
      title: "DEVSHAYANI EKADASHI SPECIAL",
      description: "Pitru Dosha Nivaran Puja and Haridwar Ganga Abhishek Puja",
      purpose: "For Peace of Ancestor's souls and Resolving Family Disputes",
      venue: "Pishach Mochan Kund and Ganga Ghat, Kashi, Haridwar",
      date: "29 July, Wednesday, Ashadha Shukla Saptami",
      image: EKADASHI2,
      venueImage: Venue, 
      dateImage: Date 
    },
    {
      id: 3,
      title: "DEVSHAYANI EKADASHI SPECIAL",
      description: "Shri Baba Shyam Puja, Abhishek and Shringaar",
      purpose: "For Abundance of Wealth and Protection from Negative Energies",
      venue: "Shri Khatu Shyam Temple, Haridwar, Uttarakhand",
      date: "28 July, Wednesday, Ashadha Shukla Ekadashi",
      image: EKADASHI3,
      venueImage: Venue, 
      dateImage: Date 
    },
    {
      id: 4,
      title: "TANTRAPEETH RUDRAPRAYAG TEERTH SPECIAL",
      description: "Mahakali Tantra Yukta Yagya and 1008 Laal Pushp Mahakali Yantra Abhishek",
      purpose: "For Courage and Strength to Conquer Fear",
      venue: "Kalimath Temple, Rudraprayag, Uttarakhand",
      date: "29 July, Friday, Ashadha Shukla Trayodashi",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 5,
      title: "SATURDAY SHANI SHINGNAPUR SPECIAL",
      description: "Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",
      purpose: "For Prevention of Misfortunes and Adversities",
      venue: "Shree Shanidev Temple, Shani Shingnapur, Maharashtra",
      date: "30 July, Saturday, Ashadha Shukla Chaturdashi",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 6,
      title: "MAHAVIDYA PURNIMA SPECIAL",
      description: "Maa Bagalamukhi Tantra Yukta Havan",
      purpose: "For Victory in Court Cases and Victory over Enemies",
      venue: "Maa Bagalamukhi Temple, Haridwar, Uttarakhand",
      date: "30 July, Sunday, Ashadha Shukla Chaturdashi",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 7,
      title: "PURNIMA SHAKTIPEETH NIGHT SPECIAL",
      description: "Divya Mahakali Tantrokta Havan",
      purpose: "For Courage and Protection from Obstacles",
      venue: "Shaktipeeth Maa Tarapith Temple, Birbhum, West Bengal",
      date: "20 August, Saturday, Ashadha Shukla Purnima (From 05:59 PM, July 20 to 03:46 PM, July 21)",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 8,
      title: "GURU PURNIMA JYOTIRLINGA SPECIAL",
      description: "1008 Dakshinamurthy Mool Mantra Jaap and Havan and Omkareshwar Rudrabhishek",
      purpose: "To Find Purpose and Achieve Stability in Life",
      venue: "Shri Omkareshwar Jyotirlinga Temple , Khandwa, Madhya Pradesh",
      date: "1 August, Sunday, Ashadha Shukla Purnima",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 9,
      title: "GURU PURNIMA SPECIAL",
      description: "Rahu-Guru Shanti Special Guru Chandal Dosha Nivaran Mahapuja",
      purpose: "For Prosperity and Material Well-Being",
      venue: "Shri Brihaspati Temple, Kashi, Uttar Pradesh",
      date: "30 July, Sunday, Ashadha Shukla Purnima",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 10,
      title: "JYOTIRLINGA PURNIMA SPECIAL",
      description: "Satyanarayan Katha and Navagraha Shanti Puja",
      purpose: "For Enhancing Material Prosperity and Promoting Emotional Well-Being",
      venue: "Shri Omkareshwar Jyotirlinga Temple, Khandwa, Madhya Pradesh",
      date: "2 August, Sunday, Ashadha Shukla Purnima",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 11,
      title: "PURNIMA KASHI SPECIAL",
      description: "Pitru Dosh Shanti Mahapuja and Ganga Aarti",
      purpose: "For Peace of Ancestor's souls and Resolving Family Disputes",
      venue: "Pishach Mochan Kund, Kashi, Uttar Pradesh",
      date: "30 July, Sunday, Ashadha Shukla Purnima",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 12,
      title: "PURNIMA SHAKTIPEETH AMBABAI SPECIAL",
      description: "Lakshmi Hridya Path, Sri Yantra Puja and Sri Suktam Havan",
      purpose: "For Material Prosperity and Protection from Financial Misfortune",
      venue: "Shaktipeeth Maa Mahalaxmi Ambabai Temple , Kolhapur, Maharashtra",
      date: "20 August, Sunday, Ashadha Shukla Purnima",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 13,
      title: "GURU PURNIMA SPECIAL",
      description: "Budh Brahaspati Yuti Dosh - 17000 Budh Mool Mantra Jaap & 16000 Brahaspati Mool Mantra Jaap and Havan",
      purpose: "To Improve Communication Skill and Resolve Conflicts in Professional Life",
      venue: "Shri Brihaspati Temple, Kashi, Uttar Pradesh",
      date: "21 July, Sunday, Ashadha Shukla Purnima",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 14,
      title: "PURNIMA KASHI SPECIAL",
      description: "Swarnakarshan Bhairav Mantra Jaap, Batuk Bhairav Stotra Path and Havan",
      purpose: "For Debt Relief, Financial Abundance and Stability",
      venue: "Shri Batuk Bhairav Temple, Kashi, Uttar Pradesh",
      date: "21 July, Sunday, Ashadha Shukla Purnima",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 15,
      title: "JYOTIRLINGA SHRAVAN MONDAY SPECIAL",
      description: "Omkareshwar Rudrabhishek",
      purpose: "For Fulfilment of all wishes And Financial Stability",
      venue: "Shri Omkareshwar Jyotirlinga Temple, Khandwa, Madhya Pradesh",
      date: "22 July, Monday, Shravana Krishna Pratipada",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 16,
      title: "SHRAVAN MONDAY SPECIAL",
      description: "Maha Rudrabhishek at Four Sacred Shivalayas",
      purpose: "For Blessings of Good Health and Protection from Negative Influences",
      venue: "Four Shivalayas, Madhya Pradesh, Kashi, Ujjain, Haridwar",
      date: "22 July, Monday, Shravana Krishna Pratipada",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 17,
      title: "JYOTIRLINGA SHRAVAN MONDAY SPECIAL",
      description: "Omkareshwar Rin Mukti Shiv Havan",
      purpose: "For Relief from Debt and Abundance of Wealth",
      venue: "Shri Omkareshwar Jyotirlinga Temple, Khandwa, Madhya Pradesh",
      date: "22 July, Monday, Shravana Krishna Pratipada",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 18,
      title: "SHRAVAN MONDAY SPECIAL",
      description: "4 Prahar Kashi Special Maha Abhishek Puja",
      purpose: "For Physical and Mental Well-Being",
      venue: "Omkareshwar Mahadev Temple, Kashi, Uttar Pradesh",
      date: "22 July, Monday, Shravana Krishna Pratipada",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 19,
      title: "SHRAVAN MONDAY SPECIAL",
      description: "11,000 Mahamrityunjay Jaap Maha Anushthan and Panchamrit Rudrabhishek",
      purpose: "For Promoting Positive Energy and Receiving Blessings of Good Health",
      venue: "Shri Mahamrityunjay Mahadev Temple, Kashi, Uttar Pradesh",
      date: "22 July, Monday, Shravana Krishna Pratipada",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 20,
      title: "GURU PURNIMA JYOTIRLINGA SPECIAL",
      description: "1008 Dakshinamurthy Mool Mantra Jaap and Havan and Omkareshwar Rudrabhishek",
      purpose: "To Find Purpose and Achieve Stability in Life",
      venue: "Shri Omkareshwar Jyotirlinga Temple , Khandwa, Madhya Pradesh",
      date: "21 July, Sunday, Ashadha Shukla Purnima",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 21,
      title: "SHRAVAN MONDAY SPECIAL",
      description: "Maha Rudrabhishek at Four Sacred Shivalayas",
      purpose: "For Blessings of Good Health and Protection from Negative Influences",
      venue: "Four Shivalayas, Madhya Pradesh, Kashi, Ujjain, Haridwar",
      date: "22 July, Monday, Shravana Krishna Pratipada",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 22,
      title: "SHRAVAN MONDAY SPECIAL",
      description: "4 Prahar Kashi Special Maha Abhishek Puja",
      purpose: "For Promoting Positive Energy and Receiving Blessings of Good Health",
      venue: "Omkareshwar Mahadev Temple, Kashi, Uttar Pradesh",
      date: "22 July, Monday, Shravana Krishna Pratipada",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    },
    {
      id: 23,
      title: "SHRAVAN MONDAY SPECIAL",
      description: "11,000 Mahamrityunjay Jaap Maha Anushthan and Panchamrit ",
      purpose: "For Promoting Positive Energy and Receiving Blessings of Good Health",
      venue: "Shri Mahamrityunjay Mahadev Temple, Kashi, Uttar Pradesh",
      date: "30 July, Monday, Shravana Krishna Pratipada",
      image: EKADASHI1,
      venueImage: Venue, 
      dateImage: Date
    }
  ];
  
  export default pujaData;
  