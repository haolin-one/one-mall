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
                @click="cate3ItemClick(cateLevel3.name)"
                class="levelThreeItem"
                v-if="cateLevel3.parent_id === cateLevel2.id"
              >
                <image :src="cateLevel3.picture"></image>
                <text>{{ cateLevel3.name }}</text>
              </view>
            </block>
          </view>
        </block>
      </view>
      <view v-else> 该分类暂无数据哦~ </view>
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
  async created() {
    const res = await uni.hloRequest.get({
      url: 'goodsCate'
    });
    this.parentCateList = res;
  },
  methods: {
    async clickParentCate(parent_id, index) {
      this.active = index;
      const res = await uni.hloRequest.get({
        url: `goodsCate/${parent_id}`
      });
      this.childCateList = res;
    },
    async cate3ItemClick(name) {
      uni.navigateTo({
        url: '../../subpackage/goodsList/goodsList?query=' + name
      });
    }
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
