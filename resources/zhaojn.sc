for public

initial:
~freelog.RelativeTimeEvent("24","hour")  =>  auth_expiration		//设置等待周期
~freelog.TransactionEvent("0","self.account") => auth_permanent		//设置价格

auth_expiration [active]:
~freelog.RelativeTimeEvent("72","hour")  => finish		// 设置免费周期

auth_permanent [active]:
	terminate

finish:
	terminate
