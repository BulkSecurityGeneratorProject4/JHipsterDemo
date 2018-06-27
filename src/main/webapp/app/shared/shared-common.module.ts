import { NgModule } from '@angular/core';

import { JHipsterDemoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JHipsterDemoSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JHipsterDemoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JHipsterDemoSharedCommonModule {}
