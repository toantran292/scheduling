import { Card, List } from 'antd'
import useSubject from '~/hooks/useSubject'

const SubjectList = () => {
  const { subjects } = useSubject()
  return (
    <Card
      type='inner'
      title='Subjects List'
      style={{ height: '100%', maxHeight: 'calc(100vh - 450px)' }}
      headStyle={{ height: '5%' }}
      bodyStyle={{ height: '90%', overflow: 'auto' }}
    >
      <List
        itemLayout='horizontal'
        dataSource={subjects}
        renderItem={(item) => (
          <List.Item actions={[<a key='list-loadmore-edit'>edit</a>, <a key='list-loadmore-more'>more</a>]}>
            <List.Item.Meta title={item.name} description={`${item.dayOfWeek} - ${item.periods}`} />
          </List.Item>
        )}
      />
    </Card>
  )
}

export default SubjectList
