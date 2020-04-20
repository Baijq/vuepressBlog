# SpringBoot学习笔记

SpringBoot是一款非常优秀非常流行的java开发框架。官方网址:[https://spring.io/](https://spring.io/)

1. 简化了开发流程

    - [x] SpringBoot以前，我们使用的SSM工程，需要web.xml,spring-web.xml,spring-service.xml,spring-dao.xml,spring-content.xml等一系列xml配置文件

    - [x] SpringBoot 都没有，简化了各种繁琐的xml配置

2. SpringBoot内置Tomcat，做到开箱即用

    都不需要我们将项目打包放到Tomcat里，直接内置使用，就和使用javaSE的main方法一样简单

3. 自动装配（非常强大的Starter）-- 并且提供约束大于配置的理念

    SpringBoot把各种模块全部封装成了一个个的Starter，想用哪个就引用哪个Starter。并且提供简单的配置文件做个性化配置


## 一、SpringBoot 工程创建

本篇会从零开始，搭建SpringBoot工程。

#### 1. 工具/环境推荐

    - JDK 1.8
    - Maven 3.6.0
    - IntelliJ IDEA / STS

#### 2. pom文件

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
        <modelVersion>4.0.0</modelVersion>

        <!-- 项目坐标 -->
        <groupId>com.bjq.demo</groupId>
        <artifactId>sb-demo</artifactId>
        <version>0.0.1-SNAPSHOT</version>
        
        <!-- 父级模块 -->
        <parent>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-parent</artifactId>
            <version>2.2.5.RELEASE</version>
        </parent>

        <!-- 项目属性设置 -->
        <properties>
            <java.version>1.8</java.version>
            <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
            <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        </properties>

        <!-- 项目依赖 -->
        <dependencies>
            <!-- boot-web -->
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-web</artifactId>
            </dependency>
        </dependencies>

        <!-- 打包插件 -->
        <build>
            <plugins>
                <plugin>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-maven-plugin</artifactId>
                </plugin>
            </plugins>
        </build>

    </project>
    ```

#### 3. 推荐使用结构

    ```yaml
    sb-demo
        -src
            -main
                -java
                    -com.sb.demo
                        -config
                        -domain
                        -controller
                        -service
                        SbApplication.java
                -resources
                    -static
                    -templates
                    application.properties
            -test
                -java
                -resources
        -pom.xml
    ```

#### 4. 启动类

    ```java
    import org.springframework.boot.SpringApplication;
    import org.springframework.boot.autoconfigure.SpringBootApplication;
    /**
    * WebApplication @SpringBootApplication注解很重要，是整个SpringBoot的核心入口
    *
    * @author biubiu
    */
    @SpringBootApplication
    public class WebApplication {

        public static void main(String[] args) {
            SpringApplication.run(WebApplication.class, args);
        }
    }
    ```

#### 5. 测试类 （略）

    ```java
    /**
     * HelloController
     *
     * @author biubiu
     */
    @RestController
    public class HelloController {
        
        @GetMapping("/hello")
        public String hello() {
            return "Hello World!";
        }
    }
    ```

## 二、SpringBoot静态资源访问配置

### 1. SpringBoot默认静态资源路径

- SpringBoot默认将静态资源所有的访问映射到以下路径

```txt
1. classpath:/static
2. classpath:/public
3. classpath:/resources
4. classpath:/META-INF/resources
```

测试：在`main/resources`下新建`static`、`public`、`resources`等文件夹，分别放入`a.png`、`b.png`、`c.png`三张图片，启动项目，访问：

```txt
http://localhost:8080/a.png
http://localhost:8080/b.png
http://localhost:8080/c.png
```

### 2.SpringBoot 自定义静态资源路径

#### 1. 通过配置文件配置

通过application.yml或者application.properties配置静态资源加载路径

```yml
spring:
  #静态资源访问路径
  mvc.static-path-pattern: /demo/**
  #静态资源映射路径,带上SpringBoot默认的路径
  resources.static-locations: classpath:/META-INF/resources/,classpath:/resources/,classpath:/static/,classpath:/public/,classpath:/img/
```

启动，访问：`http://localhost:8080/demo/test.png`

#### 2. 通过配置类配置

```java
@Configuration
public class MyWebMvcConfigurerAdapter implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 将/static/**访问映射到classpath:/img/
        registry.addResourceHandler("/demo/**").addResourceLocations("classpath:/img/");
    }
}
```

启动，访问：`http://localhost:8080/demo/test.png`

## 三、封装统一返回数据格式

### 1. Result.java

```java
package com.bjq.demo.common;

import java.io.Serializable;

public class Result<T> implements Serializable {

    private static final long serialVersionUID = -7815237591909039836L;

    private Integer code;

    private String msg;

    private T data;

    public Result() {
    }

    public Result(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public Result(Integer code, String msg, T data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}

```

### 2. ResultUtil.java

```java
package com.bjq.demo.common;

public class ResultUtil {

    private static final String MSG_SUCCESS = "success";

    private static final String MSG_FAIL = "fail";

    public static Result success() {
        return success(null);
    }

    public static Result success(Object data) {
        return new Result(0, MSG_SUCCESS, data);
    }

    public static Result fail(Integer code, String msg) {
        return new Result(code, MSG_FAIL);
    }
}

```

以上两个类可以合并为一个，但是为了减少代码的冗余，拆了开来。


### 3. Rest接口返回参数 ResponseBody构造器 ajax/rest web服务返回  RestResponse.java

```java
package com.biubiu.admin.util;

import java.util.HashMap;

/**
 * RestResponse ResponseBody构造器 ajax/rest web服务返回
 *
 * @author biubiu
 */
public class RestResponse extends HashMap<String, Object> {

    public static RestResponse success() {
        return success("success");
    }

    public static RestResponse success(String message) {
        RestResponse response = new RestResponse();
        response.setSuccess(true);
        response.setMessage(message);
        response.setCode(0);
        return response;
    }

    public static RestResponse failure(String message) {
        RestResponse response = new RestResponse();
        response.setSuccess(false);
        response.setMessage(message);
        response.setCode(-1);
        return response;
    }

    public RestResponse setSuccess(Boolean success) {
        if (success != null) {
            put("success", success);
        }
        return this;
    }

    public RestResponse setMessage(String message) {
        if (message != null) {
            put("message", message);
        }
        return this;
    }

    public RestResponse setData(Object data) {
        if (data != null) {
            put("data", data);
        }
        return this;
    }

    public RestResponse setCode(Integer code) {
        if (code != null) {
            put("code", code);
        }
        return this;
    }

    public RestResponse setPage(Integer page) {
        if (page != null) {
            put("page", page);
        }
        return this;
    }

    public RestResponse setCurrentPage(Integer currentPage) {
        if (currentPage != null) {
            put("page", currentPage);
        }
        return this;
    }

    public RestResponse setLimit(Integer limit) {
        if (limit != null) {
            put("limit", limit);
        }
        return this;
    }

    public RestResponse setTotal(Integer total) {
        if (total != null) {
            put("total", total);
        }
        return this;
    }

    public RestResponse setAny(String key, Object value) {
        if (key != null && value != null) {
            put(key, value);
        }
        return this;
    }
}

```

## 四、SpringBoot全局异常处理

```java
/**
 * 全局异常拦截器
 */
@ControllerAdvice
@ResponseBody
public class GlobalExceptionHandler {
    private static final String logExceptionFormat = "Capture Exception By GlobalExceptionHandler: Code: %s Detail: %s";
    private static Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);
    
    //运行时异常
    @ExceptionHandler(RuntimeException.class)
    public String runtimeExceptionHandler(RuntimeException ex) {
        return resultFormat(1, ex);
    }
    //空指针异常
	@ExceptionHandler(NullPointerException.class)
	public Map<String, Object> nullPointerExceptionHandler(NullPointerException e) {
		System.err.println("NullPointerException:");
        return resultFormat(2, ex);
	}
    //格式转化
    private <T extends Throwable> String resultFormat(Integer code, T ex) {
        ex.printStackTrace();
        log.error(String.format(logExceptionFormat, code, ex.getMessage()));
        Result result = ResultUtil.fail(code, ex.getMessage());
        return JSON.toJSONString(result);
    }
}

