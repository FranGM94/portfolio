import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle > <br /> Technologies</SectionTitle>
    <SectionText>
      Doing the PERN Full Stack was great for the base of web developing, after that i learned Typescript, RxJs and Firebase for a Startup Project. I'm actually learning React Native, but can't yet put it on my stack.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3em"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            React.js <br />
            Redux <br />
            TypeScript <br />
            RxJS <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3em"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Node.js <br />
            Express <br />
            PostgreSQL <br />
            Firebase 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3em"/>
        <ListContainer>
          <ListTitle>UX/UI</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Figma to CSS <br />
            Sass <br /> 
            Styled Components <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
