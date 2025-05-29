function solution(id_list, report, k) {
    const reportCount ={};
    const reportList ={};
    const reportedBy={};
    /*
    id_list.forEach((id) => {
        if(!reportList[id]) reportList[id]=[];
        
    }) 
    */
    //일단 id_list에 있는 값으로 
    //리포트리스트 -> id별 신고한사람 관리
    //리포트카운트 -> 누적신고횟수 관리 생성 가능, 근데 report를 읽으면서 생성도가능하긴함. (더효율적)
    report.forEach((report) => {
        let [source, dest] = report.split(" ");
        //신고내역관리 (신고한사람)
        //ryan -> con 신고를 4번해도 신고누적횟수는 1번 기능고려해야함
        //즉 중복이안된다는말인데 Set을 고려해볼필요가있음.
        //리스트를 Set 자료형으로만들고 Set 자료형에있는 신고대상들 카운트를 업데이트
        if(!reportList[source]) reportList[source]=new Set();
        reportList[source].add(dest);
        
        if (!reportedBy[dest]) reportedBy[dest] =new Set();
        reportedBy[dest].add(source);

    });
    //누적신고횟수 관리 
    for(const id in reportList){
        reportList[id].forEach((reportedId) =>{
            reportCount[reportedId] = (reportCount[reportedId] || 0) + 1;
        })
    }
    //신고횟수가 k미만인 id는 reprotList에서 제거.
    //근데 k 미만인 id를 찾는게 키로 찾는게아니라 값을 찾아야되서 시간이 좀걸릴거같은데 괜찮은가..? 일단구현
    
    const answer = id_list.map((id) => 0);
    
    for(const id in reportCount){
        if(reportCount[id] >= k){
            reportedBy[id].forEach((reportId)=>{
                answer[id_list.indexOf(reportId)]++;
            })
        }
    }

    return answer;
}