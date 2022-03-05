import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import CharacterList from "../character/CharacterList";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="12">
            <CharacterList />
          </Col>
        </Row>
      </div>
    );
  }
}
