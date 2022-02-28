<template>
  <view class="cate">
    <scroll-view class="scroll-view-left" scroll-y="true" show-scrollbar="true">
      <block v-for="(cate, index) in parentCateList" :key="cate.id">
        <view
          :class="['levelOne', index === active ? 'active' : '']"
          v-if="cate.level === 1"
          @click="clickParentCate(cate.id, index)"
          >{{ cate.name }}</view
        >
      </block>
    </scroll-view>

    <scroll-view class="scroll-view-right" scroll-y="true">
      <view v-if="childCateList.length">
        <block v-for="cateLevel2 in childCateList" :key="cateLevel2.id">
          <view class="levelTwo" v-if="cateLevel2.level === 2">{{
            cateLevel2.name
          }}</view>

          <view class="levelThree">
            <block v-for="cateLevel3 in childCateList" :key="cateLevel3.id">
              <view
                class="levelThreeItem"
                v-if="cateLevel3.parent_id === cateLevel2.id"
              >
                <image :src="cateLevel3.img_url"></image>
                <text>{{ cateLevel3.name }}</text>
              </view>
            </block>
          </view>
        </block>
      </view>
      <view v-else> 该暂无数据哦~ </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      parentCateList: [],
      childCateList: [],
      active: 0
    };
  },
  created() {
    uni.hloRequest({
      url: 'goodsCate',
      success: (res) => {
        this.parentCateList = res.data;
      }
    });
  },
  methods: {
    clickParentCate(parent_id, index) {
      this.active = index;
      uni.hloRequest({
        url: `goodsCate/${parent_id}`,
        success: (res) => {
          this.childCateList = res.data;
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
