// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import React, { useState } from 'react'
//
// // Styles
// const modal: React.CSSProperties = {
//   position: 'fixed',
//   zIndex: 1,
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   overflow: 'auto',
//   backgroundColor: 'rgba(23,26,38,0.26)'
// }
//
// const modalContent: React.CSSProperties = {
//   backgroundColor: '#fefefe',
//   margin: '15% auto',
//   padding: '20px',
//   border: '1px solid #888',
//   width: '80%'
// }
//
//
// // Reducer
// const initState = {goodThings: [] as any[]}
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'LIKE':
//       return {
//         ...state,
//         goodThings: [action.thing, ...state.goodThings]
//       }
//   }
//   return state
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const addThing = (thing: any) => ({type: 'LIKE', thing} as const)
// type ActionsType = ReturnType<typeof addThing>
//
// const Modal = (props: any) => {
//   return (
//     <div style={modalContent}>
//       modal:
//   <input
//     value={props.value}
//   onChange={e => props.setValue(e.target.value)}
//   />
//   <button onClick={props.add}>add</button>
//     </div>
// )
// }
//
// // Components
// export const Animals = () => {
//   const goodThings = useAppSelector(state => state.app.goodThings)
//   const dispatch = useAppDispatch()
//
//   const [value, setValue] = useState('')
//   const [show, setShow] = useState(false)
//
//   const mapped = goodThings.map((t: any, i: number) => <div key={i}>{t}</div>)
//
//   return (
//     <div style={modal}>
//     <button onClick={() => setShow(true)}>show modal</button>
//
//   {show && (
//     <Modal
//       value={value}
//     setValue={setValue}
//     add={() => {
//     dispatch(addThing(value))
//     setValue('')
//   }}
//     />
//   )}
//
//   {mapped}
//   </div>
// )
// }import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import React, { useState } from 'react'
//
// // Styles
// const modal: React.CSSProperties = {
//   position: 'fixed',
//   zIndex: 1,
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   overflow: 'auto',
//   backgroundColor: 'rgba(23,26,38,0.26)'
// }
//
// const modalContent: React.CSSProperties = {
//   backgroundColor: '#fefefe',
//   margin: '15% auto',
//   padding: '20px',
//   border: '1px solid #888',
//   width: '80%'
// }
//
//
// // Reducer
// const initState = {goodThings: [] as any[]}
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'LIKE':
//       return {
//         ...state,
//         goodThings: [action.thing, ...state.goodThings]
//       }
//   }
//   return state
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const addThing = (thing: any) => ({type: 'LIKE', thing} as const)
// type ActionsType = ReturnType<typeof addThing>
//
// const Modal = (props: any) => {
//   return (
//     <div style={modalContent}>
//       modal:
//   <input
//     value={props.value}
//   onChange={e => props.setValue(e.target.value)}
//   />
//   <button onClick={props.add}>add</button>
//     </div>
// )
// }
//
// // Components
// export const Animals = () => {
//   const goodThings = useAppSelector(state => state.app.goodThings)
//   const dispatch = useAppDispatch()
//
//   const [value, setValue] = useState('')
//   const [show, setShow] = useState(false)
//
//   const mapped = goodThings.map((t: any, i: number) => <div key={i}>{t}</div>)
//
//   return (
//     <div style={modal}>
//     <button onClick={() => setShow(true)}>show modal</button>
//
//   {show && (
//     <Modal
//       value={value}
//     setValue={setValue}
//     add={() => {
//     dispatch(addThing(value))
//     setValue('')
//   }}
//     />
//   )}
//
//   {mapped}
//   </div>
// )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Animals/>
//     </Provider>
// );
//
// // 📜 Описание:
// // Откройте модалку, введите любой текст и нажмите add.
// // Введенный текст отобразится снизу, но модалка останется по прежнему видимой.
//
// // 🪛 Задача:
// // Необходимо сделать так, чтобы модалка пряталась сразу после добавления элемента
// // В качестве ответа укажите строку коду, которую необходимо добавить для реализации данной задачи
//
// // 🖥 Пример ответа: closeModal(true)
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Animals/>
//     </Provider>
// );
//
// // 📜 Описание:
// // Откройте модалку, введите любой текст и нажмите add.
// // Введенный текст отобразится снизу, но модалка останется по прежнему видимой.
//
// // 🪛 Задача:
// // Необходимо сделать так, чтобы модалка пряталась сразу после добавления элемента
// // В качестве ответа укажите строку коду, которую необходимо добавить для реализации данной задачи
//
// // 🖥 Пример ответа: closeModal(true)


// import React from 'react'
// import ReactDOM from 'react-dom/client';
//
// export const App = () => {
//   return (
//     <div>
//       <h2>Чем отличается master от origin master ?</h2>
//     <ul>
//     <li>1 - Это просто 2 ветки с разными названиями. Их ничего не связывает</li>
//   <li>2 - master принадлежит локальному репозиторию, origin master - удаленному</li>
//   <li>3 - Это 2 названия одной и той же ветки. Приставка origin не несет никакого смысла.</li>
//   <li>4 - Ветки origin master не существует</li>
//   <li>5 - Нет правильного ответа</li>
//   </ul>
//   </div>
// )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>);

// 📜 Описание:
// Чем отличается master от origin master ?
// Может быть несколько вариантов ответа (ответ дайте через пробел).
// ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// Если указали правильно один вариант (1),
// а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// 🖥 Пример ответа: 1

// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import React, { useEffect } from 'react'
// import axios from 'axios'
//
// // Styles
// const table: React.CSSProperties = {
//   borderCollapse: 'collapse',
//   width: '100%',
//   tableLayout: 'fixed',
// }
//
// const th: React.CSSProperties = {
//   padding: '10px',
//   border: '1px solid black',
//   background: 'lightgray',
//   cursor: 'pointer'
// }
//
// const td: React.CSSProperties = {
//   padding: '10px',
//   border: '1px solid black'
// }
//
// // Types
// type UserType = {
//   id: string;
//   name: string;
//   age: number;
// }
//
// type UsersResponseType = {
//   items: UserType[]
//   totalCount: number
// }
//
//
// // API
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const api = {
//   getUsers() {
//     return instance.get<UsersResponseType>('users')
//   },
// }
//
// // Reducer
// const initState = {
//   users: [] as UserType[],
// }
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'SET_USERS':
//       return {...state, users: action.users}
//     default:
//       return state
//   }
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const setUsersAC = (users: UserType[]) => ({type: 'SET_USERS', users})
// type ActionsType = ReturnType<typeof setUsersAC>
//
// // Thunk
// const getUsersTC = (): AppThunk => (dispatch, getState) => {
//   api.getUsers()
//     .then(res => dispatch(setUsersAC(res.data.items)))
// }
//
// // Components
// export const Users = () => {
//   const users = useAppSelector(state => state.app.users)
//
//   const dispatch = useAppDispatch()
//
//   useEffect(() => {
//     dispatch(getUsersTC())
//   }, [])
//
//   return (
//     <div>
//       <h1>👪 Список пользователей</h1>
//   <table style={table}>
//   <thead>
//     <tr>
//       <th style={th}> Name</th>
//     <th style={th}> Age</th>
//     </tr>
//     </thead>
//     <tbody>
//     {
//       users.map(u => (
//         <tr key={u.id}>
//         <td style={td}>{u.name}</td>
//           <td style={td}>{u.age}</td>
//       </tr>
// ))
// }
//   </tbody>
//   </table>
//   </div>
// )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Users/>
//     </Provider>
// );

// 📜 Описание:
// Перед вами пустая таблица. Пользователи не подгрузились, т.к. в коде допущена ошибка
// Ваша задача найти багу, чтобы таблица с пользователями подгрузилась.
// В качестве укажите исправленную строку кода
// ❗ Есть несколько вариантов решения данной задачи, в ответах учтены различные варианты

// 🖥 Пример ответа: {users.map(u) => таблица отрисуйся ВЖУХ ВЖУХ}


//import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
//
// // Reducer
// const initState = {
//   work: 0,
//   donate: 0,
//   balance: 0,
// }
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'CHANGE_VALUE':
//       return {
//         ...state,
//         ...action.payload,
//       }
//     default:
//       return state
//   }
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const changeValue = (payload: any) => ({type: 'CHANGE_VALUE', payload} as const)
// type ActionsType = ReturnType<typeof changeValue>
//
// // Components
// export const Income = () => {
//   const work = useAppSelector(state => state.app.work)
//   const donate = useAppSelector(state => state.app.donate)
//   const balance = useAppSelector(state => state.app.balance)
//
//   const dispatch = useAppDispatch()
//
//   return (
//     <div>
//       <div>
//         work: <input value={work}
//   type={'number'}
//   onChange={e => dispatch(changeValue({work: +e.target.value}))}/>
//   </div>
//   <div>
//   donate: <input value={donate}
//   type={'number'}
//   onChange={e => dispatch(changeValue({donate: +e.target.value}))}/>
//   </div>
//
//   <h1>💵 balance: {balance}</h1>
//   <button
//   onClick={() => {
//     // ❗❗❗ XXX ❗❗❗
//   }}
// >
//   calculate balance
//   </button>
//   </div>
// )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Income/>
//     </Provider>
// );

// 📜 Описание:
// Что нужно написать вместо XXX, чтобы вывелась сумма дохода в строке баланса
//
// 🖥 Пример ответа: console.log(work + donate)

//import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
//
// // Reducer
// const initState = {
//   animals: [
//     {likes: 0, name: 'cat'},
//     {likes: 0, name: 'dog'},
//     {likes: 0, name: 'fish'},
//     {likes: 0, name: 'spider'},
//     {likes: 0, name: 'bird'},
//   ] as { likes: number, name: string }[]
// }
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'LIKE':
//       return {
//         ...state,
//         animals: state.animals.map(animal => {
//           return true ? {...animal} : animal
//         })
//       }
//   }
//   return state
// }
//
// // Store
// const rootReducer = combineReducers({app: appReducer})
//
// const store = createStore(rootReducer, applyMiddleware(thunk))
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
// const useAppDispatch = () => useDispatch<AppDispatch>()
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//
// const like = (likes: any, name: any) => ({type: 'LIKE', likes, name} as const)
// type ActionsType = ReturnType<typeof like>
//
// // Components
// export const Animals = () => {
//   const animals = useAppSelector(state => state.app.animals)
//   const dispatch = useAppDispatch()
//
//   const mapped = animals
//     .map((a: any, i: number) => (
//       <div key={i}>
//       {a.name}
//       -{a.likes}-
//       <button
//         onClick={() => dispatch(like(a.likes + 1, a.name))}
// >
//   Like!
//   </button>
//   </div>
// ))
//
//
//   return (
//     <div>
//       {mapped}
//     </div>
//   )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Animals/>
//     </Provider>
// );

// 📜 Описание:
// На экране отображен список животных.
// Кликните на like и вы увидите, что ничего не происходит.
// Ваша задача починить лайки.
// В качестве ответа укажите исправленную версию строки
//
// 🖥 Пример ответа: -{a.likes + 1}-

