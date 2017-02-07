// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
// Fucken Typescriptnpm run
require("prismjs");
require("prismjs/components/prism-typescript");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/angular_logo.svg"),
  markdown: require("../assets/markdown.png"),
  mainbg: require("../assets/main_bg.jpg"),
  slide2: require("../assets/slide_2.jpg"),
  then_vs_now : require("../assets/then_vs_now.jpg"),
  slide3: require("../assets/slide_3.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#42a5f7",
  tertiary: "#134ca7",
  quartenary: "#CECECE",
  dark: "#202020",
  codeBg: "#122b45"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgImage={[images.mainbg]}>
          <Image src={[images.logo]} width="30%" margin="-100px 0 0 0">
          </Image>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Building Angular Apps
          </Heading>
          <Text margin="10px 0 0" textColor="dark" size={3} bold>
            Understanding the build process
          </Text>
        </Slide>
        <Slide transition={["f"]} bgImage={[images.slide2]}>
        </Slide>
        <Slide transition={["fade"]} align="top" bgImage={[images.mainbg]}>
          <Heading size={5} margin="60px 0 0 0" textAlign="left" textColor="primary">
            Today I'm talking about...
            </Heading>

          <List textColor="dark" margin="60px 0 0 0">
            <Appear><ListItem margin="20px 0 0 0">Angular workflow</ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">Breakdown of the build process</ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">Using Webpack save our lives</ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">Demo :)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgImage={[images.mainbg]}>
          <Heading size={5} margin="60px 0 0 0" fit caps textColor="primary">
            Our workflow has changed a bit.
          </Heading>
          <Text size={3}>
            We can no longer just stick a .min.js file from a CDN and start developing.
          </Text>
           <Appear><Image src={[images.then_vs_now]} width="60%"></Image></Appear>
        </Slide>

        <Slide transition={["fade"]} bgImage={[images.slide3]}>
        </Slide>

         <CodeSlide
            transition={["f"]}
            lang="typescript"
            bgColor="codeBg"
            code={require("raw-loader!../assets/code/angular.ts")}
            ranges={[
              { loc: [0, 0], title: "Step 1: Become a Hero" },
              { loc: [0, 7], note: "We bootstrap the app" },
              { loc: [10, 21], note: "We wrap our heads around modules" },
              { loc: [24, 31], note: "We get busy with Components" },
              { loc: [33, 48], note: "And we play with Routes" },
              { loc: [59, 64], title: "Step 2: Angular CLI", note: "We use commands to get stuff done" }
              // ...
            ]}/>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Thank You!</Quote>
            <Cite>Thomas</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
