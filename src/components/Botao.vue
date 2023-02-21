<template>
    <button class="button" @click="clicado" :disabled="disabilitado">
        <span class="icon">
            <i :class="icone"></i>
        </span>
        <span>{{ texto }}</span>
    </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Botão',
    emits: ['clicado'],
    props: {
        disabilitado: {
            type: Boolean
        },
        icone: {
            type: String,
            required: true
        },
        texto: {
            type: String,
            required:true
        }
    },
    methods: {
        clicado(): void {
            this.$emit('clicado')
        }
    }
})
</script>
