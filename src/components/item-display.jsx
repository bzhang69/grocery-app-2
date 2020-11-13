import { Button, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import MapComponent from "./map-component";
import StoreData from "./data/stores-data.json";

//Item modal that shows after clicking on an item.
class ItemDisplay extends Component {
	render() {
		const { showModal, onCloseItem, modalItem } = this.props;

		return (
			<Modal contentClassName="item-display" size="lg" show={showModal}>
				<Modal.Header closeButton onClick={onCloseItem}>
					<Modal.Title>{modalItem.name}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Row>
						<Col lg={5}>
							<Image src={modalItem.url} alt="" fluid />
							<p style={{ margin: 20 }}>{modalItem.desc}</p>
						</Col>
						<Col lg={7} className="ml-auto">
							<MapComponent
								storeData={StoreData.filter((store) => {
									//Only shows stores, which has this item, on the map.
									return store.items.includes(modalItem.name);
								})}
							/>
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
