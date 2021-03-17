## 按钮组件

<common-DemoCode title="基本用法" description="基本按钮用法:">
  <test-button></test-button>
  <highlight-code slot="codeText" lang="vue">
    <template>
        <!--button 类型样式  -->
        <demo-button>默认按钮</demo-button>
        <demo-button type="primary">主要按钮</demo-button>
        <demo-button type="success">成功按钮</demo-button>
        <demo-button type="info">信息按钮</demo-button>
        <demo-button type="warning">警告按钮</demo-button>
        <demo-button type="danger">危险按钮</demo-button>
        <!-- 朴素按钮 -->
        <demo-button >默认按钮</demo-button>
        <demo-button type="primary" :plain="true">主要按钮</demo-button>
        <demo-button type="success" :plain="true">成功按钮</demo-button>
        <demo-button type="info" :plain="true">信息按钮</demo-button>
        <demo-button type="warning" :plain="true">警告按钮</demo-button>
        <demo-button type="danger" :plain="true">危险按钮</demo-button>
    </template>
  </highlight-code>
</common-DemoCode>

| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
