{
    'name': 'Remove Order Line',
    'sequence': 1,
    'version': '16.0.1.0.0',
    'depends': ['base','point_of_sale'],

    'assets': {
       'point_of_sale.assets': [
           'remove_order_line/static/src/js/remove_order_line.js',
           'remove_order_line/static/src/js/clear_order.js',
           'remove_order_line/static/src/xml/remove_order_line.xml',
           'remove_order_line/static/src/xml/clear_order.xml',
       ],
    },

    'installable': True,
    'application': True,
    'auto_install': False,

}
