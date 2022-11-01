for public




initial:
	~freelog.RelativeTimeEvent("24", "hour") => auth_expiration
	~freelog.TransactionEvent("0.19", "self.account") => auth_permanent
auth_expiration[active]:
	~freelog.RelativeTimeEvent("72", "hour") => finish
auth_permanent[active]:
	terminate
finish:
	terminate
