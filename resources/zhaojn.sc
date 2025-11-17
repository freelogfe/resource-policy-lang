for public

initial[active]:
~freelog.RelativeTimeEvent("1","week")  => get_auth		//设置免费试用周期

get_auth:
~freelog.TransactionEvent("29.99","self.account") => auth		//设置价格

auth[active]:
~freelog.RelativeTimeEvent("1","month")  => finish		//设置订阅周期

finish:
	terminate
