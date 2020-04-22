import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'restaurant',
        loadChildren: () => import('./restaurant/restaurant.module').then(m => m.MyAppRestaurantModule)
      },
      {
        path: 'cooperative',
        loadChildren: () => import('./cooperative/cooperative.module').then(m => m.MyAppCooperativeModule)
      },
      {
        path: 'basket',
        loadChildren: () => import('./basket/basket.module').then(m => m.MyAppBasketModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.MyAppProductModule)
      },
      {
        path: 'payment',
        loadChildren: () => import('./payment/payment.module').then(m => m.MyAppPaymentModule)
      },
      {
        path: 'course',
        loadChildren: () => import('./course/course.module').then(m => m.MyAppCourseModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.MyAppOrderModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class MyAppEntityModule {}
