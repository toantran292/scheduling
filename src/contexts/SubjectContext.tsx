import { FC, PropsWithChildren, createContext, useState } from 'react'
import ISubject, { ISubjectWithoutId } from '~/types/subject'

export type ISubjectContext = {
  subjects: ISubject[]
  setSubjects: (subject: ISubjectWithoutId) => void
}

const SubjectContext = createContext<ISubjectContext>({ subjects: [], setSubjects: () => {} })

const SubjectProvider: FC<PropsWithChildren> = ({ children }) => {
  const [subjects, setSubjects] = useState<ISubject[]>([])

  const handleSetSubjects = (subject: ISubjectWithoutId) => {
    setSubjects([...subjects, { id: `id-${Date.now()}`, ...subject }])
  }

  return (
    <SubjectContext.Provider value={{ subjects, setSubjects: handleSetSubjects }}>{children} </SubjectContext.Provider>
  )
}

export { SubjectContext, SubjectProvider }
