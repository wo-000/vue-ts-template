<template>
  <div class="login">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名：" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="密码：" prop="pass">
        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Submit
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import type { FormInstance } from "element-plus";

const ruleFormRef = ref<FormInstance>();

interface ICallback {
  (message?: string | Error | undefined): void;
}

const checkName = (rule: any, value: string, callback: ICallback) => {
  console.log(rule, value, callback);
  if (value === "") {
    return callback(new Error("请输入正确的用户名"));
  } else {
    callback();
  }
};

const validatePass = (rule: any, value: string, callback: ICallback) => {
  if (value === "") {
    callback(new Error("请输入正确的密码"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  pass: "",
  name: "",
});

const rules = reactive({
  pass: [{ validator: validatePass, trigger: "blur" }],
  name: [{ validator: checkName, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log(ruleForm, 555);
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<style lang="scss" scoped>
.login {
  width: 400px;
  padding: 20px;
  margin: 0 auto;
}
</style>
