## 1. 快速上手

### 核心概念

- Entry:入口，webpack执行构建的第一步将从entry开始
- Module:模块，在webpack里一切皆模块，一个模块对应着一个文件
- Chunk:代码块，一个Chunk由多个模块组合而成，用于代码合并与分割
- Loader:模块转化器，用于把模块原内容按照需求转化成新的内容
- Plugin:扩展插件，在webpack构建流程中的特定时机注入扩展逻辑来改变构建的结果或者做你想做的事儿
- Output:输出结果，在webpack经过一系列处理并得到最终想要的代码后输出结果

webpack启动后会从Entry里配置的module开始递归解析Entry依赖的所有的Module，每找到一个module，就会根据配置的loader去找出对应的转化规则，对module进行转化后，再解析出当前Module依赖的module.这些模块会以Entry为单位进行分组，一个Entry和其他所有依赖的module被分到一个组也就是一个Chunk。最后会把所有的Chunk转化成文件输出。在整个流程中wepback会在恰当的时机执行Plugin里面的逻辑

### 配置webpack

### 配置开发服务器

### 自动产出html

### 加载图片

### 在html中使用图片

### 加载css文件

### 分离css

### 编译less和sass

### 处理css属性前缀

### 转义es6/es7/jsx

### 如何调试打包后的代码

### 拷贝静态文件

### 打包前清空dist输出目录

### 压缩js

### resolve解析

### 区分环境变量

