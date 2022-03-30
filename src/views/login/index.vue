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
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { key } from "@/store";
import type { FormInstance, FormItemRule } from "element-plus";
import { loginInfo } from "@/service/user/login";

const stroe = useStore(key);
const ruleFormRef = ref<FormInstance>();
interface Ilogininfo {
  id: number;
  isAdmin: boolean;
  username: string;
  password: string;
}

interface ICallback {
  (message?: string | Error | undefined): void;
}

const router = useRouter();
const ruleForm = reactive({
  pass: "",
  name: "",
});

const userLogin = reactive({
  isLogin: 0,
  userinfo: {},
});

const checkName = (
  rule: FormItemRule | FormItemRule[],
  value: string,
  callback: ICallback
) => {
  if (value === "") {
    callback(new Error("请输入正确的用户名"));
  } else {
    loginInfo({}).then((data) => {
      const userInfo = data.data as Array<Ilogininfo>;
      userLogin.isLogin = userInfo.filter(
        (item) => item.username === ruleForm.name
      ).length;
      if (userLogin.isLogin === 0) {
        callback(new Error("请输入正确的用户名"));
      } else {
        userLogin.userinfo = userInfo.filter(
          (item) => item.username === ruleForm.name
        )[0];
        callback();
      }
    });
  }
};

const validatePass = (
  rule: FormItemRule | FormItemRule[],
  value: string,
  callback: ICallback
) => {
  if (value === "") {
    callback(new Error("请输入正确的密码"));
  } else {
    loginInfo({}).then((data) => {
      const userInfo = data.data as Array<Ilogininfo>;
      userLogin.isLogin = userInfo.filter(
        (item) => item.password === ruleForm.pass
      ).length;
      if (userLogin.isLogin === 0) {
        callback(new Error("请输入正确的密码"));
      } else {
        userLogin.userinfo = userInfo.filter(
          (item) => item.username === ruleForm.name
        )[0];
        callback();
      }
    });
  }
};

const rules = reactive({
  pass: [{ validator: validatePass, trigger: "blur" }],
  name: [{ validator: checkName, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      router.push("/");
      stroe.dispatch("user/login", userLogin);
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
