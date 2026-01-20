import React from "react";
import chatgptimg4 from "../assets/chatgptimg4.png";

function Home() {
  return (
    <div className="home-container">
      <h1 className="heading">Career Guidance! 💭</h1>

      <p className="para">
        This website is designed to help students and parents make informed decisions about the different career pathways available after
        Class 10 and detailed information about government jobs. At this stage, many students feel confused because it’s the first turning point
        in their academic journey. The choice made here can influence higher education, skill development, and even future career opportunities.
        Our website ensures that students have a complete picture of every possible route after Class 10. Our goal is to remove confusion and provide clear,
        reliable, and easy-to-understand guidance, helping students choose the right path with confidence.
      </p>

      {/* <img src={chatgptimg4} alt="career" className="main-image" /> */}

      <h3 className="sideheading">Why This Website is Useful</h3>
      <ol className="main-list">
        <li className="lstheading">For Students
          <ul className="insidelst">
            <li>This site explains each option in detail — eligibility, duration, scope, government job opportunities, and future career prospects.</li>
            <li>It helps students pick a path that matches their interests, strengths, and long-term goals, whether through higher education or direct entry into secure government careers.</li>
          </ul>
        </li>

        <li className="lstheading">For Parents
          <ul className="insidelst">
            <li>Parents often want to guide their children but don’t always have updated information about modern career pathways and government job opportunities.</li>
            <li>This website provides authentic, structured, and reliable guidance that parents can trust while helping their child make the right decision with confidence.</li>
          </ul>
        </li>
      </ol>

      <h2 className="pages">CareerPath Page</h2>
      <p className="pagesdata">
        The Career Path Page contains detailed information about every possible option after Class 10 — Science, Commerce, Arts, Diploma courses,
        ITI, Vocational training, and more. For each option, you will find details like eligibility, duration, scope, and future opportunities.
        This helps students choose a path that matches their skills, interests, and long-term goals.
      </p>

      <h2 className="pages">GovernmentPath Page</h2>
      <p className="pagesdata">
        The Government Path Page contains detailed information about all government job opportunities — including
        Central and State-level jobs such as Railways, Defence, Police, Postal Services, Public Sector Units (PSUs), and other entry-level
        examinations. For each job option, you will find details like eligibility, selection process, benefits, career growth, and future
        prospects. This helps students understand the pathways to secure government careers and plan their preparation with clarity and confidence.
      </p>

      <h2 className="pages">About Page</h2>
      <p className="pagesdata">
        The About Page explains how to use this website effectively. It provides step-by-step guidance on where to find career options,
        how to compare different courses, and how parents, teachers, and counselors can use this platform as a reference. It’s the perfect
        starting point for anyone visiting the site for the first time.
      </p>
      <style>
        {


  `.home-container {
  margin: 30px;
  padding: 13px 20px;
}

.heading {
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
  color: cyan;
}

.para {
  margin-bottom: 20px;
  line-height: 1.6;
}

.main-image {
  width: 100%;
  height: 80vh;
  object-fit: cover;
  margin-bottom: 20px;
  border-radius: 20px;
}

.sideheading {
  margin-bottom: 12px;
  font-size: 1.4rem;
  font-weight: bold;
  color: cyan;
}

.main-list {
  margin-left: 20px;
  margin-bottom: 50px;
  
}

.lstheading {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.insidelst {
  margin-left: 15px;
  margin-bottom: 10px;
}
.insidelst li{
  line-height: 1.6;
  font-size:1rem;
}

.pages {
  margin-bottom: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  color: cyan;
}

.pagesdata {
  margin-bottom: 20px;
  line-height: 1.6;
}

@media (max-width: 478px) {
.home-container {
  margin: 7px;
  padding: 6px 13px;
}
  .heading {
    font-size: 1.5rem;
    text-align: center;
  }

  .para {
    font-size: 0.8rem;
  }

  .main-image {
    height: 40vh;
  }

  .sideheading {
    font-size: 1.1rem;
    color:cyan;
  }

  .lstheading {
    font-size: 1rem;
  }
  .insidelst li{
  font-size: 0.8rem;
  }

  .pages {
    font-size: 1rem;
    text-align: center;
    color:cyan;
  }

  .pagesdata {
    font-size: 0.8rem;
    text-align: justify;
  }
}
`
        }
      </style>
    </div>
  );
}

export default Home;
