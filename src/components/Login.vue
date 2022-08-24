<template>
  <div class="login_container">
    <div class="login_box">
        <!-- 头像 -->
        <div class="logo"><img src="../assets/logo.png" alt="" srcset="" class="logo_size"></div>
        <!-- 表单 -->
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
            <!-- 用户名 -->
            <el-form-item class="input_size" prop="username">
                <el-input prefix-icon="el-icon-user" v-model="loginForm.username"></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item class="input_size" prop="password">
                <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item class="sub">
                <el-button type="primary" @click="login">提交</el-button>
                <el-button >重置</el-button>
            </el-form-item>
        </el-form>
    </div>

  </div>
</template>

<script>
export default {
    name:"Login",
    data() {
        // 密码的校验规则
        let checkPwd=function(rule,value,callback){
            if(!value){
                return callback(new Error("密码不能为空哦"))
            }
            let newNumber=value.match(/\d+(.\d+)?/g);//取出value中的数字
            let newNumber2=""
            for(let i in newNumber){
                newNumber2+=newNumber[i]
            }
            // if(value.length==newNumber2.length){
            //     return callback(new Error("密码不能为纯数字"))
            // }
            if(!newNumber2.length){
                return callback(new Error("密码不能为纯字符"))
            }
            if(value.length<3){
                return callback(new Error("密码长度不能小于三"))
            }
            if(value.length>9){
                return callback(new Error("密码长度不能大于九"))
            }
            return callback()
        }
        return {
            loginForm:{
                username:"admin",
                password:"123456"
            },
            rules:{
                username:[
                    {required:true,message:"请输入名称",trigger:'blur'},
                    { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                ],
                password:[
                    {validator:checkPwd,trigger:"blur"}//自定义校验
                    // {required:true,message:"请输入密码",trigger:'blur'},
                    // { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }

                ]
            }
        }
    },
    methods: {
        login(){
            //表单的预验证
            console.log(this.$http);
            this.$refs.loginForm.validate(async valid=>{
                if(!valid) return;
                const {data:res} = await  this.$http.post('login',this.loginForm)
                console.log(res);
                if(res.meta.status!=200) return this.$message.error("登录失败")
                this.$message.success("登录成功")
                window.sessionStorage.setItem("token",res.data.token)
                this.$router.push("/home")
            })
        }
    },
}
</script>

<style lang="less" scoped> 
    .login_container{
        background-color: #2b4b6b;
        height: 100%;
        position: relative;
    }
    .login_box{
        height: 300px;
        width: 450px;
        background-color: rgb(185, 215, 241);
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translate(-50%);
    }
    .logo{
        transform: translate(155px,-50px);
        height: 130px;
        width: 130px;
        // width: 200px;
    }
    .logo_size{
        box-shadow: 0 0 10px;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: white;
        border: 1px solid gray;
    }
    .sub{
        position: absolute;
        right: 10px;
    }
    .input_size{
        padding: 0 20px;
    }
</style>