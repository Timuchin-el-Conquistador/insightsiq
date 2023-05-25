import React from "react";

import classes from "../../assets/css/InsightsIQ/index.module.scss";
import Logo from "../../assets/images/InsightsIQ/Logo.svg";
import HypeIQ from "../../assets/images/InsightsIQ/HypeIq.mp4";
import UIUX from "../../assets/images/InsightsIQ/uiux.png";
import Product from "../../assets/images/InsightsIQ/Product.png";
import Marketing from "../../assets/images/InsightsIQ/Marketing.png";
import Ecommerce from "../../assets/images/InsightsIQ/Ecommerce.png";
import Agencies from "../../assets/images/InsightsIQ/Agencies.png";
import Startups from "../../assets/images/InsightsIQ/Startups.png";
import Analytics from "../../assets/images/InsightsIQ/analytics.png";

import BrandHealth from "../../assets/images/InsightsIQ/brand-health.svg";
import MobileMenu from "../../assets/images/InsightsIQ/mobil-menu.svg";

import RealFeedback from "../../assets/images/InsightsIQ/Real feedback.png";
import NavigateSurvey from "../../assets/images/InsightsIQ/Navigate survey.png";
import InformativeGraphics from "../../assets/images/InsightsIQ/informative graphics.png";
import InsightfulData from "../../assets/images/InsightsIQ/Insightful data.png";
import ResearchNeeds from "../../assets/images/InsightsIQ/Research needs.png";
import WorldWide from "../../assets/images/InsightsIQ/world wide.png";

import { Fade, Zoom, AttentionSeeker } from "react-awesome-reveal";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

class InsightsIQ extends React.Component {
  state = {
    active: false,
  };
  componentWillUnmount() {
    document.body.classList.remove("bg-insightsIq");
    document.body.classList.add("default");
  }
  componentDidMount() {
    document.body.classList.remove("default");
    document.body.classList.add("bg-insightsIq");
    window.scrollTo(0, 0);
  }

