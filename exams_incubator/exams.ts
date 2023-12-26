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
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <Animals/>
//     </Provider>
// );

// // 📜 Описание:
// // Откройте модалку, введите любой текст и нажмите add.
// // Введенный текст отобразится снизу, но модалка останется по прежнему видимой.
//
// // 🪛 Задача:
// // Необходимо сделать так, чтобы модалка пряталась сразу после добавления элемента
// // В качестве ответа укажите строку коду, которую необходимо добавить для реализации данной задачи
//
// /ответ:  setShow(false)
// ===============================================================================================================>


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
// Ответ 2
//=======================================================================================>


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
// =======================================================================================================>



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
// ответ: dispatch(changeValue({balance:work+donate}))
// =====================================================================================================>

// import React from 'react';
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
//
// 📜 Описание:
// На экране отображен список животных.
// Кликните на like и вы увидите, что ничего не происходит.
// Ваша задача починить лайки.
// В качестве ответа укажите исправленную версию строки
//
// 🖥 ответ: return animal.name === action.name ? {...animal, likes: action.likes} : animal

// ====================================================================================================>

// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom'
// import React from 'react'
//
// type UserType = {
//   id: number
//   name: string
//   avatar: string
//   age: number
//   address: string
// }
//
// const users: UserType[] = [
//   {
//     id: 1,
//     name: 'my Name',
//     age: 32,
//     avatar: '—ฅ/ᐠ.̫ .ᐟ\\ฅ—',
//     address: 'my Address'
//   },
//   {
//     id: 2,
//     name: 'John',
//     age: 22,
//     avatar: ':)',
//     address: 'California'
//   },
//   {
//     id: 3,
//     name: 'Mike',
//     age: 18,
//     avatar: '^._.^',
//     address: 'New York'
//   },
//   {
//     id: 4,
//     name: 'Emma',
//     age: 38,
//     avatar: '/ᐠ-ꞈ-ᐟ\\',
//     address: 'Washington'
//   },
// ]
//
// const StartPage = () => {
//   const navigate = useNavigate()
//   const friends = users.filter(u => u.id !== 1)
//
//   const mappedFriends = friends.map((f, i) => {
//     const go = () => {
//       navigate('/friend/' + f.id)
//     }
//
//     return (
//       <div key={i} onClick={go} style={{paddingLeft: 24, color: 'blue', cursor: 'pointer'}}>
//     {f.name}, {f.age}
//     </div>
//   )
//   })
//
//   return (
//     <div>
//       <h2>🙂 My profile</h2>
//   <Profile userId={1}/>
//   <hr/>
//   <h2>👪 Friends</h2>
//   {mappedFriends}
//   </div>
// )
// }
// const Profile: React.FC<{ userId?: number }> = ({userId}) => {
//   const {id} = useParams<{ id: string }>()
//   const user = users.find(u => u.id === +(id || userId || 0))
//
//   return (
//     <div>
//       <div>
//         <b>avatar</b> {user?.avatar}
//     </div>
//     <div>
//     <div><b>name</b>: {user?.name}</div>
//   <div><b>age</b>: {user?.age}</div>
//   <div><b>address</b>: {user?.address}</div>
//   </div>
//   </div>
// )
// }
//
// export const Friends = () => {
//   return (
//     <Routes>
//       <Route path={'/'} element={<StartPage/>}/>
//   <Route path={'friend'} element={<Profile/>}/>
//   <Route path={'*'} element={<div>❌404 Page Not Found❌</div>}/>
//   </Routes>
// )
// }
//
//   const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
//   root.render(
//     <BrowserRouter>
//       <Friends/>
//     </BrowserRouter>
//   );

// 📜 Описание:
// При загрузке приложения на экране отображается
// профиль пользователя и список друзей.
// Если кликнуть на пользователя, то видим ❌404 Page Not Found❌
// Исправьте код, чтобы по клику на пользователя
// отображалась странице с информацией о друге.
// В качестве ответа укажите исправленную строку кода.
//
// ответ: <Route path={'friend/:id'} element={<Profile/>}/>

