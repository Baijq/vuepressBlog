# Cookie
## 一、Cookie解释和作用
Cookies是某些网站为了辨别用户身份而储存在用户本地终端上的数据（通常经过加密）。简单来说： Cookie 存放在客户端（浏览器），一般用来保存用户信息。

1. 在 Cookie 中保存已经登录过的用户信息，下次访问网站的时候页面可以自动帮你登录的一些基本信息给填了。除此之外，Cookie 还能保存用户首选项，主题和其他设置信息。

2. 使用Cookie 保存 session 或者 token ，向后端发送请求的时候带上 Cookie，这样后端就能取到session或者token了。这样就能记录用户当前的状态了，因为 HTTP 协议是无状态的。

3. Cookie 还可以用来记录和分析用户行为。举个简单的例子，你在网上购物的时候，因为HTTP协议是没有状态的，如果服务器想要获取你在某个页面的停留状态或者看了哪些商品，一种常用的实现方式就是将这些信息存放在Cookie。

## 二、Cookie在服务端的使用

[How to use cookies in Spring Boot](https://attacomsian.com/blog/cookies-spring-boot)

1. 创建（设置）Cookie并返回给客户端

```java
@GetMapping("/test")
public AopResult.Result<String> test(HttpServletResponse response) {
	//创建一个Cookie对象
	Cookie cookie = new Cookie("name", "tom");
	//设置Cookie的过期时间，2min
	cookie.setMaxAge(2 * 60);
	//添加Cookie到response中
	response.addCookie(cookie);
	//返回
	return AopResult.success("success");
}
```

2. 使用Spring框架提供的获取特定的Cookie值

```java
@GetMapping("/test")
public AopResult.Result<String> test(@CookieValue(value = "name", defaultValue = "tom") String name) {
	return AopResult.success(name);
}
```

3. 获取所有的Cookie值

```java
@GetMapping("/test")
public AopResult.Result<String> test(HttpServletRequest request) {
	Cookie[] cookies = request.getCookies();
    if (cookies != null) {
        return Arrays.stream(cookies)
                .map(c -> c.getName() + "=" + c.getValue()).collect(Collectors.joining(", "));
    }
	return AopResult.success("No cookies");
}
```
## Session

## 一、Session
Session 的主要作用就是通过服务端记录用户的状态，典型的场景是购物车，当你要添加商品到购物车的时候，系统不知道是哪个用户操作的，因为 HTTP 协议是无状态的。服务端给特定的用户创建特定的 Session 之后就可以标识这个用户并且跟踪这个用户了。

Cookie 数据保存在客户端(浏览器端)，Session 数据保存在服务器端。相对来说 Session 安全性更高。如果使用 Cookie 的一些敏感信息不要写入 Cookie 中，最好能将 Cookie 信息加密然后使用到的时候再去服务器端解密。

## JWT（JSON Web Token）
JWT本质上是一种带签名的JSON格式数据，由于它是带签名的，因此接收者便可以验证它的真实性。

1. JWT由三部分组成
- Header:描述JWT的元数据，定义了生成签名的算法以及 Token 的类型。
- Payload（负载）:用来存放实际需要传递的数据
- Signature（签名）:服务器通过Payload、Header和一个密钥(secret)使用 Header 里面指定的签名算法（默认是 HMAC SHA256）生成。

2. 使用流程，在基于Token验证的应用程序中，服务器通过Payload，Header和一个密钥（secret）创建令牌（Token）并将Token发送给客户端，客户端将 Token保存在Cookie或者LocalStorage 里面，以后客户端发出的所有请求都会携带这个令牌。你可以把它放在Cookie 里面自动发送，但是这样不能跨域。所以更好的做法是放在HTTP Header的Authorization字段中：Authorization: Bearer Token。

