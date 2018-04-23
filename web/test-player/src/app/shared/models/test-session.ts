import {QuestionType} from "./question";

export interface TestSession {
  _id: string,
  test_id: number,
  difficulty: number,
  start_at: number,
  score: number,
  questions: QuestionType[],
  open_question: number,
  num_questions: number
}
