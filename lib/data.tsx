// import iconImage from '@/public/assets/'
import React from 'react'
import { BiTrendingUp } from 'react-icons/bi'
import { MdFastfood, MdOutlineFestival, MdMovie, MdMusicNote, MdImage } from 'react-icons/md'
import { FaRunning } from 'react-icons/fa'
import { IoIosImages } from 'react-icons/io'
import image1 from '@/public/assets/exclusiveproducts-bg-images/cultural-learning.png'
import image2 from '@/public/assets/tickets-and-events/backtoafrica.jpg'
import image3 from '@/public/assets/tickets-and-events/africaculturediversity.jpg'
import image4 from '@/public/assets/tickets-and-events/brazil.jpg'
import image5 from '@/public/assets/exclusiveproducts-bg-images/cultural-learning.png'
import image6 from '@/public/assets/exclusiveproducts-bg-images/cultural-learning.png'
import Rounded2 from "@/public/assets/Rounded2.png"
import aaa from "@/public/aaa.png"
import Rounded from "@/public/assets/Rounded.png";
import RoundedR from "@/public/assets/RoundedR.png";
import Rectangle1 from "@/public/assets/Rectangle1.png";
import imag1 from "@/public/assets/imag1.png";
import imag2 from "@/public/assets/imag2.png";
import imag3 from "@/public/assets/imag3.png";
import layer from "@/public/layer.png";
import fatherstore from "@/public/fatherstore.png"
import hub from "@/public/hub.png";
import fatherland from "@/public/fatherland.png";
import image38 from "@/public/image 38.png";
import live from '@/public/live-tv.png';
import local from '@/public/local-shipping.png'
import movie from '@/public/movie-creation.png'
import search from '@/public/image-search.png'
import trending from '@/public/trending-up.png'
import teacher from '@/public/teacher.png'
import lamp from '@/public/lamp.png'
import Rectangle5776 from '@/public/Rectangle 5776.png'
import Rectangle5794 from '@/public/Rectangle 5794.png'
import rainbow from '@/public/rainbow.png'
import carton from '@/public/carton.png'
import Group37016 from '@/public/Group 37016.png'
import  Rectanglell from '@/public/Rectanglell.png'
import asdfghjkl from '@/public/asdfghjkl.png'
import box from '@/public/box.png'
import Link  from '@/public/Link.png'
import  nove from '@/public/nove.png'
import abigail  from '@/public/abigail.png'
import africanprint  from '@/public/africanprint.png'
import ace1 from '@/public/ace-1.jpg.png'
import rectange4  from '@/public/Rectangle 24 (2).png'
import rectange5   from '@/public/Rectangle 24 (2).png'
import rectange7  from '@/public/Rectangle 24 (4).png'
import rectange8  from '@/public/Rectangle 24 (4).png'
import rectange2 from '@/public/Rectangle 24 (4).png'
import rectange3  from '@/public/Rectangle 23 (1).png'
import rectange6  from '@/public/Rectangle 23 (2).png'
import rectange1  from '@/public/palm wine.png'
import review from '@/public/review.jpg'
import Cta from '@/public/CTA.svg'
import basket1 from '@/public/basket1.png'
import basket2 from '@/public/basket2.png'
import basket3 from '@/public/basket3.png'
import calabash from '@/public/calabash.png'
import box1 from '@/public/bx-1 (1).png'
import box2 from '@/public/bx-1 (2).png'
import maskkk from '@/public/Mask groupttt.png'
import box3 from '@/public/bx-1.png'
import fash1 from '@/public/fash1.png'
import fash2 from '@/public/fash2.png'
import fash3 from '@/public/fash3.png'
import fash4 from '@/public/fas4.png'
import fash8 from '@/public/fash8.png'
import fash9 from '@/public/fash9.png'

// import maskgroup from '@/public/Mask group (1).png'
import bonnet from '@/public/fashionbonnet.png'
import bag from '@/public/bagg.png'
import smile from '@/public/smile.png'
import handfan from '@/public/handfan.png'



import rect from "@/public/rect.png"
// import imag6 from "@/public/assets/imag6.png";
import Rectangle233 from "@/public/Rectangle 233.png"
import Rectangle23 from "@/public/Rectangle 23.png"
import Rectangle2 from "@/public/Rectangle 2.png"
import Rectangle3 from "@/public/Rectangle 3.png"
import naomi from "@/public/naomi.png"
import splash from "@/public/splash.png"
// import Link from 'next/link';
// import { GoClock } from "react-icons/go"
import special1 from '@/public/special 1.png'
import special2 from '@/public/special 2.png'
import special3 from '@/public/special 3.png' 
// import { text } from 'stream/consumers'
import { link } from 'fs'
// import des1 from '@/public/des1.png'
// import des2 from '@/public/des2.png'
// import des3 from '@/public/des3.png'

