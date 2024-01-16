<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button>클릭</button>
  </div>
</template>
<script setup>
import { useUserStore } from "@/store/user"
import { onMounted } from "vue"

const {getUserList} = useUserStore()

onMounted(() => {
  getUserList()
})
</script>
