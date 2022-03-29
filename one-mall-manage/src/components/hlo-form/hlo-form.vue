<template>
  <div class="hlo-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'switch'">
                <el-switch
                  v-model="formData[`${item.field}`]"
                  inline-prompt
                  active-color="#bf227b"
                  inactive-color="#1d62b8"
                  :active-text="item.open.text"
                  :inactive-text="item.close.text"
                  :active-value="item.open.value"
                  :inactive-value="item.close.value"
                />
              </template>
              <template v-else-if="item.type === 'radio'">
                <el-radio v-model="radio1" label="1" size="large"
                  >Option 1</el-radio
                >
                <el-radio v-model="radio1" label="2" size="large"
                  >Option 2</el-radio
                >
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind:="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: Object,
    require: true
  },
  formItems: {
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '80px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 40px' })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 11, // >1920px
      lg: 7,
      md: 12,
      sm: 16,
      xs: 24
    })
  }
});
const emits = defineEmits(['update:modelValue']);

const formData = ref({ ...props.modelValue });
console.log(formData.value['gender']);

watch(
  formData,
  (newValue) => {
    emits('update:modelValue', newValue);
  },
  {
    deep: true
  }
);
</script>

<style scoped>
.hlo-form {
  padding-top: 22px;
}
</style>
