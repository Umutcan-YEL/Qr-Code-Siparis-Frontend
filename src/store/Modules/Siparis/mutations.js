export default {
    SiparisDepola(state, payload) {
        if (payload && payload.status === 200) {
            state.hataObj = {};
            state.storeSiparis = payload.resData;
        }
    },
}