import {combineReducers} from 'redux';

import {
  getMnemonicStr_Reducer,
  getTokenStr_Reducer,
  getUserInfo_Reducer,
  getAllWalletByAddress_Reducer,
  insertWalletSymbol_Reducer,
  getCurrenBalanceEth_Reducer
} from './user.reducer';

import { themeReducer } from './theme.reducer';

import { switchCoin } from './coin.reducer';

import { searchReducer } from './search.reducer';


const rootReducer = combineReducers({
  mnemonicStr: getMnemonicStr_Reducer,
  token: getTokenStr_Reducer,
  user: getUserInfo_Reducer,
  listMoney: getAllWalletByAddress_Reducer,
  insertWallet: insertWalletSymbol_Reducer,
  theme: themeReducer,
  coins: switchCoin,
  search: searchReducer,
  balance: getCurrenBalanceEth_Reducer
});

export default rootReducer;
