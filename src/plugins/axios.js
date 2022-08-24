import Vue from"vue"
import axios from "axios"

axios.defaults.baseURL="https://lianghj.top:8888/api/private/v1/"

Vue.prototype.$http=axios
