<template>
    <v-layout>
        <v-flex>
            <v-dialog>
                <v-card>
                    <v-card-title>
                        {{ card.title }}
                    </v-card-title>
                    <v-card-text>
                        {{ card.text }}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            color="Primary"
                        >Done</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-flex>
    </v-layout>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data () {
        return {}
    },
    computed: mapState({
        card: state => state.card.data
    })
}
</script>
