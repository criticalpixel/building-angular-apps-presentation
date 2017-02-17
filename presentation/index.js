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
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/angular_logo.svg"),
  markdown: require("../assets/markdown.png"),
  mainbg: require("../assets/main_bg.jpg"),
  slide2: require("../assets/slide_2.jpg"),
  then_vs_now : require("../assets/then_vs_now.jpg"),
  slide3: require("../assets/slide_3.jpg"),
  slide4: require("../assets/slide_4.jpg"),
  mindblown: require("../assets/mindblown.gif"),
  webpack: require("../assets/webpack.svg"),
  slide5: require("../assets/slide_5.jpg"),
  build1: require("../assets/build_1.png"),
  build2: require("../assets/build_2.png"),
  build3: require("../assets/build_3.png"),
  build4: require("../assets/build_4.png"),
  build5: require("../assets/build_5.png"),
  webpack_angular: require("../assets/webpack_angular.png"),

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
        <Slide transition={["zoom"]} bgImage={[images.mainbg]}>
          <Image src={[images.logo]} width="30%" margin="-100px 0 0 0">
          </Image>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Building Angular Apps
          </Heading>
          <Text margin="10px 0 0" textColor="dark" textSize={34} bold>
            Understanding build process with Webpack
          </Text>
        </Slide>
        <Slide transition={["f"]} bgImage={[images.slide2]}>
        </Slide>
        <Slide transition={["fade"]} bgImage={[images.mainbg]}>
          <Heading size={5} margin="60px 0 0 0" textAlign="left" textColor="primary">
            Today I'm talking about...
            </Heading>

          <List textColor="dark" margin="60px 0 0 0">
            <Appear><ListItem margin="20px 0 0 0">Angular workflow</ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">Breakdown of the build process</ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">Using Webpack ftw!</ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">Setup angular aot with webpack :)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgImage={[images.mainbg]}>
          <Heading size={5} margin="60px 0 0 0" fit caps textColor="primary">
            Our workflow has changed a bit.
          </Heading>
          <Text size={3} textColor="dark">
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
              { loc: [57, 66], title: "Step 2: Angular CLI", note: "We use commands to get stuff done" }
              // ...
            ]}/>

        <Slide transition={["fade"]}  bgImage={[images.mainbg]}>
          <Heading size={3} margin="60px 0 0 0"fit caps textColor="primary">
            So how does it all work?
          </Heading>
        </Slide>

          <Slide transition={["fade"]} bgImage={[images.mainbg]}>
          <Heading size={5} caps textColor="primary">
            We clone an angular seed from github
          </Heading>
          </Slide>

        <Slide transition={["fade"]} align="center center" bgColor="seed">
           <Image src={[images.slide4]} width="100%"></Image>
          <Appear><Image src={[images.mindblown]} margin="-100% 0 0 0" width="450px"></Image></Appear>
        </Slide>

        <Slide transition={["fade"]} bgImage={[images.mainbg]}>
          <Heading size={6} fit caps textColor="primary">
           Let's Break it down
          </Heading>
        </Slide>

        <Slide transition={["fade"]}  bgColor="darkslide">
           <Layout>
             <Fit>
                <Image src={[images.slide5]} margin="0px 0px 0px 0px" width="370px"/>
              </Fit>
              <Fill>
                <Appear>
                 <Heading size={6} textAlign="left" textColor="green">
                  Application Source
                  </Heading>
                  </Appear>
                <Appear>
                  <Text textSize={24} margin="0 0 35px 0" textAlign="left"  textColor="primary">
                  Our application is divided in two parts.
                  -Application itself & Application bootstrap
                  </Text>
                </Appear>
                <Appear>
                  <Heading size={6} textAlign="left" textColor="blue">
                  Angular App
                  </Heading>
                  </Appear>
                <Appear>
                  <Text textSize={24} margin="0 0 35px 0" textAlign="left" textColor="primary">
                  Our modules, routes, components & services live here.
                  </Text>
                  </Appear>
                <Appear>
                  <Heading size={6} textAlign="left" textColor="red">
                  Angular Boostrap
                  </Heading>
                  </Appear>
                <Appear>
                  <Text textSize={24} margin="0 0 35px 0" textAlign="left" textColor="primary">
                  We bootstrap our application depending on what platform were developing for, and add any required polyfills & vendors.
                  </Text>
                </Appear>
                <Appear>
                  <Heading size={6} textAlign="left" textColor="yellow">
                  Configuration
                  </Heading>
                  </Appear>
                <Appear>
                  <Text textSize={24} margin="0 0 35px 0" textAlign="left" textColor="primary">
                  Typescript config, npm packages, scripts, webpack config, 
                  express server, and so on...
                  </Text>
                  </Appear>
              </Fill>
            </Layout>
        </Slide>

        <Slide transition={["fade"]}  bgImage={[images.mainbg]}>
           {/*<Heading size={4} textAlign="left" textColor="primary">
                  Building with Webpack
            </Heading>*/}
           <Layout>
             <Fit>
                <Appear><Image margin="0" src={[images.build1]} width="300px"/></Appear>
              </Fit>
              <Fill>
                <Appear>
                  <Text textSize={24} margin="20px 0 0 40px" textAlign="left"  textColor="primary">
                   Create a package.json file, yarn install all dependencies & code app in Typescript
                  </Text>
                </Appear>
              </Fill>
            </Layout>

             <Layout>
             <Fit>
                <Appear><Image margin="0" src={[images.build2]} width="300px"/></Appear>
              </Fit>
              <Fill>
                <Appear>
                  <Text textSize={24} margin="20px 0 0 40px" textAlign="left"  textColor="primary">
                    We can use Webpack loaders to compile our application with
                    JIT and AOT.
                  </Text>
                </Appear>
              </Fill>
            </Layout>

             <Layout>
             <Fit>
                <Appear><Image margin="0" src={[images.build3]} width="300px"/></Appear>
              </Fit>
              <Fill>
                <Appear>
                  <Text textSize={24} margin="20px 0 0 40px" textAlign="left"  textColor="primary">
                  Webpack can split our code into bundles for venfors, polyfills, lazy routes, etc...
                  </Text>
                </Appear>
              </Fill>
            </Layout>

             <Layout>
             <Fit>
                <Appear><Image margin="0" src={[images.build4]} width="300px"/></Appear>
              </Fit>
              <Fill>
                <Appear>
                  <Text textSize={24} margin="20px 0 0 40px" textAlign="left"  textColor="primary">
                  We can use a Webpack plugin to Uglify and Tree-Shake* our code.
                  </Text>
                </Appear>
              </Fill>
            </Layout>

             <Layout>
             <Fit>
                <Appear><Image margin="0" src={[images.build5]} width="300px"/></Appear>
              </Fit>
              <Fill>
                <Appear>
                  <Text textSize={24} margin="20px 0 0 40px" textAlign="left"  textColor="primary">
                  We can use a Webpack plugin to compress with GZIP or use our server to do this (express)
                  </Text>
                </Appear>
              </Fill>
            </Layout>
        </Slide>

        <Slide transition={["fade"]} bgImage={[images.mainbg]} textColor="primary">
          <Image src={[images.webpack]} width="400px"></Image>
         <Heading size={4} caps fit textColor="primary">
                  Webpack to the rescue
            </Heading>
        </Slide>


         <CodeSlide
            transition={["f"]}
            lang="typescript"
            bgColor="codeBg"
            code={require("raw-loader!../assets/code/webpack.ts")}
            ranges={[
              { loc: [0, 0], title: "Webpack 101" },
              { loc: [0, 3], note: "Define any plugins we need" },
              { loc: [4, 5], note: "Configuration goes into module.exports object" },
              { loc: [5, 6], note: "Step 1. Define entry point" },
              { loc: [6, 10], note: "Step 2. Define output" },
              { loc: [10, 18], note: "Step 3. Tell webpack what to do." },
              { loc: [18, 25], note: "Step 4. Configure any plugins we plan to use." }
              // ...
            ]}/>
          
        <Slide transition={["fade"]} bgImage={[images.mainbg]} textColor="primary">
          <Image src={[images.webpack_angular]} width="400px"></Image>
         <Heading size={4} caps fit textColor="primary">
                  Angular AOT with Webpack 
            </Heading>
        </Slide>

        <Slide transition={["fade"]}  bgImage={[images.mainbg]}>
          <Heading size={3} margin="60px 0 0 0"fit caps textColor="primary">
            The important bits
          </Heading>
          

          <List textColor="dark" margin="60px 0 0 0">
            <Appear><ListItem margin="20px 0 0 0">AOT tsconfig.json</ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">AOT bootstrap</ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">Webpack plugins & loaders</ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">AOT webpack config</ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">npm commands</ListItem></Appear>
          </List>
        </Slide>

        
         <CodeSlide
            transition={["f"]}
            lang="typescript"
            bgColor="codeBg"
            code={require("raw-loader!../assets/code/tsconfig.ts")}
            ranges={[
              { loc: [0, 0], title: "AOT tsconfig" },
              { loc: [18, 23], note : "exclude bootstap file"},
              { loc: [23, 26], note : "location for aot generated files" }
              // ...
            ]}/>

            
         <CodeSlide
            transition={["f"]}
            lang="typescript"
            bgColor="codeBg"
            code={require("raw-loader!../assets/code/main.aot.ts")}
            ranges={[
              { loc: [0, 0], title: "AOT Bootstrap" },
              { loc: [0, 1], note: "aot uses platformBrowser instead of platformBrowserDynamic" },
              { loc: [1, 2], note: "generated via webpack" },
              { loc: [10, 11], note: "bootstrap our app"}
              // ...
            ]}/>

            <CodeSlide
            transition={["f"]}
            lang="typescript"
            bgColor="codeBg"
            code={require("raw-loader!../assets/code/webpack.aot.ts")}
            ranges={[
              { loc: [0, 0], title: "AOT Webpack" },
              { loc: [3, 4], note: "We use @ngtools/webpack plugin for AOT" },
              { loc: [10, 14] },
              { loc: [14, 19] },
              { loc: [25, 30] , note: "We use @ngtools/webpack to transpile"},
              { loc: [54, 58] , note: "@ngtools/webpack AotPlugin : define our tsconfig path & our entry module"}
              // ...
            ]}/>

          <Slide transition={["fade"]}  bgImage={[images.mainbg]}>
          <Heading size={3} margin="60px 0 0 0"fit caps textColor="primary">
            Let's see it in Action
          </Heading>
        </Slide>

        <Slide transition={["fade"]}  bgImage={[images.mainbg]}>
          <Heading size={3} margin="60px 0 0 0"fit caps textColor="primary">
            In conclusion
          </Heading>
          

          <List textColor="dark" margin="60px 0 0 0">
            <Appear><ListItem margin="20px 0 0 0">It's good to know how things work</ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">Webpack is awesome</ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">AOT is a real</ListItem></Appear>
            <Appear><ListItem margin="20px 0 0 0">Life is good</ListItem></Appear>
          </List>
        </Slide>
          
        <Slide transition={["fade"]}  bgImage={[images.mainbg]}>
          <Heading size={3} margin="60px 0 0 0" textColor="primary">
            Links
          </Heading>
            <List>
            <ListItem>
              <Link  textColor="primary" href="https://github.com/criticalpixel/angular-webpack2-barebone">Github : angular-webpack2-barebone</Link>
            </ListItem>
            <ListItem>
              <Link  textColor="primary" href="https://angular.io/docs/ts/latest/cookbook/aot-compiler.html">AOT Cookbook</Link>
            </ListItem>
            <ListItem>
              <Link  textColor="primary" href="https://angular.io/docs/ts/latest/guide/deployment.html">Angular Deployment Guide</Link>
            </ListItem>
            <ListItem>
              <Link  textColor="primary" href="https://github.com/AngularClass/angular2-webpack-starter">Angular Class Webpack Starter</Link>
            </ListItem>
            <ListItem>
              <Link  textColor="primary" href="https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80#.15ih9cyvll">Treeshaking vs Deadcode elimination</Link>
          </ListItem>
          <ListItem>
              <Link  textColor="primary" href="http://www.dzurico.com/angular-aot-webpack-lazy-loading/">Dzurico : AOT webpack lazyloading</Link>
          </ListItem>
          </List>
        </Slide>


        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Thank You!</Quote>
            <Cite textColor="dark">@criticalpix</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