export const CATEGORIES = [
  {
    name: "Trending",
    icon: <BiTrendingUp  size={30} />,
    // icon: React.createElement({ size: "20"},BiTrendingUp),
  },
  {
    name: "Food and Drink",
    icon: <MdFastfood size={30} />,
  },
  {
    name: "Festival",
    icon: <MdOutlineFestival size={30} />,
  },
  {
    name: "Theatre and Comedy",
    icon: <MdMovie size={30} />,
  },
  {
    name: "Sports",
    icon: <FaRunning size={30} />,
  },
  {
    name: "Live Music & Venues",
    icon: <MdMusicNote size={30} />,
  },
  {
    name: "Art & Culture",
    icon: <IoIosImages size={30} />,
  },
  {
    name: "Exhibition",
    icon: <MdImage size={30} />,
  },
] as const;

export const EVENTS = [
  {
    id:'1',
    name: "Reconnecting to the African Roots",
    date: "Tuesday, January 9, 2024 · 7pm EST",
    date2:"July 2023",
    text:"Fatherland Club plays a pivotal role in economic, recreational, educational,and entertainment needs by being a community hub for cultural, art, faith, tourist. This event will take place in Lagos, Nigeria.",
    location2:"New York",
    location: "New York, NY 10001 United States",
    image: image1,
    price:"$0",
    tags:[
      {
        id: "1",
        label: "United states event",
        href:"#",
      },
      {
        id: "2",
        label: "New York event",
        href:"#",
      },
      {
        id: "3",
        label: "Things to do in New York NY",
        href:"#",
      },
      {
        id: "4",
        label: "#africandiaspora",
        href:"#",
      },
      {
        id: "5",
        label: " #africanamerican",
        href:"#",
      },
      {
        id: "6",
        label: "#africanculture",
        href:"#",
      },
      {
        id: "7",
        label: " #africanfood",
        href:"#",
      },
      {
        id: "8",
        label: " #africanmusic",
        href:"#",
      },
      {
        id: "9",
        label: " #african_american",
        href:"#",
      },
      {
        id: "10",
        label: " #africanamericanhistory",
        href:"#",
      },
    ]

  },
  {
    id:'2',
    name: "Back to Africa Tour",
    date: " Monday, January 1, 2024 · 7pm GMT",
    date2:"October 2023",
    location2:"Lagos, Badagry",
    text:"Fatherland Club plays a pivotal role in economic, recreational, educational,and entertainment needs by being a community hub for cultural, art, faith, tourist. This event will take place in Lagos, Nigeria.",
    location: "Badagry, Lagos, LA 103101",
    image: image2,
    price:"$0",
    tags:[
      {
        id: "1",
        label: "African event",
        href:"#",
      },
      {
        id: "2",
        label: "Lagos event",
        href:"#",
      },
      {
        id: "3",
        label: "United states event",
        href:"#",
      },
      {
        id: "4",
        label: "United states event",
        href:"#",
      },
      {
        id: "5",
        label: "United states event",
        href:"#",
      },
      {
        id: "6",
        label: "United states event",
        href:"#",
      },
      {
        id: "7",
        label: "United states event",
        href:"#",
      },
      {
        id: "8",
        label: "United states event",
        href:"#",
      },
      {
        id: "9",
        label: "United states event",
        href:"#",
      },
      {
        id: "10",
        label: "United states event",
        href:"#",
      },
    ]

    
  },
  {
    id:'3',
    name: "African Culture Diversity for Dialogue",
    date: "London 56273 United Kingdom",
    date2:"January 2024",
    location2:"London",
    text:"Fatherland Club plays a pivotal role in economic, recreational, educational,and entertainment needs by being a community hub for cultural, art, faith, tourist. This event will take place in Lagos, Nigeria.",
    location: "New York",
    image: image3,
    price:"$0",
    tags:[
      {
        id: "1",
        label: "United states event",
        href:"#",
      },
      {
        id: "2",
        label: "United states event",
        href:"#",
      },
      {
        id: "3",
        label: "United states event",
        href:"#",
      },
      {
        id: "4",
        label: "United states event",
        href:"#",
      },
      {
        id: "5",
        label: "United states event",
        href:"#",
      },
      {
        id: "6",
        label: "United states event",
        href:"#",
      },
      {
        id: "7",
        label: "United states event",
        href:"#",
      },
      {
        id: "8",
        label: "United states event",
        href:"#",
      },
      {
        id: "9",
        label: "United states event",
        href:"#",
      },
      {
        id: "10",
        label: "United states event",
        href:"#",
      },
    ]

    
  },
  {
    id:'4',
    name: "Afro-Brazilian Opportunities in Africa-Brazil Relations",
    date: "Wednesday, May 1, 2024 · 7pm",
    date2:"May 2024",
    location2:"São Paulo",
    text:"Fatherland Club plays a pivotal role in economic, recreational, educational,and entertainment needs by being a community hub for cultural, art, faith, tourist. This event will take place in Lagos, Nigeria.",
    location: "São Paulo, SP 04829 Brazil",
    image: image4,
    price:"$0",
    tags:[
      {
        id: "1",
        label: "United states event",
        href:"#",
      },
      {
        id: "2",
        label: "United states event",
        href:"#",
      },
      {
        id: "3",
        label: "United states event",
        href:"#",
      },
      {
        id: "4",
        label: "United states event",
        href:"#",
      },
      {
        id: "5",
        label: "United states event",
        href:"#",
      },
      {
        id: "6",
        label: "United states event",
        href:"#",
      },
      {
        id: "7",
        label: "United states event",
        href:"#",
      },
      {
        id: "8",
        label: "United states event",
        href:"#",
      },
      {
        id: "9",
        label: "United states event",
        href:"#",
      },
      {
        id: "10",
        label: "United states event",
        href:"#",
      },
    ]

    
  },
  {
    id:'5',
    name: "Osun Osogbo UNESCO Festival",
    date: "Thursday, August 1, 2024 · 7pm WAT",
    date2:"August 2024",
    location2:"Osogbo",
    text:"Fatherland Club plays a pivotal role in economic, recreational, educational,and entertainment needs by being a community hub for cultural, art, faith, tourist. This event will take place in Lagos, Nigeria.",
    location: "Osogbo, Osun state 232101",
    image: image5,
    price:"$0",
    tags:[
      {
        id: "1",
        label: "United states event",
        href:"#",
      },
      {
        id: "2",
        label: "United states event",
        href:"#",
      },
      {
        id: "3",
        label: "United states event",
        href:"#",
      },
      {
        id: "4",
        label: "United states event",
        href:"#",
      },
      {
        id: "5",
        label: "United states event",
        href:"#",
      },
      {
        id: "6",
        label: "United states event",
        href:"#",
      },
      {
        id: "7",
        label: "United states event",
        href:"#",
      },
      {
        id: "8",
        label: "United states event",
        href:"#",
      },
      {
        id: "9",
        label: "United states event",
        href:"#",
      },
      {
        id: "10",
        label: "United states event",
        href:"#",
      },
    ]

    
  },
  {
    id:'6',
    name: "Reconnecting to the African Roots",
    date: "November 2024",
    date2:"November 2024",
    location2:" Florida",
    text:"Fatherland Club plays a pivotal role in economic, recreational, educational,and entertainment needs by being a community hub for cultural, art, faith, tourist. This event will take place in Lagos, Nigeria.",
    location: "Florida",
    image: image6,
    price:"$0",
    tags:[
      {
        id: "1",
        label: "United states event",
        href:"#",
      },
      {
        id: "2",
        label: "United states event",
        href:"#",
      },
      {
        id: "3",
        label: "United states event",
        href:"#",
      },
      {
        id: "4",
        label: "United states event",
        href:"#",
      },
      {
        id: "5",
        label: "United states event",
        href:"#",
      },
      {
        id: "6",
        label: "United states event",
        href:"#",
      },
      {
        id: "7",
        label: "United states event",
        href:"#",
      },
      {
        id: "8",
        label: "United states event",
        href:"#",
      },
      {
        id: "9",
        label: "United states event",
        href:"#",
      },
      {
        id: "10",
        label: "United states event",
        href:"#",
      },
    ]

    
  },
] as const;

