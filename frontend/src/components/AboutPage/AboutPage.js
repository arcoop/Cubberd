import { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { FaGithubSquare, FaLinkedin, FaAngellist } from "react-icons/fa";
import { useDispatch } from "react-redux";
import "./AboutPage.css";
import tommyPic from "../../assets/tommy.jpg";
import fredPic from "../../assets/fred.jfif";
import adinaPic from "../../assets/adina.png";
import clidePic from "../../assets/clide.jfif";
import { logout } from "../../store/session";

function AboutPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [index, setIndex] = useState();
  const [aboutUsTab, setAboutUsTab] = useState();
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  // const optionA = <div id="optionA" ></div>
  // const optionB = <div id="optionB" >Still no cubberd. You order in once again. Your wallet takes the hit. Your food goes bad.</div>
  // const optionC = <div id="optionC" >You add toast and mandarins to your pot and get back some delicious recipes. You might worry, “how do I choose??” Well worry not! The recipes come ranked. Want to see which recipes use the highest percentage of your ingredients? Look at the Ingredient Score. Want to see which recipes require the least shopping for new ingredients? Toggle the Shopping Score. You’ll no longer see your fridge items as “disconnected and random.” You see them for what they really are: Your dinner.</div>
  let text = <div></div>;
  switch (index) {
    case 0:
      text = (
        <div>
          “Toast and mandarins don’t really go together,” you think sadly upon
          each bite. "Is this really the best I can do?"
        </div>
      );
      break;
    case 1:
      text = (
        <div>
          You decide to order in once again. Your wallet takes a hit. The food
          you had left over goes bad.
        </div>
      );
      break;
    case 2:
      text = (
        <div>
          You add toast and mandarins to the pot on your Cubberd account and get
          back some delicious recipe options. You might worry, “how do I
          choose?” Well we at Cubberd say "worry not!" Would you like to see
          which recipes use the highest percentage of your ingredients? Check
          out the Ingredient Score. Interested in which recipes require the
          least shopping for new ingredients? Toggle the Shopping Score. The
          three recipes for each score will come ranked from highest to lowest.
          Never again will you see your fridge items as “disconnected and
          random.” You begin to see them for what they really are: dinner.
        </div>
      );
      break;
    default:
      text = <div></div>;
      break;
  }

  return (
    <div id="about-page" className="about-display main-display">
      {/* <nav id="about-page-nav-bar" className="main-display-component">
                <a href='/'>Home</a>
                <a href='/profile'>Profile</a>
            </nav> */}
      <nav id="about-page-nav-bar" className="main-display-component">
        <div id="about-page-nav-links" className="nav-links-div">
          <div className="nav-bar-link">
            <Link className="nav-bar-link" to="/">
              Back to Cubberd
            </Link>
          </div>
          <div className="nav-bar-link">
            <Link className="nav-bar-link" to="/profile">
              My Recipes
            </Link>
          </div>
          <div onClick={handleLogout} className="nav-bar-link">
            Logout
          </div>
        </div>
      </nav>

      <div id="about-page-content-top">
        <div id="about-page-adventure" className="main-display-component">
          <h2>Choose Your Own Advenure:</h2>
          <h3>
            Your week is coming to an end and you’ve got some seemingly
            disconnected and random ingredients left in your kitchen cupboards.
            The thought of coming up with a dish that both excites you and uses
            your ingredients exhausts you. You...
          </h3>
          <div id="about-page-options">
            <div
              onClick={() => setIndex(0)}
              className={index === 0 ? "option active" : "option"}
            >
              <p>A. Are not a Cubberd user</p>
            </div>
            <div
              onClick={() => setIndex(1)}
              className={index === 1 ? "option active" : "option"}
            >
              <p>B. Are still not a Cubberd user</p>
            </div>
            <div
              onClick={() => setIndex(2)}
              className={index === 2 ? "option active" : "option"}
            >
              <p>C. Are finally a Cubberd user</p>
            </div>
          </div>

          <div id="about-page-text">{text}</div>
        </div>
        <div id="about-page-how-it-works" className="main-display-component">
          <h2>How it Works</h2>
          <p>
            Recipes are fetched from Edamam API. Our list of Cubberd ingredients
            is constructed based on every ingredient included in the fetched
            recipes. When a user inputs any number of ingredients, the backend
            will return two lists of three recipes. The first list will be
            ranked in ascending order by “Ingredient Score,” based on how many
            of the ingredients in the user’s pot are in the recipe. The second
            list will be ranked in ascending order by “Shopping Score.” This
            score is determined by how many ingredients in the recipe are
            already in the user’s Cubberd. The higher the score, the fewer
            ingredients the user needs to buy. Both sets of recipes are returned
            to the user, and the user can toggle which score they’d like to use.{" "}
          </p>
        </div>
      </div>
      <div id="about-page-developers" className="main-display-component">
        <h2>About the developers</h2>
        <div className="teammate-cards-wrapper">
          <div className="teammate-card">
            <h1>Fred Chien</h1>
            <img src={fredPic} />
            <div className="teammate-card-role">
              Flex Developer
              <span>Bug exterminator</span>
            </div>
            <div className="teammate-card-links">
              <a href="https://github.com/fredchien3/">
                <FaGithubSquare />
              </a>
              <a href="https://www.linkedin.com/in/fchien/">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="teammate-card">
            <h1>Adina Cooper</h1>
            <img src={adinaPic} />
            <div className="teammate-card-role">
              Backend Lead
              <span>Algorithm expert</span>
            </div>
            <div className="teammate-card-links">
              <a href="https://github.com/arcoop/">
                <FaGithubSquare />
              </a>
              <a href="https://www.linkedin.com/in/adina-cooper/">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="teammate-card">
            <h1>Tommy Kim</h1>
            <img src={tommyPic} alt="Tommy Kim" />
            <div className="teammate-card-role">
              Frontend Lead
              <span>API handler</span>
            </div>
            <div className="teammate-card-links">
              <a href="https://github.com/sungyotkim">
                <FaGithubSquare />
              </a>
              <a href="https://tommykim.me" id="website-logo-tommy"></a>
              <a
                href="https://angel.co/u/sungyo-tommy-kim"
                className="angel-list"
              >
                <FaAngellist />
              </a>
              <a href="https://www.linkedin.com/in/sungyotkim">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="teammate-card">
            <h1>Clide Stefani</h1>
            <img src={clidePic} />
            <div className="teammate-card-role">
              Team Lead
              <span>Flex developer</span>
            </div>
            <div className="teammate-card-links">
              <a href="https://github.com/Monkwire3/">
                <FaGithubSquare />
              </a>
              <a href="https://www.linkedin.com/in/clide-stefani-5772431a7/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
