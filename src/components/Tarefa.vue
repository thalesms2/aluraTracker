<template>
    <Box class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                {{ tarefa.descricao || 'Tarefa sem descrição' }}
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type ITarefa from '@/interfaces/ITarefa';
import Cronometro from './Cronometro.vue';
import Box from './Box.vue';

export default defineComponent({
    name: 'Tarefa',
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true,
        }


    },
    components: {
        Cronometro,
        Box,
    },
})
</script>

<style scoped>

</style>