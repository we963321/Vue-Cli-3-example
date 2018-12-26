
import axios from 'axios'
import router from '../router'

export default {
	CALL_API_EXAMPLE: (context, {vm}) => {   //context為action的obj，可使用其功能
		axios.get("/data", {
      	params: {
        	token: vm.apiEncrypt()
      	}
    })
    .then(response => {
      	context.commit('setApiExample', response.data);
    })
	},
  CALL_API_HOME: (context, {vm}) => {
    axios.get("/data/getHomeData", {
        params: {
          token: vm.apiEncrypt()
        }
    })
    .then(response => {
        context.commit('setHome', response.data);
    })
  },
  CALL_API_TOP_TEN: (context, {vm}) => {
    axios.get("/data/getRankingData", {
        params: {
          token: vm.apiEncrypt()
        }
    })
    .then(response => {
        context.commit('setTopTen', response.data);
    })
  },
  CALL_API_GET_LIST: (context, {vm}) => {
    axios.get("/data/getInfoData", {
        params: {
          name: vm.name,
          type: vm.type,
          area: vm.area,
          page: vm.page,
          token: vm.apiEncrypt(),
        }
    })
    .then(response => {
        context.commit('setListData', response.data);
    })
  },
  CALL_API_GET_DETAILS: (context, {vm}) => {
    axios.get("/data/getDetails", {
        params: {
          id: vm.id,
          cid: vm.cid,
          token: vm.apiEncrypt(),
        }
    })
    .then(response => {
        context.commit('setDetails', response.data);
    })
  },
  GET_MENU: (context, {vm}) => {
    axios.get("/data/getMenu", {
        params: {
          token: vm.apiEncrypt()
        }
    })
    .then(response => {
        context.commit('setMenu', response.data);
    })
  },
  CALL_API_GET_RECOMMEND_DATA: (context, {vm}) => {
    axios.get("/data/getRecommendDataByCategory", {
        params: {
          cid: vm.cid,
          token: vm.apiEncrypt()
        }
    })
    .then(response => {
        context.commit('setRecommendData', response.data);
    })
  },
  CALL_API_GET_SEARCH_DATA: (context, {vm}) => {
    axios.get("/data/getDataBySearch", {
        params: {
          search: vm.search,
          page: vm.page,
          token: vm.apiEncrypt()
        }
    })
    .then(response => {
        context.commit('setSearchData', response.data);
    })
  },
  CALL_API_GET_SEARCH_TAG_DATA: (context, {vm}) => {
    axios.get("/data/getDataByTag", {
        params: {
          search: vm.search,
          type: vm.type,
          cid: vm.cid,
          page: vm.page,
          token: vm.apiEncrypt()
        }
    })
    .then(response => {
        context.commit('setSearchData', response.data);
    })
  }
}