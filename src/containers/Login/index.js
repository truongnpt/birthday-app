import React, { useState } from 'react';
import Image from 'next/image'
import { StyledLogin, StyledHeroTitle } from '../../styles/StyledLogin';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export const Login = (props) => {
    const { setComponent } = props;

    const handleClick = () => {
      setComponent('main');
    }
  return (
    <StyledLogin>
        <Container className="loading hero-section d-flex flex-column justify-content-xl-center">
        <Row>
          <Col className="col-12 col-lg-6">
            <StyledHeroTitle>
                  Hi Hi!
                  <br />
                  <h2>Lu Y</h2>
                </StyledHeroTitle>
                <div className="hero-image pulse mt-5 m-auto">
                  <Image
                    src={'/luy.jpeg'}
                    width={200}
                    height={200}
                    alt="avata"
                  />
                </div>
              <div
                className="hero-content--learn-more"
              >
                <Button
                  className="button d-flex m-auto"
                  onClick={() => handleClick()}
                >
                  <span>Get Start</span>
                </Button>
              </div>
          </Col>
        </Row>
      </Container>
    </StyledLogin>
  );
}
