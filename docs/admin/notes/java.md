# Java 

## Java 修饰符
| 访问权限      | 本类  | 本包 | 不同包子类 | 不同包非子类 |
| ------------- | :-----: | :----: | :----------: | :------------: |
| **public**    | **√** | **√** | **√** | **√** |
| **protected** | **√** | **√** | **√** |              |
| **default**   | **√** | **√** |            |              |
| **private**   | **√** |      |            |              |

## 创建对象的途径

- 方式一 new

```java
Student s = new Student();
```

- 方式二 反射

```java
Student s = (Student)Student.forName("com.demo.Student").newInstance();
//或者
Student s = Student.class.newInstance();
//##事实上Class的newInstance方法内部调用的也是Constructor的newInstance方法。
```

- 方式三 反射，利用构造器

```java
public class Student {
    private Integer id;
    public Student(Integer id) {
        this.id = id;
    }
    public static void main(String[] args) throws Exception {
        // 首先得到要实例化类的构造器（有参）
        Constructor<Student> constructor = Student.class.getConstructor(Integer.class);
    	Student s = constructor.newInstance(12);
    }
}
```

- 方式四 Clone （不会调用任何构造函数）

```java
public class Student implements Cloneable {
    private Integer id;
    public Student(Integer id) {
        this.id = id;
    }
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
    public static void main(String[] args) throws Exception {
        Constructor<Student> constructor = Student.class.getConstructor(Integer.class);
        Student stu3 = constructor.newInstance(13);
        Student stu4 = (Student) stu3.clone();
    }
}
```

- 方式五 （(反)序列化机制）（不会调用构造函数）

```java
public class Student implements Serializable {
    private int id;
    public Student(Integer id) {
        this.id = id;
    }
    @Override
    public String toString() {
        return "Student [id=" + id + "]";
    }
    public static void main(String[] args) throws Exception {
        Constructor<Student> constructor = Student.class.getConstructor(Integer.class);
        Student stu3 = constructor.newInstance(123);
        // 写对象
        ObjectOutputStream output = new ObjectOutputStream(new FileOutputStream("student.bin"));
        output.writeObject(stu3);
        output.close();
        // 读对象
        ObjectInputStream input = new ObjectInputStream(new FileInputStream(     "student.bin"));
        Student stu5 = (Student) input.readObject();
        System.out.println(stu5);
    }
}
```


