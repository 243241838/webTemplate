const mutations = {
    setUser: (state, data) => {//第一个参数为state的设置的变量，第二个参数是调取时传递的
        state.user = data;
    }
}
export default mutations;