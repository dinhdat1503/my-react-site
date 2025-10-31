import React from 'react';
import { Table, Container } from 'react-bootstrap';

function SpecsTable() {
  return (
    <section id="specs" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Thông số kỹ thuật</h2>
        <Table striped bordered hover>
          <tbody>
            <tr><td>Động cơ</td><td>1.5L Turbo</td></tr>
            <tr><td>Hộp số</td><td>Tự động CVT</td></tr>
            <tr><td>Công suất</td><td>150 mã lực</td></tr>
            <tr><td>Mức tiêu hao nhiên liệu</td><td>6.2L / 100km</td></tr>
            <tr><td>Hệ dẫn động</td><td>FWD</td></tr>
          </tbody>
        </Table>
      </Container>
    </section>
  );
}

export default SpecsTable;
