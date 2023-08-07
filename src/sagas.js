
import { put, takeLatest, all } from "redux-saga/effects";
import firebase from "./firebase/firebase"; 

function* fetchAccounts() {
  try {
    const snapshot = yield firebase.database().ref("Accounts").once("value");
    const accounts = snapshot.val();
    yield put({ type: "FETCH_ACCOUNTS_SUCCESS", payload: accounts });
  } catch (error) {
    yield put({ type: "FETCH_ACCOUNTS_FAILURE", error: error.message });
  }
}

function* fetchRooms() {
  try {
    const snapshot = yield firebase.database().ref("Rooms").once("value");
    const rooms = snapshot.val();
    yield put({ type: "FETCH_ROOMS_SUCCESS", payload: rooms });
  } catch (error) {
    yield put({ type: "FETCH_ROOMS_FAILURE", error: error.message });
  }
}

function* actionWatcher() {
  yield takeLatest("FETCH_ACCOUNTS", fetchAccounts);
  yield takeLatest("FETCH_ROOMS", fetchRooms);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
