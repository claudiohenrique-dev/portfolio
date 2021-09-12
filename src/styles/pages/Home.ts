import styled from 'styled-components'
import Image from 'next/image'

import theme from './../theme'
const { colors, font, spacing, breakpoints } = theme

interface HomeProps {
  textCenter?: boolean
}

export const Container = styled.main`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${spacing[5]};
  gap: ${spacing[20]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 0 calc((100vw - 1266px) / 2);
  }
`

export const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: ${spacing[32]};

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    height: calc(100vh - ${spacing[20]});
  }
`

export const HeroLeft = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: ${spacing[16]};
  gap: ${spacing[20]};

  @media screen and (min-width: ${breakpoints.md}) {
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    justify-content: center;
    gap: ${spacing[16]};
  }
`

export const TitleContainer = styled.article<HomeProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: ${({ textCenter }) => (textCenter ? 'center' : 'left')};
  gap: ${spacing[6]};
  max-width: 80vw;

  h1,
  h2 {
    font-size: ${font[40]};
    color: ${colors.primary};
    font-weight: 700;

    @media screen and (min-width: ${breakpoints.md}) {
      font-size: ${font[64]};
    }
  }

  h3 {
    font-size: ${font[24]};
    font-weight: 400;

    @media screen and (min-width: ${breakpoints.md}) {
      font-size: ${font[24]};
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    text-align: left;
    display: flex;
    justify-content: flex-start;
    padding: 0;
  }
`

export const CTAContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing[8]};

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`

export const HeroRight = styled.article`
  display: none;

  @media screen and (min-width: ${breakpoints.md}) {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: no-repeat center/80% url('/waves.svg');
    height: 100%;
  }
`

export const AboutContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing[8]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    flex-direction: row-reverse;
    height: 100vh;
  }
`

export const AboutLeft = styled.article`
  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 50%;
    /* border: 1px solid #fff; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    /* align-self: flex-end; */
  }
`

export const AboutRight = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${spacing[10]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 70%;
  }
`

export const TextContainer = styled.div<HomeProps>`
  display: flex;
  flex-direction: column;
  gap: ${spacing[6]};

  p {
    line-height: 150%;
  }
`

export const ProjectsContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${spacing[10]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    height: 100vh;
  }
`
export const ProjectsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${spacing[10]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    justify-content: flex-start;
    gap: ${spacing[24]};
  }
`

export const ProjectContainer = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${spacing[3]};
  width: 350px;
  text-decoration: none;

  @media screen and (min-width: ${breakpoints.desktop}) {
    &:hover {
      transition: 300ms ease-in-out;
      opacity: 0.6;
    }
  }
`

export const ProjectPreview = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
`

export const ProjectTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${colors.primary};
    font-size: ${font[18]};
  }
`

export const ProjectDescription = styled.p`
  font-size: ${font[14]};
  color: ${colors.light};
`

export const ExperiencesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${spacing[5]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    gap: ${spacing[10]};
    height: 100vh;
  }
`

export const ExperiencesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${spacing[6]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    gap: ${spacing[10]};
  }
`

export const ExperienceContainer = styled.article`
  width: 100%;

  border: 1px solid ${colors.primaryDark};
  padding: ${spacing[4]};
  border-radius: ${spacing[2]};

  display: flex;
  align-items: center;

  /* flex-direction: column; */
  gap: ${spacing[4]};

  h3 {
    font-size: ${font[20]};
    font-weight: 500;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    justify-content: space-between;
    padding: ${spacing[10]};
    border-radius: ${spacing[3]};
    gap: ${spacing[6]};

    h3 {
      font-size: ${font[24]};
    }
  }
`

export const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    gap: ${spacing[6]};
    width: 70%;
  }
`

export const ExperienceMedia = styled.a`
  display: none;
  @media screen and (min-width: ${breakpoints.desktop}) {
    display: flex;
    border-radius: ${spacing[3]};
    border: 1px solid ${`${colors.light}20`};

    &:hover {
      transition: all 0.5s ease-in-out;
      opacity: 0.6;
    }
  }
`

export const StyledImage = styled(Image)`
  border-radius: ${spacing[2]};

  @media screen and (min-width: ${breakpoints.desktop}) {
    border-radius: ${spacing[3]};
  }
`
