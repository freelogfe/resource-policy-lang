// 状态机
export interface StateMachine {
    // 目标用户
    audiences: Audience[];
    // 声明
    declarations: Declarations;
    // 状态机状态
    states: States;
    // 描述
    description: {
        // 标记参数
        symbolArgs: {
            // 策略中使用的环境变量
            envArgs: string[]
        }
    }
}

// 目标用户
export interface Audience {
    // 名称
    name: string;
    // 类型
    type: string;
}

// 声明
export interface Declarations {
    // 系统提供的色块
    serviceStates: ServiceState[];
    // 色块常量
    serviceStateConstants: ServiceStateConstant[];
    // 表达式
    expressions: Expression[];
}

// 色块
export interface ServiceState {
    // 色块名
    name: string;
    // 色块类型
    type: string;
}

// 色块常量
export interface ServiceStateConstant {
    // 作用域
    scope: string;
    // 色块颜色态，可以理解成色块名
    state: string;
}

// 表达式
export interface Expression {
    // 函数名
    functionName: string;
    // 函数参数
    functionArgs: string[];
    // 函数体
    functionBody: string;
}

// 状态机状态
export interface States {
    // 状态名
    state: {
        // 色块集合
        serviceStates: string[];
        // 事件转换集合
        transitions: Transition[];
        // 是否是初始态
        isInitial: boolean;
    }
}

// 事件转换
export interface Transition {
    // 事件名
    name: string;
    // 事件服务
    service: string;
    // 事件路径
    path: string;
    // 转换目标状态
    toState: string;
    // 事件参数
    args: {
        // 参数名，参数值
        argName: string;
    };
    // 事件代码
    code: string;
    // 事件描述
    description: string;
    // 是否是单例
    isSingleton: boolean;
}
