#### 策略结构文档

输入文件：

```
    for public, 18035541373, Yaoqinsanchi@qq.com

    a()=1+2*3^4+self.exhibited

    ab(a,c)=1+2*3^(a-c+e)

    always testActive

    initial:
        ~freelog.SigningEvent("abc/abc") => signed
    signed[active]:
        ~freelog.CycleEndEvent("2","week") => auth
    auth:
        ~freelog.x.y.TransactionEvent("5","self.account") => settlement
    settlement[active]:
        ~freelog.SettlementEvent("001") => auth
        ~freelog.TimeEvent("2021-02-06 14:16") => refund
        ~freelog.RelativeTimeEvent("30","day") => confiscation
    confiscation:
        ~freelog.ViewCountEvent("100") => finish
    refund:
        ~freelog.EscrowExceedAmount("002","888","feather") => finish
    finish[active]:
        terminate

```

输出文件：

```
{
    "state_machine": {
        "audiences": [
            {
                "name": "public",
                "type": "public"
            },
            {
                "name": "18035541373",
                "type": "userId"
            },
            {
                "name": "Yaoqinsanchi@qq.com",
                "type": "userId"
            }
        ],
        "declarations": {
            "serviceStates": [
                {
                    "name": "active",
                    "type": "authorization"
                },
                {
                    "name": "testActive",
                    "type": "testAuthorization"
                }
            ],
            "serviceStateConstants": [
                {
                    "scope": "always",
                    "state": "testActive"
                }
            ],
            "expressions": [
                {
                    "funcName": "a",
                    "funcArgs": [],
                    "funcBody": "1+2*3^4+self.exhibited"
                },
                {
                    "funcName": "ab",
                    "funcArgs": [
                        "a",
                        "c"
                    ],
                    "funcBody": "1+2*3^(a-c+e)"
                }
            ]
        },
        "states": {
            "initial": {
                "transitions": [
                    {
                        "toState": "signed",
                        "service": "freelog",
                        "name": "SigningEvent",
                        "args": {
                            "resourceName": "abc/abc"
                        },
                        "code": "S101",
                        "description": "acknowledge a resource",
                        "isSingleton": true
                    }
                ],
                "serviceStates": [
                    "testActive"
                ],
                "isInitial": true
            },
            "signed": {
                "transitions": [
                    {
                        "toState": "auth",
                        "service": "freelog",
                        "name": "CycleEndEvent",
                        "args": {
                            "cycleCount": 2,
                            "timeUnit": "week"
                        },
                        "code": "A101",
                        "description": "raise when n cycle ends",
                        "isSingleton": false
                    }
                ],
                "serviceStates": [
                    "testActive",
                    "active"
                ]
            },
            "auth": {
                "transitions": [
                    {
                        "toState": "settlement",
                        "service": "freelog",
                        "path": "x.y",
                        "name": "TransactionEvent",
                        "args": {
                            "amount": 5,
                            "account": "self.account"
                        },
                        "code": "S201",
                        "description": "one time transaction",
                        "isSingleton": true
                    }
                ],
                "serviceStates": [
                    "testActive"
                ]
            },
            "settlement": {
                "transitions": [
                    {
                        "toState": "auth",
                        "service": "freelog",
                        "name": "SettlementEvent",
                        "args": {
                            "account": "001"
                        },
                        "code": "S202",
                        "description": "fired when settlement cleared",
                        "isSingleton": true
                    },
                    {
                        "toState": "refund",
                        "service": "freelog",
                        "name": "TimeEvent",
                        "args": {
                            "dateTime": "2021-02-06 14:16"
                        },
                        "code": "A102",
                        "description": "fired on a pre-determined time",
                        "isSingleton": false
                    },
                    {
                        "toState": "confiscation",
                        "service": "freelog",
                        "name": "RelativeTimeEvent",
                        "args": {
                            "elapsed": 30,
                            "timeUnit": "day"
                        },
                        "code": "A103",
                        "description": "fired when certain amount of time elapsed",
                        "isSingleton": false
                    }
                ],
                "serviceStates": [
                    "testActive",
                    "active"
                ]
            },
            "confiscation": {
                "transitions": [
                    {
                        "toState": "finish",
                        "service": "freelog",
                        "name": "ViewCountEvent",
                        "args": {
                            "amount": 100
                        },
                        "code": "S301",
                        "description": "reserve a target number of authorizations, fires when such number reached",
                        "isSingleton": true
                    }
                ],
                "serviceStates": [
                    "testActive"
                ]
            },
            "refund": {
                "transitions": [
                    {
                        "toState": "finish",
                        "service": "freelog",
                        "name": "EscrowExceedAmount",
                        "args": {
                            "account": "002",
                            "amount": 888,
                            "currencyUnit": "feather"
                        },
                        "code": "S210",
                        "description": "",
                        "isSingleton": true
                    }
                ],
                "serviceStates": [
                    "testActive"
                ]
            },
            "finish": {
                "transitions": [],
                "serviceStates": [
                    "testActive",
                    "active"
                ]
            }
        },
        "description": {
            "symbolArgs": {
                "envArgs": [
                    "self.exhibited",
                    "self.account"
                ]
            }
        }
    },
    "warnings": [],
    "warningObjects": [],
    "errors": [],
    "errorObjects": []
}
```

结构说明：

```typescript
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
```

