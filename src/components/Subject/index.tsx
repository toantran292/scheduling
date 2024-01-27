import { Col, Row } from 'antd'
import SubjectForm from './SubjectForm'
import SubjectList from './SubjectList'
const Subject = () => {
  return (
    <Row gutter={[16, 24]}>
      <Col span={24}>
        <SubjectForm />
      </Col>
      <Col span={24} style={{ overflow: 'hidden' }}>
        <SubjectList />
      </Col>
    </Row>
  )
}

export default Subject
