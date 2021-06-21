/**
 * переменные state текущего модуля
 * state должен меняться только через мутации, а мутации можно вызывать только через dispatch
 * таким образом получается схема dispatch -> mutation -> state -> getter
 */

export default {

  /**
   * переменная state с указанием значения по-умолчанию
   */
  ITEMS: [],
  FLAG_IS_EMPTY: true,

  PAGINATION: {
    current_page: 1,
    total_item_count: 1,
    last_page: 1,
    per_page: 30,
    from: 1,
    to: 1,
    prev_page: 1,
    next_page: 1,
  },

  ITEM: {
    'services_id': null,
    'services_name': null,
    'services_description': null,
    'services_price': 0,
    'order_item_count': 0,
  },

  ITEM_MODEL: {
    'service_id': 'services_id',
    'service_name': 'services_name',
    'service_description': 'services_description',
    'service_price': 'services_price',
    'order_item_count': 'order_item_count',
  },

  ITEM_SERIALIZER: {
    'service_id': 'service_id',
    'services_price': 'service_price',
    'order_item_count': 'order_item_count',
  },
}
