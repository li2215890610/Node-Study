### P38 11、【Express+Mongoose】mongoose入门以及mongoose实现数据的增、删、改、查( 二 )

#### 默认参数
增加数据的时候，如果不传入数据会使用 Schema 默认配置的数据
01_default_data.js

#### mongoose模块化
app.js

#### mongoose性能疑问
基于模块化我们多次引入Model,虽然我们多次引入，但是也不影响性能，第一次连接数据库之后，系统底层会保存，当我们第二次去连接的时候，底层处理会直接返回给我们一个实例，故此不存在性能问题
