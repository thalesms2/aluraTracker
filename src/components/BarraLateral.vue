<template>
    <header >
        <h1>
            <img src="../assets/logo.png" alt="logo" class="">
        </h1>
        <button class="button" @click="alterarTema">
            {{ textoBotao }}
        </button>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BarraLateral',
    emits: ['aoTemaAlterado'],
    computed: {
        textoBotao() : string {
            return this.modoEscuroAtivo ? 'Desativar modo escuro' : 'Ativar modo escuro'
        }
    },
    data() {
        return{
            modoEscuroAtivo: false,
        }
    },
    methods: {
        alterarTema() {
            this.modoEscuroAtivo = !this.modoEscuroAtivo
            this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
        }
    }
})
</script>
<style>
    header {
        background: #0d3b66;
        width: 100%;
        height: 100vh;
        padding: 1rem;
        text-align: center;
    }
    @media only screen and (max-width: 768px) {
        header {
            padding: 2.5rem;
            height: auto;
        }
    }
</style>