### P39 12、【Express+Mongoose】Mongoose 预定义模式修饰符 Getters与 Setters修饰符（三）


#### Mongoose 预定义模式修饰符 

lowercase、uppercase 、trim

mongoose提供的预定义模式修饰符，可以对我们增加的数据进行一些格式化。

```
const NewsSchema = mongoose.Schema({
    //定义数据库表中的类型
    title: {
      type: String,
      trim: true, //可以对  name 前后去除左右空格
    },
    author: String,
    pic: String,
    content: String,
    status: {
      type: Number,
      default: 1 // 默认数据
    }
});
```

#### Setters 与 Getters修饰符

set 查看 focus.js 文件

除了mongoose内置的修饰符以外，我们还可以通过set (建议使用)修饰符在增加数据的时候对数据进行格式化。也可以通过get (不建议使用)在**实例获取数据**的时候对数据进行格式化

例如以下的这种情况：
NewsSchema中 pic保存的时候的值是我们期望是 http://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png

www. 前面需要是 http://

而我们保存的可能是 www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png 

我们的需求是 如果www 前面不存在 http:// 我们就需要加上

```
const FocusSchema = mongoose.Schema({
    //定义数据库表中的类型
    title: {
      type: String,
      trim: true,//可以对  name 前后去除左右空格
    },
    pic: String,
    redirect: {
      type: String,
      //增加数据的时候给 redirect 修改数据
      set(params) {
        //params 可以获取  redirect 的值， 返回的数据就是redirect保存在数据库中的数据

        /**
            www.baidu.com        ===> http://www.baidu.com
            http://www.baidu.com ===> http://www.baidu.com
         */
        if (!params) return ""

        if (params.indexOf("http://") !== 0 && params.indexOf("https://") !== 0) {
          return `http://${params}`
        }

        return params
      }
    },
    status: {
      type: Number,
      default: 1 // 默认数据
    }
});
```

get 查看 user注释