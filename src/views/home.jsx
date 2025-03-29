import React from 'react'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Pricing from '../components/pricing'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'

import './home.css'

const Home = () => {
  return (
    <div className="home-container">
      <Navbar 
        logoSrc='https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original'
        logoAlt="Destiny Labs Logo"
        link1="Home"
        link2="Services"
        link3="Pricing"
        link4="Blog"
        link5="Contact"
        action1="Sign Up"
        action2="Log In"
      />
      <Hero 
        image3Src='https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDEzNnw&ixlib=rb-4.0.3&q=80&w=1080'
        image8Alt='Hero Image'
        image2Src='https://images.unsplash.com/photo-1556528487-e1bf676c7e0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDEzOHw&ixlib=rb-4.0.3&q=80&w=1080'
        image6Alt='Hero Image'
        image11Src='https://images.unsplash.com/photo-1476842634003-7dcca8f832de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDE0N3w&ixlib=rb-4.0.3&q=80&w=1080'
        image5Alt='Hero Image'
        image1Alt='Destiny Labs Logo'
        image7Src='https://images.unsplash.com/photo-1536768139911-e290a59011e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDE1MXw&ixlib=rb-4.0.3&q=80&w=1080'
        image7Alt='Hero Image'
        image12Alt='Hero Image'
        image2Alt='Hero Image'
        image6Src='https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDE1MXw&ixlib=rb-4.0.3&q=80&w=1080'
        image12Src='https://images.unsplash.com/photo-1553122272-f1f95ec1a52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDE1Mnw&ixlib=rb-4.0.3&q=80&w=1080'
        image3Alt='Hero Image'
        image9Src='https://images.unsplash.com/photo-1519581706005-e1b7e2de264c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDE1M3w&ixlib=rb-4.0.3&q=80&w=1080'
        image11Alt='Hero Image'
        action2='Learn More'
        action1='Get Started'
        image8Src='https://images.unsplash.com/photo-1518709911915-712d5fd04677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDE1NXw&ixlib=rb-4.0.3&q=80&w=1080'
        image5Src='https://images.unsplash.com/photo-1484979045040-0ab3854b6acb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDE1OHw&ixlib=rb-4.0.3&q=80&w=1080'
        image4Src='https://images.unsplash.com/photo-1500305614571-ae5b6592e65d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDE2MHw&ixlib=rb-4.0.3&q=80&w=1080'
        image10Alt='Hero Image'
        image4Alt='Hero Image'
        heading1='Welcome to Destiny Labs'
        content1='Join the revolution in crypto airdrops with our innovative platform that rewards engagement and community hype.'
        image10Src='https://images.unsplash.com/photo-1507759307406-da169254d741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDE2NHw&ixlib=rb-4.0.3&q=80&w=1080'
        image9Alt='Hero Image'
        image1Src='https://images.unsplash.com/photo-1480185378309-ff10682412df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDE2OXw&ixlib=rb-4.0.3&q=80&w=1080'
      />
      <Features1 
        feature1Title="Fair Algorithm"
        feature1Description="Our smart algorithm rewards active wallet engagement and community hype, ensuring fairness and transparency."
        feature2Title="Neon-Drenched Design"
        feature2Description="Our dark-themed, animated design is visually striking and designed to captivate users, setting us apart from the competition."
        feature3Title="Real User Value"
        feature3Description="We prioritize real user value in our airdrops, sparking loyalty and excitement within the crypto community."
        feature1ImgAlt='Illustration of a smart algorithm'
        feature3ImgSrc='https://images.unsplash.com/photo-1502696359287-7e03bbf438bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDEzN3w&ixlib=rb-4.0.3&q=80&w=1080'
        feature1ImgSrc='https://images.unsplash.com/photo-1558961163-9d5f22a929bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDE0Mnw&ixlib=rb-4.0.3&q=80&w=1080'
        feature3ImgAlt='Illustration representing real user value'
        feature2ImgSrc='https://images.unsplash.com/photo-1520549421221-3e77d246063d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDE0OHw&ixlib=rb-4.0.3&q=80&w=1080'
        feature2ImgAlt='Illustration of neon-drenched design'
      />
      <CTA 
        heading1="Ready to join the future of airdrops?"
        content1="Sign up now to get in on the action and earn rewards through our innovative algorithm."
        action1="Sign Up Now"
        onClick=""
        className=""
      />
      <Features2 
        feature3Description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
        feature1ImgAlt='feature 1'
        feature1Description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
        feature3ImgAlt='image'
        feature2Title='Smart Algorithm Rewards'
        feature1Title='Feature #1'
        feature1ImgSrc='https://images.unsplash.com/photo-1564631271658-70dcdb7af99e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDEzOHw&ixlib=rb-4.0.3&q=80&w=1080'
        feature3ImgSrc='https://images.unsplash.com/photo-1432105344056-6c8fc3286af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDE0Nnw&ixlib=rb-4.0.3&q=80&w=1080'
        feature2Description='Our unique algorithm rewards active wallet engagement and community hype, ensuring fairness and transparency in our airdrop distributions.'
        feature3Title='Feature #3'
        feature2ImgAlt='Smart Algorithm Rewards Image'
        feature2ImgSrc='https://images.unsplash.com/photo-1524602997322-c1900e093d3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDE0OXw&ixlib=rb-4.0.3&q=80&w=1080'
      />
      <Pricing 
        plan3Price='$50'
        plan3Action='Upgrade Now'
        plan11='Basic plan'
        plan1Action='Join Now'
        plan31='Enterprise plan'
        plan3Feature41='Feature text goes here'
        plan1Feature2='Early notifications for upcoming drops'
        plan2Feature11='Feature text goes here'
        plan3Feature51='Feature text goes here'
        plan2Feature41='Feature text goes here'
        plan2Feature2='Increased chances of winning bigger token amounts'
        plan3Feature21='Feature text goes here'
        plan2Feature4='Feature text goes here'
        plan2Yearly='or $299 yearly'
        plan1Action1='Get started'
        plan2Action='Get Started'
        plan3Feature1='Everything in Plan 2 plus:'
        plan2Feature3='Customizable airdrop preferences'
        plan1Price1='$200/yr'
        plan2= 'Business plan'
        plan2Feature21= 'Feature text goes here'
        plan2Action1= 'Get started'
        plan3Feature2= 'Guaranteed participation in all airdrops'
        content1= 'Choose the perfect plan for you'
        plan2Feature1= 'Everything in Plan 1 plus'
        heading1= 'Pricing plan'
        plan3Feature31= 'Feature text goes here'
        plan1= 'Basic plan'
        plan21= 'Business plan'
        plan1Feature11= 'Feature text goes here'
        plan1Feature21= 'Feature text goes here'
        plan3Feature5= 'Feature text goes here'
        plan2Yearly1= 'or $29 monthly'
        plan2Price= '$25'
        plan3Yearly1= 'or $49 monthly'
        plan2Feature31= 'Feature text goes here'
        plan3Feature11= 'Feature text goes here'
        plan1Yearly1= 'or $20 monthly'
        plan2Price1= '$299/yr'
        plan3Yearly= 'or $499 yearly'
        plan3Feature4= 'Feature text goes here'
        plan3Price1= '$499/yr'
        plan1Feature31= 'Feature text goes here'
        plan1Feature3= 'Priority customer support'
        plan1Yearly= 'or $200 yearly'
        plan1Feature1= 'Exclusive access to premium airdrops'
        plan3Feature3= 'Exclusive Destiny Labs merchandise'
        content2= 'Lorem ipsum dolor sit amet consectetur adipiscing elit. '
        plan3Action1= 'Get started'
        plan1Price= '$10'
        plan3= 'Enterprise plan'
      />
      <Steps 
        step1Description='Sign up for a Destiny Labs account to participate in airdrops and unlock exclusive rewards.'
        step3Description='Connect with fellow crypto enthusiasts in our community to boost engagement and excitement.'
        step2Title='Engage with Wallet'
        step2Description='Stay active with your wallet to increase your chances of receiving tokens in our airdrops.'
        step1Title='Create an Account'
        step3Title='Join the Community'
        step4Description='Once selected, claim your tokens and start exploring the possibilities within the Destiny Labs ecosystem.'
        step4Title='Claim Your Tokens'
      />
      <Testimonial 
        author2Position='Blockchain Developer'
        author1Position='Crypto Enthusiast'
        author3Alt='Image of Eve Brown'
        author1Name='Alice Johnson'
        author1Src='https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDEzM3w&ixlib=rb-4.0.3&q=80&w=1080'
        author3Name='Eve Brown'
        review2="Destiny Labs' algorithm is a breath of fresh air in the crypto space. It rewards genuine involvement and creates a sense of community."
        author2Name='Bob Smith'
        author4Position='Blockchain Enthusiast'
        author4Name='Charlie Lee'
        author4Src='https://images.unsplash.com/photo-1624561272659-224ea122b2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDEzM3w&ixlib=rb-4.0.3&q=80&w=1080'
        author1Alt='Image of Alice Johnson'
        author2Src='https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDEzNHw&ixlib=rb-4.0.3&q=80&w=1080'
        author3Src='https://images.unsplash.com/photo-1484353371297-d8cfd2895020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDEzNHw&ixlib=rb-4.0.3&q=80&w=1080'
        author2Alt='Image of Bob Smith'
        author4Alt='Image of Charlie Lee'
        content1='Destiny Labs has completely changed the way I view airdrops. Their innovative approach to rewarding active engagement is truly game-changing.'
        author3Position='Cryptocurrency Investor'
        review1="I've participated in many airdrops, but Destiny Labs stands out for its fairness and transparency. Highly recommended!"
        heading1='Testimonials'
        review3="As someone who values authenticity, Destiny Labs' commitment to on-chain verification gives me peace of mind. Excited to see what's next!"
        review4="Destiny Labs' neon-drenched vibes and engaging design make participating in airdrops a thrilling experience. Can't wait for more!"
      />
      <Contact 
        content2="We're here to assist you with any inquiries or feedback you may have."
        email1='contact@destinylabs.com'
        address1='123 Neon Street, Crypto City, Blockchain District'
        content3='Feel free to reach out to us via email or phone, or visit our office during business hours.'
        content1="Have a question or just want to say hi? Drop us a message below and we'll get back to you as soon as possible."
        content4='Join our community on social media for the latest updates, news, and exclusive airdrop announcements.'
        heading1='Get in Touch'
        content5='Follow us on Twitter, Telegram, and Discord for real-time engagement and discussions.'
        phone1='+1-123-456-7890'
      />
      <Footer
        column2Title='Quick Links'
        link7='Community Guidelines'
        link5='Privacy Policy'
        link8='Blog'
        action1='Subscribe to Newsletter'
        content3='© 2023 Destiny Labs. All rights reserved.'
        link4='Terms of Service'
        logoSrc='https://presentation-website-assets.teleporthq.io/logos/logo.png'
        cookiesLink='/cookie-policy'
        content2='Stay up to date with our latest news and updates by subscribing to our newsletter.'
        link9='Careers'
        link6='Cookie Policy'
        logoAlt='Destiny Labs Logo'
        link1='About Us'
        privacyLink='/privacy-policy'
        link10='Press'
        column1Title='Company'
        termsLink='/terms-of-service'
        link3='Contact Us'
        link2='FAQ'
        socialLinkTitleCategory='Follow Us'
      />
    </div>
  );
}

export default Home