  handleClick = () => {
    this.setState((state) => ({
      ...state,
      active: !state.active,
    }));
  };
  render() {
    return (
      <Container className={classes.container}>
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
                  className={`${classes["main-header__link"]}`}
                >
                  Blog
                </Link>
                <Link
                  to="/insightsIQ/use-cases"
                  className={`${classes["main-header__link"]}`}
                >
                  Usecases
                </Link>
                <Link
                  to="/insightsIQ/pricing"
                  className={classes["main-header__link"]}
                >
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
              <div className={classes.hero__light} />
              <div className={classes.hero__light} />
              <div className={classes.hero__light} />
              <div className={classes.hero__light} />
              <button className={classes["hero__show-discounts"]}>
                Text about discounts and etc{" "}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 5H8.5M8.5 5L5 1.5M8.5 5L5 8.5"
                    stroke="#E9D7FE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <h1 className={classes.hero__heading} />
              <button className={classes["hero__free-trial"]}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="#F9FAFB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Get free trial now
              </button>
            </div>
          </Fade>

          <Fade>
            <figure className={classes.video}>
              <video
                controls
                class="video"
                id="video"
                preload="metadata"
                //poster="../../assets/images/InsightsIQ/poster.png"
              >
                <source src={HypeIQ} type="video/mp4"></source>
              </video>
            </figure>
            <div className={classes.lights} />
            <div className={classes.lights} />
          </Fade>

          <Fade>
            <section className={classes.partners}>
              <h2 className={classes.partners__heading}>Partnered with:</h2>
              <ul className={classes.partners__brands}>
                <li />
                <li />
                <li />
                <li />
              </ul>
            </section>
          </Fade>
          <Fade>
            <section className={classes.solutions}>
              <div
                style={{
                  width: "fit-content",
                  margin: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <h2 className={classes.solutions__heading}>
                  Solutions for Everyone
                </h2>
                <p className={classes.solutions__subheading}>
                  (Literally everyone)
                </p>
              </div>
              <div className={classes.articles}>
                <article className={classes.articles__solution}>
                  <div className={classes["articles__creative-container"]}>
                    <img
                      src={UIUX}
                      alt=""
                      className={classes.articles__creative}
                    />
                  </div>
                  <div className={classes["articles__solution-information"]}>
                    <h3>UX & Design</h3>
                    <p>
                      Office ipsum you must be muted. Ui turn they involved out
                      inclusion language drawing-board.
                    </p>
                    <Link to="/insightsIQ/use-cases/uiux-design">
                      Learn more.
                    </Link>
                  </div>
                </article>
                <article className={classes.articles__solution}>
                  <div className={classes["articles__creative-container"]}>
                    <img
                      src={Product}
                      alt=""
                      className={classes.articles__creative}
                    />
                  </div>
                  <div className={classes["articles__solution-information"]}>
                    <h3>Product</h3>
                    <p>
                      Office ipsum you must be muted. Ui turn they involved out
                      inclusion language drawing-board.
                    </p>
                    <a href="example-link.com">Learn more.</a>
                  </div>
                </article>
                <article className={classes.articles__solution}>
                  <div className={classes["articles__creative-container"]}>
                    <img
                      src={Marketing}
                      alt=""
                      className={classes.articles__creative}
                    />
                  </div>
                  <div className={classes["articles__solution-information"]}>
                    <h3>Marketing</h3>
                    <p>
                      Office ipsum you must be muted. Ui turn they involved out
                      inclusion language drawing-board.
                    </p>
                    <a href="example-link.com">Learn more.</a>
                  </div>
                </article>
                <article className={classes.articles__solution}>
                  <div className={classes["articles__creative-container"]}>
                    <img
                      src={Ecommerce}
                      alt=""
                      className={classes.articles__creative}
                    />
                  </div>
                  <div className={classes["articles__solution-information"]}>
                    <h3>Ecommerce</h3>
                    <p>
                      Office ipsum you must be muted. Ui turn they involved out
                      inclusion language drawing-board.
                    </p>
                    <a href="example-link.com">Learn more.</a>
                  </div>
                </article>
                <article className={classes.articles__solution}>
                  <div className={classes["articles__creative-container"]}>
                    <img
                      src={Agencies}
                      alt=""
                      className={classes.articles__creative}
                    />
                  </div>
                  <div className={classes["articles__solution-information"]}>
                    <h3>Agencies</h3>
                    <p>
                      Office ipsum you must be muted. Ui turn they involved out
                      inclusion language drawing-board.
                    </p>
                    <a href="example-link.com">Learn more.</a>
                  </div>
                </article>
                <article className={classes.articles__solution}>
                  <div className={classes["articles__creative-container"]}>
                    <img
                      src={Startups}
                      alt=""
                      className={classes.articles__creative}
                    />
                  </div>
                  <div className={classes["articles__solution-information"]}>
                    <h3>Startups & VC’s</h3>
                    <p>
                      Office ipsum you must be muted. Ui turn they involved out
                      inclusion language drawing-board.
                    </p>
                    <a href="example-link.com">Learn more.</a>
                  </div>
                </article>
                <div className={classes.articles__lights} />
                <div className={classes.articles__lights} />
              </div>
            </section>
          </Fade>

          <Fade>
            <section className={classes["how-works"]}>
              <div className={classes["how-works__lights"]} />
              <div className={classes["how-works__lights2"]} />
              <h2 className={classes["how-works__heading"]}>
                How InsightsIQ Works
              </h2>

              <Row className={classes["how-works__row"]}>
                <Col className={classes["how-works__col"]}>
                  <div>
                    <h4>Super-easy creating process of an online survey</h4>
                    <p>
                      Customers only need 5-10 minutes to create the most
                      insightful survey in their field
                    </p>
                  </div>
                  <div style={{ margin: "40px 0" }}>
                    <h4>User friendly research methods</h4>
                    <p>
                      Conducting an interview or usability testing with the
                      responders? It fully depends on your business preferences.
                    </p>
                  </div>
                  <div>
                    <h4>Track instant feedbacks about your product</h4>
                    <p>
                      No need to wait for several days or weeks to get the
                      insightful data, when InsightsIQ will provide you with the
                      live feedbacks on your survey
                    </p>
                  </div>
                  <div className={classes["button-block"]}>
                    <button>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Book Demo
                    </button>
                    <button>Learn more</button>
                  </div>
                </Col>
                <Col className={classes["how-works__col"]}>
                  <img src={Analytics} alt="" />
                </Col>
              </Row>
            </section>
          </Fade>
          <section className={classes["level-up"]}>
            <h2 className={classes["level-up__heading"]}>
              Lift Up Your Product to the{" "}
              <span>
                Next Level{" "}
                <svg
                  width="42"
                  height="47"
                  viewBox="0 0 42 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.0126 1C27.1975 6.34661 18.8639 13.9743 9.82746 20.4291C7.58907 22.0338 5.30739 23.5846 3.04377 25.1569C2.80948 25.3152 1.00721 26.319 1 26.6285C1 26.7076 1.94078 26.8551 2.0381 26.8695C3.09676 26.9936 4.16222 27.0513 5.22812 27.0422C8.32799 27.1645 11.4062 27.2545 14.5133 27.2257C15.346 27.2257 17.7898 26.8371 18.5431 27.3696C19.6245 28.136 19.6605 30.0789 19.7506 31.2339C20.0347 34.6766 20.1369 38.1318 20.057 41.5853C20.0733 42.766 19.9118 43.9425 19.5776 45.0753C19.5452 45.1689 19.2929 46 19.1054 46C18.3413 46 17.9556 43.9204 17.8727 43.4562C17.3428 40.5779 17.4942 37.5411 17.2996 34.6232C17.1878 32.9573 17.0148 31.0252 17.5158 29.3953C18.4963 26.2327 21.4808 23.473 23.438 20.9113C25.7269 17.9105 27.8031 14.7659 29.9261 11.65C31.2994 9.63158 32.698 7.63829 34.0677 5.61982C34.2191 5.39315 35.1094 3.85681 35.3473 3.88559C35.8087 3.93956 35.0733 4.76351 34.9256 5.19886C34.3721 6.67121 33.692 8.09293 32.8927 9.44808C30.2722 14.1794 27.5904 18.8892 25.1502 23.7141C24.5879 24.8151 24.0316 25.9197 23.4813 27.0278L23.0127 27.9741C23.4813 28.2224 24.6239 27.9741 25.1358 27.9381C27.0353 27.7726 28.9313 27.456 30.8165 27.1825C33.0729 26.8587 35.3725 26.7976 37.6361 26.5961C38.1552 26.5529 39.7989 26.6572 40.217 26.3298C41.6984 25.1893 40.6567 21.343 40.4729 19.911C39.7268 14.1866 38.941 8.32191 38.6706 2.55793"
                    stroke="#B692F6"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.0699 29.0608C25.5719 33.6842 23.7445 38.6062 21.7476 43.4527"
                    stroke="#B692F6"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h2>
            <Zoom className="m-5">
              <Row className={classes["level-up__row"]}>
                <div className={classes.benefits__lights} />
                <div className={classes.benefits__lights} />
                <Col className={classes["level-up__col"]}>
                  <h5>Real Feedbacks Before the Launch</h5>
                  <p>
                    Successful product launch means carefully analyzed
                    pre-release feedbacks. Make this process as smoothly as
                    possible by creating an insightful survey via InsightsIQ
                  </p>
                  <button>Explore the platform</button>
                </Col>
                <Col className={classes["level-up__col-img"]}>
                  <img src={RealFeedback} alt="" />
                </Col>
              </Row>
            </Zoom>
            <Zoom>
              <Row className={classes["level-up__row"]} style={{marginBottom: '150px'}}>
                <Col className={`${classes["level-up__col-img"]}`}>
                  <img src={NavigateSurvey} alt="" />
                </Col>
                <Col
                  className={`${classes["level-up__col"]} ${classes["level-up__col--left"]}`}
                >
                  {" "}
                  {/*text alaighn to left*/}
                  <h5>Navigate the Survey As You Want</h5>
                  <p>
                    Make your survey private or public, oriented on the specific
                    target audience or general, focused on international or
                    local responders in just a couple of clicks
                  </p>
                  <button>Explore the platform</button>
                </Col>
                <div
                  className={`${classes.benefits__lights} ${classes["benefits__lights--right"]}`}
                />
                <div
                  className={`${classes.benefits__lights} ${classes["benefits__lights--right"]}`}
                />
              </Row>
            </Zoom>
            <Zoom className="m-5">
              <Row className={classes["level-up__row"]}  style={{marginBottom: '150px'}}>
                <div className={classes.benefits__lights} />
                <div className={classes.benefits__lights} />
                <Col className={classes["level-up__col"]}>
                  <h5>Informative Graphics For the Further Analysis</h5>
                  <p>
                    We make the process of gathering data as fun and engaging as
                    it can be. Get ready to receive online results in a speedy
                    and eye-catching way.
                  </p>
                  <button>Explore the platform</button>
                </Col>
                <Col className={classes["level-up__col-img"]}>
                  {" "}
                  <img src={InformativeGraphics} alt="" />
                </Col>
              </Row>
            </Zoom>
          </section>
          <Fade>
            <section className={classes["brand-health"]}>
              <div className={classes["brand-health__lights"]} />
              <h2 className={classes["brand-health__heading"]}>
                {" "}
                Get To Know How Costumers Think and Feel About Your Brand
              </h2>
              <Row className={classes["brand-health__row"]}>
                <Col className={classes["brand-health__col"]}>
                  <div className={classes["brand-health__chart"]}>
                    <img src={BrandHealth} alt="" />
                  </div>
                  <p>
                    <strong>56%</strong>
                    <span>
                      of <strong>general population</strong> in US are aware of
                      your brand
                    </span>
                  </p>
                </Col>
                <Col className={classes["brand-health__col"]}>
                  <h5>One Step Closer to the Business Success</h5>
                  <p>
                    InsightsIQ helps you to find out more about your target
                    audience's preferences via online surveys and attract new
                    loyal customers
                  </p>
                </Col>
              </Row>
            </section>
          </Fade>
          <Fade>
            <section className={classes.benefits}>
              <div
                style={{
                  width: "fit-content",
                  margin: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <h2 className={classes.benefits__heading}>
                  What are <span>Benefits?</span>
                </h2>
                <p className={classes.benefits__subheading}>
                  Get a closer look at our unique marketing features
                </p>
                <div className={classes.benefits__underline} />
              </div>
              <div className={classes["ui-link-1"]} />

              <div className={classes.benefits__list}>
                <Zoom triggerOnce >
                  <Row className={classes.benefits__row} style={{ marginTop: "220px" }}>
                    <div className={classes.benefits__lights} />
                    <div className={classes.benefits__lights} />
                    <Col className={classes.benefits__col}>
                      <h5>Insightful Data</h5>
                      <p>
                        As InsightsIQ is highly optimized survey app, our users
                        can receive real-time data right on their device. This
                        specific capability gives you access to get to more
                        respondents in faster time frame.
                      </p>
                    </Col>
                    <Col className={classes["benefits__col-img"]}>
                      <img src={InsightfulData} alt="" />
                    </Col>
                  </Row>
                </Zoom>
                <div className={classes["ui-link-2"]} />
                <Zoom triggerOnce>
                  <Row className={classes.benefits__row}>
                    <Col className={`${classes["benefits__col-img"]}`}>
                      <img src={ResearchNeeds} alt="" />
                    </Col>
                    <Col
                      className={`${classes.benefits__col} ${classes["benefits__col--left"]}`}
                    >
                      <h5>Adjustable to the Research Needs</h5>
                      <p>
                        Thank to our setting capabilities, InsightsIQ can be
                        easily used for accurate marketing research.{" "}
                      </p>
                    </Col>
                    <div
                      className={`${classes.benefits__lights} ${classes["benefits__lights--right"]}`}
                    />
                    <div
                      className={`${classes.benefits__lights} ${classes["benefits__lights--right"]}`}
                    />
                  </Row>
                </Zoom>
                <div className={classes["ui-link-3"]} />
                <Zoom triggerOnce>
                  <Row className={classes.benefits__row}>
                    <div className={classes.benefits__lights} />
                    <div className={classes.benefits__lights} />
                    <Col className={classes.benefits__col}>
                      <h5>Worldwide Respondents</h5>
                      <p>
                        Expanding your brand to other markets has never been so
                        smooth. InsightsIQ team can help you with creating
                        surveys for foreign respondents and get comprehensive
                        data, before launching your product there.
                      </p>
                    </Col>
                    <Col className={classes["benefits__col-img"]}>
                      <img src={WorldWide} alt="" />
                    </Col>
                  </Row>
                </Zoom>
              </div>
            </section>
          </Fade>
          <Fade>
            <section className={classes["get-trial"]}>
              <div className={classes["get-trial__lights"]} />
              <div className={classes["get-trial__lights2"]} />

              <svg
                style={{
                  position: "absolute",
                  bottom: "30px",
                  left: "300px",
                }}
                width="36"
                height="38"
                viewBox="0 0 36 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.4283 35.9629C18.3463 34.4648 14.5089 32.3281 11.0818 29.6318C9.32974 28.2543 7.6808 26.739 6.18728 25.0851C4.69376 23.4312 3.32746 21.5007 2.54566 19.3343C1.10067 15.3135 1.56692 10.6837 4.03404 7.18388C5.14063 5.61347 6.63943 4.28179 8.3743 3.45548C10.1092 2.62917 12.3984 2.15682 14.2805 3.02339C16.1627 3.88995 17.2995 5.89511 17.7245 7.90587C17.9502 8.9606 18.0238 10.0517 17.9523 11.1244C17.8871 12.0895 17.6847 13.2943 16.8903 13.9391L18.0819 13.7476C17.2035 12.1845 17.1732 10.3237 17.7352 8.64796C18.2971 6.97223 19.5236 5.50634 20.9361 4.39172C22.4163 3.2193 24.1824 2.08488 25.9974 1.54125C27.6624 1.04221 29.6841 1.18816 30.9492 2.52861C31.6272 3.24615 32.0153 4.20449 32.3197 5.12796C32.624 6.05143 32.8647 7.0316 33.0347 8.00872C33.3646 9.92595 33.4377 11.8811 33.3012 13.8219C33.0168 17.7419 31.8242 21.5393 30.0782 25.0354C28.1237 28.9621 25.4667 32.4555 22.6528 35.7881C22.4641 36.015 22.2982 36.3592 22.6829 36.4721C23.0439 36.5781 23.5797 36.2582 23.8088 36.0029C29.4334 29.7176 34.2177 22.0441 34.9341 13.4153C35.1103 11.2963 35.0266 9.15442 34.637 7.06363C34.268 5.08196 33.7476 2.68242 32.194 1.2782C30.7449 -0.0305645 28.5781 -0.146441 26.7786 0.291654C24.6176 0.817807 22.5897 2.05323 20.7905 3.34197C18.9914 4.6307 17.3103 6.31098 16.4175 8.40155C15.5769 10.3767 15.4735 12.7186 16.5379 14.633C16.7565 15.024 17.5284 14.6056 17.7295 14.4415C19.464 13.0423 19.7094 10.7241 19.5187 8.62408C19.3396 6.64882 18.6973 4.59489 17.2867 3.15237C13.9398 -0.257393 8.36076 1.83698 5.23639 4.46819C1.72502 7.41909 -0.196001 11.879 0.217674 16.4935C0.430219 18.8873 1.23945 21.2051 2.54469 23.218C3.84993 25.2309 5.64562 27.0816 7.45816 28.7338C11.4192 32.3449 16.0735 35.1619 21.0853 37.0104C21.4592 37.1482 21.8714 36.9716 22.1677 36.738C22.2941 36.638 22.7929 36.0988 22.4283 35.9629Z"
                  fill="#DC6803"
                />
              </svg>
              <svg
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "200px",
                }}
                width="44"
                height="48"
                viewBox="0 0 44 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.64" clipPath="url(#clip0_59_10776)">
                  <path
                    d="M9.56123 28.7048C15.0916 21.9138 19.7181 13.5761 18.8277 4.57808C18.7272 3.53597 16.2019 4.95766 16.3001 5.95334C17.1327 14.4214 12.8042 22.1836 7.60906 28.5741C7.28765 28.9692 7.15809 29.5888 7.78178 29.6983C8.40547 29.8078 9.20092 29.1626 9.5708 28.7089L9.56123 28.7048Z"
                    fill="#D92D20"
                  />
                  <path
                    d="M16.3482 6.29738C20.3788 13.497 26.5458 19.8625 34.6308 22.3373C35.2566 22.5329 35.9695 22.1019 36.4037 21.6701C36.6153 21.4604 37.3278 20.5242 36.6951 20.3314C28.7074 17.8814 22.711 11.6461 18.7319 4.53669C18.2674 3.70118 15.8269 5.35795 16.3551 6.29467L16.3482 6.29738Z"
                    fill="#D92D20"
                  />
                  <path
                    d="M7.42388 29.8393C14.4602 32.6801 21.2476 36.5033 26.0754 42.457C26.7281 43.2657 29.0941 41.4804 28.4521 40.6991C23.5426 34.6591 16.6299 30.7195 9.47863 27.8293C8.55356 27.4595 6.43866 29.438 7.41431 29.8352L7.42119 29.8325L7.42388 29.8393Z"
                    fill="#D92D20"
                  />
                  <path
                    d="M29.5888 40.8589C30.5855 33.9045 32.9869 27.2254 36.7528 21.2641C37.0862 20.7379 36.6663 20.3586 36.1291 20.4282C35.4201 20.526 34.8078 21.0911 34.4466 21.6677C30.5988 27.764 28.1078 34.6599 27.0866 41.774C26.8996 43.0953 29.4515 41.7816 29.5861 40.852L29.5888 40.8589Z"
                    fill="#D92D20"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_59_10776">
                    <rect
                      width="31"
                      height="39"
                      fill="white"
                      transform="translate(0 11.3672) rotate(-21.5115)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div style={{ position: "relative" }}>
                <svg
                  style={{
                    position: "absolute",
                    top: "-21px",
                    left: "-10px",
                  }}
                  width="102"
                  height="37"
                  viewBox="0 0 102 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_59_10804)">
                    <path
                      d="M2.60047 33.5891C7.69446 27.2994 13.9383 21.8076 20.9776 17.7453C23.8254 16.103 27.1545 14.7002 30.5037 14.76C33.8529 14.8198 36.7342 16.5884 37.9843 19.6202C39.2344 22.652 38.7998 25.9431 37.5364 28.7887C36.2729 31.6344 33.5722 34.7526 30.3099 35.371C27.0476 35.9893 23.8521 33.9747 21.9269 31.5745C19.5737 28.6292 19.1125 24.6998 19.9748 21.1161C21.86 13.264 29.1066 8.60995 36.1526 5.71111C43.9005 2.52639 52.3637 1.17005 60.7267 1.71525C64.223 1.9413 68.361 2.58623 69.9587 6.15658C71.5564 9.72693 70.2863 13.3571 68.1404 16.2227C66.9705 17.7851 65.5399 19.1747 64.0358 20.4247C62.7656 21.4818 61.1746 22.6586 59.4432 22.6919C57.9925 22.7185 56.4416 21.8342 55.6862 20.6175C54.6768 18.9952 55.4322 17.2001 56.5619 15.8703C58.7814 13.264 61.8632 11.1697 64.8313 9.50087C67.7994 7.83205 70.9748 6.58209 74.2639 5.74436C80.9088 4.04894 87.9815 4.08883 94.593 5.91722C96.2709 6.38263 97.9021 6.96772 99.4998 7.65253C100.108 7.91183 100.93 7.73232 101.472 7.39323C101.826 7.16718 102.334 6.58874 101.719 6.31615C87.0389 -0.179632 68.615 2.81893 56.5352 13.2507C54.991 14.5871 53.2662 16.0897 52.5843 18.071C51.9961 19.7864 52.5977 21.5816 53.9748 22.7251C57.3976 25.5708 62.1306 24.0083 65.326 21.6414C68.5214 19.2745 72.0578 15.6775 73.1341 11.5753C74.1302 7.78551 72.9001 3.66996 69.3103 1.76179C67.4518 0.771132 65.3059 0.432049 63.2336 0.239236C60.8604 0.0131807 58.4672 -0.0400089 56.0806 0.0397755C51.2072 0.212642 46.3606 0.950647 41.6677 2.27374C36.9748 3.59683 32.8435 5.26565 28.8392 7.58605C25.0822 9.76682 21.5258 12.6391 19.2796 16.4022C17.1604 19.9526 16.1243 24.3142 17.1939 28.3699C18.1699 32.0732 21.0845 35.1981 24.7279 36.4281C32.6831 39.1142 40.5914 31.9801 41.3602 24.2676C41.7145 20.7106 40.5781 17.1136 37.5431 15.0126C34.3209 12.7853 30.116 12.9582 26.4794 13.9156C22.2878 15.0193 18.5376 17.2533 15.0079 19.7C11.2175 22.3262 7.6744 25.3048 4.46559 28.6092C2.93472 30.185 1.48407 31.8272 0.10696 33.5359C-0.300826 34.0346 0.454581 34.3005 0.828942 34.3138C1.45733 34.3404 2.19269 34.0811 2.59379 33.5891H2.60047Z"
                      fill="#7F56D9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_59_10804">
                      <rect width="102" height="37" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h2>
                  You want to give it a <span>shot?</span>
                </h2>
                <svg
                  style={{
                    position: "absolute",
                    top: "-45px",
                    right: "19px",
                  }}
                  width="66"
                  height="58"
                  viewBox="0 0 66 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_59_10800)">
                    <path
                      d="M30.1404 9.79521C28.9076 12.0298 27.6318 14.2395 26.313 16.4244C26.1442 16.7167 26.1101 16.9148 26.3058 17.2113C26.5174 17.5398 26.9767 17.8164 27.3333 17.9535C27.7979 18.1415 28.3231 18.2842 28.8368 18.2483C29.1447 18.2312 29.6978 18.2066 29.8715 17.9057C31.2882 15.571 32.6583 13.1979 33.9719 10.8036C34.1208 10.5457 33.7422 10.1093 33.5901 9.97559C33.2529 9.66622 32.7416 9.43982 32.3123 9.32954C31.5976 9.15765 30.5514 9.02369 30.1417 9.77305L30.1404 9.79521Z"
                      fill="#7F56D9"
                    />
                    <path
                      d="M40.2779 14.7541L36.4304 21.1997C36.2617 21.492 36.2275 21.6901 36.4232 21.9865C36.6348 22.315 37.0942 22.5917 37.4507 22.7288C37.9153 22.9168 38.4405 23.0595 38.9542 23.0236C39.2536 23.0015 39.8152 22.9819 39.9889 22.6809L43.8364 16.2354C44.0052 15.943 44.0393 15.7449 43.8436 15.4485C43.632 15.12 43.1727 14.8433 42.8162 14.7063C42.3515 14.5182 41.8263 14.3755 41.3126 14.4114C41.0133 14.4335 40.4517 14.4531 40.2779 14.7541Z"
                      fill="#7F56D9"
                    />
                    <path
                      d="M5.2828 21.318C6.81932 29.141 11.724 35.8361 18.1478 40.4162C24.5717 44.9963 33.2739 47.3379 41.4688 47.1626C46.1722 47.0579 50.8028 46.166 55.2563 44.6674C56.2282 44.3343 55.3633 43.3305 54.8831 43.0304C54.0223 42.4761 52.8802 42.3097 51.9133 42.6342C45.2028 44.9047 37.7533 45.5562 30.8376 43.8334C23.922 42.1105 18.2008 38.1998 14.1372 32.6093C11.7909 29.386 10.168 25.7435 9.38868 21.8313C9.11162 20.4447 4.96346 19.7465 5.2742 21.3131L5.2828 21.318Z"
                      fill="#7F56D9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_59_10800">
                      <rect
                        width="55.3303"
                        height="34.7688"
                        fill="white"
                        transform="translate(17.3843) rotate(30)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                  }}
                  width="202"
                  height="13"
                  viewBox="0 0 202 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.9639 2.64691C63.1517 2.26616 82.35 2.02139 101.548 1.9126C120.747 1.80381 139.767 1.84008 158.872 2.01232C169.724 2.11204 180.587 2.24803 191.44 2.42934L192.913 0.570898C168.137 0.942586 143.371 1.40493 118.605 1.95793C93.8398 2.51093 69.0742 3.15458 44.3086 3.89796C30.406 4.31497 16.5138 4.75012 2.61125 5.22153C1.79653 5.24872 0.574437 5.43003 0.114848 6.11902C-0.313406 6.76267 0.48043 7.09809 1.13848 7.07996C26.9486 6.50883 52.7796 6.45444 78.6002 6.92585C104.421 7.39726 130.22 8.40353 155.989 9.92655C170.466 10.7787 184.932 11.8031 199.378 12.9907C200.162 13.0542 201.457 12.7187 201.875 12.0932C202.334 11.4133 201.478 11.1776 200.851 11.1323C175.145 9.01999 149.377 7.42445 123.588 6.35472C97.7985 5.28498 71.9675 4.75012 46.1469 4.74105C31.6385 4.74105 17.1301 4.89517 2.6217 5.22153L1.14892 7.07996C25.9041 6.23687 50.6697 5.49349 75.4353 4.83171C100.201 4.17899 124.966 3.60786 149.732 3.13645C163.635 2.87355 177.548 2.62878 191.45 2.42027C192.265 2.41121 193.498 2.2027 193.947 1.52278C194.396 0.842865 193.571 0.570898 192.923 0.561833C173.714 0.253604 154.526 0.0632272 135.328 0.0178994C116.13 -0.0274283 97.1091 0.0541616 78.0048 0.2808C67.1522 0.407718 56.2892 0.579964 45.4366 0.797537C44.6219 0.815668 43.3894 1.01511 42.9402 1.69503C42.512 2.33868 43.3058 2.67411 43.9639 2.65597V2.64691Z"
                    fill="#7F56D9"
                  />
                </svg>
                <svg
                  style={{
                    position: "absolute",
                    bottom: "-15px",
                    right: "-25px",
                  }}
                  width="47"
                  height="50"
                  viewBox="0 0 47 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_59_10771)">
                    <path
                      d="M11.6487 18.3851C20.4066 18.3577 29.7879 16.6508 36.1828 10.2584C36.925 9.52004 34.2247 8.46816 33.5169 9.17526C27.4953 15.187 18.748 16.7597 10.5123 16.7924C10.0029 16.7943 9.44161 17.0869 9.75228 17.6387C10.0629 18.1904 11.0661 18.3967 11.6515 18.3952L11.6487 18.3851Z"
                      fill="#7F56D9"
                    />
                    <path
                      d="M33.2812 9.43073C30.2678 17.1119 29.2538 25.9166 32.4647 33.7385C32.7102 34.3464 33.4954 34.6246 34.1045 34.6867C34.4009 34.7174 35.5766 34.6751 35.3247 34.0635C32.1563 26.3326 33.1777 17.7423 36.154 10.1582C36.5057 9.26936 33.6773 8.432 33.2877 9.43434L33.2812 9.43073Z"
                      fill="#7F56D9"
                    />
                    <path
                      d="M9.41601 17.4512C11.6792 24.694 13.0246 32.367 11.4802 39.8749C11.2685 40.8924 14.1491 41.5906 14.3464 40.5988C15.9058 32.973 14.5709 25.1293 12.2731 17.7662C11.9727 16.8164 9.10185 16.4348 9.41313 17.4412L9.41959 17.4448L9.41601 17.4512Z"
                      fill="#7F56D9"
                    />
                    <path
                      d="M14.9434 41.5792C20.9538 37.9417 27.6418 35.5653 34.6396 34.699C35.2579 34.6233 35.2851 34.0581 34.8907 33.6868C34.3657 33.2004 33.5405 33.0851 32.8655 33.1712C25.7114 34.0596 18.799 36.5043 12.6494 40.224C11.509 40.9169 14.1427 42.0578 14.9469 41.5728L14.9434 41.5792Z"
                      fill="#7F56D9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_59_10771">
                      <rect
                        width="31"
                        height="39"
                        fill="white"
                        transform="translate(18.9971) rotate(29.1508)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div
                style={{
                  position: "relative",
                  width: "250px",
                  display: "flex",
                  justifyContent: "center",
                  height: "150px",
                  alignItems: "center",
                }}
              >
                <svg
                  style={{
                    position: "absolute",
                    bottom: "45px",
                    left: "-23px",
                  }}
                  width="35"
                  height="4"
                  viewBox="0 0 35 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.7767 -0.00121945C22.6859 0.566442 12.5907 1.1122 2.49219 1.70884C1.93625 1.73587 0.590464 1.8515 0.591429 2.65927C0.593088 3.42582 1.97455 3.64069 2.48926 3.61296C12.5819 3.07687 22.6727 2.50921 32.7731 1.94413C33.3413 1.91003 34.716 1.80216 34.7106 0.972483C34.7115 0.196275 33.3011 -0.0263561 32.7645 0.00585362L32.7767 -0.00121945Z"
                    fill="#7F56D9"
                  />
                </svg>
                <svg
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "-5px",
                  }}
                  width="19"
                  height="8"
                  viewBox="0 0 19 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5999 0.972947C10.8777 2.52358 6.15546 4.07421 1.44029 5.63709C0.884163 5.81936 0.120845 6.34988 0.763669 6.92588C1.40649 7.50188 2.6072 7.50268 3.35342 7.26781C8.09239 5.73201 12.8217 4.19363 17.5633 2.64817C18.1316 2.45883 18.9194 1.91417 18.2599 1.32333C17.6003 0.732496 16.3706 0.723937 15.6096 0.975535L15.5999 0.972947Z"
                    fill="#7F56D9"
                  />
                </svg>
                <svg
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "-2px",
                  }}
                  width="33"
                  height="24"
                  viewBox="0 0 33 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.9704 1.37553C19.9172 8.61919 10.5648 15.4721 0.991875 22.0279C0.255641 22.5346 1.20308 23.1715 1.67828 23.3299C2.52501 23.6085 3.54358 23.4777 4.27464 22.9903C13.9428 16.5429 23.2843 9.61458 32.3595 2.36643C33.07 1.80107 32.1947 1.20418 31.6518 1.02767C30.8412 0.769038 29.6565 0.824306 28.9704 1.37553Z"
                    fill="#7F56D9"
                  />
                </svg>

