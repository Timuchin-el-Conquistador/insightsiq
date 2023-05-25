import React from "react";

import classes from "../../../assets/css/InsightsIQ/index.module.scss";

import Logo from "../../../assets/images/InsightsIQ/Logo.svg";
import Blog1 from "../../../assets/images/InsightsIQ/blog1.png";
import Avatar from "../../../assets/images/InsightsIQ/Avatar.png";
import Lights from "../../../assets/images/InsightsIQ/light-strong.png";
import MobileMenu from "../../../assets/images/InsightsIQ/mobil-menu.svg";

import { Fade, Zoom, AttentionSeeker } from "react-awesome-reveal";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

class PulledBlog extends React.Component {
    state = {
        active: false,
      };
    handleClick = () => {
        this.setState((state) => ({
          ...state,
          active: !state.active,
        }));
      };
  render() {
    return (
    
      <Container className={`${classes.container} ${classes["blogContainer"]}`}>
              <header
          className={`${classes["main-header"]} ${
            this.state.active ? classes["main-header--active-menu"] : null
          }`}
        >
          <Fade>
            <nav className={classes["main-header__top-nav"]}>
              <div>
                <Link to="/insightsIQ" className={classes["main-header__logo"]}>
                  <img src={Logo} alt="" /> Insights IQ
                </Link>
              </div>
              <div
                className={`${classes["main-header__menu"]}
                ${
                  this.state.active ? classes["main-header__active-menu"] : null
                }`}
              >
            
                <Link
                  to="/insightsIQ/blogs"
                  className={`${classes["main-header__link"]} ${classes["main-header__link--active"]}`}
                >
                  Blog
                </Link>
                <Link
                  to="/insightsIQ/use-cases"
                  className={`${classes["main-header__link"]}`}
                >
                  Usecases
                </Link>
                <Link to="/insightsIQ/pricing" className={classes["main-header__link"]}>
                  Pricing
                </Link>
                <button
                    type="button"
                    onClick={this.handleClick}
                    className={classes["main-header__mobile-menu"]}
                  >
                    <img src={MobileMenu} alt="" />
                  </button>
              </div>
              <div
                className={`${classes["main-header__button-box"]} ${
                  this.state.active
                    ? classes["main-header__button-box--active-menu"]
                    : null
                }`}
              >
                <button>Log in</button>
                <button>Sign up</button>
              </div>
              {this.state.active ? null : (
                <button
                  type="button"
                  onClick={this.handleClick}
                  className={classes["main-header__mobile-menu"]}
                >
                  <img src={MobileMenu} alt="" />
                </button>
              )}
            </nav>
          </Fade>
        </header>
        <main>
          <Fade>
            <div className={classes.hero}>
              <h1 className={classes.hero__heading}>
                Blog name goes here and we can use longer names
              </h1>
              <header>
                by <img src={Avatar} alt="" /> <span>Joe Doe</span>{" "}
                <time>5 February 2023</time>{" "}
              </header>{" "}
            

        
            <section className={classes.hero__blog}>
            <img src={Blog1} alt=''/>
            <p>
              Warp hands davy on jib dock. Prey buccaneer rat dead heave rum
              sheet tender dock. Boom ketch dock sink lubber boom bucko boom
              lass to. Pirate pirate aye jack furl timbers. Her me dock schooner
              warp line no. American topsail tender run locker gunwalls anchor
              tails bow tell. Coast aft the lateen scourge road hang rat. Weigh
              davy black yarr rig lanyard cutlass. Brig tales aye ketch aye
              american pounders grog. Gabion grapple hearties jones' jib line
              tales. Pin killick arr killick aye grog arr chain dock lee. Plate
              starboard scurvy blimey gar. Timbers heave boat jones' yard yer
              corsair coffer. Sink pin gunwalls nipper log fluke. Smartly
              smartly lateen chantey hang yarr coast corsair pillage. Dock sails
              arr topmast shrouds brig. Run to hearties bilged arr ipsum spirits
              spanish. Boatswain ballast nest lass gaff pinnace spirits road or.
              Blossom nest aye scurvy jack crimp jack blimey. Me lubber brethren
              chase reef chantey gangway crack corsair. Schooner of driver boom
              or. Bow warp jennys pounders gold aft. Bucko pinnace gaff driver
              driver bow grog topgallant. Splice buccaneer hogshead anchor
              starboard nest shiver. Tales lass avast shot starboard log chase
              poop reef. Nipperkin lubber league crow's arr a. Pirate man spot
              poop anchor grapple yer scourge sink. Across bilged jack hogshead
              plate tails rig blow blossom. Sails pay pink lanyard spot.
              Buccaneer chandler smartly avast chains american sheet bounty
              crimp bow. Pillage blow blossom landlubber chantey anchor boom log
              line shrouds. Bucko o'nine o'nine sheet a. Execution yawl warp
              crow's run yawl lubber schooner. Roger anchor lubber corsair man
              ipsum pay seven mizzen tea. Brace bucko parrel yarr me jones' aye
              crow's. Lugsail spirits cup spyglass clipper hogshead. Killick
              buccaneer heave gangway gun spanish league brace weigh american.
              Crack overhaul brig yawl anchor. Pillage keelhaul me hail-shot
              dead shot blossom piracy avast sink. Jones' tell sloop seven
              salmagundi seven corsair jennys log measured. Chase or blossom
              jennys brig tea spanish nipperkin jack gabion. Anchor arr chains
              bilged spanish me nest boat. Ensign pillage log chains crimp
              chandler. Jones' spyglass brig the fluke maroon splice coxswain to
              a. Guns aft spanish lee pinnace mizzen parrel chains spanish
              shrouds. Men jack sloop anchor locker boatswain crack main. Men
              salmagundi roger bilged sink. Starboard starboard chain corsair
              bilged pillage mutiny jolly aft jones'. Gun hempen.
            </p>

      
            </section>
            <div className={classes.hero__lights}>
            <img src={Lights} alt="" />
          </div>
            </div>
          </Fade>
        </main>
        <footer>
          <nav>
            <div>
              <a href="#" className={classes["main-header__logo"]}>
                <img src={Logo} alt="" /> Insights IQ
              </a>
            </div>
            <div>
              <a href="#">Blog</a>
              <a href="#">Use-cases</a>
              <a href="#">Pricing</a>
              <a href="#">About Murmur</a>
              <a href="#">Help</a>
              <a href="#">Privacy</a>
            </div>
          </nav>
          <div className={classes.border} />
          <section className="d-flex justify-content-between align-center mt-5">
            <div className="d-flex">
              <input type="text" defaultValue="Enter your email" />

              <AttentionSeeker effect="shakeY">
                <button>Subscribe</button>
              </AttentionSeeker>
            </div>
            <p>
              <strong>
                &copy; Copyright {new Date().getFullYear()}. All rights
                reserved.
              </strong>
              
            </p>
          </section>
        </footer>
      </Container>
        
      
    );
  }
}

export default PulledBlog;
