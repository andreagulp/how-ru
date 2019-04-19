import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Slider from 'material-ui/Slider';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import ContentRemoveCircle from 'material-ui/svg-icons/content/remove-circle';
import {blueGrey500} from 'material-ui/styles/colors';

class MoodSlider extends Component {

  render () {
    return (
      <Row center="xs">
        <Col xs={3} md={3}>
          <h2>
            <ContentRemoveCircle color={blueGrey500}/>
          </h2>
        </Col>
        <Col xs={6} md={6}>
          <div>
            <Slider defaultValue={0.5}
              onChange={this.props.handleChange}
              value={this.props.moodScore}
            />
          </div>
        </Col>
        <Col xs={3} md={3}>
          <h2>
            <ContentAddCircle color={blueGrey500} />
          </h2>
        </Col>
      </Row>
    )
  }
};
export default MoodSlider
