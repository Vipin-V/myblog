# Flutter DeBugTag Removal

### Just add ``` debugShowCheckedModeBanner: false, ```  in ur code
```dart
MaterialApp(
  debugShowCheckedModeBanner: false,

  home: Scaffold(
    appBar: AppBar(
      title: const Text('Home'),
    ),
  ),  
);
```