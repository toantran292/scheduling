// import { useState } from 'react'
// import useSubject from './hooks/useSubject'

import React from 'react'
import { Col, Row } from 'antd'
import Subject from './components/Subject'
import './main.css'

const App: React.FC = () => (
  <Row style={{ height: '100vh', overflow: 'hidden', padding: '10px' }}>
    <Col span={16} push={8}></Col>
    <Col span={8} pull={16} style={{ height: '100%' }}>
      <Subject />
    </Col>
  </Row>

  // <DefaultLayout />
)

export default App
