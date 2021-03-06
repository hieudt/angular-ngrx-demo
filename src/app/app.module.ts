import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { ThreadListComponent } from './components/thread-list/thread-list.component';
import { ThreadSectionComponent } from './components/thread-section/thread-section.component';
import { UserSearchContainerComponent } from './components/user-search-container/user-search-container.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { ThreadsService } from './services/threads/threads.service';
import { UserSearchService } from './services/user-search/user-search.service';
import { INITIAL_APPLICATION_STATE } from './store/application-state';
import { ThreadsEffectService } from './store/effects/threads-effect/threads-effect.service';
import { storeReducer, uiReducer } from './store/reducers';

const reducersMap = { uiState: uiReducer, storeData: storeReducer };

@NgModule({
  declarations: [
    AppComponent,
    ThreadSectionComponent,
    ThreadListComponent,
    UserSearchComponent,
    UserSearchContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducersMap, {
      initialState: INITIAL_APPLICATION_STATE,
    }),
    EffectsModule.forRoot([ThreadsEffectService]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [ThreadsService, UserSearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
