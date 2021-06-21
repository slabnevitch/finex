/**
 *
 */

export default {

  UPDATE_ITEMS(state, payload) {

    let tmp_payload = []
    for (let item of payload) {

      let tmp_item = {};
      for (let key in item) {

        if (state.ITEM_MODEL.hasOwnProperty(key)) {
          tmp_item[state.ITEM_MODEL[key]] = item[key];
        }

        for(let modelKey in state.ITEM){
          if(!item.hasOwnProperty(modelKey)){
            tmp_item[modelKey] = state.ITEM[modelKey];
          }
        }
      }

      tmp_payload.push(tmp_item);
    }

    state.ITEMS = tmp_payload;
  },

  UPDATE_PAGINATION(state, payload) {
    state.PAGINATION = payload;
  },

  UPDATE_ITEM(state, payload) {

    let tmp_payload = {};
    for (let key in payload) {

      if (state.ITEM_MODEL.hasOwnProperty(key)) {
        tmp_payload[state.ITEM_MODEL[key]] = payload[key];
      }
    }

    state.ITEM = tmp_payload;
  },
}

