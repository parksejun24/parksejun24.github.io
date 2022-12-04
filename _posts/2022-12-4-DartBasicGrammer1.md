---
layout: post
title: "Dart 기본 문법 완벽 정리1 (Type)"
date:   2022-12-4 00:54:36 +0530
categories: Dart Study
---
### var(type 추론)
```dart
void varVariable() {
  var dynamicVariable = 'hola';
  dynamicVariable = 12; //error
}
```
타입 추론이라는 명칭 그대로 따로 type을 지정해주지 않아도 가장 처음에 할당된 변수의 초기값에 따라 타입이 자동으로 지정됨<br> 
🛠 : 초기값에 의해 타입이 결정된 이후에는 type변경 불가, flutter는 class의 필드를 제외하고는 var 타입 사용을 권장함

### dynamic(동적 type)
```dart
void dynamicVariable() {
  dynamic dynamicVariable = 'hola'; //var dynamicVariable; 처럼 var타입으로 변수를 선언할때 초기화를 하지 않아도 타입이 dynamic으로 지정된다.
  dynamicVariable = 12;
  if (dynamicVariable is int) {
    if (dynamicVariable.isFinite) {
      print('this variable is finite');
    }
  }
}
```
dynamic 타입은 var과 동일하게 type을 따로 지정해주지 않아도 할당된 변수의 값에 따라 타입이 자동으로 지정됨, <br>
But var 타입과 구분되는 매우 중요한 점은 dynamic 타입은 var 타입과 다르게 할당되는 값의 타입이 변할수록 계속해서 변수의 타입이 변함<br>
🛠 : dynamix type은 다음과 같이 if문등을 통해 변수의 타입을 확인해주지 않으면 해당 자료형의 다양한 함수의 기능을 사용할수 없다(dart의 모든 자료형은 class이다.)

### List&Set
```dart
void listAndSet() {
  var numList = [1, 2, 3, 4];
  var numSets = {1, 2, 3, 4};
  numList.add(1); //[1, 2, 3, 4, 1]
  numSets.add(1); //{1, 2, 3, 4}
  print("numList : $numList\nnumSets : $numSets");
}
```
List와 Set의 선언 방식은 위와같이 var타입을 사용하여 활용하는 방법과 "List<int> numList, Set<int> numSets" 이렇게 변수의 타입과 원소의 속성까지 지정해주는 방법이 있다.<br> 
List와 Sets의 차이점은 List는 원소중 추가되는 원소의 존재여부에 상관없이 값이 추가 되지만 Set은 원소중 추가되는원소와 동일한 값의 원소가 존재한다면 추가되지 않는다.<br>
Set은 {}로 원소를 감싸고, List는 []로 원소를 감싼다.

### Map
```dart
void mapFunction() {
  var player = {
    'name': 'sejun',
    'age': 20,
    'superpower': true,
  };

  Map<int, bool> binggo = {
    1: true,
    2: false,
    3: false,
  };

  binggo[4] = true; //Map에 key : value 쌍 추가하는 방법
}
```
Map은 key : value 형식으로 구성된 집합이다. python의 dictionary와 같다고 보면 된다.<br>
Map에 key : value 쌍을 추가하고 싶다면 map[key] = value 형식으로 작성하면 된다.