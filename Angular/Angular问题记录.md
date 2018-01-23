- `Property 'controls' does not exist on type 'AbstractControl'.`
  表单API变动导致。aot模式下会报错.

  ```typescript
  //老的写法
  validateForm.controls['xxx']
  //新的写法
  validateForm.get('xxx')
  ```

  ​