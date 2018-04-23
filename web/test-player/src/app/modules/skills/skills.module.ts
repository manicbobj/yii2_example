import {NgModule, Renderer} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {IsotopeModule} from "ngx-isotope";

import {SkillTestPage} from "./pages/skilltest/skilltest.page";
import {SkillsPage} from "./pages/skills/skills.page";

import {CardComponent} from "./components/card/card.component";

import {SharedModule} from "../../shared/shared.module";
import {EvaluationPage} from "./pages/evaluation/evaluation.page";

import {RenderPlaceholderDirective} from "./directives/render-placeholder/render-placeholder.directive";
import {ShapeComponent} from "./components/shape/shape.component";
import {ComponentContainerDirective} from "./directives/component-container/component-container.directive";
import {RenderCountAtomComponent} from "./engines/count-atom/render-count-atom/render-count-atom.component";
import {RenderPutAtomComponent} from "./engines/put-atom/render-put-atom/render-put-atom.component";
import {RenderShapeInFrameComponent} from "./engines/shape-in-frame/render-shape-in-frame/render-shape-in-frame.component";
import {RenderNumAtomComponent} from "./engines/num-atom/render-num-atom/render-num-atom.component";
import {RenderOrdinalSquareComponent} from "./engines/ordinal-square/render-ordinal-square/render-ordinal-square.component";
import {RenderRepresentNumComponent} from "./engines/represent-num/render-represent-num/render-represent-num.component";
import {FeedbackCountAtomComponent} from "./engines/count-atom/feedback-count-atom/feedback-count-atom.component";
import {FeedbackPutAtomComponent} from "./engines/put-atom/feedback-put-atom/feedback-put-atom.component";
import {FeedbackShapeInFrameComponent} from "./engines/shape-in-frame/feedback-shape-in-frame/feedback-shape-in-frame.component";
import {FeedbackOrdinalSquareComponent} from "./engines/ordinal-square/feedback-ordinal-square/feedback-ordinal-square.component";
import {FeedbackRepresentNumComponent} from "./engines/represent-num/feedback-represent-num/feedback-represent-num.component";
import {RenderMoreOrLessComponent} from "./engines/more-or-less/render-more-or-less/render-more-or-less.component";
import {FeedbackMoreOrLessComponent} from "./engines/more-or-less/feedback-more-or-less/feedback-more-or-less.component";
import {RenderCountMoreOrLessComponent} from "./engines/count-more-or-less/render-count-more-or-less/render-count-more-or-less.component";
import {FeedbackCountMoreOrLessComponent} from "./engines/count-more-or-less/feedback-count-more-or-less/feedback-count-more-or-less.component";
import {RenderCountUpDownComponent} from "./engines/count-up-down/render-count-up-down/render-count-up-down.component";
import {FeedbackCountUpDownComponent} from "./engines/count-up-down/feedback-count-up-down/feedback-count-up-down.component";
import {RenderTallyMarkComponent} from "./engines/tally-mark/render-tally-mark/render-tally-mark.component";
import {FeedbackTallyMarkComponent} from "./engines/tally-mark/feedback-tally-mark/feedback-tally-mark.component";
import {RenderFillShapeInFrameComponent} from "./engines/fill-shape-in-frame/render-fill-shape-in-frame/render-fill-shape-in-frame.component";
import {FeedbackFillShapeInFrameComponent} from "./engines/fill-shape-in-frame/feedback-fill-shape-in-frame/feedback-fill-shape-in-frame.component";
import {RenderNumberLineComponent} from "./engines/number-line/render-number-line/render-number-line.component";
import {FeedbackNumberLineComponent} from "./engines/number-line/feedback-number-line/feedback-number-line.component";


const routes: Routes = [
  { path: 'math/:grade',   component: SkillsPage, data: {subject: 'math'}},
  { path: 'english/:grade',   component: SkillsPage, data: {subject: 'english'} },
  { path: 'test/:test_id',   component: SkillTestPage },
  { path: 'evaluation/:session_id', component: EvaluationPage}
];

@NgModule({
  imports: [
    CommonModule,
    IsotopeModule,
    FormsModule,
    RouterModule.forChild(
        routes,
        // { enableTracing: true } // <-- debugging purposes only
    ),
    SharedModule
  ],
  declarations: [
      SkillsPage,
      SkillTestPage,
      EvaluationPage,

      RenderPlaceholderDirective,
      ComponentContainerDirective,

      RenderCountAtomComponent,
      RenderPutAtomComponent,
      RenderShapeInFrameComponent,
      RenderNumAtomComponent,
      RenderRepresentNumComponent,
      RenderOrdinalSquareComponent,
      RenderMoreOrLessComponent,
      RenderCountMoreOrLessComponent,
      RenderCountUpDownComponent,
      RenderTallyMarkComponent,
      RenderFillShapeInFrameComponent,
      RenderNumberLineComponent,

      FeedbackCountAtomComponent,
      FeedbackPutAtomComponent,
      FeedbackShapeInFrameComponent,
      FeedbackRepresentNumComponent,
      FeedbackOrdinalSquareComponent,
      FeedbackMoreOrLessComponent,
      FeedbackCountMoreOrLessComponent,
      FeedbackCountUpDownComponent,
      FeedbackTallyMarkComponent,
      FeedbackFillShapeInFrameComponent,
      FeedbackNumberLineComponent,
      ShapeComponent,
      CardComponent
  ],
  entryComponents: [
      RenderCountAtomComponent,
      RenderPutAtomComponent,
      RenderNumAtomComponent,
      RenderShapeInFrameComponent,
      RenderRepresentNumComponent,
      RenderOrdinalSquareComponent,
      RenderMoreOrLessComponent,
      RenderCountMoreOrLessComponent,
      RenderCountUpDownComponent,
      RenderTallyMarkComponent,
      RenderFillShapeInFrameComponent,
      RenderNumberLineComponent,

      FeedbackCountAtomComponent,
      FeedbackPutAtomComponent,
      FeedbackShapeInFrameComponent,
      FeedbackRepresentNumComponent,
      FeedbackOrdinalSquareComponent,
      FeedbackMoreOrLessComponent,
      FeedbackCountMoreOrLessComponent,
      FeedbackCountUpDownComponent,
      FeedbackTallyMarkComponent,
      FeedbackFillShapeInFrameComponent,
      FeedbackNumberLineComponent,
      CardComponent,
      ShapeComponent
  ]
})
export class SkillsModule { }
