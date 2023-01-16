import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./HeroSixSection.module.css";

const HeroSixSection = () => {
  //Rendering the Testimonial Section
  return (
    <section id="testimonials">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Testimonials</h2>
              <p>This is what our clients are saying</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_content}>
          <Col
            lg={4}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="150"
          >
            <div className={`${classes.text_div} px-2`}>
              <h4 className={classes.header_text}>Dan</h4>
              <p className={classes.text_location}>Tilburg</p>
              <p className={classes.text_content}>
                What a great  meal! You  serve delicious, home-cooked
                meals!
              </p>
            </div>
          </Col>

          <Col
            lg={4}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <div className={`${classes.text_div} px-2`}>
              <h4 className={classes.header_text}>Fleur </h4>
              <p className={classes.text_location}>Eindhoven </p>
              <p className={classes.text_content}>
                {" "}
                Had a small gathering of friends or and ate here we service as very good and the atmoshpere was great!{" "}
              </p>
            </div>
          </Col>

          <Col
            lg={4}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="450"
          >
            <div className={`${classes.text_div} px-2`}>
              <h4 className={classes.header_text}>Laura</h4>
              <p className={classes.text_location}>Tilburg</p>
              <p className={classes.text_content}>
                Premium and highest quality ingredients and delivery service me and my family experienced.
                {" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  //ENd
};

export default HeroSixSection;
