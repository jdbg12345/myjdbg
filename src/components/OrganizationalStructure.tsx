import React from 'react';
import { Users, MapPin, BarChart3, Wifi, Building2, ArrowRight, Info, User, Network } from 'lucide-react';

export const OrganizationalStructure = () => {
  // 部门数据结构 - 更新未来主要场地标识
  const departmentData = {
    '活动审核组': {
      TH: { current: 1, planned: 0, isMain: false },
      DB: { current: 0, planned: 0, isMain: true }, 
      SLK: { current: 0, planned: 0, isMain: false }, 
      KJY: { current: 0, planned: 0, isMain: false }, 
      '远程': { current: 0, planned: 0, isMain: false }, 
      '外包': { current: 0, planned: 0, isMain: false }, 
      manager: '主管1人' 
    },
    '体育审核组': {
      TH: { current: 18, planned: 0, isMain: false },
      DB: { current: 2, planned: 0, isMain: false },
      SLK: { current: 18, planned: 0, isMain: false },
      KJY: { current: 1, planned: 0, isMain: false }, 
      '远程': { current: 0, planned: 0, isMain: false }, 
      '外包': { current: 0, planned: 0, isMain: false }, 
      manager: '主管1人' 
    },
    '日常出单组': {
      TH: { current: 12, planned: 0, isMain: false },
      DB: { current: 72, planned: 15, isMain: true },
      SLK: { current: 45, planned: 0, isMain: true },
      KJY: { current: 20, planned: 20, isMain: true }, 
      '远程': { current: 0, planned: 0, isMain: false }, 
      '外包': { current: 0, planned: 0, isMain: false }, 
      manager: '主管6人' 
    },
    '支持部': {
      TH: { current: 6, planned: 0, isMain: false },
      DB: { current: 2, planned: 0, isMain: false },
      SLK: { current: 6, planned: 0, isMain: true },
      KJY: { current: 2, planned: 0, isMain: false }, 
      '远程': { current: 0, planned: 0, isMain: false }, 
      '外包': { current: 0, planned: 0, isMain: false }, 
      manager: '主管1人' 
    },
    '安全稽查部': {
      TH: { current: 2, planned: 0, isMain: false },
      DB: { current: 1, planned: 5, isMain: true },
      SLK: { current: 0, planned: 0, isMain: false },
      KJY: { current: 0, planned: 0, isMain: false }, 
      '远程': { current: 0, planned: 0, isMain: false }, 
      '外包': { current: 0, planned: 0, isMain: false }, 
      manager: '稽查经理1人' 
    },
    '研发部': {
      TH: { current: 0, planned: 0, isMain: false },
      DB: { current: 0, planned: 0, isMain: false },
      SLK: { current: 4, planned: 7, isMain: true },
      KJY: { current: 0, planned: 0, isMain: false }, 
      '远程': { current: 0, planned: 0, isMain: false }, 
      '外包': { current: 0, planned: 0, isMain: false }, 
      manager: '研发主管1人' 
    },
    '内控部': {
      TH: { current: 3, planned: 0, isMain: false },
      DB: { current: 1, planned: 15, isMain: false },
      SLK: { current: 0, planned: 15, isMain: true },
      KJY: { current: 4, planned: 15, isMain: false }, 
      '远程': { current: 0, planned: 0, isMain: false }, 
      '外包': { current: 0, planned: 0, isMain: false }, 
      manager: '内控经理1人' 
    },
    '远程': { 
      TH: { current: 0, planned: 0, isMain: false }, 
      DB: { current: 0, planned: 0, isMain: false }, 
      SLK: { current: 0, planned: 0, isMain: false }, 
      KJY: { current: 0, planned: 0, isMain: false }, 
      '远程': { current: 131, planned: 0, isMain: true }, 
      '外包': { current: 0, planned: 0, isMain: false }, 
      manager: '主管1人' 
    },
    '外包': { 
      TH: { current: 0, planned: 0, isMain: false }, 
      DB: { current: 0, planned: 0, isMain: false }, 
      SLK: { current: 0, planned: 0, isMain: false }, 
      KJY: { current: 0, planned: 0, isMain: false }, 
      '远程': { current: 0, planned: 0, isMain: false }, 
      '外包': { current: 133, planned: 0, isMain: true }, 
      manager: '经理1人' 
    }
  };

  // 计算各场地总人数（在职）
  const locationTotals = {
    TH: Object.values(departmentData).reduce((sum, dept) => sum + dept.TH.current, 0),
    DB: Object.values(departmentData).reduce((sum, dept) => sum + dept.DB.current, 0),
    SLK: Object.values(departmentData).reduce((sum, dept) => sum + dept.SLK.current, 0),
    KJY: Object.values(departmentData).reduce((sum, dept) => sum + dept.KJY.current, 0),
    '远程': Object.values(departmentData).reduce((sum, dept) => sum + dept['远程'].current, 0),
    '外包': Object.values(departmentData).reduce((sum, dept) => sum + dept['外包'].current, 0)
  };

  // 计算各场地计划新增人数
  const locationPlannedTotals = {
    TH: Object.values(departmentData).reduce((sum, dept) => sum + dept.TH.planned, 0),
    DB: Object.values(departmentData).reduce((sum, dept) => sum + dept.DB.planned, 0),
    SLK: Object.values(departmentData).reduce((sum, dept) => sum + dept.SLK.planned, 0),
    KJY: Object.values(departmentData).reduce((sum, dept) => sum + dept.KJY.planned, 0),
    '远程': 0,
    '外包': 0
  };

  // 更新总人数为361，计划新增为7
  const totalPersonnel = 361;
  const totalPlannedPersonnel = 92;

  // 场地转移计划数据
  const transferPlan = [
    { from: 'TH', to: 'SLK', currentCount: 42, count: 42, timing: 'Q4完成', note: 'Q3已转移56人，剩余签证办理中，预计第四季度迁移完毕' }
  ];

  // 计算转移计划的合计当前人数
  const transferTotalCurrentCount = transferPlan.reduce((sum, transfer) => sum + transfer.count, 0);

  // 判断是否显示数据的函数
  const shouldShowData = (current, planned) => {
    return current > 0 || planned > 0;
  };

  // 渲染人员数据的函数 - 修改红点位置为垂直排列
  const renderPersonnelData = (current, planned, colorClass, isMain = false) => {
    if (!shouldShowData(current, planned)) {
      return (
        <div className="space-y-2">
          {isMain && <div className="w-2 h-2 bg-red-500 rounded-full mx-auto"></div>}
          <span className="text-gray-300 text-sm block text-center">-</span>
        </div>
      );
    }

    return (
      <div className="space-y-2">
        {isMain && <div className="w-2 h-2 bg-red-500 rounded-full mx-auto"></div>}
        {current > 0 && (
          <div className={`${colorClass} text-white px-3 py-1 rounded-md text-sm font-semibold mx-auto w-fit`}>
            {current}
          </div>
        )}
        {planned > 0 && (
          <div className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium mx-auto w-fit">
            +{planned}
          </div>
        )}
      </div>
    );
  };

  // 连线绘制函数 - 按要求调整
  const drawConnections = () => {
    setTimeout(() => {
      const svg = document.getElementById('connection-svg');
      if (!svg) return;

      // 清除现有连线
      svg.innerHTML = '';

      // 定义连线配置 - 按要求调整
      const connections = [
        { from: 'system-dept', to: 'tech-dept', fromSide: 'left', toSide: 'right' },
        { from: 'system-dept', to: 'b-dept', fromSide: 'left', toSide: 'right' },
        { from: 'sports-audit', to: 'b-dept', fromSide: 'left', toSide: 'right' }, // 体育组 → B端，删除编号
        { from: 'user-dept', to: 'activity-audit', number: '1' },
        { from: 'user-dept', to: 'daily-audit', number: '1' },
        { from: 'operation-dept', to: 'activity-audit', number: '2' },
        { from: 'operation-dept', to: 'daily-audit', number: '2' },
        { from: 'finance-dept', to: 'daily-audit', number: '3' },
        { from: 'quality-control', to: 'daily-audit', number: '4' },
        { from: 'dl-dept', to: 'agent-audit', number: '5' },
        { from: 'user-icon', to: 'daily-audit' },
        { from: 'user-icon', to: 'data-audit' }
        // 删除内控组和审核组的连线
      ];

      // 计算每个目标节点的连接数量，用于分布连接点
      const targetConnections = {};
      connections.forEach(conn => {
        if (!targetConnections[conn.to]) {
          targetConnections[conn.to] = [];
        }
        targetConnections[conn.to].push(conn);
      });

      connections.forEach((conn, index) => {
        const fromEl = document.getElementById(conn.from);
        const toEl = document.getElementById(conn.to);
        
        if (fromEl && toEl) {
          const fromRect = fromEl.getBoundingClientRect();
          const toRect = toEl.getBoundingClientRect();
          const svgRect = svg.getBoundingClientRect();

          // 计算起点坐标
          let fromX, fromY;
          if (conn.fromSide === 'left') {
            fromX = fromRect.left - svgRect.left;
            fromY = fromRect.top + fromRect.height / 2 - svgRect.top;
          } else {
            fromX = fromRect.right - svgRect.left;
            fromY = fromRect.top + fromRect.height / 2 - svgRect.top;
          }
          
          // 计算目标节点的连接点分布
          const targetConns = targetConnections[conn.to];
          const connIndex = targetConns.findIndex(c => c.from === conn.from);
          const totalConns = targetConns.length;
          
          // 计算终点坐标
          let toX, toY;
          if (conn.toSide === 'right') {
            toX = toRect.right - svgRect.left;
          } else {
            toX = toRect.left - svgRect.left;
          }
          
          // 在目标节点均匀分布连接点
          if (totalConns === 1) {
            toY = toRect.top + toRect.height / 2 - svgRect.top;
          } else {
            const spacing = toRect.height / (totalConns + 1);
            toY = toRect.top + spacing * (connIndex + 1) - svgRect.top;
          }

          // 创建Z型路径 - 调整转折点位置
          let midX;
          if (conn.from === 'sports-audit' && conn.to === 'b-dept') {
            // 体育组到B端的连线，向右移动第一个转折点
            midX = fromX + (toX - fromX) * 0.7;
          } else if (conn.from === 'user-icon' && (conn.to === 'daily-audit' || conn.to === 'data-audit')) {
            // 人物图标到审核组的连线，向右移动第一个转折点
            midX = fromX + (toX - fromX) * 0.7;
          } else {
            midX = fromX + (toX - fromX) / 2;
          }
          
          const pathData = `M ${fromX} ${fromY} L ${midX} ${fromY} L ${midX} ${toY} L ${toX} ${toY}`;

          // 创建路径元素
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', pathData);
          path.setAttribute('stroke', '#3B82F6');
          path.setAttribute('stroke-width', '2');
          path.setAttribute('fill', 'none');
          path.setAttribute('marker-end', 'url(#arrowhead)');

          // 创建箭头标记 - 缩小至最小合适尺寸
          if (index === 0) {
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
            marker.setAttribute('id', 'arrowhead');
            marker.setAttribute('markerWidth', '6');
            marker.setAttribute('markerHeight', '4');
            marker.setAttribute('refX', '5');
            marker.setAttribute('refY', '2');
            marker.setAttribute('orient', 'auto');

            const triangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            triangle.setAttribute('points', '0 0, 6 2, 0 4');
            triangle.setAttribute('fill', '#3B82F6');

            marker.appendChild(triangle);
            defs.appendChild(marker);
            svg.appendChild(defs);
          }

          // 在终点添加小红点
          const endDot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          endDot.setAttribute('cx', toX);
          endDot.setAttribute('cy', toY);
          endDot.setAttribute('r', '3');
          endDot.setAttribute('fill', '#EF4444');
          endDot.setAttribute('stroke', 'white');
          endDot.setAttribute('stroke-width', '1');

          // 添加编号标注（如果有）- 缩小字体
          if (conn.number) {
            const numberCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            numberCircle.setAttribute('cx', toX + 12);
            numberCircle.setAttribute('cy', toY);
            numberCircle.setAttribute('r', '6');
            numberCircle.setAttribute('fill', '#3B82F6');
            numberCircle.setAttribute('stroke', 'white');
            numberCircle.setAttribute('stroke-width', '1');

            const numberText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            numberText.setAttribute('x', toX + 12);
            numberText.setAttribute('y', toY + 1);
            numberText.setAttribute('text-anchor', 'middle');
            numberText.setAttribute('dominant-baseline', 'middle');
            numberText.setAttribute('fill', 'white');
            numberText.setAttribute('font-size', '8');
            numberText.setAttribute('font-weight', 'bold');
            numberText.textContent = conn.number;

            svg.appendChild(numberCircle);
            svg.appendChild(numberText);
          }

          svg.appendChild(path);
          svg.appendChild(endDot);
        }
      });
    }, 0);
  };

  // 组件挂载和窗口大小变化时重新绘制连线
  React.useEffect(() => {
    drawConnections();
    
    const handleResize = () => {
      setTimeout(drawConnections, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-white rounded-lg p-16 mb-10 relative">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between border-b-4 border-blue-600 pb-4">
        <h1 className="text-5xl font-bold text-gray-800">1. 组织情况</h1>
        <div className="text-gray-500 text-base">
          <span>下一节：</span>
          <span className="font-medium ml-2">数据情况</span>
        </div>
      </div>

      {/* 风控组织协同 */}
      <div className="bg-white rounded-xl p-8 mb-12 border border-gray-200 relative">
        <div className="flex items-center space-x-4 mb-8">
          <Network className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-800">风控组织协同</h2>
    
        </div>
        
        {/* SVG for connection lines */}
        <svg 
          id="connection-svg" 
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          style={{ top: 0, left: 0 }}
        ></svg>
        
        <div className="relative bg-white rounded-lg p-8">
          {/* Header row with section titles */}
          <div className="grid gap-6 mb-8" style={{
            gridTemplateColumns: '1fr 2fr 1fr'
          }}>
            <div className="text-center">
              <h2 className="text-xl font-bold border-b-3 border-gray-400 pb-3 text-gray-700">协作部门</h2>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold border-b-3 border-blue-600 pb-3 text-blue-700">风控中心</h2>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold border-b-3 border-gray-400 pb-3 text-gray-700">核心职责</h2>
            </div>
          </div>

          {/* Main content grid with gaps between rows */}
          <div className="grid gap-6" style={{
            gridTemplateColumns: '1fr 2fr 1fr',
            gridTemplateRows: '120px 420px 120px 120px'
          }}>
            {/* Row 1: 技术 - 系统组 - 系统组核心职责 */}
            <div className="bg-white rounded-lg p-4">
              <div id="tech-dept" className="bg-white border border-gray-300 p-3 text-center rounded-lg hover:shadow-md transition-shadow cursor-pointer w-full">
                <div className="font-semibold text-gray-700 flex items-center justify-center h-full text-sm">技术</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div id="system-dept" className="bg-gradient-to-r from-blue-500 to-blue-600 border-2 border-blue-600 rounded-lg h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">系统组</div>
                  <div className="text-sm mt-1 text-blue-100">需求管理 & 系统优化</div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-300 p-3 rounded-lg">
              <div className="font-bold mb-2 text-blue-700 border-b border-blue-200 pb-1 text-xs">核心职责</div>
              <div className="text-xs space-y-1 text-gray-700 leading-tight">
                <div>1、风控调研</div>
                <div>2、模型策略</div>
                <div>3、需求撰写</div>
                <div>4、系统优化</div>
              </div>
            </div>

            {/* Row 2: 协作部门组合 - 审核组 - 审核组核心职责 */}
            <div className="bg-white rounded-lg p-4">
              <div className="h-full flex flex-col justify-between space-y-3">
                <div id="b-dept" className="bg-white border border-gray-300 p-2 text-center rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="font-semibold text-gray-700 text-xs">B端</div>
                </div>
                <div id="user-dept" className="bg-white border border-gray-300 p-2 text-center rounded-lg hover:shadow-md transition-shadow cursor-pointer relative">
                  <div className="font-semibold text-gray-700 text-xs">用维</div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                </div>
                <div id="operation-dept" className="bg-white border border-gray-300 p-2 text-center rounded-lg hover:shadow-md transition-shadow cursor-pointer relative">
                  <div className="font-semibold text-gray-700 text-xs">运营</div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                </div>
                <div id="finance-dept" className="bg-white border border-gray-300 p-2 text-center rounded-lg hover:shadow-md transition-shadow cursor-pointer relative">
                  <div className="font-semibold text-gray-700 text-xs">财务</div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                </div>
                <div id="quality-control" className="bg-white border border-gray-300 p-2 text-center rounded-lg hover:shadow-md transition-shadow cursor-pointer relative">
                  <div className="font-semibold text-gray-700 text-xs">质检</div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                </div>
                <div className="text-center flex items-center justify-center">
                  <div id="user-icon" className="w-8 h-8 border-2 border-blue-500 rounded-full flex items-center justify-center bg-blue-100">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
                <div id="dl-dept" className="bg-white border border-gray-300 p-2 text-center rounded-lg hover:shadow-md transition-shadow cursor-pointer relative">
                  <div className="font-semibold text-gray-700 text-xs">DL&核算</div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">5</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div id="audit-groups" className="border-3 border-blue-600 rounded-lg bg-gradient-to-b from-blue-100 to-blue-200 p-4 h-full">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-blue-800">审核组</h3>
                  <div className="w-16 h-0.5 bg-blue-600 mx-auto mt-1"></div>
                </div>
                
                {/* Vertical layout for audit groups with more spacing */}
                <div className="h-full flex flex-col justify-between space-y-4" style={{ height: 'calc(100% - 60px)' }}>
                  <div id="sports-audit" className="bg-gradient-to-r from-blue-400 to-blue-500 border-2 border-blue-500 p-3 text-center rounded-lg">
                    <div className="font-semibold text-white text-sm">体育审核组</div>
                  </div>

                  <div id="activity-audit" className="bg-gradient-to-r from-blue-400 to-blue-500 border-2 border-blue-500 p-3 text-center rounded-lg">
                    <div className="font-semibold text-white text-sm">活动审核组</div>
                  </div>

                  <div id="daily-audit" className="bg-gradient-to-r from-blue-400 to-blue-500 border-2 border-blue-500 p-3 text-center rounded-lg">
                    <div className="font-semibold text-white text-sm">日常出单组</div>
                  </div>

                  <div id="data-audit" className="bg-gradient-to-r from-blue-400 to-blue-500 border-2 border-blue-500 p-3 text-center rounded-lg">
                    <div className="font-semibold text-white text-sm">资料审核组</div>
                  </div>

                  <div id="agent-audit" className="bg-gradient-to-r from-blue-400 to-blue-500 border-2 border-blue-500 p-3 text-center rounded-lg">
                    <div className="font-semibold text-white text-sm">佣金审核组</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-300 p-3 rounded-lg">
              <div className="font-bold mb-2 text-blue-700 border-b border-blue-200 pb-1 text-sm">核心职责</div>
              
              <div className="text-xs space-y-1 text-gray-700 leading-relaxed">
                <div className="font-semibold text-blue-600">1、会员出款审核</div>
                <div className="font-semibold text-blue-600">2、代理佣金审核</div>
                <div className="font-semibold text-blue-600">3、账户与资料处理</div>
                <div className="ml-3">- 虚拟币账户/手机</div>
                <div className="ml-3">- 证件提交审核</div>
                <div className="ml-3">- 账号添加特殊标签</div>
                
                <div className="font-semibold text-blue-600 pt-1">4、限制与解禁操作</div>
                <div className="ml-3">- 账号状态禁用</div>
                <div className="ml-3">- IP/设备号封禁</div>
                <div className="ml-3">- IP/设备报备放宽审核</div>
                
                <div className="font-semibold text-blue-600 pt-1">5、红利与流水相关</div>
                <div className="ml-3">- 彩金/补发审核</div>
                <div className="ml-3">- 优惠流水限制解除</div>
                <div className="ml-3">- 红利审核</div>
                <div className="ml-3">……</div>

              </div>
            </div>

            {/* Row 3: 空 - 内控组 - 内控组核心职责 */}
            <div></div>

            <div className="bg-white rounded-lg p-4">
              <div id="internal-control" className="bg-gradient-to-r from-blue-500 to-blue-600 border-2 border-blue-600 rounded-lg h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">内控组</div>
                  <div className="text-sm mt-1 text-blue-100">内部培训 & 出单抽检</div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-300 p-3 rounded-lg">
              <div className="font-bold mb-2 text-blue-700 border-b border-blue-200 pb-1 text-xs">核心职责</div>
              <div className="text-xs space-y-1 text-gray-700 leading-tight">
                <div>1、员工培训管理</div>
                <div>2、出单质量抽检</div>
                <div>3、业务流程回访</div>
                <div>4、上岗资格认证</div>
              </div>
            </div>

            {/* Row 4: 稽查组跨2列 - 稽查组核心职责 */}
            <div className="bg-white rounded-lg p-4" style={{ gridColumn: '1 / span 2' }}>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 border-2 border-blue-600 rounded-lg h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">稽查组</div>
                  <div className="text-sm mt-1 text-blue-100">风险稽查&游戏研究</div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-300 p-3 rounded-lg">
              <div className="font-bold mb-2 text-blue-700 border-b border-blue-200 pb-1 text-xs">核心职责</div>
              <div className="text-xs space-y-1 text-gray-700 leading-tight">
                <div>1、风险稽查调查</div>
                <div>2、游戏机制研究</div>
                <div>3、套利模式研究</div>
                <div>4、作弊工具识别</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 场地分布统计 */}
      <div className="bg-white rounded-xl p-8 mb-12 border border-gray-200">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-800">场地分布统计</h2>
            </div>
          </div>
          
          {/* 汇总数据区域 */}
          <div className="relative">
            {/* 总人数和计划新增 - 汇总框，添加弱弱的横线 */}
            <div className="bg-white rounded-xl p-6 border-2 border-blue-300 mb-8 mx-auto max-w-2xl">
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="text-lg text-gray-600 mb-2">合计人数（含外包）</div>
                  <div className="text-4xl font-bold text-red-600">{Object.values(locationTotals).reduce((sum, count) => sum + count, 0)}</div>
                </div>

          {/* 质检部门到代理佣金审核组的连线 */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <defs>
              <marker id="arrowhead-quality-commission" markerWidth="10" markerHeight="7" 
               refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
              </marker>
            </defs>
            <path
              d="M 50% 20% Q 75% 25% 85% 75%"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead-quality-commission)"
            />
          </svg>

                <div className="w-px h-16 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-lg text-gray-600 mb-2">合计人数（非外包）</div>
                  <div className="text-4xl font-bold text-blue-600">{totalPersonnel}</div>
                </div>
                <div className="w-px h-16 bg-gray-300"></div>
          
              </div>
            </div>
            
            {/* 大括弧 SVG */}
            <div className="absolute top-full left-0 right-0 z-10" style={{ height: '100px' }}>
              <svg width="100%" height="100" viewBox="0 0 1440 100" className="overflow-visible">
                <line x1="600" y1="0" x2="600" y2="40" stroke="#3B82F6" strokeWidth="3"/>
                <line x1="120" y1="40" x2="1320" y2="40" stroke="#3B82F6" strokeWidth="3"/>
                <line x1="120" y1="40" x2="120" y2="90" stroke="#3B82F6" strokeWidth="2"/>
                <line x1="320" y1="40" x2="320" y2="90" stroke="#3B82F6" strokeWidth="2"/>
                <line x1="520" y1="40" x2="520" y2="90" stroke="#3B82F6" strokeWidth="2"/>
                <line x1="720" y1="40" x2="720" y2="90" stroke="#3B82F6" strokeWidth="2"/>
                <line x1="920" y1="40" x2="920" y2="90" stroke="#3B82F6" strokeWidth="2"/>
                <line x1="1120" y1="40" x2="1120" y2="90" stroke="#3B82F6" strokeWidth="2"/>
                <line x1="1320" y1="40" x2="1320" y2="90" stroke="#3B82F6" strokeWidth="2"/>
                <circle cx="600" cy="40" r="4" fill="#3B82F6"/>
                <circle cx="120" cy="40" r="3" fill="#3B82F6"/>
                <circle cx="320" cy="40" r="3" fill="#3B82F6"/>
                <circle cx="520" cy="40" r="3" fill="#3B82F6"/>
                <circle cx="720" cy="40" r="3" fill="#3B82F6"/>
                <circle cx="920" cy="40" r="3" fill="#3B82F6"/>
                <circle cx="1120" cy="40" r="3" fill="#3B82F6"/>
                <circle cx="1320" cy="40" r="3" fill="#3B82F6"/>
                <circle cx="120" cy="90" r="4" fill="#3B82F6"/>
                <circle cx="320" cy="90" r="4" fill="#3B82F6"/>
                <circle cx="520" cy="90" r="4" fill="#3B82F6"/>
                <circle cx="720" cy="90" r="4" fill="#3B82F6"/>
                <circle cx="920" cy="90" r="4" fill="#3B82F6"/>
                <circle cx="1120" cy="90" r="4" fill="#3B82F6"/>
                <circle cx="1320" cy="90" r="4" fill="#3B82F6"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mt-24">
          {/* TH场地 */}
          <div className="bg-white rounded-xl p-4 border-2 border-blue-500">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">TH</h3>
              </div>
              <div className="w-full h-px bg-gray-200 mb-4"></div>
              
              <div className="mb-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">{locationTotals.TH}</div>
                <div className="text-gray-600 text-sm">当前人数</div>
                {/* 添加弱弱的横线 */}
                <div className="w-full h-px bg-gray-200 my-2"></div>
              </div>
            
            </div>
          </div>

          {/* DB场地 */}
          <div className="bg-white rounded-xl p-4 border-2 border-blue-500">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">DB</h3>
              </div>
              <div className="w-full h-px bg-gray-200 mb-4"></div>
              
              <div className="mb-4">
                {locationTotals.DB > 0 ? (
                  <>
                    <div className="text-3xl font-bold text-blue-600 mb-1">{locationTotals.DB}</div>
                    <div className="text-gray-600 text-sm">当前人数</div>
                  </>
                ) : (
                  <>
                    <div className="text-3xl font-bold text-gray-300 mb-1">-</div>
                    <div className="text-gray-400 text-sm">当前人数</div>
                  </>
                )}
                {/* 添加弱弱的横线 */}
                <div className="w-full h-px bg-gray-200 my-2"></div>
              </div>
        
            </div>
          </div>

          {/* SLK场地 */}
          <div className="bg-white rounded-xl p-4 border-2 border-blue-500">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">SLK</h3>
              </div>
              <div className="w-full h-px bg-gray-200 mb-4"></div>
              
              <div className="mb-4">
                {locationTotals.SLK > 0 ? (
                  <>
                    <div className="text-3xl font-bold text-blue-600 mb-1">{locationTotals.SLK}</div>
                    <div className="text-gray-600 text-sm">当前人数</div>
                  </>
                ) : (
                  <>
                    <div className="text-3xl font-bold text-gray-300 mb-1">-</div>
                    <div className="text-gray-400 text-sm">当前人数</div>
                  </>
                )}
                {/* 添加弱弱的横线 */}
                <div className="w-full h-px bg-gray-200 my-2"></div>
              </div>
        
            </div>
          </div>

          {/* KJY场地 */}
          <div className="bg-white rounded-xl p-4 border-2 border-blue-500">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">KJY</h3>
              </div>
              <div className="w-full h-px bg-gray-200 mb-4"></div>
              
              <div className="mb-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">{locationTotals.KJY}</div>
                <div className="text-gray-600 text-sm">当前人数</div>
                {/* 添加弱弱的横线 */}
                <div className="w-full h-px bg-gray-200 my-2"></div>
              </div>
        
            </div>
          </div>

          {/* 远程场地 */}
          <div className="bg-white rounded-xl p-4 border-2 border-blue-500">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Wifi className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">远程</h3>
              </div>
              <div className="w-full h-px bg-gray-200 mb-4"></div>
              
              <div className="mb-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">{locationTotals['远程']}</div>
                <div className="text-gray-600 text-sm">当前人数</div>
                {/* 添加弱弱的横线 */}
                <div className="w-full h-px bg-gray-200 my-2"></div>
              </div>
              
              {locationPlannedTotals['远程'] > 0 && (
                <div>
                  <div className="text-lg font-bold text-green-600 mb-1">+{locationPlannedTotals['远程']}</div>
                  <div className="text-gray-500 text-sm">计划分配</div>
                </div>
              )}
            </div>
          </div>

          {/* 外包场地 */}
          <div className="bg-white rounded-xl p-4 border-2 border-blue-500">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Wifi className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">外包</h3>
              </div>
              <div className="w-full h-px bg-gray-200 mb-4"></div>
              
              <div className="mb-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">{locationTotals['外包']}</div>
                <div className="text-gray-600 text-sm">当前人数</div>
                {/* 添加弱弱的横线 */}
                <div className="w-full h-px bg-gray-200 my-2"></div>
              </div>
            
            </div>
          </div>
        </div>
      </div>

      {/* 场地转移计划表格 */}
      <div className="bg-white rounded-xl p-8 mb-8 border border-gray-200">
        <div className="flex items-center space-x-4 mb-6">
          <ArrowRight className="w-8 h-8 text-orange-600" />
          <h2 className="text-3xl font-bold text-gray-800">场地转移计划</h2>
        </div>
        
        <div className="bg-white rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-gray-600 text-white">
              <tr>
                <th className="p-6 text-left font-semibold whitespace-nowrap">转出场地</th>
                <th className="p-6 text-center font-semibold whitespace-nowrap">当前人数</th>
                <th className="p-6 text-center font-semibold whitespace-nowrap">转移人数</th>
                <th className="p-6 text-left font-semibold whitespace-nowrap">转入场地</th>
                <th className="p-6 text-center font-semibold whitespace-nowrap">预计时间</th>
                <th className="p-6 text-left font-semibold">备注</th>
              </tr>
            </thead>
            <tbody>
              {transferPlan.map((transfer, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-white transition-colors">
                  <td className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="font-semibold text-gray-800">{transfer.from}</span>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="text-xl font-bold text-blue-600">{transfer.currentCount || transfer.count}</span>
                  </td>
                  <td className="p-6 text-center">
                    <span className="text-2xl font-bold text-orange-600">{transfer.count}</span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="font-semibold text-gray-800">{transfer.to}</span>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {transfer.timing}
                    </span>
                  </td>
                  <td className="p-6 text-gray-600">
                    {transfer.note || 'KJY为主要招聘地区，三季度目标扩张人员至30～50人；TH人员主迁移区，后续为主要招聘地区；DB后续视场地数量进行后续人员规'}
                  </td>

                </tr>
              ))}
              <tr className="bg-white font-bold">
                <td className="p-6 text-gray-800">合计</td>
                <td className="p-6 text-center">
                  <span className="text-xl font-bold text-blue-600">
                    {transferPlan.reduce((sum, transfer) => sum + (transfer.currentCount || transfer.count), 0)}
                  </span>
                </td>
                <td className="p-6 text-center">
                  <span className="text-2xl font-bold text-red-600">
                    {transferPlan.reduce((sum, transfer) => sum + transfer.count, 0)}
                  </span>
                </td>
                <td className="p-6 text-center text-gray-600"></td>
                <td className="p-6 text-center text-gray-600"></td>
                <td className="p-6 text-gray-600"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      
      {/* Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm">FKZX Q3 REPORT</div>
      </div>
    </div>
  );
};