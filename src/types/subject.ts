type ISubject = {
  id: string
  name: string
  dayOfWeek: number
  start: number
  periods: number
}

export type ISubjectWithoutId = Omit<ISubject, 'id'>
export default ISubject
