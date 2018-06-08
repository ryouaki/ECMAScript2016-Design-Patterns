# 单例模式

单例模式，是一种常见的软件设计模式。在它的核心结构中只包含一个被称为单例的特殊类。通过单例模式，可以保证系统中采用该模式的类只有一个实例。即：一个类只有一个对象实例。

因此，在实现单例模式的要点是创建一个类，而这个类无论怎么new只能取得同一个对象。

## 代码

```js
class Singleton {
    constructor(data) {
        if (Singleton.prototype.Instance === undefined) {
            this.data = data;
            Singleton.prototype.Instance = this;
        }
        return Singleton.prototype.Instance;
    }
}
```

## 实现1

很多人在面试的时候，实现这个设计模式都是用类似下面这种方式：
```js
function(global){
  global.instance = null;
  
  global.getSingleInstance = function() {
    if (!global.instance) {
      global.instance = new Object();
    }
    return global.instance;
  }
}(window)
```

虽然在一定成都上实现了每次都能拿到同一个实例。但是这个并不是一个很好的实现方式：
- 污染全局命名空间
- 单例的要求是无论你如何创建新对象，这个对象都必须与第一次创建的对象是同一个对象

所以这根本不能算作是实现了单例模式。

## 实现2

下面是一种通过自身属性实现的单例模式

```js
function Signle() {

  if (Signle.instance) {
    return Signle.instance;
  }
  
  Signle.instance = this;
}
```

这种方式虽然完成了通过new操作符每次都会创建新对象，但是这个属性是公开的

## 实现3

通过闭包实现

```js
function Signle() {
  var instance = this;
  
  Signle = function() {
    return instance;
  }
}
```

这种方式会引起修改原型后造成实例对象属性丢失。

## 实现4

修改原型

```js
function Signle() {
  var instance;
  
  Signle = function() {
    return instance;
  }
  
  Signle.prototype = this;
  
  instance = new Signle();
  return instance;
}
```

这种方式已经非常好的达到了预期。

## 实现5

通过闭包来实现

```js

var Signle;
(function() {
  var instance;
  
  Signle = function() {
    return instance;
  }
  
  instance = this;
  
  return instance;
}());
```

通过闭包和自执行函数来实现，将实例隐藏起来。
