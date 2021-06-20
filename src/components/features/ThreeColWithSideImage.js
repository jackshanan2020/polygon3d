import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import BusinessAppImage from "images/icons-BusinessApp-96.png";
import DigitalImage from "images/icons-Digital-96.png";
import WebsiteImage from "images/icons-website-96.png";
import ITImage from "images/icons-IT-96.png";
import MobileImage from "images/icons-Mobile App-96.png";
import ArtificialImage from "images/icons-artificial-intelligence-96.png";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-10 md:py-12`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({
  id = "",
  cards = null,
  heading = "Amazing Features",
  subheading = "Features",
  description = "Polygon3D is a IT Solutions Provider in Colombo, Sri Lanka. We specialise in Web and Mobile Apps Development, Digital Strategy, UX Design, Business Applications, IT Infrastructure &amp; consultancy. "
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: DigitalImage,
      title: "Digital Strategy",
      description: "Our Digital content marketing strategies use online guides to drive leads, or a growth marketing strategy that uses social media to grow your business."
    },
    {
      imageSrc: BusinessAppImage,
      title: "Business Applications",
      description: "Our Custom Business Application solutions are tailor-made to suit your business requirements exactly which leads to efficient and rapid growth in your business."
    },
    {
      imageSrc: WebsiteImage,
      title: "Web development",
      description: "Our Custom Web Development solutions will enable you to reach your clients and will be a gateway to new business opportunities."
    },
    {
      imageSrc: MobileImage,
      title: "App development",
      description: "Our Custom App Development solutions are tailor-made to suit your need and want, Built using the modern stack for an optimized experience."

    },
    {
      imageSrc: ITImage,
      title: "IT Infrastructure ",
      description: "Our Extensive IT Experiences help customers to design and develop the most cost-effective & robust IT Infracture using modern cloud Platform-as-a-service solutions and onsite hardware networking and software implementation."
    },
    {
      imageSrc: ArtificialImage,
      title: "Artifical intelligent",
      description: "Our team of skilled developers who continue to explore Artificial Intelligence is helping us build great products and optimal solutions."
    }
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container id={id}>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
