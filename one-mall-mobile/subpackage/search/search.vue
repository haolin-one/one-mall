<template>
  <view class="search">
    <view class="searchBox">
      <uni-search-bar
        class="searchBar"
        @input="input"
        @confirm="search(keyword)"
        placeholder="搜索您喜欢的商品"
        bgColor="#fff"
        radius="100"
        cancelButton="none"
      ></uni-search-bar>
      <text v-if="keyword" class="searchButton" @click="search(keyword)"
        >搜索</text
      >
    </view>
    <view v-if="suggestList.length" class="suggestBox">
      <view
        class="suggessItem"
        v-for="item in suggestList"
        :key="item.id"
        @click="search(item.name)"
      >
        <view class="goodsName">{{ item.name }}</view>
      </view>
    </view>
    <view v-if="!suggestList.length && histories.length" class="historySearch">
      <view class="historySearchTitle">
        <text>搜索历史</text>
        <uni-icons type="trash" @click="clearSearchHistory"></uni-icons>
      </view>
      <view class="historySearchContent">
        <uni-tag
          :text="item"
          type="default"
          circle="true"
          inverted="true"
          v-for="item in histories"
          :key="item"
          @click="search(item)"
        ></uni-tag>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      timer: null,
      keyword: '',
      historyList: uni.getStorageSync('keyword'),
      suggestList: []
    };
  },
  computed: {
    histories() {
      return [...this.historyList].reverse();
    }
  },
  methods: {
    input(e) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.keyword = e;
        this.getSuggestList();
      }, 500);
    },
    async getSuggestList() {
      if (this.keyword.length === 0) {
        this.suggestList = [];
      } else {
        const res = await uni.hloRequest.get({
          url: `goods/qSearch/${this.keyword}`
        });
        this.suggestList = res;
      }
    },
    search(name) {
      this.saveSearchHistory(name);
      uni.redirectTo({
        url: `../goodsList/goodsList?query=` + name
      });
    },
    saveSearchHistory(name) {
      const set = new Set(this.historyList);
      if (name instanceof Object) {
        set.delete(this.keyword);
        set.add(this.keyword);
      } else {
        set.delete(name);
        set.add(name);
      }
      this.historyList = Array.from(set);
      uni.setStorageSync('keyword', this.historyList);
    },
    clearSearchHistory() {
      uni.showModal({
        title: '提示',
        content: '确定清空搜索历史吗？',
        success: (res) => {
          if (res.confirm) {
            this.historyList = [];
            uni.setStorageSync('keyword', []);
          }
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>
