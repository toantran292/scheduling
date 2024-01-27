import { Button, Card, Form, Input, Select } from 'antd'
import useSubject from '~/hooks/useSubject'
import { ISubjectWithoutId } from '~/types/subject'

const daysOfWeekOptions = [
  { key: 'mo', text: 'Monday', value: 0 },
  { key: 'tu', text: 'Tuesday', value: 1 },
  { key: 'we', text: 'Wednesday', value: 2 },
  { key: 'th', text: 'Thursday', value: 3 },
  { key: 'fr', text: 'Friday', value: 4 },
  { key: 'sa', text: 'Saturday', value: 5 },
  { key: 'su', text: 'Sunday', value: 6 }
]

const periodOptions = [
  { key: '1', text: '1', value: 1 },
  { key: '2', text: '2', value: 2 },
  { key: '3', text: '3', value: 3 },
  { key: '4', text: '4', value: 4 },
  { key: '5', text: '5', value: 5 }
]

const startOptions = [
  { key: '1', text: '1', value: 1 },
  { key: '2', text: '2', value: 2 },
  { key: '3', text: '3', value: 3 },
  { key: '4', text: '4', value: 4 },
  { key: '5', text: '5', value: 6 },
  { key: '7', text: '7', value: 7 },
  { key: '8', text: '8', value: 8 },
  { key: '9', text: '9', value: 9 },
  { key: '10', text: '10', value: 10 },
  { key: '11', text: '11', value: 11 },
  { key: '12', text: '12', value: 12 }
]

const { Option } = Select

type FieldType = ISubjectWithoutId

const SubjectForm = () => {
  const [form] = Form.useForm()
  const { setSubjects } = useSubject()

  const onFinish = (values: ISubjectWithoutId) => {
    // form.resetFields()
    setSubjects(values)
  }

  return (
    <Card type='inner' title='Subjects Form' bodyStyle={{ padding: '10px' }}>
      <Form
        form={form}
        name='subjectForm'
        labelCol={{ flex: '110px' }}
        labelAlign='left'
        labelWrap
        wrapperCol={{ flex: 1 }}
        onFinish={onFinish}
        autoComplete='off'
      >
        <Form.Item<FieldType>
          label='Subject Name'
          name='name'
          rules={[{ required: true, message: 'Please input subject name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label='Days Of Week'
          name='dayOfWeek'
          rules={[{ required: true, message: 'Please choose days of week!' }]}
        >
          <Select placeholder='Days Of Week' allowClear>
            {daysOfWeekOptions.map((value) => (
              <Option key={value.key} value={value.value}>
                {value.text}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item<FieldType> label='Start' name='start' rules={[{ required: true, message: 'Please choose Start!' }]}>
          <Select placeholder='Start' allowClear>
            {startOptions.map((value) => (
              <Option key={value.key} value={value.value}>
                {value.text}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item<FieldType>
          label='Periods'
          name='periods'
          rules={[{ required: true, message: 'Please choose periods!' }]}
        >
          <Select placeholder='Periods' allowClear>
            {periodOptions.map((value) => (
              <Option key={value.key} value={value.value}>
                {value.text}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default SubjectForm
