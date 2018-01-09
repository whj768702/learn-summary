数据绑定

| 数据方向         | 语法                                       | 绑定类型 |
| ------------ | ---------------------------------------- | ---- |
| 单向,从数据源到视图目标 | {{expression}}   [target]="expression"    bind-target="expression" |      |
| 单向,从视图目标到数据源 | (target)="statment"  on-target="statement" |      |
| 双向           | [(target)]="expression"  bindon-target="expression" |      |