export interface TestType {
  _id: string,
  id: number,
  field: string,
  grade: string,
  question_types: number[],
  order: number,
  difficulty: number,
  section_id: number
}
