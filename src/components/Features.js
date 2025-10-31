import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Features() {
  return (
    <section id="features" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Tính năng nổi bật</h2>
        <Row>
          <Col md={4}>
            <h5>Hiệu suất mạnh mẽ</h5>
            <p>Động cơ tiên tiến, tiết kiệm nhiên liệu và tăng tốc ấn tượng.</p>
          </Col>
          <Col md={4}>
            <h5>An toàn tối đa</h5>
            <p>Trang bị túi khí, camera 360°, phanh ABS và hỗ trợ giữ làn.</p>
          </Col>
          <Col md={4}>
            <h5>Công nghệ hiện đại</h5>
            <p>Màn hình cảm ứng, kết nối Apple CarPlay & Android Auto.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
