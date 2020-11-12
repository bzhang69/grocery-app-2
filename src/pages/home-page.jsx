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
						<Link as={Link} to="/app">
							<p>
								<a className="btn btn-primary my-2">Start Exploring!</a>
							</p>
						</Link>
					</div>
				</section>
				<div className="container" style={{ marginBottom: "50px" }}>
					<Carousel>
						<Carousel.Item>
							<Image
								className="d-block w-100"
								src="https://picsum.photos/200/300"
								alt="First slide"
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<Image
								className="d-block w-100"
								src="https://picsum.photos/200/300"
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<Image
								className="d-block w-100"
								src="https://picsum.photos/200/300"
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl
									consectetur.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</main>
		</React.Fragment>
	);
};

export default HomePage;
