import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Francisco <br /> García Marra
      </SectionTitle>
      <SectionText>
        Full-Stack Web Developer  
      </SectionText>
      
      <a href="cv.pdf" download> <Button>    Download CV </Button></a>
    </LeftSection>

  </Section>
);

export default Hero;