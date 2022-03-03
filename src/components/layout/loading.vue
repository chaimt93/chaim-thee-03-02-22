<script>
import {  QSpinnerOval } from 'quasar'
import {mapState} from "vuex";
export default {
  name:'loading',
  watch:{
    isLoading(){
      this.isLoading ?  this.showLoading() : this.$q.loading.hide()
    }
  },
  computed:{
    ...mapState('layout',['isLoading']),
  },
  methods: {
    showLoading() {
      this.$q.loading.show({
        spinner: QSpinnerOval,
        spinnerColor: 'green-8',
        spinnerSize: 100,
        backgroundColor: 'grey',
        html:true,
        messageColor: 'black',
      })
    }
  },
}
</script>
