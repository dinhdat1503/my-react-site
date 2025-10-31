import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Pricing() {
  return (
    <section id="pricing" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Bảng giá</h2>
        <Row>
          <Col md={4}>
            <Card className="text-center shadow">
              <Card.Body>
                <Card.Title>Bản Tiêu chuẩn</Card.Title>
                <Card.Text>Giá: 650.000.000₫</Card.Text>
                <Button variant="dark">Chi tiết</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center shadow">
              <Card.Body>
                <Card.Title>Bản Cao cấp</Card.Title>
                <Card.Text>Giá: 750.000.000₫</Card.Text>
                <Button variant="dark">Chi tiết</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center shadow">
              <Card.Body>
                <Card.Title>Bản Đặc biệt</Card.Title>
                <Card.Text>Giá: 850.000.000₫</Card.Text>
                <Button variant="dark">Chi tiết</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Pricing;
