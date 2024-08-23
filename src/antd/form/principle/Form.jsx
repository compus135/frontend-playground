import React, { createContext, useContext, useState } from "react";

// 创建 Context
const FormContext = createContext();

// Form 组件
const Form = ({ children, onFinish }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFinish(formData);
  };

  return (
    <FormContext.Provider value={{ formData, handleChange }}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};

// Form.Item 组件
const FormItem = ({ name, children }) => {
  const { formData, handleChange } = useContext(FormContext);

  const handleInputChange = (event) => {
    handleChange(name, event.target.value);
  };

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          value: formData[name] || "",
          onChange: handleInputChange,
        });
      }
      return child;
    });
  };

  return <div>{renderChildren()}</div>;
};

// 示例使用
const App = () => {
  const onFinish = (values) => {
    console.log("表单值:", values);
  };

  return (
    <Form onFinish={onFinish}>
      <FormItem name="name">
        <input type="text" placeholder="姓名" />
      </FormItem>
      <button type="submit">提交</button>
    </Form>
  );
};

export default App;
/**
 * ### 解释

1. **Form 组件**：
   - 使用 `useState` 管理表单状态 `formData`。
   - 提供 `handleChange` 方法用于更新表单状态。
   - 通过 `FormContext.Provider` 将 `formData` 和 `handleChange` 传递给子组件。
   - 处理表单提交事件，调用 `onFinish` 回调函数并传递表单数据。

2. **FormItem 组件**：
   - 使用 `useContext` 获取 `FormContext` 中的 `formData` 和 `handleChange`。
   - 处理子组件的 `onChange` 事件，调用 `handleChange` 更新表单状态。
   - 通过 `React.Children.map` 和 `React.cloneElement` 将 `value` 和 `onChange` 属性传递给子组件（假设子组件是一个输入控件）。

3. **示例使用**：
   - 创建一个 `Form` 组件，并传递 `onFinish` 回调函数。
   - 在 `Form` 中使用 `FormItem` 包裹输入控件，并指定 `name` 属性。
   - 提交表单时，`onFinish` 回调函数会接收到表单数据。

通过这个简易实现，我们可以看到 `Form.Item` 如何通过 `name` 属性将表单控件的值与表单状态绑定，并实现基本的表单管理功能。
 */
