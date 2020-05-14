<template>
  <div class="login">
    <div class="login-form">
      <h1>login</h1>

      <div class="txtb">
        <input v-model="user" type="text" name="">
        <span data-placeholder="username" />
      </div>

      <div class="txtb">
        <input v-model="password" type="text" name="">
        <span data-placeholder="password" />
      </div>

      <input type="submit" class="logbtn" value="Login" @click="Login()">
      <div class="bottom-text">
        Don't have account?<a href="#">Sign up</a>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
import { setToken } from '@/utils/auth'
export default {
  name: 'Login',
  data() {
    return {
      user: '',
      password: ''
    }
  },
  created() {

  },
  mounted() {
    const input = document.querySelectorAll('.txtb input')
    for (let i = 0; i < input.length; i++) {
      input[i].addEventListener('focus', function() {
        this.classList.add('focus')
      })
      input[i].addEventListener('blur', function() {
        if (this.value === '') {
          this.classList.remove('focus')
        }
      })
    }
  },
  methods: {
    Login() {
      const user = {
        user: this.user,
        password: this.password
      }
      login(user).then(res => {
        setToken(res.token)
        // this.$router.push({ path: this.redirect || '/' })
        this.$emit('changeType')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang='css' scoped>
*{
	padding: 0;
	margin: 0;
	text-decoration: none;/*去除文本装饰*/
	font-family: Comic Sans MS;
	box-sizing: border-box;
}

.login{
	min-height: 100vh;/*设置最小高度*/
	background-image: linear-gradient(120deg,#1ABC9C,#8E44AD)
}

.login-form{
	width: 360px;
	background: #f1f1f1;
	height: 580px;
	padding: 80px 40px;
	border-radius: 10px;
	position: absolute;
	left: 50%;
	top:50%;
	transform: translate(-50%,-50%);
}

.login-form h1{
	text-align: center;
	margin-bottom: 60px;
}

.txtb{
	border-bottom: 2px solid #adadad;
	position: relative;
	margin: 30px 0;
}

.txtb input{
	font-size: 15px;
	color: #333;
	border: none;
	width:100%;
	outline: none;
	background: none;
	padding: 0 5px;
	height: 40px;
}

/*将Span显示的字体覆盖到input输入框上*/
.txtb span::before{
	content: attr(data-placeholder);
	position: absolute;
	top: 50%;
	left: 5px;
	color: #adadad;
	transform: translateY(-50%);
	z-index: -1;
	transition: .5s;
}

.txtb span::after{
	content: '';
	position: absolute;
	width: 0;
	height: 2px;
	background: linear-gradient(120deg,#1ABC9C,#8E44AD);
	/*left: 0px;
	top: 100%;*/
	display: block;/*因为伪类默认是line元素所以改成block换行*/
	transition: .5s;
}

.focus + span::before{
	top: -5px;
}

.focus + span::after{
	width:100%;
}
.logbtn{
	display: block;
	width: 100%;
	height: 50px;
	border: none;
	background: linear-gradient(120deg,#1ABC9C,#8E44AD,#1ABC9C);
	background-size: 200%;
	color: #fff;
	outline: none;
	cursor: pointer;
	transition: .5s;
}

.logbtn:hover{
	background-position: right;
}

.bottom-text{
	margin-top: 60px;
	text-align: center;
	font-size: 13px;
}
</style>
