import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author2Position: 'Blockchain Developer',
  author1Position: 'Crypto Enthusiast',
  author3Alt: 'Image of Eve Brown',
  author1Name: 'Alice Johnson',
  author1Src:
    'https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDEzM3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'Eve Brown',
  review2:
    "Destiny Labs' algorithm is a breath of fresh air in the crypto space. It rewards genuine involvement and creates a sense of community.",
  author2Name: 'Bob Smith',
  author4Position: 'Blockchain Enthusiast',
  author4Name: 'Charlie Lee',
  author4Src:
    'https://images.unsplash.com/photo-1624561272659-224ea122b2e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDEzM3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of Alice Johnson',
  author2Src:
    'https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDEzNHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1484353371297-d8cfd2895020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzE3NDEzNHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Bob Smith',
  author4Alt: 'Image of Charlie Lee',
  content1:
    'Destiny Labs has completely changed the way I view airdrops. Their innovative approach to rewarding active engagement is truly game-changing.',
  author3Position: 'Cryptocurrency Investor',
  review1:
    "I've participated in many airdrops, but Destiny Labs stands out for its fairness and transparency. Highly recommended!",
  heading1: 'Testimonials',
  review3:
    "As someone who values authenticity, Destiny Labs' commitment to on-chain verification gives me peace of mind. Excited to see what's next!",
  review4:
    "Destiny Labs' neon-drenched vibes and engaging design make participating in airdrops a thrilling experience. Can't wait for more!",
}

Testimonial.propTypes = {
  author2Position: PropTypes.string,
  author1Position: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Name: PropTypes.string,
  author1Src: PropTypes.string,
  author3Name: PropTypes.string,
  review2: PropTypes.string,
  author2Name: PropTypes.string,
  author4Position: PropTypes.string,
  author4Name: PropTypes.string,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  content1: PropTypes.string,
  author3Position: PropTypes.string,
  review1: PropTypes.string,
  heading1: PropTypes.string,
  review3: PropTypes.string,
  review4: PropTypes.string,
}

export default Testimonial
