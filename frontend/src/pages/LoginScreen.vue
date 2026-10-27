<script setup>

import { ref } from 'vue';
import { useAppStore } from '@/stores/app';
import { useRouter } from 'vue-router';


const router = useRouter()
const appStore = useAppStore()

const username = ref('')
const password = ref('')


async function loggin() {
    if(username.value == "user" && password.value == "123"){
       const info = ref({
            loggedIn: true,
            username: username.value,
            image: '',
        })
        appStore.setLoginInfo(info)
        router.push('/votacions')
    }else{
        alert('Usuari o contraseña incorrectes')
    }

}

</script>

<template>
    <v-container>
        <v-text-field label="username"
        v-model="username">
            
        </v-text-field>

        <v-text-field label="password"
        v-model="password">
            
        </v-text-field>

        <v-btn text="login"
        @click="loggin()">
            
        </v-btn>


    </v-container>



</template>