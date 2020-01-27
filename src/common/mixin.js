import backTop from '@/components/tabbar/backTop/backTop'
export const backMixin = {
  data(){
    return {
      isScroll:false
    }
  },
  methods:{
    topClick(){
      this.$refs.bsscroll.topClick(0,0,500)
      // console.log('++')
    }
    
  },
  components:{
    backTop
  }
}