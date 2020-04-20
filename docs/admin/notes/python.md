# Python

时间戳转化成时间字符串
```python
import time

ltime = time.localtime(1556640000)
time_stamp  = time.strftime('%Y-%m-%d %H:%M:%S',ltime)
print(time_stamp)#格式为str类型
```

If we go by this approach we have to swipe or insert the card twice, first to check the card type , and second time for transaction, but our requirement is to do this process in single swipe or insert

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

def our_password():
    tries = 3 # 重试次数3次
    mima = "123456" # 正确密码
    print("<<<<<< ←_← 模拟密码重试系统 →_→ >>>>>>")
    password_input = input("SB →_→ let`s go! please enter password: ")
    if password_input == mima:
        print("SB →_→ Login successfully!!")
        return None
    else:
        while tries > 0:
            print("SB →_→ attention: you left " + str(tries) + " times")
            new_password = input("SB →_→ please enter password again: ")
            if new_password == mima:
                print("SB →_→ Login successfully!!")
                return None
            tries -= 1
        print("SB →_→ end, you are a failer, lowser, SB")

our_password()
```

```python
favourite_languages = {
    'jen':['python', 'ruby'],
    'sarah':['c'],
    'edward':['ruby', 'go'],
    'phil':['python', 'hasshell']
}

for name, languages in favourite_languages.items():
    if len(languages) > 1:
        print("\n" + name.title() + "`s favorite languages are:")
        for language in languages:
            print("\t" + language.title())
    else:
        print("\n" + name.title() + "`s favorite is " + languages[0])


#登陆模拟
password_list = ['*#*#', '123456']

def account_login():
    tries = 3
    while tries > 0:
        password = input("password:")
        password_currect = password == password_list[-1]
        password_reset = password == password_list[0]

        if password_currect:
            print('Login success!')

        elif password_reset:
            new_password = input("Enter a new password:")
            password_list.append(new_password)
            print('Your password has changed successfully!')
            account_login()
        else:
            print('Wrong password and invalid input!')
            tries = tries - 1
            print( tries, 'times left')
    else:
        print('Your account has been suspended')

account_login()
```

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

def our_password():
    tries = 3 # 重试次数3次
    mima = "123456" # 正确密码
    print("<<<<<< ←_← 模拟密码重试系统 →_→ >>>>>>")
    password_input = input("SB →_→ let`s go! please enter password: ")
    if password_input == mima:
        print("SB →_→ Login successfully!!")
        return None
    else:
        while tries > 0:
            print("SB →_→ attention: you left " + str(tries) + " times")
            new_password = input("SB →_→ please enter password again: ")
            if new_password == mima:
                print("SB →_→ Login successfully!!")
                return None
            tries -= 1
        print("SB →_→ end, you are a failer, lowser, SB")

our_password()
```


奇偶交换

```python
#a = [1, 2 ,3 ,4, 5, 6, 7, 8, 9, 10] 用单层循环实现 a = [2, 1, 4, 3, 6, 5, 8, 7, 10, 9]
#程序分析：
#第一个元素与第二个元素交换
#第二个元素与第三个元素交换
#......
#奇偶交换
#利用while循环，i步长为2

a = [1, 2 ,3 ,4, 5, 6, 7, 8, 9, 10]
i = 0
while i < len(a) - 1:
    t = a[i]
    a[i] = a[i+1]
    a[i+1] = t #或者a=[i], a[i+1]=a[i+1], a[i]
    i += 2
print(a)
```

去除空格

```python
#去除空格
str = '  a k  '
new = str.replace(' ','')
print(new)
```

固定参数和可变参数

```python
#固定参数
def product(x, y):
    return x * y

print(product(5, 6))

#可变参数
def product(*x):
    if len(x) == 0:
        print('请输入参数')
    r = 1
    for i in x:
        if not isinstance(i, (int, float)):
            print('输入数字')
            return None
        r *= i
    return r
```

读取文件

```python
with open(r'C:\Users\017220\Desktop\#BJQ\task\test.java', encoding='utf-8') as file:
    line = file.read()
print(line)
```

九九乘法表

```python
#一般形式
for i in range(1,10):
    for x in range(1,i+1):
        print( '%d X %d = %2d' % (x ,i ,i*x) ,end = '  ' )
    print('  ')
    
#简洁方式
print('\n'.join([' '.join ('%dx%d=%2d' % (x,y,x*y)  for x in range(1,y+1)) for y in range(1,10)]))
```

列表生成式

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

#L1列表
L1 = ['Hello', 'World', 18, 'Apple', None]

#普通方式构造L2列表
L2 = []
for s in L1:
    if isinstance(s, str) == True:
        L2.append(s.lower())
    else:
        L2.append(s)
print(L2)

#列表生成式方式
L3 = [x.lower() if isinstance(x, str) else x for x in L1]
```

替换敏感词

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

def t_filter(word, c_word='lame', change = "cute"):
    return word.replace(c_word, change)
    
def t_readTxt(path):
    with open(path, "r", encoding='gbk') as f:
        return f.read()


print(t_readTxt("C:\\Users\\017220\Desktop\\test\\新建文本文档.txt"))
```