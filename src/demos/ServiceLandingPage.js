import React, { useState } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";


import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Blog from "components/blogs/GridWithFeaturedPost.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStartedLight.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

const HighlightedText = tw.span`text-primary-500`
const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <MainFeature1
        id="about-us"
        subheading={<Subheading>About Company Name</Subheading>}
        heading="We are a...."
        buttonRounded={false}
        primaryButtonText="See Gallery"
        imageSrc="https://c1.wallpaperflare.com/preview/838/621/202/truck-white-vehicle-transportation.jpg"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to..."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        primaryButtonUrl="/#contact-us"
        imageSrc="https://media.istockphoto.com/photos/two-workers-with-a-truck-moving-large-box-picture-id957383358?k=20&m=957383358&s=612x612&w=0&h=BHulG5__0pRYaQc9rNvrV-dXLZ2uSUvrrD4j5bVaNjw="
        textOnLeft={false}
      />
      {/*<FeatureStats/>*/}
      <Features 
        heading={<>Amazing <HighlightedText>Service</HighlightedText></>}
      />
      <TeamCardGrid
        heading={<>Meet the team <HighlightedText>behind the wheel</HighlightedText></>}
      />
      <Testimonial 
        heading={<>Our Clients <HighlightedText>Love Us</HighlightedText></>}
      />
      {/* <Pricing 
        heading={<>Flexible <HighlightedText>Plans</HighlightedText></>}
      /> */}
      <FAQ
        heading={<>Any <HighlightedText>Questions ?</HighlightedText></>}
      />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "New York",
            description: (
              <>
                <Address>
                  <AddressLine>40 Gates Court</AddressLine>
                  <AddressLine>Endicott, NY 13760</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "Illinois",
            description: (
              <>
                <Address>
                  <AddressLine>602 Annadale Drive</AddressLine>
                  <AddressLine>Dekalb, IL 60115</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "California",
            description: (
              <>
                <Address>
                  <AddressLine>96 NE. Delaware Lane</AddressLine>
                  <AddressLine>Sacramento, CA 95820</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "Tennessee",
            description: (
              <>
                <Address>
                  <AddressLine>74 Peachtree Ave.</AddressLine>
                  <AddressLine>Dyersburg, TN 38024</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "New Jersey",
            description: (
              <>
                <Address>
                  <AddressLine>8355 Summer Street</AddressLine>
                  <AddressLine>Manchester, NJ 08759</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "Ohio",
            description: (
              <>
                <Address>
                  <AddressLine>7713 Snake Hill Ave.</AddressLine>
                  <AddressLine>Piqua, OH 45356</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          }
        ]}
      />
      {/*<Blog
        subheading="Blog"
        heading={<>We love <HighlightedText>Writing</HighlightedText></>}
      />*/}
      {/*<GetStarted/>*/}
      <Footer />
    </AnimationRevealPage>
  );
}