export const PRESS = [
  {
    id: '1',
    image: Rounded2,
    text:'Commerce',
    title: 'Fatherland Corporation to raise $35m in public offer testing',
    content: 'In a bid to raise $35 million dollars to boost it’s activities, US based media company, Fatherland Global Public Benefit Corporation, os offering 2.5 million shares for subscription in a Public Private Memorandum. The Delaware-based media company is a global marketplace for the African and non-African populations for authentic stories and experiences of Africans and their race. It is founded by Hareter B. Oralusi.The Corporation delivers technology driven programmes and services to the worldwide population targeting over 100 million members. “The Shares are offered at a purchase price of $2.00 per share, up to an aggregate purchase price of $5,000,000. The Offering will terminate upon the sale of 2,500,000 shares, unless terminated earlier, in our sole discretion. The minimum investment is 500 shares, or $1000. The maximum number of shares to be sold in this offering is 2,500,000 shares. The offering is made in reliance upon an exemption from registration under the federal securities laws provided by Section 4(a)(2) of the Securities Act of 1933, as amended, the “Securities Act”, and Rule 504 of Regulation D as promulgated by the United States Securities and Exchange Commission, the “SEC” or the “Commission”, under the Securities Act of 1933. There is currently no public market for our common stock. “Securities are sold to any number and type of investor, and the issuer is not  subject to specific disclosure requirement”, as defined in Rule 504 of the Securities Act,” a statement by the company said. No fewer than 375 prospective subscribers have indicated interest in the offer. However, the shares offered by Fatherland in the Private Placement Memorandum have neither been registered with nor approved by the United States Securities and Exchange Commission. They also have not been filed with nor reviewed by the Attorney General of any state nor the security regulatory authorities of ant state. Fatherland advised each prospective purchaser of the securities to consult their own tax advisors as to the consequences of purchasing, holding, and disposing of the securities, including, without limitation, the application of U.S. federal tax laws to their situations, as well as any consequences to them under the laws of any other taxing jurisdiction as the corporation has not registered any securities under the Securities Act of 1933, as amended, or any state securities laws. “We offer these securities in reliance on certain exemptions from registration contained in the Securities Act and applicable state laws. As a consequence, purchasers may not sell these securities unless they are subsequently registered under the Securities Act and applicable state laws or an exemption from such registration is available. Accordingly, any purchaser must bear the economic risk of investment in these shares for an indefinite period of time,” they added. The statement further stated that each investor must acquire the shares of the common stock for his own account and not for the account of others, for investment purposes only and not with a view to, or for resale, distribution, or fractionalisation thereof.',
    text1:'Related News',
    image1:Rectangle1,
  },
  {
    id: '2',
    image: RoundedR,
    text:"Real Estate",
    title: 'Group plots $25m affordable housing in Badagry',
   content:" To further bridge existing deficit in supply especially for African-Americans, a developer, Messrs Fatherland Global Corporation, has disclosed plan to build about 500 housing units in Lagos. The project, known as ‘Fatherland Badagry creative city’, is a proposed residential estate located at Agonrin Sea Beach Badagry West Local Council of Lagos. The city will offer entertainment, education, tourism and luxury diaspora residential villas, where subscribers can live, work and play in extraordinary cutting-edge innovative, ecological, and sustainable green city. With Dangote refinery set to reposition Nigeria on the global radar, the ancient city of Bagadry will present opportunity for Africans at home and in diaspora to invest in affordable housing and establish link with their root.The project, a partnership between Fatherland Global Corporation, United States and Nigerian Capital Development Fund boasts of opportunity to purchase a state-of-the-art, exclusive one, two, three, or four bedrooms, off-plan villa or maisonette, overlooking the Atlantic Ocean-front.The fatherland complex is expected to showcase the true African experience, unique culture and values thereby making it a global entertainment and tourist destination. The developer revealed that high-tech project would offer sustainable, family orientated luxury community, which is set to rival the best complexes in the world.Speaking on the project, the chairman, Fatherland Global Corporation, Mr. Harter Babatunde Oralusi, said: “The project is between the African and African descendants in diaspora. It started many years ago when Michael Jackson family came to Nigeria and were able to identify that they are from Badagry, taken as a slave from Badagry to United States.It was proposed then to create a centre in Badagry for Africans in diaspora or African-American to know the their root. Later when Michael Jackson died, the project couldn’t see the light of the day. Now we want to bring it to life. “ Oralusi, who is also the Chairman, Nigerian Capital Development Fund (NCDF) Group Plc, said the project is designed for mixed family housing system, adding that it will be affordable and spring up multiple housing development in Badagry axis of Lagos. He said: “African American just built 6,000 housing units in Ghana because the government promote initiatives that can encourage them to own houses in Ghana. The Badagry project is similar to that. They will be able to build more and this will create massive community development of the area. When they come to Badagry to live, they will think of investing there. “ The chairman said the project will create leeway for improves housing development in Badagry and Lagos as a whole; stressing that in the long-term the housing investment could reach about $3billion in the area. “Fatherland Global Corporation is a public firm in the United States, having financial instrument in the capital market. And we are mobilising counterpart funding from Africa and Nigeria specifically. We have a venture capital company that is investing the project. One version of the project will be in Lagos and another in Atlanta and there will be a direct connection,” he said. Oralusi, added that the project will commence this year, with contractors moving to site.",
    text1:'Related News',
    image1:Rectangle1,

  },
  {
    id:'3',
    image: Rounded,
    text:"Entertainment",
    title:'ForeMedia Group bags Afrocentric Content Award',
    content:'Ahead of the fourth annual African Excellence Awards hosted by the Middle East and Africa, MEA Markets, ForeMedia Group has been awarded Best Afrocentric Media Content Development Ecosystem 2021. Kaven Oscar Cooper, Awards Executive at MEA Markets, conveyed the outcome of a continent-wide survey in an e-mail to the Founder/CEO of the company, Hareter B. Oralusi who described the feat as a challenge to improve on the current milestone. The content and entertainment provider, operating in Nigeria and the United Kingdom, has concluded plans to build the first digital ecosystem platform for creatives in the sub-Saharan Africa.Known for delivering Afro-centric media and entertainment contents across the globe, the company aims to support sustainable creative initiatives in sub-Saharan Africa by empowering content creators to learn, produce, distribute and monetise their works.The company, according to Timilehin Suara, its spokesman, will introduce to participants elements that include new media, marketplace services and products, content production, distribution and marketing, video streaming and advertising that would enhance their works.Riding on the waves of Rapid Annual Growth, the rganisers disclosed that data from PwC’s Entertainment and Media Outlook from 2017 to 2021 projects that Nigeria will enjoy a rapid yearly growth of 12.1 per cent, making it the fastest-growing media and entertainment market in the world.Suara noted that due to the lack of platforms around the world to cater for the African audiences, there is an urgent need for a dynamic, high capacity omni-media platform, which is what ForeMedia Group is out to fill.He disclosed that the ForeMedia Group has carried out substantial groundwork to make it the number one digital ecosystem platform in sub-Saharan Africa.“At the core of every digital ecosystem is a platform business model, and the ForeMedia Group has built an extremely robust tech infrastructure to support its omni-media platform,” he said.Sura noted that the media outfit provides a perfect new media and entertainment platform for young talented creators and Small and Medium Enterprises, thus empowering them to export and create global market for commercially feasible Afro-centric content.Supporting content creators with essential tools such as production equipment, technical support, distribution and money to success, Suara disclosed that the company’s ethos is ‘to use the latest cutting-edge digital technology to empower the next generation of Africans through media, entertainment and entrepreneurship; and through this, spread the wonderful diversity of Afro-centric media and entertainment across the world.According to Suara, the digital platform will give Africans and non-Africans, a fantastic new sphere of brilliant second to none entertainment, adding that ForeTVHub, one of the company’s platform is dedicated to distributing the most engaging and original content that covers media and entertainment from both ForeMedia creators and notable third-party partners.“The platform will continue to delight both the creators and users in new ways. And with innovative cutting-edge sports and entertainment videos, TV shows, top rated documentaries, music, books and podcasts, as well as so many breaking content from across the globe. Many people and their families visit the site multiple times a day,” he said.',
    text1:'Related News',
    image1:Rectangle1,
  }
]
export const Entertainment=[
  {
    id:'1',
    text:'Group boosts creativity in Africa  with  platform for content export',
    image:imag1,
    goto:'READ FULL ARTICLE',
    date:'16 Jun 2023',
  
  },
  {
    id:'2',
    text:'ForeMedia launches Live TV',
    image:imag2,
    goto:'READ FULL ARTICLE',
    date:'16 Jun 2023',
  
  },
  {
    id:'3',
    text:'ForeMedia Group bags Afrocentric Content Award',
    image:imag3,
    goto:'READ FULL ARTICLE',
    date:'16 Jun 2023',
  
  }]

  export const COMMUNITY=[
    {
      id:'1',
      image:'',
      text:"Community Resources",
      content:' FATHERLAND COMMUNITY reveals how a group of people is bound geographically, culturally, linguistically, religiously, and economically in the challenging world for Africans and African Descendants. The self-sustainable concept focuses on self-determination to flourish and become a vibrant, courageous, and proud community for Africans and African Descendants worldwide.',
    }]

