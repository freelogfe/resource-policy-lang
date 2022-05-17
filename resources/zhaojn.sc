for public

initial[active]:
	~freelog.RelativeTimeEvent("1", "week") => auth
auth:
	~freelog.TransactionEvent("10", "self.account") => auth_month
	~freelog.TransactionEvent("100", "self.account") => auth_year
	~freelog.RelativeTimeEvent("3", "day") => finish
auth_month[active]:
	~freelog.RelativeTimeEvent("1", "month") => finish
	~freelog.TransactionEvent("100", "self.account") => auth_year
auth_year[active]:
	~freelog.RelativeTimeEvent("1", "year") => finish
finish:
	terminate
