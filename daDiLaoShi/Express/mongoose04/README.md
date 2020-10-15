### P41 14、【Express+Mongoose】Mongoose 数据校验（五）

mongoose数据校验:用户通过mongoose给mongodb数据库增加数据的时候，对数据的合法性进行的验证

mongoose里面定义Schema:字段类型，修饰符、默认参数、数据校验都是为了数据库数据的一致性

Schema, 为数据库对象的集合，每个schema会映射到mongodb中的一个collection（表）,定义Schema可以理解为表结构的定

#### mongoose 内置数据校验方法

```
required: 表示这个数据必须传入
max: 用于Number类型数据，最大值
min: 用于Number类型数据，最小值
enum: 枚举类型，要求数据必须满足枚举值enum: ['0', '1', '2']
match: 增加的数据必须符合match (正则)的规则
maxlength: 最大值
minlength: 最小值
```

#### 自定义验证器
