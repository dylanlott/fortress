<template>
    <div>
        <v-btn
            color="orange"   
            dark
            @click="dialog = !dialog"
        >
            Create Card
        </v-btn>
        <v-dialog
            v-model="dialog"
            width="100vh"
        >
            <v-card>
                <CreateCard></CreateCard>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import CreateCard from './create.vue'

export default {
    data () {
        return {
            dialog: false
        }
    },
    components: {
        CreateCard 
    }
}
</script>