```

## 五、SpringBoot配置文件

SpringBoot默认配置文件为`application.properties`或者`application.yml`

### 1. YAML格式语法

- 大小写敏感，注意格式

- 对象、Map写法

  - 写法一：

  ```yaml
  friends:
      lastName: zhangsan
      age: 20
  
  ```

  - 行内写法

  ```yaml
  friends: {lastName: zhangsan, age: 20}
  
  ```

- 数组 List Set

  - 写法一

  ```yaml
  pets:
    - cat
    - dog
    - pig
  
  ```

  - 行内写法

  ```yaml
  pets: [cat,dog,pig]
  
  ```

- 随机数

  ```yaml
  random1: ${random.long} 
  random2: ${random.int(10)}
  random3: ${random.int[1024, 65536]}
  
  ```

### 2. YAML举例

```yaml
user:
	lastName: hello
	age: 18
	boss: false
	birth: 2019/12/12
	maps: {qq: 10000, moblie: 13811002233}
	lists:
		- zhaoliu
		- lisi
	dog:
		name: 小狗
		age: 4

```

整体映射：

```java
//指定配置文件
@PropertySource(value="classpath:application.yml")
@Component
ConfigurationProperties(prefix = "user")
public class User {
	private String lastName;
	private Integer age;
	private Boolean boss;
	private Date birth;
	private Map<String, Object> maps;
	private List<Object> lists;
	private Dog dog;
}

