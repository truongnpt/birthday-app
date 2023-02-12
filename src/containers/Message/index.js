import React, { useState } from 'react';
import Image from 'next/image'
import { StyledMessage, StyledCard } from '../../styles/StyledMessage';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export const Message = (props) => {
  const { setComponent } = props;

  const handleClick = () => {
    setComponent('login');
  }
  return (
    <StyledMessage>
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
              <Card>
                <StyledCard>
                  <h5>Sinh nhật vui vẻ nha Luy ơi!</h5>
                  <p>
                    Tuổi mới chúc bạn ngày càng xinh, luôn vui vẻ, sức khoẻ dồi dào, làm tiền vào như nước và những điều bạn ước sẽ thành hiện thực.
                  </p>
                  <p>
                    Chơi chung với nhau cũng tròn 10 năm rầu.
                  </p>
                  <p>
                    Có thể là do mình nghĩ nhiều 😁, đôi khi tui dới bạn nói chiện không hợp, conflic trong cách nhắn ák.
                  </p>
                  <p>
                    Mà thâu, năm mới, tuổi mới rồi. Những gì qua rầu thì cho qua. Chúng ta xứng đáng có 1 cuộc sống tốt hơn🌞.
                  </p>
                  <p>
                    Viết nhiêu đây chắc cũng nhiều rầu. Lần nữa chúc bạn sinh nhật vui vẻ nha.
                  </p>
                  <p className="d-flex justify-content-end"><i>--Trường Npt--</i></p>
                </StyledCard>
              </Card>
              <div
                className="hero-content--learn-more"
              >
                <Button
                  className="button d-flex m-auto"
                  onClick={() => handleClick()}
                >
                  <span>Go Back</span>
                </Button>
              </div>
          </Col>
        </Row>
      </Container>
    </StyledMessage>
  );
}
