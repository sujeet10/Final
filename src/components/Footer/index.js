import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {FaFacebook,FaInstagram,FaLinkedin,FaYoutube} from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,FooterLink,SocialIconLink,SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRights } from './FooterElement'
const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                               
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Services</FooterLink>
                           
                        </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Video Tutorials </FooterLinkTitle>
                               
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Courses</FooterLink>
                                <FooterLink to='/signin'>Understandings</FooterLink>
                                
                                <FooterLink to='/signin'>Terms of Services</FooterLink>
                           
                        </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us </FooterLinkTitle>
                               
                                <FooterLink to='/signin'>Contact</FooterLink>
                                <FooterLink to='/signin'>Support</FooterLink>
                                <FooterLink to='/signin'>Destination</FooterLink>
                                <FooterLink to='/signin'>Sponsorships</FooterLink>
                                <FooterLink to='/signin'>Email</FooterLink>
                           
                        </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                               
                                <FooterLink to='/signin'>LinedIn</FooterLink>
                                <FooterLink to='/signin'>Facebook</FooterLink>
                                <FooterLink to='/signin'>Discord Serve</FooterLink>
                                <FooterLink to='/signin'>Youtube</FooterLink>
                                <FooterLink to='/signin'>Twitter</FooterLink>
                           
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Treadaa
                        </SocialLogo>
                        <WebsiteRights>Treadaa © {new Date().getFullYear()} All Rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