```

只娶一个值

```java
@Value("${demo.demo}")
private String 属性;

```

yml和properties同时存在，yml覆盖properties

```txt
配置文件加载路径
启动时扫描以下路径下的application.properties application.yml文件作为SpringBoot的默认配置文件
-file:./config/
-file:./
-classpath:/config/
-classpath:/
优先级由高到低

```

dev test pro环境配置文件切换
多profile
application-dev.yml
application-test.yml
application-prod.yml

激活指定的profile

1. 配置文件指定 spring.profiles.active = dev
2. 命令行
   Java -jar sb-demo.jar --spring.profiles.active = dev；
3. 虚拟机参数
   -Dspring.profiles.active=dev

Themeleaf

Model 数据
ModelAndView 数据视图

整合JPA

2jar---
msyql驱动
spring-boot-starter-data-jpa

RestFul设计

/addBook/{name}

jpa步骤
1.添加依赖
2.配置application
3.实体类和dao层接口
4.service接口
5.controller

整合MyBatis
1.依赖
mysql-connector-java
mybatis-spring-boot-starter
2.配置文件 数据库
3.mapper接口 --注解形式
4.service接口
5.controller
6.配置扫描包
@MapperScan(basePackages="com.demo.dao")

整合Redis
1.依赖
springboot-satrter-data-redis
2.配置

## 六、SpringBoot集成Swagger

### 1. 添加依赖

```xml
<!--swagger-->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
    <version>2.9.2</version>
</dependency>
<!--swagger-ui-->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>2.9.2</version>
</dependency>

```

可以提取到properties里，如下：

```xml
<version>2.9.2</version>修改如下：
<version>${swagger.version}</version> 

<proerties>
    <swagger-version>2.9.2</swagger-version>
</proerties>