                <button className={classes["hero__free-trial"]}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#F9FAFB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Get free trial now
                </button>
                <svg
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                  width="21"
                  height="29"
                  viewBox="0 0 21 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.09013 26.9299L12.4101 14.0699L16.4401 7.84987C17.8601 5.65987 19.4501 3.50987 20.6801 1.20987C21.1301 0.379866 20.2901 0.0298661 19.5701 -0.000133939C18.6301 -0.0401339 17.4401 0.349866 16.8601 1.11987C15.2701 3.21987 13.9401 5.54987 12.5101 7.75987L8.48012 13.9799L0.150125 26.8399C-0.389875 27.6699 0.620125 28.0499 1.30013 28.0799C2.21012 28.1199 3.56013 27.7399 4.09013 26.9199V26.9299Z"
                    fill="#7F56D9"
                  />
                </svg>
                <svg
                  style={{
                    position: "absolute",
                    top: "25px",
                    right: "-45px",
                  }}
                  width="54"
                  height="20"
                  viewBox="0 0 54 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.0398 18.99C19.4298 13.62 35.8798 8.4 52.2098 2.84C52.7798 2.65 54.1598 2.16 53.9398 1.31C53.7198 0.500001 52.2198 0.680001 51.6798 0.850001C35.2298 6.03 18.8798 11.54 2.4898 16.92C1.8898 17.12 0.449801 17.63 0.689801 18.52C0.909801 19.36 2.4898 19.19 3.0498 19L3.0398 18.99Z"
                    fill="#7F56D9"
                  />
                </svg>
                <svg
                  style={{
                    position: "absolute",
                    top: "58px",
                    right: "-15px",
                  }}
                  width="31"
                  height="20"
                  viewBox="0 0 31 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.699962 2.74012L13.47 10.8901L19.75 14.9001C21.91 16.2801 24.04 17.7901 26.29 19.0101C27.06 19.4201 28.25 19.1101 28.96 18.7401C29.33 18.5501 30.5 17.7301 29.82 17.2201C27.76 15.6701 25.49 14.3701 23.32 12.9901L17.04 8.98012L4.05996 0.690115C2.89996 -0.0498854 -1.01004 1.65012 0.689962 2.74012H0.699962Z"
                    fill="#7F56D9"
                  />
                </svg>
              </div>

