import { defineStore } from "pinia";
import {ref} from "vue"
import axios from "axios";

export const useUserStore = defineStore("user", () => {
    const userList = ref([])

    function getUserList() {
        axios.get("/users").then(res => {
            userList.value = res.data.list
            console.log(":::data", res)
            console.log(":::userList", userList.value)
        })
    }

    return {
        userList,
        getUserList
    }
})