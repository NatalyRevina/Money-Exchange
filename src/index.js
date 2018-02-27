module.exports = function makeExchange(currency){
   myChange = new Object(); 
    
    var H=50;
    var Q=25;
    var D=10;
    var N=5;
    var P=1;
    var Hn, Qn, Dn, Nn, Pn, rest;
    if(currency > 9999) {
        myChange.error = "You are rich, my friend! We don\'t have so much coins for exchange";
        return myChange;
    }
    else {
        Hn = Math.floor(currency/H);
        rest = currency - H*Hn;
        if(Hn > 0) myChange.H = Hn; 
                
        Qn = Math.floor(rest/Q);
        rest = rest - Q*Qn;
        if(Qn  >0) myChange.Q = Qn;

        Dn = Math.floor(rest/D);
        rest = rest - D*Dn;
        if(Dn > 0) myChange.D = Dn;             
       
        Nn = Math.floor(rest/N);
        rest = rest - N*Nn;
         if(Nn > 0) myChange.N = Nn;

        Pn = Math.floor(rest/P);
        rest = rest - P*Pn;
       if(Pn > 0) myChange.P = Pn; 
       
    }
 
   return myChange;
    
}
    
    
    