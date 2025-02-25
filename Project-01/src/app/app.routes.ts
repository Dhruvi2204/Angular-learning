import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/api/get-api/get-api.component';
import { PostApiComponent } from './components/api/post-api/post-api.component';
import { NestedServiceExampleComponent } from './components/nested-service-example/nested-service-example.component';
import { ResourceApiComponent } from './components/resource-api/resource-api.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dataBinding',
    pathMatch: 'full',
  },
  // Above is the default route
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'dataBinding',
    component: DataBindingComponent,
  },
  {
    path: 'ng-For',
    component: NgForComponent,
  },
  {
    path: 'ng-if',
    component: NgIfComponent,
  },
  {
    path: 'ng-style',
    component: NgStyleComponent,
  },
  {
    path: 'ng-class',
    component: NgClassComponent,
  },
  {
    path: 'control-statement',
    component: ControlStatementComponent,
  },
  {
    path: 'signal',
    component: SignalComponent,
  },
  {
    path: 'linked-signal',
    component: LinkedSignalComponent,
  },
  {
    path: 'template-form',
    component: TemplateFormComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  {
    path: 'get-api',
    component: GetApiComponent,
  },
  {
    path: 'post-api',
    component: PostApiComponent,
  },
  {
    path: 'nested-service',
    component: NestedServiceExampleComponent,
  },
  {
    path: 'resource-api',
    component: ResourceApiComponent,
  },
  {
    path: 'lifecycle',
    component: LifecycleComponent,
  },
];
