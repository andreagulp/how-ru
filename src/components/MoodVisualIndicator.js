import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import smiley1 from '../assets/imgs/smiley1.png'
import smiley2 from '../assets/imgs/smiley2.png'
import smiley3 from '../assets/imgs/smiley3.png'
import smiley4 from '../assets/imgs/smiley4.png'
import smiley5 from '../assets/imgs/smiley5.png'


class MoodVisualIndicator extends Component {

  changeMoodIcon = () => {
    if (this.props.moodScore < 0.2) {
      return smiley1
    } else if (this.props.moodScore >= 0.2 && this.props.moodScore < 0.4) {
      return smiley2
    } else if (this.props.moodScore >= 0.4 && this.props.moodScore < 0.6) {
      return smiley3
    } else if (this.props.moodScore >= 0.6 && this.props.moodScore < 0.8) {
      return smiley4
    } else {
      return smiley5
    }
  }


  render () {
    const iconAltText = 'some text';
    const moodScorePerc = this.props.moodScore * 100

    const percStyle = {
      fontSize: "200%"
    };

    return (
        <Row middle="xs">
          <Col xs={6} md={6}>
            <img alt={iconAltText} src={this.changeMoodIcon()} className="moodicon"/>
          </Col>
          <Col xs={6} md={6}>
            <h1 style={percStyle}>{moodScorePerc.toFixed()} %</h1>
          </Col>
        </Row>
    )
  }
};
export default MoodVisualIndicator
