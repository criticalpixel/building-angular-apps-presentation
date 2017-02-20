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
  Fit,
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
  firstslide: require("../assets/firstslide.jpg"),
  logo: require("../assets/angular_logo.svg"),
  mainbg: require("../assets/main_bg.jpg"),
  slide2: require("../assets/slide_me.jpg"),
  coding: require("../assets/coding.gif"),
  expected: require("../assets/asexpected.gif"),
  break: require("../assets/break.gif"),
  smooth: require("../assets/smooth.gif"),
  freak: require("../assets/freakout.gif"),
  thankyou: require('../assets/thankyou.gif')

};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#42a5f7",
  tertiary: "#134ca7",
  quartenary: "#CECECE",
  dark: "#ccc",
  codeBg: "#122b45",
  seed: "#252525",
  green: '#0f9d58',
  blue: '#0277bd',
  red: '#db4437',
  darkslide: '#1e272d',
  yellow: '#f4b400'
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgImage={[images.firstslide]}>
          <Image src={[images.logo]} width="30%" margin="-100px 0 0 0">
          </Image>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Rapid prototyping with Angular
          </Heading>
          <Text margin="60px 0 0 0" lineHeight={1.5}  textColor="primary" textSize={34} bold>
            Get stuff done fast with @angular/cli, @angular/material & Firebase
          </Text>
        </Slide>
        <Slide transition={["f"]} bgImage={[images.slide2]}>
        </Slide>
        <Slide transition={["fade"]} bgImage={[images.mainbg]}>
          <Heading size={5} margin="60px 0 0 0" fit textColor="primary">
            Angular is AWESOME!
            </Heading>
          <Text margin="60px 0 0 0" lineHeight={1.5}  textColor="primary" textSize={34} bold>
            (When you get to know it a litte.)
          </Text>
        </Slide>
        <CodeSlide
            transition={["f"]}
            lang="typescript"
            bgColor="codeBg"
            code={require("raw-loader!../assets/code/angular.ts")}
            ranges={[
              { loc: [0, 0], title: "Angular 101" },
              { loc: [0, 7], note: "We bootstrap the app" },
              { loc: [10, 21], note: "We wrap our heads around modules" },
              { loc: [24, 31], note: "We get busy with Components" },
              { loc: [33, 48], note: "And we play with Routes" }
              // ...
            ]}/>
         <Slide transition={["fade"]} bgImage={[images.mainbg]}>
          <Heading size={6} margin="0px 0 0 0" caps textAlign="left" textColor="primary">
            Prototyping with Angular is 🔥!
            </Heading>
          <List textColor="primary"  margin="60px 0 0 0">
            <Appear><ListItem margin="20px 0 0 0">@angular/cli</ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">@angular/material</ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">angularfire2 (Firebase) </ListItem></Appear>
          </List>
        </Slide>

    
         <CodeSlide
            transition={["f"]}
            lang="typescript"
            bgColor="codeBg"
            code={require("raw-loader!../assets/code/angularcli.ts")}
            ranges={[
              { loc: [0, 0], title: "Angular CLI" },
              { loc: [0, 1], note: "Install Angular CLI" },
              { loc: [2, 4], note: "Create a new app" },
              { loc: [5, 7], note: "Serve & Build your app" },
              { loc: [8, 12], note: "Generate everything!" }
              // ...
            ]}/>

            <CodeSlide
            transition={["f"]}
            lang="typescript"
            bgColor="codeBg"
            code={require("raw-loader!../assets/code/angularmaterial.ts")}
            ranges={[
              { loc: [0, 0], title: "Angular Material" },
              { loc: [0, 2], note: "Install Material & HammerJs" },
              { loc: [3, 11], note: "Import Material in NgModule" },
              { loc: [12, 13], note: "Add cool icons in index.html" }
              // ...
            ]}/>

            <CodeSlide
            transition={["f"]}
            lang="typescript"
            bgColor="codeBg"
            code={require("raw-loader!../assets/code/angularfire.ts")}
            ranges={[
              { loc: [0, 0], title: "Firebase" },
              { loc: [0, 2], note: "Install angularfire2" },
              { loc: [3, 4], note: "import angularfire2"},
              { loc: [8, 9], note: "add to module imports" }
              // ...
            ]}/>

          <Slide transition={["fade"]} align="center center" bgImage={[images.mainbg]}>
            <Text margin="60px 0 0 0" lineHeight={1.5}  textColor="primary" textSize={34} bold>
            Enough talking, more coding right?
          </Text>
          
          <Appear>
         <Heading size={5} margin="60px 0 0 0" fit textColor="primary">
            LET'S BUILD STUFF!
            </Heading>
          </Appear>
          <Appear>
            <Image src={[images.coding]}  textAlign="center" width="400px"></Image>
          </Appear>
        </Slide>
        

         <Slide transition={["fade"]} align="center center" bgImage={[images.mainbg]}>
            <Heading size={4} margin="60px 0 60px 0" textColor="primary">
            Hope things go smoothly...
            </Heading>
            <Image src={[images.smooth]} width="500px"></Image>
          </Slide>
           <Slide transition={["fade"]} align="center center" bgImage={[images.mainbg]}>
              <Heading size={4} margin="60px 0 60px 0" textColor="primary">
            ...and that nothing breaks...
            </Heading>
            <Image src={[images.break]} width="500px"></Image>
          </Slide>
          <Slide transition={["fade"]} align="center center" bgImage={[images.mainbg]}>
             <Heading size={4} margin="60px 0 60px 0" textColor="primary">
            ...otherwise.
            </Heading>
            <Image src={[images.freak]} width="500px"></Image>
          </Slide>

        <Slide transition={["fade"]}  bgImage={[images.mainbg]}>
          <Heading size={3} margin="60px 0 60px 0" textColor="primary">
            Links 
          </Heading>
            <List>
            <ListItem>
              <Link  textColor="primary" href="https://github.com/criticalpixel/meetup-app">Github : meetup-app</Link>
            </ListItem>
            <ListItem>
              <Link  textColor="primary" href="http://criticalpixel.com/slides/rapid-prototyping-angular/">Slides : goo.gl/nFkCYB</Link>
            </ListItem>
            <ListItem>
              <Link  textColor="primary" href="https://material.angular.io/">Angular Material</Link>
            </ListItem>
            <ListItem>
              <Link  textColor="primary" href="https://github.com/angular/angularfire2">Angular Fire 2</Link>
            </ListItem>
            <ListItem>
              <Link  textColor="primary" href="https://cli.angular.io/">Angular Cli</Link>
          </ListItem>
          </List>
        </Slide>


         <Slide transition={["fade"]} align="center center" bgColor="secondary">
             <Heading size={4} margin="60px 0 60px 0" textColor="primary">
             Thank you!
            </Heading>
            <Image src={[images.thankyou]} width="500px"></Image>
          </Slide>
      </Deck>
    );
  }
}
