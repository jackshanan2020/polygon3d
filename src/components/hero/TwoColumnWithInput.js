import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/where_creativity_meet.jpg";
import aws from "../../images/aws.png";
import google from "../../images/google.png";
import nodejs from "../../images/nodejs.png";
import reactjs from "../../images/reactjs.png";
import php from "../../images/php.png";
import mysql from "../../images/mysql.png";
import azure from "../../images/azure.png";
import jenkins from "../../images/jenkins.png";
import mongodb from "../../images/mongodb.png";
import defaultCardImage from "../../images/google.png";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-10 md:py-12`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto`}
`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div``;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;



export default ({ roundedHeaderButton, cards = null, imageAlt = "" }) => {
  const ourstackIcons = [
    {
      imageSrc: aws,
      alt: "aws"
    },
    {
      imageSrc: google,
      alt: "google"
    },
    {
      imageSrc: nodejs,
      alt: "nodejs"
    },
    {
      imageSrc: reactjs,
      alt: "reactjs"
    },
    {
      imageSrc: php,
      alt: "php"
    },
    {
      imageSrc: mysql,
      alt: "mysql"
    },
    {
      imageSrc: azure,
      alt: "azure"
    },
    {
      imageSrc: mongodb,
      alt: "mongodb"
    },
    {
      imageSrc: jenkins,
      alt: "jenkins"
    }
  ];

  if (!cards) cards = ourstackIcons;
  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              Where creativity meets  <span tw="text-primary-500">Technology</span>
            </Heading>
            <Paragraph>
              We are creative people based in Sri Lanka,
              We provide intact solutions.
            </Paragraph>


            <CustomersLogoStrip>
              <p>Our STACKS</p>
              <ThreeColumnContainer>
                {cards.map((card, i) => (
                  <Column key={i}>
                    <Card>
                      <span className="imageContainer">
                        <img src={card.imageSrc || defaultCardImage} alt={card.alt} />
                      </span>
                    </Card>
                  </Column>
                ))}
              </ThreeColumnContainer>
            </CustomersLogoStrip>

          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={DesignIllustration} alt={imageAlt} />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
