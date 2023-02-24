<template>
    <header >
        <h1>
            <img src="../assets/logo.png" alt="Alura tracker">
        </h1>
        <div class="has-text-centered">
            <button class="button" @click="alterarTema">
                {{ textoBotao }}
            </button>
        </div>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <RouterLink to="/" class="link">
                        <i class="fas fa-tasks">
                            Tarefas
                        </i>
                    </RouterLink>
                    <RouterLink to="/projetos" class="link">
                        <i class="fas fa-project-diagram">
                            Projetos
                        </i>
                    </RouterLink>
                </li>
            </ul>
        </nav>
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
    .panel li {
        margin: 8px 0;
        display: flex;
        flex-direction: column;
    }
    .link {
        color: #fff;
        margin-bottom: 1rem;
    }
    .link:hover {
        color:#FAF0CA;
    }
    .link.router-link-active {
        color: #FAF0CA
    }
</style>