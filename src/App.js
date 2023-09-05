import Navbar from "./components/Navbar";
import myImage from "./pictures/myimage.png";
import mySecondImage from "./pictures/ab-img.png";
import Card from "./components/Card";
import WebIcon from "@mui/icons-material/Web";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import CallIcon from "@mui/icons-material/Call";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import CodeIcon from "@mui/icons-material/Code";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Socials from "./components/Socials";
function App() {
  return (
    <section id="Home">
      <div>
        <Navbar />
        <div className="main-div">
          <div className="intro">
            <div className="intro-words">
              <div className="hello">
                <h3>Hello I am</h3>
              </div>
              <h1 className="my-name">Fifonsi Hosana Donald </h1>
              <h2>Software Engineer</h2>
              <p>donalfifonsi@gmail.com</p>
              <p>Accra,Ghana</p>
              <Socials />
            </div>
            <div className="pics">
              <div className="intro-pic">
                <img className="image" src={myImage} alt="Profile" />
              </div>
            </div>
          </div>
          <section id="About">
            .{/* About me */}
            <div className="container">
              <div>
                <img className="image2" src={mySecondImage} alt="img" />
              </div>
              <div className="aboutme-text">
                <h1> About Me </h1>
                <p>
                  Hello, I’m, a results-oriented software Engineer specialised
                  in developing efficient and enterprise level mobile apps and
                  backend services. I care profoundly about building interfaces
                  that are usable and pleasant for the most number of people
                  possible. My professional life has been 100% driven by my
                  passion for design and structure. Worked on 12+ user-friendly
                  and fully functional applications for Android and IOS. I have
                  experience with different stacks; from Dart to JavaScript to
                  Typescript and I possess a complimentary Community leadership
                  background as co-lead of Facebook Developer Circle Accra and
                  co-organizer for Flutter Africa. Very receptive to adopting
                  new and inspiring UI/UX designs and implementing them.
                </p>
              </div>
            </div>
          </section>
          .{/* What I do */}
          <section>
            <h1>What I do</h1>
            <div className="Card-section">
              <Card
                description={
                  "provide web development services using modern technologies to create interactive and responsive websites. My expertise spans front-end and back-end development, ensuring your website delivers a seamless user experience across devices. From conceptualizing designs to implementing complex functionalities, I offer customized solutions that align with your business objectives. Contact me today to explore how I can enhance your online presence through innovative web development."
                }
                icon={
                  <WebIcon
                    className="iconcolor"
                    sx={{ fontSize: 40 }}
                  ></WebIcon>
                }
                title={"Web Developent"}
              />
              <Card
                icon={<CodeIcon className="iconcolor2" sx={{ fontSize: 40 }} />}
                title={"Backend Development"}
                description={
                  "I specialize in building robust and efficient server-side solutions that power your applications. From designing databases to crafting APIs, I ensure that your application runs smoothly and securely. My expertise in various programming languages and frameworks allows me to develop scalable and reliable backends tailored to your project's requirements. Reach out to me today to discuss how I can optimize your backend development."
                }
              />
              <Card
                icon={
                  <PsychologyIcon
                    className="iconcolor3"
                    sx={{ fontSize: 40 }}
                  />
                }
                title={"AI/ML"}
                description={
                  " Leveraging the power of AI, I provide cutting-edge solutions that harness the capabilities of machine learning and artificial intelligence. From natural language processing to predictive analytics, I create AI-driven applications that automate tasks, extract insights, and enhance decision-making. Whether you need chatbots, recommendation systems, or data analysis tools, I can develop AI solutions that empower your business. Get in touch with me to explore the possibilities of AI-driven development."
                }
              />
            </div>
          </section>
          .
          <div>
            {/* SKILLS */}
            <div className="skills" id="Skills">
              <h1>Skills</h1>
              <Skill width={"50%"} name={"Javascript"} />
              <Skill width={"40%"} name={"Java"} />
              <Skill width={"60%"} name={"Node.js"} />
              <Skill width={"20%"} name={"React Native"} />
              <Skill width={"80%"} name={"Express.js"} />
              <Skill width={"20%"} name={"PHP"} />
            </div>
          </div>
          .
          <section className="exp-section" id="Experience">
            {/* Education */}

            <div className="education">
              <h1>Education</h1>
              <div className="long-card">
                <h2>
                  Pure physics with Computer Science From{" "}
                  <span>University of Ghana</span>
                </h2>
                <p>2021-present</p>
              </div>
              <div className="long-card">
                <h2>
                  General Science from<span> St Thomas Aquinas</span>
                </h2>
                <p>2018-2021</p>
              </div>
            </div>

            {/* Experience */}
            <div className="experience">
              <h1>Experience</h1>
              <div className="long-card">
                <h2>
                  Intern at <span>Trestle Accademy Ghana</span>
                </h2>
                <p>2023 - present</p>
              </div>
            </div>
          </section>
          .{/* Contact */}
          <section className="contact-container" id="Contact">
            <h1>Contact Me</h1>
            <div className="contact">
              <Contact
                icon={<RoomOutlinedIcon />}
                name={"Address"}
                description={"Accra,Ghana"}
              />
              <Contact
                icon={<AlternateEmailOutlinedIcon />}
                name={"Email"}
                description={"fifonsidonald05@gmail.com"}
              />
              <Contact
                icon={<CallIcon />}
                name={"Phone"}
                description={"(+233) 20 66 223"}
              />
            </div>
          </section>
          .
          <footer>
            <a href="#Home">Fifonsi Donald Fifonsi</a>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default App;