export const Case = [
    {
      id:'1',
      image:Rectangle233,
      text1:'Case Study',
      text2:'Resources Article Heading',
      loream:'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum',
      more:'Read Full Article',

    },
    {
      id:'2',
      image:Rectangle23,
      text1:'Case Study',
      text2:'Resources Article Heading',
      loream:'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum',
      more:'Read Full Article',

    },
    
    {
      id:'3',
      image:Rectangle2,
      text1:'Case Study',
      text2:'Resources Article Heading',
      loream:'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum',
      more:'Read Full Article',

    }]

  export const BLOG =[
    {
      id:'1',
      image:rect,
      text1:'Blog',
      text2:'Resources Article Heading',
      loream:'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum',
      more:'Read Full Article',

    },
    {
      id:'2',
      image:Rectangle3,
      text1:'Blog',
      text2:'Resources Article Heading',
      loream:'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum',
      more:'Read Full Article',

    },
    {
      id:'3',
      image:Rectangle2,
      text1:'Blog',
      text2:'Resources Article Heading',
      loream:'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum',
      more:'Read Full Article',

    }
   ]

   export const MEDIA =[
    {
      id:'1',
      image: aaa,
      text1:'Press',
      text2:'Resources Article Heading',
      loream:'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum',
      more:'Read Full Article',

    },
    {
      id:'2',
      image:Rectangle3,
      text1:'Press',
      text2:'Resources Article Heading',
      loream:'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum',
      more:'Read Full Article',

    },
    {
      id:'3',
      image:Rectangle2,
      text1:'Press',
      text2:'Resources Article Heading',
      loream:'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum',
      more:'Read Full Article',

    }
   ]

  

   export const EVENT =[
    {
      id:'1',
      image:naomi,
      text1:'Event',
      text2:'Resources Article Heading',
      loream:'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum',
      more:'Read Full Article',

    },
    {
      id:'2',
      image:Rectangle3,
      text1:'Event',
      text2:'Resources Article Heading',
      loream:'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum',
      more:'Read Full Article',

    },
    {
      id:'3',
      image:splash,
      text1:'Event',
      text2:'Resources Article Heading',
      loream:'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum',
      more:'Read Full Article',

    }
   ]

   export const SPECIAL_OFFER = [
                {
                  id:'1',
                  image:special1,
                  label:'7 days holiday to Badagry',
                  duration:'7 Days',
                  size:'20 People',
                  state:'Lagos State',
                  price:'5900',
                  size2:'per person',

                  start_date:'Wed, 17 Jun 2023 11:00am',
                  end_date:'Wed, 24 Jun 2023',
                  country:'Nigeria',
                  location:'Badagry',
                  text:"Experience the allure of Badagry, a hidden gem nestled on the breathtaking coastline of Lagos State. Immerse yourself in the rich history, vibrant culture, and stunning landscapes of this remarkable destination. Unveil a holiday like no other, where every moment is filled with awe-inspiring experiences and unforgettable memories.Step into the past as you explore the historical treasures of Badagry. Follow in the footsteps of our ancestors along the Slave Route, a poignant journey that retraces the harrowing path of the transatlantic slave trade. Visit iconic landmarks such as the Badagry Heritage Museum, the Slave Relics Museum, and the first storey building in Nigeria, all testaments to the resilience and strength of the local community.But Badagry is not just a destination of historical significance. Discover pristine beaches that stretch as far as the eye can see, offering serenity and tranquility amidst the crashing waves. Feel the warm sand between your toes as you bask in the golden rays of the sun. Dive into crystal-clear waters and uncover a mesmerizing underwater world teeming with colorful marine life. Whether you seek relaxation or adventure, Badagry offers a haven for every traveler.The elegant suites and villas feature contemporary furnishings, with a tasteful ivory and powder-blue colour palette. Each includes a minibar that’s fully restocked each day, in addition to a private balcony or terrace. You can book a Double Room, Superior Room, Family Room or Junior Suite with an inland view of the main road, or upgrade for sea views. Other types of accommodation provide a private garden or an individual pool, but the Deluxe Three Bedroom Villa presents the utmost luxury for larger groups or families. Situated near the beachfront, this two-storey villa features three separate bedrooms, a fully equipped kitchen and extensive gardens that are complete with a gazebo, barbeque area, outdoor dining space and private pool.Suites and villas in the Deluxe Collection include additional privileges, such as a bottle of champagne during your stay, two complimentary massage treatments (per room, per stay) and exclusive access to a Deluxe Pool and area on the beach.",

                },
                {
                  id:'2',
                  image:special2,
                  label:'10 days holiday to Badagry',
                  duration:'10 Days',
                  size:'20 People',
                  state:'Lagos State',
                  price:'7400',
                  size2:'per person',

                  start_date:'Wed, 17 Jun 2023 11:00am',
                  end_date:'Wed, 24 Jun 2023',
                  country:'Nigeria',
                  location:'Badagry',
                  text:"Experience the allure of Badagry, a hidden gem nestled on the breathtaking coastline of Lagos State. Immerse yourself in the rich history, vibrant culture, and stunning landscapes of this remarkable destination. Unveil a holiday like no other, where every moment is filled with awe-inspiring experiences and unforgettable memories.Step into the past as you explore the historical treasures of Badagry. Follow in the footsteps of our ancestors along the Slave Route, a poignant journey that retraces the harrowing path of the transatlantic slave trade. Visit iconic landmarks such as the Badagry Heritage Museum, the Slave Relics Museum, and the first storey building in Nigeria, all testaments to the resilience and strength of the local community.But Badagry is not just a destination of historical significance. Discover pristine beaches that stretch as far as the eye can see, offering serenity and tranquility amidst the crashing waves. Feel the warm sand between your toes as you bask in the golden rays of the sun. Dive into crystal-clear waters and uncover a mesmerizing underwater world teeming with colorful marine life. Whether you seek relaxation or adventure, Badagry offers a haven for every traveler.The elegant suites and villas feature contemporary furnishings, with a tasteful ivory and powder-blue colour palette. Each includes a minibar that’s fully restocked each day, in addition to a private balcony or terrace. You can book a Double Room, Superior Room, Family Room or Junior Suite with an inland view of the main road, or upgrade for sea views. Other types of accommodation provide a private garden or an individual pool, but the Deluxe Three Bedroom Villa presents the utmost luxury for larger groups or families. Situated near the beachfront, this two-storey villa features three separate bedrooms, a fully equipped kitchen and extensive gardens that are complete with a gazebo, barbeque area, outdoor dining space and private pool.Suites and villas in the Deluxe Collection include additional privileges, such as a bottle of champagne during your stay, two complimentary massage treatments (per room, per stay) and exclusive access to a Deluxe Pool and area on the beach.",



                }, {
                  id:'3',
                  image:special3,
                  label:'Spiritual Tourism & Pilgrimage Program',
                  duration:'10 Days',
                  size:'20 People',
                  state:'',
                  price:'8900',
                  size2:'per person',


                  start_date:'Wed, 17 Jun 2023 11:00am',
                  end_date:'Wed, 24 Jun 2023',
                  country:'',
                  location:'Africa',
                  text:"Experience the allure of Badagry, a hidden gem nestled on the breathtaking coastline of Lagos State. Immerse yourself in the rich history, vibrant culture, and stunning landscapes of this remarkable destination. Unveil a holiday like no other, where every moment is filled with awe-inspiring experiences and unforgettable memories.Step into the past as you explore the historical treasures of Badagry. Follow in the footsteps of our ancestors along the Slave Route, a poignant journey that retraces the harrowing path of the transatlantic slave trade. Visit iconic landmarks such as the Badagry Heritage Museum, the Slave Relics Museum, and the first storey building in Nigeria, all testaments to the resilience and strength of the local community.But Badagry is not just a destination of historical significance. Discover pristine beaches that stretch as far as the eye can see, offering serenity and tranquility amidst the crashing waves. Feel the warm sand between your toes as you bask in the golden rays of the sun. Dive into crystal-clear waters and uncover a mesmerizing underwater world teeming with colorful marine life. Whether you seek relaxation or adventure, Badagry offers a haven for every traveler.The elegant suites and villas feature contemporary furnishings, with a tasteful ivory and powder-blue colour palette. Each includes a minibar that’s fully restocked each day, in addition to a private balcony or terrace. You can book a Double Room, Superior Room, Family Room or Junior Suite with an inland view of the main road, or upgrade for sea views. Other types of accommodation provide a private garden or an individual pool, but the Deluxe Three Bedroom Villa presents the utmost luxury for larger groups or families. Situated near the beachfront, this two-storey villa features three separate bedrooms, a fully equipped kitchen and extensive gardens that are complete with a gazebo, barbeque area, outdoor dining space and private pool.Suites and villas in the Deluxe Collection include additional privileges, such as a bottle of champagne during your stay, two complimentary massage treatments (per room, per stay) and exclusive access to a Deluxe Pool and area on the beach.",

                },

   ]

  //  export const DESTINATION =[
  //       {
  //         id:'1',
  //         image:des1,
  //         label:'Badagry Historical & Tourist Places',
  //         text:'Discover the Enigmatic History of Badagry, Lagos: Unveiling the Stories of Resilience and Heritage, Journey with us as we delve into the captivating history of this ancient city, where echoes of the past intertwine with the vibrant present.',
  //       },

  //       {
  //         id:'2',
  //         image:des2,
  //         label:'Abeokuta Historical & Tourist Places',
  //         text:'The historic city steeped in a tapestry of captivating stories and cultural heritage. Prepare to embark on a thrilling exploration of the past as we unveil the remarkable history of this enchanting city in Ogun State, Nigeria.',
  //       },

  //       {
  //         id:'3',
  //         image:des3,
  //         label:'Lagos Historical & Tourist Places',
  //         text:"Venture into the city of Lagos, a city that pulsates with the rhythm of history, culture, and diversity. Join us on a captivating journey as we explore the vibrant past of this metropolis, tracing its roots from humble beginnings to becoming one of Africa's most dynamic and cosmopolitan centers.",
  //       },

  //  ]

  export const ADVERTISE =[
    {
      id:"1",
      text:'Elevate Your Business With Fatherland’s Top Notch Advertising Services',
      text1:'Our advertising solutions are designed to meet the specific needs for brands and businesses around the world',
    }
  ]
  export const FEATURE=[
    
    {
    image:hub,
    image1:fatherland,
    image2:layer,
    image3:fatherstore,
    image4:fatherstore,
    image5:image38,
    },
  ] 
    export const AdvertSolutions= [
        {
          id:'1',
          image1:live,
          image2:search,
          image3:local,
        },
      ]


      export const Advertsolution2=[
        {
          id:'1',
          image:teacher ,
          image2:trending,
          image3:movie,
        },
        
    ]

    export const Advertcreative = [
      {
        id:'1',
        image:lamp,
        heading:"In-house Creative Studio",
        content:"Video is a powerful medium for storytelling. Our videographers and animators will create captivating videos that showcase your brand, products, or services in an engaging and memorable way.With our in-house studio, we maintain full control over the creative process, ensuring efficiency, quality, and a cohesive brand experience. "
      }
    ]
  
    export const AdvertWork=[
     {
      id:'1',
      image:Rectangle233,
      text:'Business',
      text1:'Resources Article Heading',
      location:'Lagos State Government',
     },

     {
       id:'2',
       image:Rectangle23,
       text:'Healthcare',
       text1:'Resources Article Heading',
       location:'Evercare Hospital',


     },
     {
       id:'3',
       image:Rectangle3, 
       text:'Fashion',
       text1:'Resources Article Heading',
       location:'David Wej',
     }
    ]
    export const AdvertsolutionRoute=[
      {
        id:'1',
        image:Rectangle5776,
      }
    ]

    export const Advertcontents=[
      {
        id:'1',
        image:Rectangle5794,
        text:'Branded Content',
        text1:"We help you define your brand's personality, positioning, and messaging to ensure a cohesive and impactful advertising strategy. We specialize in creating targeted and optimized digital advertising campaigns across various platforms, including social media, search engines, and display networks.",
      },

      {
        id:'2',
        image:rainbow,
        text:'Insights',
        text1:"We're committed to delivering unparalleled insights into your advertising performance. Our advanced analytics tools provide you with in-depth data on key metrics such as impressions, clicks conversions, and customer demographics. Harness the power of data to understand what's working, what's not, and how to fine-tune your campaigns for maximum impact."
      },

      {
        id:'3',
        image:carton,
        text:'Distribution',
        text1:'At Fatherland, we understand that distribution is the key to a successful advertising campaign. Our dedicated team of experts specializes in strategically distributing your ads to the right channels, maximizing your brand&apos,s visibility and generating quality leads.'
      },

      {
        id:'4',
        image:asdfghjkl,
        text:'Training',
        text1:'We believe in empowering our clients to take charge of their advertising efforts. Our comprehensive training programs equip you with the knowledge and skills necessary to navigate the dynamic world of advertising. From understanding digital marketing trends to mastering the art of social media advertising, our training ensures that you stay ahead of the curve and make informed decisions that drive results'
      },
      {
        id:'5',
        image: Rectanglell,
        text:'Accelerator Programs',
        text1:'Through our unique accelerator program, your organization can be part of an initiative to drive innovation in your sector, region, or for a social cause, amplified via Fatherland’s global network.'
      },
      {
        id:'6',
        image:Group37016,
        text:'Fatherland Discover Brands',
        text1:'Fatherland’s global portfolio includes iconic entertainment, Education, and Ecommerce brands. Our dedicated team can help you build smarter, more targeted solutions for your brand.',
      }
    
    ]

    export const StorehotDeal=[
      {
       id:'1',
       image:box,
       content:'Raffia Handbag(Box), Woven Shoulder Bag, Summer Bag',
       content1:'Jewelry Bags & Accessories',
       price:'$11.00',
       price1:'$8.80' 
      },

      {
        id:'2',
        image:Link,
        content:'Baba Onilu',
        content1:'Art & Collectibles',
        content2:'',
        price:'$200.00',
        price1:'$160.00'
      },

     { id:'3',
      image:africanprint,
      content:'African Print',
      content1:'Art & Collectibles',
      content2:'',
      price1:'$16.00',
    },
    { id:'4',
      image:nove,
      content:'A Woman Alone',
      content1: 'Tunde,Books & Magazines',
      content2:'',
      price:'$6.00',
      price1:'$4.80'
    },
    { id:'5',
      image:abigail,
      content:'',
      content1: 'Books & Magazines Ebooks', 
      content2:'Short Stories (Ebooks)',
      price1:'$2.00',
    },
    { id:'6',
      image:ace1,
      content:'Ace',
      content1: 'Music & Entertainment',
      price1:'$4.00',
    }

  ]
  export const Storediscovers =[
    {
      id:'1',
      image:rectange1,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },
    {
      id:'2',
      image:rectange2,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },

    {
      id:'3',
      image:rectange3,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },

    {
      id:'4',
      image:rectange4,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },

    {
      id:'5',
      image:rectange5,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },

    {
      id:'6',
      image:rectange6,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },
    {
      id:'7',
      image:rectange7,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },
    {
      id:'8',
      image:rectange8,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },
   
  ]
  
  export const StoreHomes =[
    {
      id:'1',
      image:basket1,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      price1:'$115.00',
      image2:Cta
      
    },
    {
      id:'2',
      image:basket2,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      price1:'$115.00',
      image2:Cta
      
    },

    {
      id:'3',
      image:calabash,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      price1:'$115.00',
      image2:Cta
      
    },

    {
      id:'4',
      image:basket3,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      price1:'$115.00',
      image2:Cta
      
    },

    {
      id:'5',
      image:rectange7,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      price1:'$115.00',
      image2:Cta
      
    },
    {
      id:'4',
      image:basket3,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      price1:'$115.00',
      image2:Cta
      
    },

    {
      id:'5',
      image:rectange7,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      price1:'$115.00',
      image2:Cta
      
    },
    {
      id:'4',
      image:basket3,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      price1:'$115.00',
      image2:Cta
      
    },

    {
      id:'5',
      image:rectange7,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      price1:'$115.00',
      image2:Cta
      
    },
   
  ]


   export const storeHomes2=[
    // {
    //   id:'1',
    //   image:mask,
    //   // title:"Palm wine topper",
    //   // description:'Art & collectibles',
    //   // price:'£36.00',
    //   // image1:review,
    //   // image2:Cta
      
    // },
    {
      id:'1',
      image:bonnet,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },
    {
      id:'2',
      image:bag,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },

    {
      id:'3',
      image:smile,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },
    {
      id:'4',
      image:handfan,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },
    {
      id:'5',
      image:bag,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },

    {
      id:'6',
      image:smile,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },
    {
      id:'7',
      image:handfan,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },

   ]

   export const storeDistribution=[
    {
      id:'1',
      image:box3
    },

    {
      id:'2',
      image:box1
    },
    {
      id:'3',
      image:maskkk
    },
    {
      id:'4',
      image:box2
    }
   ]

   export const Affrocategories =[
    {
      id:'1',
      image:fash1,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },
    {
      id:'2',
      image:fash2,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },

    {
      id:'3',
      image:fash3,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },

    {
      id:'4',
      image:bonnet,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },

    {
      id:'5',
      image:fash4,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },

    {
      id:'6',
      image:rectange4,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },
    {
      id:'7',
      image:rectange5,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },
    {
      id:'8',
      image:fash8,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },
    {
      id:'9',
      image:fash9,
      title:"Palm wine topper",
      description:'Art & collectibles',
      price:'£36.00',
      image1:review,
      image2:Cta
      
    },
   
  ]

    
    
    
  
  