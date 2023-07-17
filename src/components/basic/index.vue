<template>
  <div class="home">
     <div style="display:flex;margin-bottom:30px;" v-for="item,index in data" :key="index">
        <div style="display:flex;align-items:center;padding:20px 0">
          <div style="display:flex;align-items:center;height:100%;background:yellow;">
            {{ item.label }}
          </div>
        </div>
        <div style="display:flex;align-items:center;">
         <div>------</div>
          </div>
        <div>
      <div style="word-wrap:break-word; 
              word-break:break-all;
              overflow: hidden;/*这个参数根据需求来决定要不要*/"
      >
      <flow-pic :flowData="item.children"></flow-pic>
            <!-- 遍历循环节点 -->
            <!-- <div v-for="item,index in item.children" :key="index" class="child">
               <div style="display:flex;align-items:center">
                 <div >----------</div>
                 <div style="display:flex;align-items:center;">
                   <div class="last-child">
                      <div class="last-child-container">
                          {{item.label}}
                      </div>
                    </div>
                  <div>---------------</div>
                  <div>
                     <div v-for="item,index in 5" :key="index" class="child">
                       <div style="display:flex;align-items:center;">
                          <div>----------</div>
                          <div style="display:flex;align-items:center;">
                            <div class="last-child">
                            <div class="last-child-container">
                                  {{index === 4 ? '最后一个节点fffffffffffffffffffffffff和恢复德国和法国但是规划风格化地方': '节点'}}
                            </div>
                          </div>
                          <div>---------------</div>
                          </div>
                      </div>
                     </div>
                  
                   
                  </div>
                 </div>
            </div>
            </div> -->
            </div>
        </div>
     </div>
  </div>
</template>
<script>
import flowPic from '@/components/basic/basic.vue'
export default {
  name: 'flowBasic',
  props: ["flowData"],
  components: {
  flowPic
  },
  mounted(){
   
  },
  data () {
    return {
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
  }
}
</script>
<style scoped>
.child-container:last-child{
    color:red
}
</style>