for public

initial:
  ~freelog.TransactionE vent("10","self.account") => auth
auth[active]:
  ~freelog.RelativeT imeEvent("1","month") => finish
finish:
  terminate
