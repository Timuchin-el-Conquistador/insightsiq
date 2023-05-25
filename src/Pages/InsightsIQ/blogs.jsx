import React from "react";

import classes from "../../assets/css/InsightsIQ/index.module.scss";
import "../../assets/css/antd-pagination.scss";
import Logo from "../../assets/images/InsightsIQ/Logo.svg";
import Blog1 from "../../assets/images/InsightsIQ/blog1.png";
import Avatar from "../../assets/images/InsightsIQ/Avatar.png";
import Lights from "../../assets/images/InsightsIQ/light-strong.png";
import MobileMenu from "../../assets/images/InsightsIQ/mobil-menu.svg";

import { Fade, Zoom, AttentionSeeker } from "react-awesome-reveal";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

const blogs = [
  {
    title: "Blog name goes here",
    shortDescription:
      "Blog description or sneak peak from blog goes here. It \
  should be 2-3 sentence or less, maybe only first sentences \
  of blog would be cool.",
    image: Blog1,
    date: "5 February 2023",
    author: {
      fullName: "Joe Doe",
      avatar: Avatar,
    },
  },
  {
    title: "C Blog",
    shortDescription:
      "Blog description or sneak peak from blog goes here. It \
  should be 2-3 sentence or less, maybe only first sentences \
  of blog would be cool.",
    image: Blog1,
    date: "5 March 2023",
    author: {
      fullName: "Joe Doe",
      avatar: Avatar,
    },
  },
  {
    title: "A Blog",
    shortDescription:
      "Blog description or sneak peak from blog goes here. It \
  should be 2-3 sentence or less, maybe only first sentences \
  of blog would be cool.",
    image: Blog1,
    date: "5 May 2023",
    author: {
      fullName: "Joe Doe",
      avatar: Avatar,
    },
  },
  {
    title: "Z Blog 10",
    shortDescription:
      "Blog description or sneak peak from blog goes here. It \
  should be 2-3 sentence or less, maybe only first sentences \
  of blog would be cool.",
    image: Blog1,
    date: "1 February 2023",
    author: {
      fullName: "Joe Doe",
      avatar: Avatar,
    },
  },
  {
    title: "K Blog 9",
    shortDescription:
      "Blog description or sneak peak from blog goes here. It \
  should be 2-3 sentence or less, maybe only first sentences \
  of blog would be cool.",
    image: Blog1,
    date: "11 February 2023",
    author: {
      fullName: "Joe Doe",
      avatar: Avatar,
    },
  },
  {
    title: "A Blog 7",
    shortDescription:
      "Blog description or sneak peak from blog goes here. It \
  should be 2-3 sentence or less, maybe only first sentences \
  of blog would be cool.",
    image: Blog1,
    date: "10 February 2023",
    author: {
      fullName: "Joe Doe",
      avatar: Avatar,
    },
  },
  {
    title: "Blog 8",
    shortDescription:
      "Blog description or sneak peak from blog goes here. It \
  should be 2-3 sentence or less, maybe only first sentences \
  of blog would be cool.",
    image: Blog1,
    date: "7 February 2023",
    author: {
      fullName: "Joe Doe",
      avatar: Avatar,
    },
  },
  {
    title: "Blog 12",
    shortDescription:
      "Blog description or sneak peak from blog goes here. It \
  should be 2-3 sentence or less, maybe only first sentences \
  of blog would be cool.",
    image: Blog1,
    date: "8 February 2023",
    author: {
      fullName: "Joe Doe",
      avatar: Avatar,
    },
  },
];

