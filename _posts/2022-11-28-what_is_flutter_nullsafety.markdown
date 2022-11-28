---
layout: post
title: "what is Dart nullsafety"
date:   2022-11-26 21:03:36 +0530
categories: Dart Study
---
null safety는 프로그램이 **'null'**로부터 안전하도록 개발하는 것을 의미한다. <br>
null 값이 들어가면 안 되는데 null 값이 들어가서 **runtime error**가 발생하는 경우 등을 예방하려는 조치이다. <br>
아래있는 예제 코드를 통해 null safety에 관한 설명을 진행해 보도록 하자. <br>

```cpp
class Coffee {
  late String _temperature;
  void heat() {
    _temperature = 'hot';
  }
  void chill() {
    _temperature = 'iced';
  }
  String serve() => _temperature + ' coffee';
}

main() {
  var coffee = Coffee();
  coffee.heat();
  coffee.serve();
}
```
<br>
Dart는 nullsafety를 지향하기 때문에 항상 변수를 초기화 해줘야 하며 기본적으로 null이 아닌 변수들은 null 값을 기본적으로 갖지 못한다. <br>
예제코드에서 **"late String _ temperature"** 부분에서 **late** 키워드를 지우면 함수를 호출하는 시점 이전에 변수가 초기화되어있지 않기 때문에 error가 발생하지만, late라는 키워드를 사용하면 변수 초기화를 나중에 할 수 있게 만들어 주기 때문에 오류가 발생하지 않는다. 
late를 지운 경우 error를 해결하기 위한 또 다른 방식으로는 nullable 키워드 **'?'**를 활용해 다음과 같이 코드를 수정하는 방법이 있는데 "String? _temperature" 이와 같은 수정 방식은 flutter를 제대로 이해하지 못한 경우 작성할 수 있는 코드 작성 방법이라고 할 수 있다.  
nullable을 사용하는 경우 **_temperature 변수는 null 값을 허용하게 되는데** _temperature 변수가 null값이 절대 들어가면 안 되는 변수의  역할일수도 있기 때문이다. 따라서 이의 경우 late를 활용하여 null이 들어가면 안 되는 변수에 null이 들어가는 경우를 방지할 수 있다.