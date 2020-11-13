import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

const HomePage = () => {
	return (
		<React.Fragment>
			<header>
				<NavBar />
			</header>
			<main>
				<section className="jumbotron text-center">
					<div className="container">
						<h1 className="jumbotron-heading">Welcome!</h1>
						<p className="lead text-muted">
							This is an App that helps you to find any grocery items and stores
							in your neighborhood!
						</p>
						<p>
							<Link className="btn btn-primary my-2" to="/app">
								Start Exploring!
							</Link>
						</p>
					</div>
				</section>
				<div className="container" style={{ marginBottom: "50px" }}>
					<Carousel>
						<Carousel.Item interval={1500}>
							<Image
								className="d-block w-100"
								src="https://previews.123rf.com/images/weedezign/weedezign1508/weedezign150800148/43872267-blurred-background-people-in-coffee-shop-blur-background-with-bokeh-light-with-vintage-filter-.jpg"
								alt="First slide"
							/>
							<Carousel.Caption>
								<h1>Find the groceries you need.</h1>
								<p>Fruits, Vegetables, Meat, anything you can think of!</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={1500}>
							<Image
								className="d-block w-100"
								src="https://previews.123rf.com/images/anaumenko/anaumenko1901/anaumenko190100220/116033735-grocery-shopping-concept-foods-with-shopping-bag.jpg"
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h1>Find where they are.</h1>
								<p>Get the store location for your item!</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={1500}>
							<Image
								className="d-block w-100"
								src="https://previews.123rf.com/images/rh2010/rh20101812/rh2010181200922/114133789-courier-service-worker-delivering-fresh-food-to-a-happy-woman-client-signing-some-documents-on-the-k.jpg"
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h1>Plan your shopping ahead.</h1>
								<p>Create your shopping list right now!</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</main>
		</React.Fragment>
	);
};

export default HomePage;