// =========================================================================>

// import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom/client';
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
// import axios from 'axios'
//
// // API
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const api = {
//   me() {
//     return instance.get('auth/me?delay=3')
//   },
// }
//
//
// // Reducer
// const initState = {
//   isInitialized: false,
//   isLoading: false,
//   isLoggedIn: false
// }
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'SET_IS_INITIALIZED':
//       return {...state, isInitialized: action.isInitialized}
//     case 'SET_LOADING':
//       return {...state, isLoading: action.isLoading}
//     case 'SET_IS_LOGGED_IN':
//       return {...state, isLoggedIn: action.isLoggedIn}
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
// const setIsInitialized = (isInitialized: boolean) => ({type: 'SET_IS_INITIALIZED', isInitialized} as const)
// const setLoading = (isLoading: boolean) => ({type: 'SET_LOADING', isLoading} as const)
// const setIsLoggedIn = (isLoggedIn: boolean) => ({type: 'SET_IS_LOGGED_IN', isLoggedIn} as const)
// type ActionsType =
//   | ReturnType<typeof setLoading>
//   | ReturnType<typeof setIsInitialized>
//   | ReturnType<typeof setIsLoggedIn>
//
// // Thunk
// const me = (): AppThunk => async (dispatch) => {
//   dispatch(setLoading(true))
//   api.me()
//     .then((res) => {
//       dispatch(setIsLoggedIn(true))
//     })
//     .finally(() => {
//       dispatch(setLoading(false))
//       dispatch(setIsInitialized(true))
//     })
//
// }
//
// // Components
// const Loader = () => <h2>🔘 Крутилка...</h2>
//
// const Login = () => {
//   const isInitialized = useAppSelector(state => state.app.isInitialized)
//   const isLoading = useAppSelector(state => state.app.isLoading)
//   const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)
//
//   if (isLoggedIn) {
//     return <Navigate to={'/'}/>
//   }
//
//   return <h2>🐣 Login</h2>
// }
// const Profile = () => {
//   const isInitialized = useAppSelector(state => state.app.isInitialized)
//   const isLoading = useAppSelector(state => state.app.isLoading)
//   const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)
//
//   if (!isLoggedIn) {
//     return <Navigate to={'/login'}/>
//   }
//
//   return <h2>😎 Profile </h2>
// }
//
// export const App = () => {
//   const isInitialized = useAppSelector(state => state.app.isInitialized)
//   const isLoading = useAppSelector(state => state.app.isLoading)
//   const isLoggedIn = useAppSelector(state => state.app.isLoggedIn)
//
//   const dispatch = useAppDispatch()
//
//   useEffect(() => {
//     dispatch(me())
//   }, [])
//
//   return (
//     <Routes>
//       <Route path={'/'} element={<Profile/>}/>
//   <Route path={'login'} element={<Login/>}/>
//   </Routes>
// )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <BrowserRouter>
//     <Provider store={store}>
//     <App/>
//     </Provider>
//     </BrowserRouter>
// );

// 📜 Описание:
// После старта / обновления приложения мы видим Login, а потом через 3 секунды Profile
// Но это плохое поведение.
// Ваша задача написать код при котором пользователя не будет редиректить на Login,
// пока приложение не проинициализировано,
// а во время ожидания ответа с сервера он будет видеть Loader

// ответ:  if (!isInitialized || !isLoggedIn || isLoading) {
//     return <Loader />;
//   }

// ===========================================================================================>

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
// type ParamsType = {
//   sortBy: string | null
//   sortDirection: 'asc' | 'desc' | null
// }
//
// // API
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const api = {
//   getUsers(params?: ParamsType) {
//     return instance.get<UsersResponseType>('users', {params})
//   },
// }
//
// // Reducer
// const initState = {
//   users: [] as UserType[],
//   params: {
//     sortBy: null,
//     sortDirection: 'asc'
//   } as ParamsType
// }
// type InitStateType = typeof initState
//
// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case 'SET_USERS':
//       return {...state, users: action.users}
//     case 'SET_PARAMS':
//       return {...state, params: {...state.params, ...action.payload}}
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
// const setUsersAC = (users: UserType[]) => ({type: 'SET_USERS', users} as const)
// const setParamsAC = (payload: ParamsType) => ({type: 'SET_PARAMS', payload} as const)
// type ActionsType =
//   | ReturnType<typeof setUsersAC>
//   | ReturnType<typeof setParamsAC>
//
// // Thunk
// const getUsersTC = (): AppThunk => (dispatch, getState) => {
//   const params = getState().app.params
//   api.getUsers(params.sortBy ? params : undefined)
//     .then(res => dispatch(setUsersAC(res.data.items)))
// }
//
// export const Users = () => {
//   const users = useAppSelector(state => state.app.users)
//   const sortBy = useAppSelector(state => state.app.params.sortBy)
//   const sortDirection = useAppSelector(state => state.app.params.sortDirection)
//   console.log(users, sortBy, sortDirection)
//
//   const dispatch = useAppDispatch()
//
//   // ❗❗❗ XXX ❗❗❗
//
//   const sortHandler = (name: string) => {
//     const direction = sortDirection === 'asc' ? 'desc' : 'asc'
//     dispatch(setParamsAC({sortBy: name, sortDirection: direction}))
//   };
//
//   return (
//     <div>
//       <h1>👪 Список пользователей</h1>
//   <table style={table}>
//   <thead>
//     <tr>
//       <th style={th} onClick={() => sortHandler('name')}>
//   Name
//   </th>
//   <th style={th} onClick={() => sortHandler('age')}>
//   Age
//   </th>
//   </tr>
//   </thead>
//   <tbody>
//   {
//     users.map(u => {
//       return (
//         <tr key={u.id}>
//         <td style={td}>{u.name}</td>
//           <td style={td}>{u.age}</td>
//         </tr>
//     )
//     })
//   }
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
// Перед вами таблица с пользователями. Но данные не подгружаются
// Что нужно написать вместо XXX, чтобы:
// 1) Пользователи подгрузились
// 2) Чтобы работала сортировка по имени и возрасту
// 3) Направление сортировки тоже должно работать (проверить можно нажав на одно и тоже поле 2 раза)

// ответ useEffect(() => {
//     dispatch(getUsersTC())
//   },[dispatch])

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client'
//
// type UserType = {
//   id: string;
//   name: string;
//   age: number;
// }
//
// // API
// const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})
//
// const api = {
//   getUsers() {
//     return instance.get('users?pageSize=3&pageNumber=2')
//   },
// }
//
// // App
// export const App = () => {
//
//   const [users, setUsers] = useState<UserType[]>([])
//
//   useEffect(() => {
//     api.getUsers()
//       .then((res) => {
//         setUsers(res.data.items)
//       })
//   }, [])
//
//
//   return (
//     <>
//       <h1>👪 Список пользователей</h1>
//   {
//     users.map(u => {
//       return <div style={{display: 'flex', gap: '10px'}} key={u.id}>
//         <p><b>name</b>: {u.name}</p>
//       <p><b>age</b>: {u.age}</p>
//       </div>
//     })
//   }
//   </>
// )
// }
//
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>)

// 📜 Описание:
// На странице отображен список юзеров из 3-человек.
// Подгрузились именно эти пользователи не случайно, а из-за query параметров указанных в запросе.
// Ваша задача переписать строку с запросом таким образом, чтобы получить аналогичный результат (все тех же юзеров),
// при этом запрещено в ответе использовать символы вопроса и амперсанда.
// В качестве ответа укажите полностью исправленную строку коду (переносы разрешены)