```

### 2. Swagger配置类

- 配置类如下，加了个开关

  ```java
  package com.bjq.demo.config;
  
  import io.swagger.annotations.ApiOperation;
  import org.springframework.beans.factory.annotation.Value;
  import org.springframework.context.annotation.Bean;
  import org.springframework.context.annotation.Configuration;
  import springfox.documentation.builders.ApiInfoBuilder;
  import springfox.documentation.builders.RequestHandlerSelectors;
  import springfox.documentation.service.ApiInfo;
  import springfox.documentation.spi.DocumentationType;
  import springfox.documentation.spring.web.plugins.Docket;
  import springfox.documentation.swagger2.annotations.EnableSwagger2;
  
  /**
   * Swagger配置
   *
   * @author baijq
   */
  @Configuration
  @EnableSwagger2
  public class SwaggerConfig {
  
      @Value("${swagger.show}")
      private boolean swaggerShow;
  
      @Bean
      public Docket swaggerRestFulApi() {
          return new Docket(DocumentationType.SWAGGER_2)
                  .enable(swaggerShow)
                  .apiInfo(apiInfo())
                  .select()
                  .apis(RequestHandlerSelectors.withMethodAnnotation(ApiOperation.class))
                  .build();
      }
      /**
       * 构建 api文档的详细信息函数
       **/
      private ApiInfo apiInfo() {
          return new ApiInfoBuilder()
                  .title("SpringBoot 测试使用 Swagger2 构建 RestFul APIs")
                  //.contact(new Contact("一蓑烟雨任平生", "https://www.baidu.com", "mail@163.com"))
                  .description("API 描述")
                  .version("1.0")
                  .build();
      }
  }
  
  ```

- application.yml配置开关

  ```yaml
  #swagger 开关
  swagger:
    show: true
  
  ```

### 3. 注解使用

- 注解说明

  - @Api：用在类上，说明该类的作用。可以标记一个Controller类做为swagger文档资源。

    ```java
    @Api(value = "页面不显示", tags = {"接口介绍，在页面中显示","可配置多个，页面显示多个"})
    @RestController
    public class HelloController {
        //TODO
    }
    
    ```

  - ApiOperation：用在Controller里的方法上，说明方法的作用

    - value是该类的简短的叙述
    - nates是该方法的详细描述。

    ```java
    @PostMapping("/user")
    @ApiOperation(value = "添加用户接口", notes = "添加用户接口，参数user")
    public String addUser(@RequestBody UserRequest user) {
        return null;
    }
    
    ```

  - @ApiImplicitParam 与 @ApiImplicitParams

    ```txt
    @ApiImplicitParam注解用于表明前端传入的name参数的名字，required是否为必需项，以及dataType参数类型，以及paramType传递方式（query表示使用url问号的方式传参，这种比较常用，如果使用formData的方式进行传参，那么paramType的值为 form）
    当有多个参数时，需要用@ApiImplicitParams将@ApiImplicitParam包起来
    
    ```

  - @ApiModel：用在类上，表示对类进行说明，用于实体类中的参数接收说明

  - @ApiModelProperty：用于字段，表示对model属性的说明

    ```java
    @Data
    @ApiModel(value = "UserRequest", description = "用户请求参数")
    public class UserRequest {
    
        @ApiModelProperty(value = "用户ID", example = "2", dataType = "Integer", required = true)
        private Integer id;
    
        @ApiModelProperty(value = "用户姓名", example = "张三")
        private String name;
    
    }
    
    ```

  - ApiParam： 用于Controller中方法的参数说明

    ```java
    public String getUserName(@ApiParam(value = "用户编号", required = true) @RequestParam Integer userNumber) {//TODO}
    
    ```

    

- 示例代码

  ```java
  package com.bjq.demo.controller;
  
  import com.bjq.demo.controller.request.UserRequest;
  import io.swagger.annotations.Api;
  import io.swagger.annotations.ApiOperation;
  import io.swagger.annotations.ApiParam;
  import org.springframework.web.bind.annotation.GetMapping;
  import org.springframework.web.bind.annotation.PostMapping;
  import org.springframework.web.bind.annotation.RequestBody;
  import org.springframework.web.bind.annotation.RequestParam;
  import org.springframework.web.bind.annotation.RestController;
  
  @Api(value = "接口说明", tags = {"接口说明"})
  @RestController
  public class HelloController {
  
      @GetMapping("/name")
      @ApiOperation(value = "根据用户编号获取用户姓名", notes = "获取用户名接口: 仅1和2有正确返回")
      public String getUserName(@ApiParam(value = "用户编号", required = true) @RequestParam Integer userNumber) {
          if (userNumber == 1) {
              return "张三丰";
          } else if (userNumber == 2) {
              return "慕容复";
          } else {
              return "未知";
          }
      }
  
      @PostMapping("/user")
      @ApiOperation(value = "添加用户接口", notes = "添加用户接口，参数user")
      public String addUser(@RequestBody UserRequest user) {
          return null;
      }
  
  }
  
  ```

### 4. 访问swagger API

[http://127.0.0.1:8080/sb-demo/swagger-ui.html](##)

## 七、第三方jar在SpringBoot中的使用

### 1. 发布第三方jar到maven库，然后引入依赖（我还没试呢）

### 2.  放在项目中（重点说这个）

1. 使用到的第三方jar放入项目中，位置随意。这里放在classpath:/jar/

![](https://note.youdao.com/yws/api/personal/file/BF61020251114BC1BC5963CB07E0407B?method=download&shareKey=baf44a1810b74e405900c54ae66e9334)

2. 在pom中添加依赖

   这里**project.basedir**是项目路径

   ```xml
   <dependency>
               <groupId>local-jar</groupId>
               <artifactId>QrCodeGenerator</artifactId>
               <version>1.0.0</version>
               <scope>system</scope>
               <systemPath>${project.basedir}/src/main/resources/jar/QrCodeGenerator.jar</systemPath>
           </dependency>
           <dependency>
               <groupId>local-jar</groupId>
               <artifactId>zxing-core</artifactId>
               <version>1.0.0</version>
               <scope>system</scope>
               <systemPath>${project.basedir}/src/main/resources/jar/zxing-core-2.2.jar</systemPath>
           </dependency>
           <dependency>
               <groupId>local-jar</groupId>
               <artifactId>zxing-javase</artifactId>
               <version>1.0.0</version>
               <scope>system</scope>
               <systemPath>${project.basedir}/src/main/resources/jar/zxing-javase-2.2.jar</systemPath>
           </dependency>
   
   ```

## 八、SpringBoot打包部署

### 1. jar包部署

- 添加一个插件

  ```xml
  <!-- 打包插件 -->
  <build>
      <plugins>
          <plugin>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-maven-plugin</artifactId>
          </plugin>
      </plugins>
  </build>
  ```

- 这种使用SpringBoot内嵌的Tomcat进行部署。SpringBoot在不指定打包的时候默认jar包形式

  ```xml
  <packaging>jar</packaging>
  ```

- 使用命令启动部署

  ```xml
  java -jar xxx.jar
  ```

#### 注意存在第三方jar的情况

在第七章的基础上需要添加如下配置，然后打包后会把第三方jar打包到jar包中。

```xml
<build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
        <resources>
            <resource>
                <directory>src/main/resources/jar</directory>
                <targetPath>BOOT-INF/lib/</targetPath>
                <includes>
                    <include>**/*.jar</include>
                </includes>
            </resource>
            <resource>
                <directory>src/main/resources</directory>
                <targetPath>BOOT-INF/classes/</targetPath>
            </resource>
        </resources>
    </build>
```

### 2. war包部署

- 添加插件如上

- 打包方式修改为war

  ```xml
  <packaging>war</packaging>
  
  ```

- 添加tomcat插件，spring boot本身有一个内嵌的tomcat，如果不做其他配置直接打包，就会生成一个jar包。 所以我们引入外部tomcat

  ```xml
  <!-- 外部 tomcat -->
  <dependency>
  	<groupId>org.springframework.boot</groupId>
  	<artifactId>spring-boot-starter-tomcat</artifactId>
  </dependency>
  
  ```

- 在启动类中做如下配置，继承SpringBootServletInitializer，重写configure方法

  ```java
  @SpringBootApplication
  public class MyApplication extends SpringBootServletInitializer {
  
      public static void main(String[] args) {
          SpringApplication.run(MyApplication.class, args);
      }
  
      @Override
      protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
          return builder.sources(MyApplication.class);
      }
  }
  
  ```

- 打包(war)

  - 切换到项目所在路径，使用命令 `mvn clean package`
  - 使用IDE工具，例如IDEA自带打包工具

- 部署，拷贝war包到tomcat的webapps路径下，启动tomcat

**注意：这种war包方式端口号使用tomcat的，项目名使用war包的名字**，对于application.yml配置文件里指定的端口号和项目名会覆盖掉。

#### 注意第三方jar的情况

使用maven的打包插件，打包方式还是如上。

```xml
<build>
        <!--设置maven-war-plugins插件，否则外部依赖无法打进war包 -->
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-war-plugin</artifactId>
                <configuration>
                    <webResources>
                        <resource>
                            <directory>src/main/resources/jar/</directory>
                            <targetPath>WEB-INF/lib</targetPath>
                            <filtering>false</filtering>
                            <includes>
                                <include>**/*.jar</include>
                            </includes>
                        </resource>
                    </webResources>
                </configuration>
            </plugin>
        </plugins>
    </build>

```

## 九、SpringBoot整合JPA

### 1. 需要的依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>6.0.6</version>
</dependency>

```

### 2. 准备数据库环境

```bash
create database springboot_jpadb;

grant all privileges on fpsdb.* to 'admin'@'%';

flush privileges;

```

### 3. 配置数据源

```properties
#通用数据源配置
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://127.0.0.1:3306/fpsdb?charset=utf8mb4&useSSL=false&serverTimezone=UTC
spring.datasource.username=springboot
spring.datasource.password=springboot
# Hikari 数据源专用配置
spring.datasource.hikari.maximum-pool-size=20
spring.datasource.hikari.minimum-idle=5
# JPA 相关配置
spring.jpa.database-platform=org.hibernate.dialect.MySQL5InnoDBDialect
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=create

```

1. spring.jpa.show-sql=true 配置在日志中打印出执行的 SQL 语句信息。
2. spring.jpa.hibernate.ddl-auto=create 配置指明在程序启动的时候要删除并且创建实体类对应的表。这个参数很危险，因为他会把对应的表删除掉然后重建。所以千万不要在生成环境中使用。只有在测试环境中，一开始初始化数据库结构的时候才能使用一次。
3. spring.jpa.database-platform=org.hibernate.dialect.MySQL5InnoDBDialect 。在 SrpingBoot 2.0 版本中，Hibernate 创建数据表的时候，默认的数据库存储引擎选择的是 MyISAM （之前好像是 InnoDB，这点比较诡异）。这个参数是在建表的时候，将默认的存储引擎切换为 InnoDB 用的。

### 4. 实体类

```java
@Entity
@Data
@Table(name = "TB_USER")
class User {
    
    @Id
    private Integer id;

    @Column(name = "name")
    private String name;
    
    @Column(name = "trueName")
    private String trueName;
    
}

```

1. @Entity 是一个必选的注解，声明这个类对应了一个数据库表。
2. @Table(name = "AUTH_USER") 是一个可选的注解。声明了数据库实体对应的表信息。包括表名称、索引信息等。这里声明这个实体类对应的表名是 AUTH_USER。如果没有指定，则表名和实体的名称保持一致。
3. @Id 注解声明了实体唯一标识对应的属性。
4. @Column(length = 32) 用来声明实体属性的表字段的定义。默认的实体每个属性都对应了表的一个字段。字段的名称默认和属性名称保持一致（并不一定相等）。字段的类型根据实体属性类型自动推断。这里主要是声明了字符字段的长度。如果不这么声明，则系统会采用 255 作为该字段的长度。

**以上配置全部正确，则这个时候运行这个项目，我们就可以看到日志中如下的内容**

```xml
Hibernate: drop table if exists t_fps_message
Hibernate: create table t_fps_message (id bigint not null, end_to_end_id varchar(255), fps_identifier varchar(255), message_id varchar(255), transaction_id varchar(255), txn_amt varchar(255), txn_cur varchar(255), txn_date_time varchar(255), primary key (id)) engine=InnoDB

```

**系统自动将数据表给我们建好了，可以在数据库中查看表及表结构**

### 5. Spring Data JPA

#### 1. 实现一个持久层服务

在 Spring Data JPA 的世界里，实现一个持久层的服务是一个非常简单的事情。以上面的 UserDO 实体对象为例，我们要实现一个增加、删除、修改、查询功能的持久层服务，那么我只需要声明一个接口，这个接口继承
org.springframework.data.repository.Repository<T, ID>  接口或者他的子接口就行。这里为了功能的完备，我们继承了 org.springframework.data.jpa.repository.JpaRepository<T, ID> 接口。其中 T 是数据库实体类，ID 是数据库实体类的主键。
然后再简单的在这个接口上增加一个 @Repository 注解就结束了。

```java
package com.demo.dao;

import com.demo.domain.FpsMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * FpsMessageRepository
 *
 * @author baijq
 */
@Repository
public interface FpsMessageRepository extends JpaRepository<FpsMessage, Long> {

}

```

一行代码也不用写。那么针对 UserDO 这个实体类，我们已经拥有增删改查的功能

## 十、SpringBoot整合Mybatis

### 1. 依赖导入

```xml
<!--MyBatis框架-->
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>2.1.0</version>
</dependency>
<!--MySQL驱动-->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <scope>runtime</scope>
</dependency>
```

### 2. 配置文件

需要补全相关目录（mappers）

```properties
server.port=8888

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://127.0.0.1:3306/ssodb?charset=utf8mb4&useSSL=false&serverTimezone=UTC
spring.datasource.username=admin
spring.datasource.password=admin

mybatis.mapper-locations=classpath:mappers/*Mapper.xml

logging.level.com.centanet.sso.mapper=debug
```

### 3. 扫描MyBatis的Mapper接口配置

1. @Mapper 注解，在接口类上添加了@Mapper，在编译之后会生成相应的接口实现类。

   但是需要每一个接口都加该注解，比较麻烦

   ```java
   @Mapper
   public interface UserMapper {
       //todo
   }
   ```

2. @MapperScan 

   - 指定要变成实现类的接口所在的包，然后包下面的所有接口在编译之后都会生成相应的实现类

   - 位置：可以在SpringBoot启动类上加，也可以写个配置类，如下。

     ```java
     //配置类形式
     @Configuration
     @MapperScan("com.centanet.sso.mapper") // {"com.centanet.sso.mapper", "others"}
     public class MyBatisConfig {
     
     }
     //启动类形式
     @SpringBootApplication
     public class MyApplication {
         //todo
     }
     ```

### 4. 接口 UserMapper

```java
public interface UserMapper {
	Integer insertUser(User user);
}
```

### 5. 接口对应的映射文件 UserMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
  PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
  "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.centanet.sso.mapper.UserMapper">

    <!--主键自动生成，返回id值-->
	<insert id="insertUser" parameterType="com.centanet.sso.entity.User" 
		useGeneratedKeys="true" keyProperty="id">
		insert into tb_user(username, password, name)
		values(#{username}, #{password}, #{name})
	</insert>

</mapper>
```

## 十一、SpringBoot整合AOP


### 1. 引入依赖

```xml
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-aop</artifactId>
    </dependency>
```

### 2. 配置切面类

```java
package com.biubiu.admin.config.aop;

import com.alibaba.fastjson.JSON;
import com.biubiu.admin.entity.SysLog;
import com.biubiu.admin.service.SysLogService;
import com.biubiu.admin.util.ToolUtil;
import com.google.common.collect.Maps;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;
import java.util.Map;

/**
 * AopAspect 切面类
 *
 * @author biubiu
 */
@Aspect
@Component
public class WebAspect {

    @Resource
    private SysLogService sysLogService;

    private ThreadLocal<Long> startTime = new ThreadLocal<>();

    /**
     * 定义切入点，切入点为com.biubiu.admin.controller切下的所有函数
     */
    @Pointcut("execution(public * com.biubiu.admin.controller..*.*(..))")
    public void webLog() {
    }

    /**
     * 前置通知：在连接点之前执行的通知
     */
    @Before("webLog()")
    public void doBefore(JoinPoint joinPoint) {
        startTime.set(System.currentTimeMillis());
        //目标方法参数信息
        Object[] obj = joinPoint.getArgs();
        HttpServletRequest request = ToolUtil.getCurrentRequest();
        //获取请求参数
        Enumeration<String> enumeration = request.getParameterNames();
        Map<String, String> parameterMap = Maps.newHashMap();
        while (enumeration.hasMoreElements()) {
            String parameter = enumeration.nextElement();
            parameterMap.put(parameter, request.getParameter(parameter));
        }
        String str = JSON.toJSONString(parameterMap);
        if (obj.length > 0) {
            System.out.println("请求参数信息");
        }
        //请求参数
        SysLog log = SysLog.SysLogUtil.initSysLog(request);
        log.setParams(str);
    }

    @AfterReturning(returning = "ret", pointcut = "webLog()")
    public void doAfter(Object ret) {
        SysLog log = SysLog.SysLogUtil.getSysLogInstant();
        log.setUseTime(System.currentTimeMillis() - startTime.get());

        sysLogService.saveSysLog(log);
    }

}

```