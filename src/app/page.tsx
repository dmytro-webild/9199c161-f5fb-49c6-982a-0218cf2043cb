"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="aurora"
        cardStyle="solid"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Team",
          id: "team",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Kevv Kutt"
      button={{
        text: "Book Now",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Precision Cuts. Modern Style."
      description="Experience the premium grooming standard at Kevv Kutt Barber Shop. Where tradition meets sharp modern techniques."
      testimonials={[
        {
          name: "James R.",
          handle: "@jamesr",
          testimonial: "Best fade I've had in years. The attention to detail is unmatched.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-happy-man-making-devil-horns-up-head_176420-17980.jpg",
        },
        {
          name: "Mike D.",
          handle: "@miked",
          testimonial: "Kevv Kutt is the only place I trust with my beard.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/passionate-plus-size-couple-tender-moments_52683-101577.jpg",
        },
        {
          name: "Alex P.",
          handle: "@alexp",
          testimonial: "Professional service every single time. Highly recommend.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-father-posing-home-with-thumbs-up_23-2148853977.jpg",
        },
        {
          name: "Sam L.",
          handle: "@saml",
          testimonial: "Top-tier grooming atmosphere and great conversation.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/modern-office-composition-with-businessman_23-2147900162.jpg",
        },
        {
          name: "David W.",
          handle: "@davidw",
          testimonial: "Consistency is key, and Kevv Kutt nails it weekly.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-using-dry-shampoo-home_23-2150689656.jpg",
        },
      ]}
      buttons={[
        {
          text: "Book Your Spot",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/bearded-man-near-blurred-stylist_23-2147778876.jpg"
      imageAlt="Kevv Kutt Barber interior"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/reflection-mirror-happy-man-bathrobe-adjusting-his-hairstyle_637285-7680.jpg",
          alt: "Client profile 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/ready-shave_1098-14660.jpg",
          alt: "Client profile 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/master-applying-shaving-foam-client-face_1153-9444.jpg",
          alt: "Client profile 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-boy-learning-how-shave_23-2149450891.jpg",
          alt: "Client profile 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-man-using-his-smartphone_1153-411.jpg",
          alt: "Client profile 5",
        },
      ]}
      avatarText="Trusted by 500+ happy clients"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="More Than Just A Haircut"
      description="At Kevv Kutt, we believe in the transformative power of a great cut. We've built a space that's comfortable, stylish, and focused on the art of grooming."
      metrics={[
        {
          value: "10k+",
          title: "Cuts Completed",
        },
        {
          value: "500+",
          title: "5-Star Reviews",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/hairdresser-grooming-their-client_23-2149205896.jpg"
      imageAlt="Barber shop interior clean decor"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Signature Haircut",
          descriptions: [
            "Custom fade, precision shear work, and hot towel finish.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-suit-black-studio-lights-background_158538-9663.jpg",
        },
        {
          id: "2",
          title: "Hot Towel Shave",
          descriptions: [
            "A luxurious experience with warm towels, precision shaving, and moisturization.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/hair-treatment-coronavirus-epidemic_637285-9013.jpg",
        },
        {
          id: "3",
          title: "Beard Grooming",
          descriptions: [
            "Shape-ups, edge trims, and moisturizing beard oil treatments.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-barber-cutting-client-s-beard_23-2148242865.jpg",
        },
      ]}
      title="Our Signature Services"
      description="We offer a range of grooming services tailored to your unique style and needs."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        {
          id: "1",
          name: "Kevin",
          role: "Master Barber",
          imageSrc: "http://img.b2bpic.net/free-photo/impressed-middle-aged-male-barber-uniform-holding-straight-razor-isolated-purple-wall_141793-102750.jpg",
        },
        {
          id: "2",
          name: "Alex",
          role: "Style Consultant",
          imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-getting-ready-their-clients_23-2149205931.jpg",
        },
        {
          id: "3",
          name: "Jordan",
          role: "Grooming Expert",
          imageSrc: "http://img.b2bpic.net/free-photo/barber-trimming-client-salon_23-2148181854.jpg",
        },
      ]}
      title="Meet The Crew"
      description="Our master barbers are dedicated to keeping you looking your best."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J",
          handle: "@sarah",
          testimonial: "Always coming back here, the vibe is perfect.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-grooming-their-client_23-2149205929.jpg",
        },
        {
          id: "2",
          name: "Mark L",
          handle: "@mark",
          testimonial: "Incredible fades and great music.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/blond-man-surprised_1194-2887.jpg",
        },
        {
          id: "3",
          name: "Chris P",
          handle: "@chris",
          testimonial: "My go-to place for my weekly trim.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-happy-satisfied-young-barber-wearing-gray-apron-holding-comb-his-head-showing-scissor-pointing-something-right-side-blue-color-background_140725-155227.jpg",
        },
        {
          id: "4",
          name: "Tom B",
          handle: "@tom",
          testimonial: "Excellent service and skilled barbers.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-getting-his-hair-cut-barber-shop4_23-2149186459.jpg",
        },
        {
          id: "5",
          name: "Sam K",
          handle: "@sam",
          testimonial: "I never leave disappointed.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-happy-man-smiling-street-kuala-lumpur-urban-men-clothing-style-soap-bubbles-fly-air_1321-2139.jpg",
        },
      ]}
      showRating={true}
      title="Client Stories"
      description="Hear what our regulars have to say about Kevv Kutt."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",
          badge: "Essential",
          price: "$30",
          subtitle: "Basic Grooming",
          buttons: [
            {
              text: "Book",
              href: "#contact",
            },
          ],
          features: [
            "Classic Cut",
            "Quick Neck Shave",
          ],
        },
        {
          id: "p2",
          badge: "Signature",
          price: "$50",
          subtitle: "Full Experience",
          buttons: [
            {
              text: "Book",
              href: "#contact",
            },
          ],
          features: [
            "Signature Cut",
            "Hot Towel Shave",
            "Beard Trim",
          ],
        },
      ]}
      title="Simple Pricing"
      description="Quality grooming shouldn't break the bank."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you accept walk-ins?",
          content: "Yes, we always welcome walk-ins, though appointments are recommended for peak hours.",
        },
        {
          id: "f2",
          title: "How long does a service take?",
          content: "Most services range from 30 to 60 minutes depending on the complexity.",
        },
        {
          id: "f3",
          title: "Do you provide kids cuts?",
          content: "Absolutely, we cater to all ages and styles.",
        },
      ]}
      title="Got Questions?"
      description="Common questions about our services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Visit Us"
      title="Ready for a Fresh Cut?"
      description="Book your appointment online or walk in and visit us today."
      buttons={[
        {
          text: "Book Appointment",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Kevv Kutt"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Use",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
