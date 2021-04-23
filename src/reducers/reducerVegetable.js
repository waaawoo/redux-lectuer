// アクション名を共通化し、ファイルへまとめたものをインポート
import {SELL_VEGETABLE} from "./actionTypes"

// stateはオブジェクトを受け取れるように記載[]
// アクションをとり、アクションの値で実行アクションを決める
const reducerVegetable = (state=[], action) => {
  switch(action.type){
    // 売れたらstateの値をマイナス１する
    case SELL_VEGETABLE: return{
      // オブジェクトに拡張した際に対応できるように...で分割して処理する
      ...state,
      numOfVegetable: state.numOfVegetable - 1
    }
    // デフォルトの処理
    default: return state
  }
}

export default reducerVegetable
