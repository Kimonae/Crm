import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [UiModule, IconsModule, TemplatesModule]

})
export class CoreModule { }
