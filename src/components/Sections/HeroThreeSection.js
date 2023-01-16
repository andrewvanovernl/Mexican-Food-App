import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroThreeSection.module.css";
import dish1 from "../../assets/image/dish1.webp";
import dish2 from "../../assets/image/dish2.webp";
import dish3 from "../../assets/image/dish3.webp";
import dish4 from "../../assets/image/dish4.webp";
import dish5 from "../../assets/image/dish5.webp";
import dish6 from "../../assets/image/dish6.webp";
import HeroThreeContent from "../SectionComponents/HeroThreeContent";

//Data objects to be used in the HeroThree section for rendering dishes information
const dummyListone = [
  {
    id: "d1",
    src: dish1,
    name: "Chilaquiles is definitely the most popular breakfast in the country. Made of triangular pieces of fried or toasted corn tortilla, called totopos, soaked in a red or green hot sauce, topped with shredded chicken, chorizo, shredded beef, and scrambled or sunny side up egg. It is decorated with fresh cheese, coriander, and sliced onion and is served with fried beans on the side. ",
    price: 19.99,
  },

  {
    id: "d2",
    src: dish2,
    name: "This is one of the most popular dishes on the northern side of México. Machaca is very versatile; you can either eat it in a taco, a stuffed burrito, flautas, or just as a stew with some tortillas, beans, or rice on the side. Machaca is simply a shredded version of dried beef with a proper seasoning. It´s delicious! ",
    price: 16.50,
  },

  {
    id: "d3",
    src: dish3,
    name: "A northern meaty dish, yes… it´s full of meat: sausage, chorizo, ground meat, ham, bacon, lard, jalapeño pepper, onion. And it is all seasoned with thyme, celery, cumin, oregano, bay leaf, black pepper, black sauces, salt, rosemary, a bit of dark beer, etc. This dish is cooked on a plow disc previously cured over some wood. It is a traditional dish for family reunions. ",
    price: 13.99,
  },
];

const dummyListtwo = [
  {
    id: "d4",
    src: dish4,
    name: "Recognized as the most popular Mexican dish worldwide, the taco has become an art. Some say is the “art of eating with tortilla” and, of course, Mexicans would never deny a taco to anybody. Hundreds of fillings can be put on a corn tortilla! The most common are beef steak, flank steak, chorizo, offal, “al pastor”, hot and sweet marinated pork.",
    price: 15.99,
  },

  {
    id: "d5",
    src: dish5,
    name: "This is very popular on the northern side of México, especially the states bordering the United States. A burrito is a cylindrically rolled flour tortilla stuffed with different ingredients of choice, often a stew. The most popular are the fried bean burrito with cheese and the machaca burrito. ",
    price: 11.00,
  },

  {
    id: "d6",
    src: dish6,
    name: "Tamales are an icon of Mexican food. You can eat these all day every day, especially on the Day of The Candelaria. It comes from pre-Hispanic America, and is náhuatl in the indigenous language, meaning wrapped. These can be wrapped in corn leaves or banana leaves and stuffed with any stew of your choice. The most common are mole, shredded chicken or pork with green or red salsa, pepper with cheese, and yellow corn kernels. ",
    price: 8.00,
  },
];
//END

const HeroThreeSection = () => {
  //Mapping the data from the object above and storing them in a variable
  const dishList1 = dummyListone.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));

  const dishList2 = dummyListtwo.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));
  //END

  //Rendering the Hero Three section
  return (
    <section id="dishes">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Our daily dishes</h2>
              <p>Check out recommended dishes of your choice</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_dish}>{dishList1}</Row>

        <Row>{dishList2}</Row>
      </Container>
    </section>
  );
  //END
};

export default HeroThreeSection;
