for public
initial:
  ~freelog.TimeEvent("2022-10-30 00:00") => finish
  ~freelog.TransactionEvent("123","self.account") => auth
auth[active]:
  terminate
finish:
  terminate