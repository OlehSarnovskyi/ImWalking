import {NgModule} from '@angular/core';
import {CrudPostPageComponent} from "./crud-post-page.component";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {NgxsModule} from "@ngxs/store";
import {CrudPostState} from "./store";
import {CrudPostService} from "./services";
import {PostFormComponent} from './components';
import {CrudPostRoutingModule} from "./crud-post-routing.module";
import {QuillModule} from "ngx-quill";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";
import {MatOptionModule} from "@angular/material/core";
import {PasteEventTrimmerModule} from "paste-event-trimmer";
import {LoggedLayoutModule} from "../../logged-layout.module";


@NgModule({
  declarations: [
    CrudPostPageComponent,
    PostFormComponent,
  ],
  imports: [
    CrudPostRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    NgxsModule.forFeature([CrudPostState]),
    NgxsFormPluginModule,
    QuillModule.forRoot(),
    PasteEventTrimmerModule,
    // TODO refactor, create module for posts-list component
    LoggedLayoutModule
  ],
  providers: [CrudPostService]
})
export class CrudPostModule {}
