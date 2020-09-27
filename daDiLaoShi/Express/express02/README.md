### P29 02、【Express教程】Express Ejs使用 静态文件托管

#### Ejs使用
##### 安装 ejs
```
npm install ejs --save
```
##### 挂载 ejs
```
app.set("view engine","ejs")
```
##### 使用 ejs
```
//默认加载模版引擎的文件是views 
// ./views/index.html
res.render("index",{

})
```
##### 默认模版位置在views里面, 手动配置指定模版位置，
```
app.set('views',___dirname+'/views');
```
##### ejs 解析html标签
```
// const renderHtml = `<h3>我是ejs渲染的h3</h3>`;
<%- renderHtml %>
```
##### ejs 条件判断
```
<%if(count > 60){%>

  <span> 我是 <%= count%> </span>

<%}else{%>

  <%= count%>

<%}%>
```
##### ejs 渲染
```
<ul>
  <% for(var i = 0; i < list.length; i++){%>
    <li>
      <div>
        姓名：<%= list[i].name%>
      </div>
      <div>
        年龄：<%= list[i].age%>
      </div>
    </li>
  <%}%>
</ul>
```
##### ejs 引入公共组件
```
  <%- include('footer.ejs')%> 
```