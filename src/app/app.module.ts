import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceptCookieComponent } from './accept-cookie/accept-cookie.component';
import { RichTextComponent } from './rich-text/rich-text.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RichTextSfComponent } from './rich-text-sf/rich-text-sf.component';
// import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
// import { DialogModule } from '@syncfusion/ej2-angular-popups';

@NgModule({
  declarations: [
    AppComponent,
    AcceptCookieComponent,
    RichTextComponent,
    RichTextSfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //RichTextEditorAllModule,
    // DialogModule,
    NgxEditorModule.forRoot({locals: {
      // menu
      bold: 'Bold',
      italic: 'Italic',
      code: 'Code',
      blockquote: 'Blockquote',
      underline: 'Underline',
      strike: 'Strike',
      bullet_list: 'Bullet List',
      ordered_list: 'Ordered List',
      heading: 'Heading',
      h1: 'Header 1',
      h2: 'Header 2',
      h3: 'Header 3',
      h4: 'Header 4',
      h5: 'Header 5',
      h6: 'Header 6',
      align_left: 'Left Align',
      align_center: 'Center Align',
      align_right: 'Right Align',
      align_justify: 'Justify',
      text_color: 'Text Color',
      background_color: 'Background Color',

      // popups, forms, others...
      url: 'URL',
      text: 'Text',
      openInNewTab: 'Open in new tab',
      insert: 'Insert',
      altText: 'Alt Text',
      title: 'Title',
      remove: 'Remove',
    },})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
