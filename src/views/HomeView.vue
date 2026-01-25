<template>
  <div class="home">
   <div style="margin-bottom:30px">
      <el-select v-model="value" placeholder="请选择" @change="change">
    <el-option label="基础流程图" value="0"></el-option>
     <el-option label="折叠基础流程图" value="1"></el-option>
  </el-select>
   </div>
    <!-- 基础流程图 -->
   <flow-basic v-if="value==='0'"></flow-basic>
   <!-- 带有折叠功能 -->
   <expand v-if="value==='1'"></expand>
   <!-- 拖动滑块demo -->
   
  </div>
</template>

<script>
import flowBasic from '@/components/basic/index.vue'
import expand from '@/components/expand/index.vue'
export default {
  name: 'HomeView',
  props: ["flowData"],
  components: {
    flowBasic,
    expand
  },
    mounted(){
        console.log('提交哈哈哈换行11111');
    },
    data () {
        
        return {
            value:'',
            data: [{
            label: '一级 2',
            children: [{
                label: '二级 2-1',
                children: [{
                label: '三级 2-1-1'
            },
            {
                label: '三级 2-1-1'
            }]
            }, {
                label: '二级 2-2',
                children: [{
                label: '三级 2-2-1',
                children: [{
                label: '三级 2-2-1',
                    children: [{
                label: '三级 2-2-1'
                },
                {
                label: '三级 2-2-1'
                },
                {
                label: '三级 2-2-1'
                },
                {
                label: '三级 2-2-1'
                },
                {
                label: '三级 2-2-1'
                }]
                },
                {
                label: '三级 2-2-1'
                },
                {
                label: '三级 2-2-1'
                },
                {
                label: '三级 2-2-1'
                },
                {
                label: '三级 2-2-1'
                }]
                },
                {
                label: '三级 2-2-1',
                    children: [{
                label: '三级 2-2-1'
                },
                {
                label: '三级 2-2-1'
                },
                {
                label: '三级 2-2-1'
                },
                {
                label: '三级 2-2-1'
                },
                {
                label: '三级 2-2-1'
                }]
                },
                {
                label: '三级 2-2-1'
                },
                {
                label: '三级 2-2-1'
                },
                {
                label: '三级 2-2-1'
                }]
            }]
            }, {
            label: '一级 3',
            children: [{
                label: '二级 3-1',
                children: [{
                label: '三级 3-1-1'
                }]
            }, {
                label: '二级 3-2',
                children: [{
                label: '三级 3-2-1'
                }]
            }]
            }],
        }
    },
    methods:{
        change(val){
            console.log('value',val,this.value);
        }
    }
}
</script>
<style scoped>
.child-container:last-child{
    color:red
}
</style>