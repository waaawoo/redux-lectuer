// コンバインするためにcombineReducersをReduxからインポート
import { combineReducers} from "redux"
import reducerMeat from "./reducerMeat"
import reducerVegetable from "./reducerVegetable"

// rootReducerにcombineReducersを使って各reducerを格納する
const rootReducer = combineReducers({
  reducerMeat,
  reducerVegetable,
})

// 使いたいところでrootReducerを呼び出す
export default rootReducer
