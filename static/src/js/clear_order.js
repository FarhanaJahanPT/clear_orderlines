odoo.define('pos_button.Custom', function(require) {
'use strict';
  const PosComponent = require('point_of_sale.PosComponent');
  const ProductScreen = require('point_of_sale.ProductScreen');
//  const { useListener } = require("@web/core/utils/hooks");
  const Registries = require('point_of_sale.Registries');
  class CustomDemoButtons extends PosComponent {
//      setup() {
//          super.setup();
//          useListener('click', this.onClick);
//      }
     async onClick() {
               const { confirmed} = await this.showPopup("ConfirmPopup", {
                       title: this.env._t('Clear Orders?'),
                       body: this.env._t('Are you sure you want to delete all orders ?'),
                  });
                  if( confirmed){
                    console.log('ppppp')
                    const order = this.env.pos.get_order();
                    console.log(order,'order')
                    _.forEach(order.orderlines,function(index,name){
                    order.remove_orderline(order.get_selected_orderline());
                 })
                 }
  }
  }
CustomDemoButtons.template = 'CustomDemoButtons';
  ProductScreen.addControlButton({
      component: CustomDemoButtons,
      condition: function() {
          return this.env.pos;
      },
  });
  Registries.Component.add(CustomDemoButtons);
  return CustomDemoButtons;
});