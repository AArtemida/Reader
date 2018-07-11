export default{
  install(Vue,options)
  {
    Vue.prototype.userInfo = [
    {
      id:1,
      userName:'user1',
      password:'abc',
      readTime:100,
      icon:'',
    },
    {
      id:2,
      userName:'user2',
      password:'123',
      readTime:200,
      icon:'',
    }
  ]
  }
}