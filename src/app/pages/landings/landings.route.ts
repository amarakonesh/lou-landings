import { Route } from '@angular/router'
import { MobileShowcaseComponent } from './mobile-showcase/mobile-showcase.component'

export const LANDING_ROUTES: Route[] = [
  {
    path: 'mobile-showcase',
    component: MobileShowcaseComponent,
    data: { title: 'Mobile App Showcase' },
  },
  
]
