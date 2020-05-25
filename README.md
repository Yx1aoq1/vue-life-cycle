# Vue 生命周期探究

## 父子孙组件创建顺序

```
Parent beforeCreate
Parent created
Parent beforeMount
Children beforeCreate
Children created
Children beforeMount
Grandson beforeCreate
Grandson created
Grandson beforeMount
Grandson mounted
Children mounted
Parent mounted
```

## 父子孙销毁顺序

```
Parent beforeDestroy
Children beforeDestroy
Grandson beforeDestroy
Grandson destroyed
Children destroyed
Parent destroyed
```

## 存在keep-alive缓存时

### 创建

```
Parent beforeCreate
Parent created
Parent beforeMount
Children beforeCreate
Children created
Children beforeMount
Grandson beforeCreate
Grandson created
Grandson beforeMount
Grandson mounted
Children mounted
Parent mounted
--- 创建 ---
Grandson activated
Children activated
Parent activated
```

### 销毁

```
Grandson deactivated
Children deactivated
Parent deactivated
```

## 存在路由守卫时

### 创建

```
Parent beforeRouteEnter
--- 进入路由 ---
Parent beforeCreate
Parent created
Parent beforeMount
Children beforeCreate
Children created
Children beforeMount
Grandson beforeCreate
Grandson created
Grandson beforeMount
Grandson mounted
Children mounted
Parent mounted
--- 创建 ---
```

### 销毁

```
Parent beforeRouteLeave
--- 离开路由 ---
Parent beforeDestroy
Children beforeDestroy
Grandson beforeDestroy
Grandson destroyed
Children destroyed
Parent destroyed
--- 销毁 ---
```