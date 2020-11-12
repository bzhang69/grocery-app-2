import { Button, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "./myStyle.css";
import Image from "react-bootstrap/Image";
import MapComponent from "./map-component";
import StoreData from "./data/stores-data.json";

class ItemDisplay extends Component {
	state = {};
	render() {
		const { showModal, onCloseItem, modalItem } = this.props;
		const pos = StoreData.map((store) => store.pos);

		return (
			<Modal
				contentClassName="item-display"
				size="lg"
				animation={false}
				show={showModal}
			>
				<Modal.Header closeButton onClick={onCloseItem}>
					<Modal.Title>{modalItem.name}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Row style={{ height: "100%" }}>
						<Col lg={5}>
							<Image src={modalItem.url} alt="" fluid />
							<p style={{ margin: 20 }}>{modalItem.desc}</p>
						</Col>
						<Col lg={7} className="ml-auto">
							<MapComponent markerPos={pos} />
						</Col>
					</Row>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="primary" onClick={onCloseItem}>
						OK
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default ItemDisplay;
