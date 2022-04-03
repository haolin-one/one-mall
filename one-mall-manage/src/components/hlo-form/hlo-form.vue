<template>
  <div class="hlo-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form
      :label-width="labelWidth"
      :label-position="labelPosition"
      :model="formData"
      :rules="rules"
    >
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :style="itemStyle"
              :prop="item.field"
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
              <template v-else-if="item.type === 'textarea'">
                <el-input
                  type="textarea"
                  v-model="formData[`${item.field}`]"
                  :placeholder="item.placeholder"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'number'">
                <el-input-number
                  v-model="formData[`${item.field}`]"
                  :min="0"
                  :precision="2"
                ></el-input-number>
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
                    :label="option.title"
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
                  value-format="YYYY-MM-DD"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
              <template v-else-if="item.type === 'upload'">
                <el-upload
                  class="picture-uploader"
                  action="http://120.77.30.174:8000/static"
                  :on-success="handlePictureSuccess"
                  :before-upload="beforePictureUpload"
                  :http-request="upload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="picture" />
                  <el-icon v-else class="picture-uploader-icon"
                    ><Plus
                  /></el-icon>
                </el-upload>
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
import { ElMessage } from 'element-plus';
import hloAxios from '@/request';

const props = defineProps({
  modelValue: {
    type: Object,
    require: true
  },
  formItems: {
    default: () => []
  },
  rules: {
    default: () => {}
  },
  labelPosition: {
    default: 'right'
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

watch(
  formData,
  (newValue) => {
    emits('update:modelValue', newValue);
  },
  {
    deep: true
  }
);

const imageUrl = ref(formData.value['picture']);

const upload = async (param) => {
  const file = new FormData();
  file.append('picture', param.file);
  const result = await hloAxios.post({
    url: param.action,
    data: file
  });
  const uploadPicture = result.path.split('upload/')[1];
  imageUrl.value = `http://120.77.30.174:8000/upload/${uploadPicture}`;
};

const handlePictureSuccess = () => {
  formData.value['picture'] = imageUrl.value;
};

const beforePictureUpload = (rawFile) => {
  if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png') {
    ElMessage.error('请上传jpg或png格式的图片');
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('请上传图片大小小于4M的图片!');
    return false;
  }
  return true;
};
</script>

<style scoped>
.hlo-form {
  padding-top: 22px;
}
</style>
