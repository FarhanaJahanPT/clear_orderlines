/** @odoo-module **/
import Orderline from "point_of_sale.Orderline";
import Registries from "point_of_sale.Registries";

const PosOrderline = (Orderline) =>
    class extends Orderline {
        async removeLine(ev) {
        console.log(this.env.pos.get_order(),'this.env.pos.get_order()')
            const order = this.env.pos.get_order();
            if (order) {
                ev.stopPropagation();
                this.selectLine();
                console.log(order.get_selected_orderline(),'order.get_selected_orderline()')
                order.remove_orderline(order.get_selected_orderline());
            }
        }
    };
Registries.Component.extend(Orderline, PosOrderline);
