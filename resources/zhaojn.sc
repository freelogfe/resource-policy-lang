for public

initial[active]:
~freelog.RelativeTimeEvent("1","week") => auth  // 设置试用周期
auth:
~freelog.TransactionEvent("10","self.account") => auth_month  // 设置包月价格
~freelog.TransactionEvent("100","self.account") => auth_year  // 设置包年价格
~freelog.RelativeTimeEvent("3","day")  =>  finish
auth_month[active]:
~freelog.RelativeTimeEvent("1","month")  =>  finish // 设置订阅周期为一个月
~freelog.TransactionEvent("100","self.account") => auth_year  // 设置包年价格
auth_year[active]:
~freelog.RelativeTimeEvent("1","year")  =>  finish  // 设置订阅周期为一个年
finish:
terminate
