import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function ContactForm() {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Liên hệ tư vấn</h2>
        <Form className="mx-auto" style={{ maxWidth: '600px' }}>
          <Form.Group className="mb-3">
            <Form.Label>Họ và tên</Form.Label>
            <Form.Control type="text" placeholder="Nhập họ tên của bạn" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control type="tel" placeholder="Nhập số điện thoại" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tin nhắn</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Nội dung bạn quan tâm" />
          </Form.Group>
          <Button variant="dark" type="submit">Gửi liên hệ</Button>
        </Form>
      </Container>
    </section>
  );
}

export default ContactForm;
