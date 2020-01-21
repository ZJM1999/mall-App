<template>
  <div id="param-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table class="info-size"
           v-for="(table, index) in paramsInfo.sizes" :key="index">
      <tr v-for="(tr, index) in table" :key="index">
        <td v-for="(td, index) in tr" :key="index">
          {{td}}
        </td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(item, index) in paramsInfo.infos" :key="index">
        <td class="param-key">{{item.key}}</td>
        <td class="param-value">{{item.value}}</td>
      </tr>
    </table>
    <div lass="info-img"
         v-if="paramsInfo.image.length !== 0">
      <img :src="paramsInfo.image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  #param-info {
    padding: 10px 10px 20px;
    font-size: 14px;
    border-bottom: 4px solid #eee; 
  }
  .info-size {
    width: 100%;
  }
  .info-size>tr {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #eeeeee;
    padding: 10px 0;
  }
  .info-size>tr>td {
    display: block;
    flex: 1;
    text-align: left;
  }
  .info-param {
    width: 100%;
  }
  .info-param>tr{
    width: 100%;
    display: flex;
    border-bottom: 1px solid #eeeeee;
    padding: 10px;
    align-items: center;
  }
  .param-key {
    flex: 1;
  }
  .param-value {
    flex: 2;
    color: var(--color-high-text)
  }
</style>