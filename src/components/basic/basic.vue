<template>
  <div>
     <div v-for="item, index in flowData" :key="index" :class="[flowData.length === 1 ? '' : 'child']">
               <div style="display:flex;align-items:center;">
                 <div >----------</div>
                 <div style="display:flex;align-items:center;">
                   <div class="last-child">
                      <div class="last-child-container"  :class="[index === 0 ? 'firstChildren': (index === item.children&&item.children.length-1) ? 'lastChildren':'']">
                          {{item.label}}----{{ index }}  --- {{ index === item.children&&item.children.length -1 }} 长度
                      </div>
                    </div>
                  <div v-if="item.children">------------------</div>
                  <div>
                    <div v-if="item.children">
                        <flow-pic :flowData="item.children"></flow-pic>
                    </div>
                  </div>
                 </div>
            </div>
            </div>
  </div>
</template>

<script>
export default {
 props: ["flowData"],
 name:'flowPic'
}
</script>
<style lang="scss" scoped>
.child{
     position: relative;
 }
.child::before{
  content:'';
  position:absolute;
  height:100%;
  width:1px;
  background-image: linear-gradient(to bottom, #2c3e50 0%, #2c3e50 80%, transparent 50%);
  background-size: 3px 6px;
  background-repeat: y-repeat
}
 .child:first-child::before{
  content:'';
  position:absolute;
  top:50%;
  height:50%;
  width:1px;
  background-image: linear-gradient(to bottom, #33383d 0%, #2c3e50 80%, transparent 50%);
  background-size: 3px 6px;
  background-repeat: y-repeat
}
.child:last-child::before{
    color: red;
    content:'';
    position:absolute;
    // top:50%;
    height:50%;
    width:1px;
    background-image: linear-gradient(to bottom, #2c3e50 0%, #2c3e50 80%, transparent 50%);
    background-size: 3px 6px;
    background-repeat: y-repeat
}
.last-child{
    padding: 30px 0px 30px 0;
}
.last-child-container{
  width: 200px;
  padding: 30px 30px;
  border:1px solid blue;
}
</style>