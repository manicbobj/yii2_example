import {QuestionTemplateType} from "./question-template";
import {ImageType} from "./image";

interface ScoreResultType {
  score: number;
  max_score: number;
  suggestion: any;
}

interface ResponseValidationType {
  score: number;
  value: any;
}

interface QuestionValidation {
  valid_response: ResponseValidationType;
  alt_responses: ResponseValidationType[];
}

export class QuestionResponseClass {
  value: any;
}

export interface QuestionType {
  template: QuestionTemplateType,
  render_options: any,
  problem: number,
  difficulty: number,
  response?: QuestionResponseClass;
  result?: ScoreResultType;
  validation?: QuestionValidation;
}
