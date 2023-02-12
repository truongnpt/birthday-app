import React, { useState } from 'react';
import Image from 'next/image'
import { StyledMain, StyledHeroTitle } from '../../styles/StyledMain';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const Main = (props) => {
  const { setComponent } = props;

  const handleClick = () => {
    setComponent('message');
  }
  return (
    <StyledMain>
        <Container className="loading hero-section d-flex flex-column justify-content-xl-center">
        <Row className="align-items-center justify-content-between">
          <Col className="col-9 mt-2 py-0">
              <h3>Trương Thị Trúc Luy</h3>
          </Col>
          <Col className="col-3 mt-2 py-0">
              <div className="top-image">
                <Image
                className='rotating'
                  src={'/luy.jpeg'}
                  width={40}
                  height={40}
                  alt="hero image"
                />
              </div>
          </Col>
        </Row>
        <hr className="mt-2" />
        <Row>
          <Col className="col-12 col-lg-6">
            <StyledHeroTitle>
                  <h3>Happy Birthday</h3>
                  <h2>@Lu Y</h2>
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
                  <span>Gửi Đến Bạn Tui</span>
                </Button>
              </div>
          </Col>
        </Row>
      </Container>
    </StyledMain>
  );
}
