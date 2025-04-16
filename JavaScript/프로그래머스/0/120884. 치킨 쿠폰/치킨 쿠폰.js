function solution(chicken) {
    let coupon = chicken;
    let service=0;
    let order = 0;
    while(coupon>=10){
        order = Math.floor(coupon/10);  //주문한 치킨
        coupon = (coupon - order*10) + order; // 남은 쿠폰 업데이트
        service += order;
        console.log("order : ",order, "coupon", coupon,"service", service); 
        
    }
    return service
}