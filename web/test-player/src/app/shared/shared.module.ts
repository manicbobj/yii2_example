import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KeysPipe} from "./pipes/keys/keys.pipe";
import {RestAPIService} from "./service/RestAPI/restapi.service";
import {ToWordsOrdinalPipe} from "./pipes/to-words-ordinal/to-words-ordinal.pipe";
import {ToWordsPipe} from "./pipes/to-words/to-words.pipe";
import {CapitalizeFirstPipe} from "./pipes/capitalizefirst/cacapitalizefirst.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KeysPipe, ToWordsOrdinalPipe, ToWordsPipe, CapitalizeFirstPipe],
  exports: [
      KeysPipe,
      CapitalizeFirstPipe,
      ToWordsOrdinalPipe,
      ToWordsPipe
  ]
})
export class SharedModule { }
