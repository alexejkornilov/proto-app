import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UsersComponent } from '../users/users.component';
import { AppRoutingModule } from '../app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { TestDataService } from '../data/testData.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    UsersComponent
  ],
  providers: [
    TestDataService,
    {
      provide: NG_SELECT_DEFAULT_CONFIG,
      useValue: {
          placeholder: 'Select item',
          notFoundText: 'Не найденно',
          addTagText: 'Add item',
          typeToSearchText: 'Начните искать',
          loadingText: 'Загрузка...',
          clearAllText: 'Отчистить всё'
      }
  }
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