              <svg
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: "200px",
                }}
                width="47"
                height="42"
                viewBox="0 0 47 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.64" clipPath="url(#clip0_59_10796)">
                  <path
                    d="M10.6896 15.4759C11.6382 17.0475 12.5559 18.637 13.4427 20.2443C13.5641 20.4545 13.6752 20.547 13.9302 20.5317C14.211 20.5181 14.5485 20.3315 14.7621 20.1587C15.0463 19.9368 15.3241 19.661 15.4865 19.3281C15.5866 19.1301 15.7702 18.7768 15.6452 18.5603C14.7004 16.8381 13.7149 15.1312 12.6958 13.4518C12.5887 13.2663 12.1807 13.3451 12.0427 13.3918C11.7287 13.4907 11.4038 13.7277 11.1807 13.9555C10.8166 14.3389 10.3569 14.9424 10.6763 15.4671L10.6896 15.4759Z"
                    fill="#039855"
                  />
                  <path
                    d="M17.4242 10.9445L20.0556 15.6593C20.177 15.8696 20.2881 15.9621 20.5432 15.9468C20.8239 15.9332 21.1615 15.7465 21.3751 15.5737C21.6593 15.3519 21.9371 15.0761 22.0995 14.7432C22.1934 14.5488 22.3831 14.1918 22.2582 13.9754L19.6267 9.26052C19.5053 9.05025 19.3942 8.95773 19.1392 8.97304C18.8584 8.98669 18.5209 9.17333 18.3073 9.34612C18.0231 9.56795 17.7453 9.84378 17.5829 10.1767C17.489 10.3711 17.2992 10.728 17.4242 10.9445Z"
                    fill="#039855"
                  />
                  <path
                    d="M8.92746 35.1048C14.3532 36.9611 20.2878 36.3138 25.4512 33.9594C30.6146 31.605 35.203 27.0263 38.0411 21.8583C39.6675 18.8908 40.7773 15.6855 41.4455 12.3723C41.5875 11.6471 40.6511 11.8249 40.2915 12.0161C39.6366 12.3529 39.1222 13.0045 38.9766 13.7235C37.9775 18.7203 35.7041 23.5951 32.1437 27.2835C28.5833 30.9718 24.0896 33.1292 19.1457 33.65C16.2939 33.9523 13.4412 33.6532 10.7239 32.7317C9.76048 32.4056 7.83365 34.7385 8.92128 35.1083L8.92746 35.1048Z"
                    fill="#039855"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_59_10796">
                    <rect
                      width="39.799"
                      height="25.0092"
                      fill="white"
                      transform="translate(0 19.8994) rotate(-30)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                style={{
                  position: "absolute",
                  top: "150px",
                  right: "100px",
                }}
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.64" clipPath="url(#clip0_59_10768)">
                  <path
                    d="M24.4897 14.6109C25.6024 11.5229 26.4146 7.51952 23.9227 4.84135C21.2532 1.96914 16.5771 2.97943 13.712 4.94721C7.1168 9.47241 7.77338 18.781 10.1671 25.4418C11.6397 29.5375 14.0864 33.4281 13.9914 37.9141C13.9776 38.5146 15.6687 38.6306 15.6779 38.0554C15.7525 34.4006 14.1822 31.0634 12.7795 27.7732C11.3768 24.483 10.3823 21.147 10.1904 17.6069C9.99853 14.0669 10.6016 10.5442 12.7465 7.75186C13.8105 6.37286 15.2249 5.24566 16.8313 4.55987C18.2132 3.97256 19.92 3.583 21.3323 4.29813C23.0119 5.14549 23.7849 7.11015 23.8686 8.88922C23.9523 10.6683 23.4968 12.5446 22.8833 14.2473C22.6545 14.8824 24.3095 15.111 24.4897 14.6109Z"
                    fill="#1570EF"
                  />
                  <path
                    d="M24.512 14.6997C27.1466 12.4471 30.5886 11.1267 34.0538 10.9536C35.7267 10.8703 37.424 11.0693 39.0028 11.6471C39.3972 11.7892 39.787 11.9565 40.1602 12.1448C40.4752 12.3076 41.054 12.5252 41.2819 12.8046C41.5098 13.084 41.6455 13.6442 41.7403 14.0057C41.8575 14.4425 41.9035 14.8896 41.8811 15.3389C41.7966 17.035 40.6956 18.4545 39.4669 19.5409C38.1276 20.7221 36.5785 21.6483 35.0267 22.5197C33.1712 23.5597 31.2602 24.5035 29.4174 25.5705C27.5746 26.6375 25.6607 27.8269 23.8398 29.0453C19.854 31.7124 16.0745 34.6691 12.5156 37.8757C11.9427 38.3913 13.5391 38.7826 13.9384 38.4242C17.2855 35.4059 20.8324 32.6075 24.5608 30.0674C26.4991 28.7478 28.4855 27.4949 30.509 26.3136C32.5325 25.1323 34.5287 24.152 36.5159 23.0339C38.1763 22.0984 39.8462 21.0992 41.2315 19.7776C42.4649 18.6032 43.5422 17.1124 43.5761 15.3443C43.5892 14.4835 43.3858 13.3115 42.8571 12.6053C42.6181 12.2815 42.1598 12.0671 41.8121 11.8701C41.3826 11.6256 40.939 11.4075 40.4855 11.2172C38.7179 10.4637 36.7883 10.1227 34.8784 10.0893C30.6744 10.014 26.304 11.4125 23.0972 14.154C22.5181 14.6494 24.1102 15.0527 24.52 14.7026L24.512 14.6997Z"
                    fill="#1570EF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_59_10768">
                    <rect
                      width="34"
                      height="36"
                      fill="white"
                      transform="translate(13.1079 0.303223) rotate(19.8144)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </section>
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
              .
            </p>
          </section>
        </footer>
      </Container>
    );
  }
}

export default InsightsIQ;
