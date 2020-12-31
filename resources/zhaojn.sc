    for public: require contract with ^zhaojn.@freelog.%2f

    a()=1+2*3^4+self.exhibited

    ab(a,c,e)=1+2*3^(a-c+e)

    always testActive

    initial:
        ~signed.start => signed
    signed[active]:
        ~auth.start => auth
    auth:
        ~settlement.x.y.z => settlement
    settlement[active]:
        ~auth.x => auth
        ~refund.x => refund
        ~confiscation.x => confiscation
    confiscation:
        ~finish.x(a,b,c) => finish
    refund:
        ~finish.x => finish
    finish[active]:
        terminate