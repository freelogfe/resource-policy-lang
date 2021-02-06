    for public, 18035541373, Yaoqinsanchi@qq.com

    a()=1+2*3^4+self.exhibited

    ab(a,c)=1+2*3^(a-c+e)

    always testActive

    initial:
        ~freelog.SigningEvent("abc/abc") => signed
    signed[active]:
        ~freelog.CycleEndEvent("week") => auth
    auth:
        ~freelog.x.y.TransactionEvent("5","Yaoqinsanchi@qq.com") => settlement
    settlement[active]:
        ~freelog.SettlementEvent("1990856408@qq.com") => auth
        ~freelog.TimeEvent("2021-02-06 14:16:00") => refund
        ~freelog.RelativeTimeEvent("30","day") => confiscation
    confiscation:
        ~freelog.ViewCountEvent("100") => finish
    refund:
        ~freelog.EscrowExceedAmount("18035541373@163.com","888","feather") => finish
    finish[active]:
        terminate