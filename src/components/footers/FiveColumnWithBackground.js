import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "images/Polygon-3D-white-footer.png";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as InstagramIcon } from "images/instagram-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";

const Container = tw.div`relative px-8 pt-6 pb-16 lg:pt-8 lg:pb-24`;
const Content = tw.div`flex flex-col max-w-screen-xl mx-auto relative z-10`;
const FiveColumns = tw.div`flex flex-col flex-wrap sm:flex-row
  w-full sm:w-4/5
  text-center sm:text-left
  self-center justify-center sm:justify-start md:justify-between`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`hocus:border-b-2 hocus:border-primary-200 pb-1 transition duration-300`;

const Divider = tw.div`my-16 border-b-2 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = styled.img`
  max-width: 100px;
`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-100`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-700`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-400 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute top-0 left-0 w-80 h-80 transform -translate-x-20 -translate-y-32 text-primary-700 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 right-0 w-80 h-80 transform  translate-x-32 translate-y-48 text-primary-700 opacity-50`;

export default () => {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <Column>
            <ColumnHeading> <Link href="#">Home</Link></ColumnHeading>

          </Column>
          <Column>
            <ColumnHeading><Link href="/#our-services">Our Service</Link></ColumnHeading>

          </Column>
          <Column>
            <ColumnHeading><Link href="#">About Us</Link></ColumnHeading>

          </Column>
          <Column>
            <ColumnHeading><Link href="/#contact-us">Contact Us</Link></ColumnHeading>

          </Column>

          <Column>
            <ColumnHeading> <Link href="#">Our Stacks</Link></ColumnHeading>

          </Column>
        </FiveColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
          </LogoContainer>
          <CopywrightNotice>&copy; 2021 Polygon3D. All Rights Reserved.</CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/polygon3d.xyz">
              <FacebookIcon />
            </SocialLink>

            <SocialLink href="https://www.linkedin.com/company/polygon3d">
              <LinkedinIcon />
            </SocialLink>


            <SocialLink href="https://www.instagram.com/polygon3d_xyz">
              <InstagramIcon />
            </SocialLink>

          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
      {/* <DecoratorBlobContainer>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </DecoratorBlobContainer> */}
    </Container>
  );
};