class Blogs extends React.Component {
  state = {
    pageSize: 100,
    page: 1,
    active: false, //menu for mobile screens
    blogs,

    filtering: false,
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
  navigateToClickedBlogPage = () => {
    this.props.history.push("/insightsIQ/blogs/blog");
  };

  filteringFn = (fn) => {
    let blogs = [...this.state.blogs];

    if (fn === "new-old") {
      blogs = blogs.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
      });
    } else if (fn === "old-new") {
      blogs = blogs.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.date) - new Date(b.date);
      });
    } else if (fn === "z-a") {
      blogs = blogs.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.

        return b.title > a.title ? 1 : a.title == b.title ? 0 : -1;
      });
    } else {
      blogs = blogs.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return b.title > a.title ? -1 : a.title == b.title ? 0 : 1;
      });
    }

    this.setState((state) => ({
      ...state,
      blogs,
      filtering: false,
    }));
  };

  render() {
    return (
      <Container
        className={`${classes.container} ${classes["blogs"]}`}
        onClick={() =>
          this.setState((state) => ({
            ...state,
            filtering: false,
          }))
        }
      >
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
                <a href="#" className={classes["main-header__link"]}>
                  Pricing
                </a>
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
              <div className={classes.hero__mask} />
              <div className={classes.hero__light} />
              <div className={classes.hero__light} />
              <div className={classes.hero__light} />
              <div className={classes.hero__light} />

              <h1 className={classes.hero__heading}>Blog</h1>
              <p className={classes.hero__subheading}>
                Before using the Insights IQ platform, check out the most
                frequent use cases per each professional field
              </p>
              <div
                style={{
                  position: "relative",
                  marginTop: "250px",
                }}
              >
                <button
                  className={classes["hero__filter-btn"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.setState((state) => ({
                      ...state,
                      filtering: !this.state.filtering,
                    }));
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M10.0833 15.9579H3.50777C2.67555 15.9579 2 16.6217 2 17.4393C2 18.2558 2.67555 18.9206 3.50777 18.9206H10.0833C10.9155 18.9206 11.5911 18.2558 11.5911 17.4393C11.5911 16.6217 10.9155 15.9579 10.0833 15.9579Z"
                      fill="#F9F5FF"
                    />
                    <path
                      opacity="0.4"
                      d="M22.0001 6.37855C22.0001 5.56202 21.3246 4.89832 20.4934 4.89832H13.9179C13.0857 4.89832 12.4102 5.56202 12.4102 6.37855C12.4102 7.19617 13.0857 7.85988 13.9179 7.85988H20.4934C21.3246 7.85988 22.0001 7.19617 22.0001 6.37855Z"
                      fill="#F9F5FF"
                    />
                    <path
                      d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856Z"
                      fill="#F9F5FF"
                    />
                    <path
                      d="M21.9998 17.3992C21.9998 19.2648 20.4609 20.7778 18.5609 20.7778C16.6621 20.7778 15.1221 19.2648 15.1221 17.3992C15.1221 15.5326 16.6621 14.0196 18.5609 14.0196C20.4609 14.0196 21.9998 15.5326 21.9998 17.3992Z"
                      fill="#F9F5FF"
                    />
                  </svg>
                  Filter
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="#F4EBFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {this.state.filtering ? (
                  <div
                    className={classes["hero__filter-options"]}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="button"
                      value="Sort A-Z"
                      onClick={() => this.filteringFn("a-z")}
                    />
                    <input
                      type="button"
                      value="Sort Z-A"
                      onClick={() => this.filteringFn("z-a")}
                    />
                    <input
                      type="button"
                      value="New to Old"
                      onClick={() => this.filteringFn("new-old")}
                    />
                    <input
                      type="button"
                      value="Old to New"
                      onClick={() => this.filteringFn("old-new")}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </Fade>

          <section
            className={`${classes.blogs} ${
              this.state.filtering ? classes["blogs--filter"] : null
            }`}
          >
            <Row className={classes.blogs__container}>
              {this.state.blogs.map((blog, index) => (
                <Fade delay="1" style={{width: 'fit-content' }} key={index}>
                  <article
                    className={classes.blogs__blog}
                    onClick={this.navigateToClickedBlogPage}
                  >
                    {" "}
                    <figure>
                      {" "}
                      <img src={Blog1} alt="Image for Blog" />{" "}
                    </figure>{" "}
                    <header>
                      by <img src={blog.author.avatar} alt="" />{" "}
                      <span>{blog.author.fullName}</span>{" "}
                    </header>{" "}
                    <div>
                      {" "}
                      <h3>{blog.title}</h3>
                      <p>{blog.shortDescription}</p> <time>{blog.date}</time>{" "}
                    </div>
                  </article>
                </Fade>
              ))}
            </Row>
            <div className={classes.blogs__lights}>
              <img src={Lights} alt="" />
            </div>
            <div className={classes.blogs__pagination}>
              <Pagination defaultCurrent={1} total={this.state.pageSize * 10} />
            </div>
          </section>
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

export default Blogs;
